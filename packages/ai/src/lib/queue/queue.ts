import { EventEmitter } from 'events';
import { randomUUID } from 'crypto';
import { QueueConfig, QueueRequest, QueueResponse, QueueStats, QueueEvent, QueueEventListener, QueueStatus } from './types';
import { InMemoryQueueDatabase } from './in-memory-database';
import { NativeAiClient } from '../types/client';

export class AiQueue extends EventEmitter {
  private config: Required<QueueConfig>;
  private db: InMemoryQueueDatabase;
  private client: NativeAiClient;
  private isRunning: boolean = false;
  private processingInterval?: NodeJS.Timeout;
  private activeRequests: Map<string, Promise<void>> = new Map();

  constructor(client: NativeAiClient, config: QueueConfig = {}) {
    super();
    
    this.client = client;
    this.config = {
      maxConcurrentRequests: config.maxConcurrentRequests ?? 5,
      maxRetries: config.maxRetries ?? 3,
      maxTokensPerDay: config.maxTokensPerDay ?? 100000,
      retryDelay: config.retryDelay ?? 1000,
      dbPath: config.dbPath || '',
    };

    this.db = new InMemoryQueueDatabase();
  }

  /**
   * Start the queue processing
   */
  start(): void {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.emit('queue_started');
    this.emitEvent({ type: 'queue_started', timestamp: new Date() });
    
    // Start processing requests
    this.processingInterval = setInterval(() => {
      this.processRequests();
    }, 100); // Check every 100ms

    console.log('AI Queue started');
  }

  /**
   * Stop the queue processing
   */
  async stop(): Promise<void> {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;
    
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
      this.processingInterval = undefined;
    }

    // Wait for all active requests to complete
    if (this.activeRequests.size > 0) {
      console.log(`Waiting for ${this.activeRequests.size} active requests to complete...`);
      await Promise.all(this.activeRequests.values());
    }

