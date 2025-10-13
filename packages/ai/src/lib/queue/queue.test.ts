import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AiQueue } from './queue';
import { NativeAiClient } from '../types/client';

// Mock AI client for testing
class MockAiClient implements Partial<NativeAiClient> {
  async getText(request: any) {
    return {
      text: `Response to: ${request.prompt}`,
      model: 'test-model',
      usage: {
        promptTokens: 10,
        completionTokens: 20,
        totalTokens: 30
      }
    };
  }

  async chat(request: any) {
    return {
      message: {
        role: 'assistant' as const,
        content: `Chat response to: ${request.messages[request.messages.length - 1].content}`
      },
      model: 'test-model',
      usage: {
        promptTokens: 15,
        completionTokens: 25,
        totalTokens: 40
      }
    };
  }
}

describe('AiQueue', () => {
  let queue: AiQueue;
  let mockClient: MockAiClient;

  beforeEach(() => {
    mockClient = new MockAiClient();
    queue = new AiQueue(mockClient as NativeAiClient, {
      maxConcurrentRequests: 2,
      maxRetries: 3
    });
  });

  afterEach(async () => {
    await queue.dispose();
  });

  it('should create a queue with default config', () => {
    expect(queue).toBeDefined();
    const status = queue.getStatus();
    expect(status.isRunning).toBe(false);
    expect(status.activeRequests).toBe(0);
    expect(status.pendingRequests).toBe(0);
  });

  it('should start and stop the queue', async () => {
    expect(queue.getStatus().isRunning).toBe(false);
    
    queue.start();
    expect(queue.getStatus().isRunning).toBe(true);
    
    await queue.stop();
    expect(queue.getStatus().isRunning).toBe(false);
  });

  it('should add and process requests', async () => {
    const requestId = await queue.addRequest('getText', { prompt: 'Hello' });
    expect(requestId).toBeDefined();
    
    const stats = queue.getStats();
    expect(stats.pendingRequests).toBe(1);
    expect(stats.totalRequests).toBe(1);
    
    const request = queue.getRequest(requestId);
    expect(request).toBeDefined();
    expect(request?.method).toBe('getText');
    expect(request?.params.prompt).toBe('Hello');
  });

  it('should process requests when started', async () => {
    const completedRequests: string[] = [];
    
    queue.addEventListener((event) => {
      if (event.type === 'request_completed' && event.requestId) {
        completedRequests.push(event.requestId);
      }
    });

    await queue.addRequest('getText', { prompt: 'Hello 1' });
    await queue.addRequest('getText', { prompt: 'Hello 2' });
    
    queue.start();
    
    // Wait for requests to complete
    await new Promise<void>((resolve) => {
      const checkComplete = () => {
        if (completedRequests.length >= 2) {
          resolve();
        } else {
          setTimeout(checkComplete, 50);
        }
      };
      checkComplete();
    });

    const stats = queue.getStats();
    expect(stats.completedRequests).toBe(2);
  });

  it('should handle request priorities', async () => {
    const lowPriorityId = await queue.addRequest('getText', { prompt: 'Low priority' }, { priority: 1 });
    const highPriorityId = await queue.addRequest('getText', { prompt: 'High priority' }, { priority: 10 });
    
    const stats = queue.getStats();
    expect(stats.pendingRequests).toBe(2);
    
    // Verify both requests were added
    expect(lowPriorityId).toBeDefined();
    expect(highPriorityId).toBeDefined();
    expect(lowPriorityId).not.toBe(highPriorityId);
  });

  it('should cancel pending requests', async () => {
    const requestId = await queue.addRequest('getText', { prompt: 'Test' });
    expect(queue.getStats().pendingRequests).toBe(1);
    
    const cancelled = queue.cancelRequest(requestId);
    expect(cancelled).toBe(true);
    expect(queue.getStats().pendingRequests).toBe(0);
  });

  it('should reset the queue', async () => {
    await queue.addRequest('getText', { prompt: 'Test 1' });
    await queue.addRequest('getText', { prompt: 'Test 2' });
    
    expect(queue.getStats().totalRequests).toBe(2);
    
    queue.reset();
    
    const stats = queue.getStats();
    expect(stats.totalRequests).toBe(0);
    expect(stats.pendingRequests).toBe(0);
  });
});