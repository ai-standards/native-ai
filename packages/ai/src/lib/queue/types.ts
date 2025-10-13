export interface QueueConfig {
  maxConcurrentRequests?: number;
  maxRetries?: number;
  maxTokensPerDay?: number;
  retryDelay?: number;
  dbPath?: string;
}

export interface QueueRequest {
  id: string;
  method: string;
  params: any;
  priority?: number;
  retryCount?: number;
  maxRetries?: number;
  createdAt: Date;
  scheduledAt?: Date;
  startedAt?: Date;
  completedAt?: Date;
  error?: string;
}

export interface QueueResponse {
  id: string;
  result?: any;
  error?: string;
  tokensUsed?: number;
  completedAt: Date;
}

export interface QueueStats {
  totalRequests: number;
  completedRequests: number;
  failedRequests: number;
  pendingRequests: number;
  activeRequests: number;
  totalTokensUsed: number;
  tokensUsedToday: number;
}

export interface QueueEvent {
  type: 'request_added' | 'request_started' | 'request_completed' | 'request_failed' | 'request_retried' | 'queue_started' | 'queue_stopped' | 'queue_reset';
  requestId?: string;
  data?: any;
  timestamp: Date;
}

export type QueueEventListener = (event: QueueEvent) => void;

export interface QueueStatus {
  isRunning: boolean;
  activeRequests: number;
  pendingRequests: number;
  lastProcessedAt?: Date;
}