    this.emit('queue_stopped');
    this.emitEvent({ type: 'queue_stopped', timestamp: new Date() });
    console.log('AI Queue stopped');
  }

  /**
   * Reset the queue (clear all pending requests and data)
   */
  reset(): void {
    this.db.reset();
    this.activeRequests.clear();
    this.emit('queue_reset');
    this.emitEvent({ type: 'queue_reset', timestamp: new Date() });
    console.log('AI Queue reset');
  }

  /**
   * Add a request to the queue
   */
  async addRequest(method: string, params: any, options: { priority?: number; maxRetries?: number; delay?: number } = {}): Promise<string> {
    const id = randomUUID();
    const now = new Date();
    const scheduledAt = options.delay ? new Date(now.getTime() + options.delay) : now;

    const request: QueueRequest = {
      id,
      method,
      params,
      priority: options.priority ?? 0,
      retryCount: 0,
      maxRetries: options.maxRetries ?? this.config.maxRetries,
      createdAt: now,
      scheduledAt,
    };

    this.db.addRequest(request);
    this.emit('request_added', { requestId: id });
    this.emitEvent({ type: 'request_added', requestId: id, timestamp: new Date() });

    return id;
  }

  /**
   * Get the current status of the queue
   */
  getStatus(): QueueStatus {
    const stats = this.db.getStats();
    return {
      isRunning: this.isRunning,
      activeRequests: stats.activeRequests,
      pendingRequests: stats.pendingRequests,
      lastProcessedAt: undefined, // Could be enhanced to track this
    };
  }

  /**
   * Get queue statistics
   */
  getStats(): QueueStats {
    return this.db.getStats();
  }

  /**
   * Get a specific request by ID
   */
  getRequest(id: string): QueueRequest | null {
    return this.db.getRequestById(id);
  }

  /**
   * Cancel a pending request
   */
  cancelRequest(id: string): boolean {
    const request = this.db.getRequestById(id);
    if (request && !request.startedAt && !request.completedAt) {
      this.db.deleteRequest(id);
      return true;
    }
    return false;
  }

  /**
   * Add event listener for queue events
   */
  addEventListener(listener: QueueEventListener): void {
    this.on('queue_event', listener);
  }

  /**
   * Remove event listener
   */
  removeEventListener(listener: QueueEventListener): void {
    this.off('queue_event', listener);
  }

  private async processRequests(): Promise<void> {
    if (!this.isRunning) return;

    // Check if we can process more requests
    const canProcess = this.activeRequests.size < this.config.maxConcurrentRequests;
    if (!canProcess) return;

    // Check daily token limit
    const tokensUsedToday = this.db.getTodayTokensUsed();
    if (tokensUsedToday >= this.config.maxTokensPerDay) {
      return;
    }

    // Get next request
    const request = this.db.getNextRequest();
    if (!request) return;

    // Start processing the request
    const promise = this.processRequest(request);
    this.activeRequests.set(request.id, promise);

    try {
      await promise;
    } catch (error) {
      console.error(`Error processing request ${request.id}:`, error);
    } finally {
      this.activeRequests.delete(request.id);
    }
  }

  private async processRequest(request: QueueRequest): Promise<void> {
    const startTime = new Date();
    
    try {
      // Mark as running
      this.db.updateRequestStatus(request.id, 'running', { startedAt: startTime });
      this.emit('request_started', { requestId: request.id });
      this.emitEvent({ type: 'request_started', requestId: request.id, timestamp: new Date() });

      // Execute the request
      const result = await this.executeRequest(request);
      const completedAt = new Date();

      // Calculate tokens used (estimate from response)
      const tokensUsed = this.estimateTokensUsed(result);

      // Mark as completed
      this.db.updateRequestStatus(request.id, 'completed', { completedAt });
      
      // Add response
      const response: QueueResponse = {
        id: request.id,
        result,
        tokensUsed,
        completedAt,
      };
      this.db.addResponse(response);

      this.emit('request_completed', { requestId: request.id, result, tokensUsed });
      this.emitEvent({ 
        type: 'request_completed', 
        requestId: request.id, 
        data: { result, tokensUsed },
        timestamp: new Date() 
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const retryCount = request.retryCount || 0;
      const maxRetries = request.maxRetries || this.config.maxRetries;
      const shouldRetry = retryCount < maxRetries;

      if (shouldRetry) {
        // Schedule retry
        const retryDelay = this.calculateRetryDelay(retryCount);
        const scheduledAt = new Date(Date.now() + retryDelay);
        const newRetryCount = retryCount + 1;
        
        this.db.updateRequestStatus(request.id, 'pending', {
          retryCount: newRetryCount,
          scheduledAt,
          error: errorMessage,
        });

        this.emit('request_retried', { requestId: request.id, error: errorMessage, retryCount: newRetryCount });
        this.emitEvent({ 
          type: 'request_retried', 
          requestId: request.id, 
          data: { error: errorMessage, retryCount: newRetryCount },
          timestamp: new Date() 
        });
      } else {
        // Mark as failed
        const completedAt = new Date();
        this.db.updateRequestStatus(request.id, 'failed', { completedAt, error: errorMessage });

        const response: QueueResponse = {
          id: request.id,
          error: errorMessage,
          completedAt,
        };
        this.db.addResponse(response);

        this.emit('request_failed', { requestId: request.id, error: errorMessage });
        this.emitEvent({ 
          type: 'request_failed', 
          requestId: request.id, 
          data: { error: errorMessage },
          timestamp: new Date() 
        });
      }
    }
  }

  private async executeRequest(request: QueueRequest): Promise<any> {
    const { method, params } = request;

    switch (method) {
      case 'getText':
        return await this.client.getText(params);
      case 'chat':
        return await this.client.chat(params);
      case 'getData':
        return await this.client.getData(params);
      case 'getImage':
        return await this.client.getImage(params);
      case 'getAudio':
        return await this.client.getAudio(params);
      case 'transcribeAudio':
        return await this.client.transcribeAudio(params);
      default:
        throw new Error(`Unknown method: ${method}`);
    }
  }

  private calculateRetryDelay(retryCount: number): number {
    // Exponential backoff: base delay * 2^retryCount
    return this.config.retryDelay * Math.pow(2, retryCount);
  }

  private estimateTokensUsed(result: any): number {
    // Simple token estimation - in practice, you'd want to use the actual usage from the response
    if (result?.usage?.totalTokens) {
      return result.usage.totalTokens;
    }

    // Fallback estimation based on response content
    if (result?.text) {
      return Math.ceil(result.text.length / 4); // Rough estimate: 1 token ≈ 4 characters
    }

    if (result?.message?.content) {
      return Math.ceil(result.message.content.length / 4);
    }

    return 0;
  }

  private emitEvent(event: QueueEvent): void {
    this.emit('queue_event', event);
  }

  /**
   * Clean up resources
   */
  async dispose(): Promise<void> {
    await this.stop();
    this.db.close();
  }
}