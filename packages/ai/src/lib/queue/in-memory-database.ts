import { QueueRequest, QueueResponse, QueueStats } from './types';

export class InMemoryQueueDatabase {
  private requests: Map<string, QueueRequest & { status: 'pending' | 'running' | 'completed' | 'failed' }> = new Map();
  private responses: Map<string, QueueResponse> = new Map();
  private dailyStats: Map<string, { tokensUsed: number; requestsCount: number }> = new Map();

  addRequest(request: QueueRequest): void {
    this.requests.set(request.id, {
      ...request,
      status: 'pending'
    });
  }

  getNextRequest(): QueueRequest | null {
    const now = Date.now();
    
    // Find pending requests that are ready to be processed
    const pendingRequests = Array.from(this.requests.values())
      .filter(req => 
        req.status === 'pending' && 
        (!req.scheduledAt || req.scheduledAt.getTime() <= now)
      )
      .sort((a, b) => {
        // Sort by priority (desc) then by creation time (asc)
        if (a.priority !== b.priority) {
          return (b.priority || 0) - (a.priority || 0);
        }
        return a.createdAt.getTime() - b.createdAt.getTime();
      });

    if (pendingRequests.length === 0) return null;

    // Remove status property for return
    const { status, ...request } = pendingRequests[0];
    return request;
  }

  getPendingRequests(): QueueRequest[] {
    return Array.from(this.requests.values())
      .filter(req => req.status === 'pending')
      .map(({ status, ...request }) => request)
      .sort((a, b) => {
        if (a.priority !== b.priority) {
          return (b.priority || 0) - (a.priority || 0);
        }
        return a.createdAt.getTime() - b.createdAt.getTime();
      });
  }

  getActiveRequests(): QueueRequest[] {
    return Array.from(this.requests.values())
      .filter(req => req.status === 'running')
      .map(({ status, ...request }) => request)
      .sort((a, b) => (a.startedAt?.getTime() || 0) - (b.startedAt?.getTime() || 0));
  }

  updateRequestStatus(id: string, status: 'pending' | 'running' | 'completed' | 'failed', data?: Partial<QueueRequest>): void {
    const request = this.requests.get(id);
    if (!request) return;

    request.status = status;

    if (data) {
      Object.assign(request, data);
    }
  }

  addResponse(response: QueueResponse): void {
    this.responses.set(response.id, response);
    this.updateDailyStats(response.tokensUsed || 0);
  }

  private updateDailyStats(tokensUsed: number): void {
    const today = new Date().toISOString().split('T')[0];
    const current = this.dailyStats.get(today) || { tokensUsed: 0, requestsCount: 0 };
    
    this.dailyStats.set(today, {
      tokensUsed: current.tokensUsed + tokensUsed,
      requestsCount: current.requestsCount + 1
    });
  }

  getStats(): QueueStats {
    const requests = Array.from(this.requests.values());
    const totalRequests = requests.length;
    const completedRequests = requests.filter(r => r.status === 'completed').length;
    const failedRequests = requests.filter(r => r.status === 'failed').length;
    const pendingRequests = requests.filter(r => r.status === 'pending').length;
    const activeRequests = requests.filter(r => r.status === 'running').length;

    const totalTokensUsed = Array.from(this.responses.values())
      .reduce((sum, response) => sum + (response.tokensUsed || 0), 0);

    const today = new Date().toISOString().split('T')[0];
    const todayStats = this.dailyStats.get(today);
    const tokensUsedToday = todayStats?.tokensUsed || 0;

    return {
      totalRequests,
      completedRequests,
      failedRequests,
      pendingRequests,
      activeRequests,
      totalTokensUsed,
      tokensUsedToday,
    };
  }

  getTodayTokensUsed(): number {
    const today = new Date().toISOString().split('T')[0];
    const todayStats = this.dailyStats.get(today);
    return todayStats?.tokensUsed || 0;
  }

  getRequestById(id: string): QueueRequest | null {
    const request = this.requests.get(id);
    if (!request) return null;

    const { status, ...requestData } = request;
    return requestData;
  }

  deleteRequest(id: string): void {
    this.requests.delete(id);
    this.responses.delete(id);
  }

  reset(): void {
    this.requests.clear();
    this.responses.clear();
    this.dailyStats.clear();
  }

  close(): void {
    // No cleanup needed for in-memory implementation
  }
}