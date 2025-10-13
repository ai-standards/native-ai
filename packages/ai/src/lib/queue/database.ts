import Database from 'better-sqlite3';
import { QueueRequest, QueueResponse, QueueStats } from './types';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

export class QueueDatabase {
  private db: Database.Database;
  private dbPath: string;

  constructor(dbPath?: string) {
    this.dbPath = dbPath || path.join(os.homedir(), '.nativeai', 'queue.db');
    
    // Ensure the directory exists
    const dir = path.dirname(this.dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    this.db = new Database(this.dbPath);
    this.initializeTables();
  }

  private initializeTables() {
    // Create requests table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS requests (
        id TEXT PRIMARY KEY,
        method TEXT NOT NULL,
        params TEXT NOT NULL,
        priority INTEGER DEFAULT 0,
        retry_count INTEGER DEFAULT 0,
        max_retries INTEGER DEFAULT 3,
        created_at INTEGER NOT NULL,
        scheduled_at INTEGER,
        started_at INTEGER,
        completed_at INTEGER,
        error TEXT,
        status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed'))
      )
    `);

    // Create responses table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS responses (
        id TEXT PRIMARY KEY,
        request_id TEXT NOT NULL,
        result TEXT,
        error TEXT,
        tokens_used INTEGER DEFAULT 0,
        completed_at INTEGER NOT NULL,
        FOREIGN KEY (request_id) REFERENCES requests (id) ON DELETE CASCADE
      )
    `);

    // Create stats table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS daily_stats (
        date TEXT PRIMARY KEY,
        tokens_used INTEGER DEFAULT 0,
        requests_count INTEGER DEFAULT 0
      )
    `);

    // Create indexes
    this.db.exec(`
      CREATE INDEX IF NOT EXISTS idx_requests_status ON requests (status);
      CREATE INDEX IF NOT EXISTS idx_requests_scheduled_at ON requests (scheduled_at);
      CREATE INDEX IF NOT EXISTS idx_requests_priority ON requests (priority DESC);
      CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats (date);
    `);
  }

  addRequest(request: QueueRequest): void {
    const stmt = this.db.prepare(`
      INSERT INTO requests 
      (id, method, params, priority, retry_count, max_retries, created_at, scheduled_at, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `);

    stmt.run(
      request.id,
      request.method,
      JSON.stringify(request.params),
      request.priority || 0,
      request.retryCount || 0,
      request.maxRetries || 3,
      request.createdAt.getTime(),
      request.scheduledAt?.getTime() || Date.now()
    );
  }

  getNextRequest(): QueueRequest | null {
    const stmt = this.db.prepare(`
      SELECT * FROM requests 
      WHERE status = 'pending' AND (scheduled_at IS NULL OR scheduled_at <= ?)
      ORDER BY priority DESC, created_at ASC 
      LIMIT 1
    `);

    const row = stmt.get(Date.now()) as any;
    if (!row) return null;

    return this.rowToRequest(row);
  }

  getPendingRequests(): QueueRequest[] {
    const stmt = this.db.prepare(`
      SELECT * FROM requests 
      WHERE status = 'pending'
      ORDER BY priority DESC, created_at ASC
    `);

    const rows = stmt.all() as any[];
    return rows.map(row => this.rowToRequest(row));
  }

  getActiveRequests(): QueueRequest[] {
    const stmt = this.db.prepare(`
      SELECT * FROM requests 
      WHERE status = 'running'
      ORDER BY started_at ASC
    `);

    const rows = stmt.all() as any[];
    return rows.map(row => this.rowToRequest(row));
  }

  updateRequestStatus(id: string, status: 'pending' | 'running' | 'completed' | 'failed', data?: Partial<QueueRequest>): void {
    const updates = ['status = ?'];
    const values: any[] = [status];

    if (data?.startedAt) {
      updates.push('started_at = ?');
      values.push(data.startedAt.getTime());
    }

    if (data?.completedAt) {
      updates.push('completed_at = ?');
      values.push(data.completedAt.getTime());
    }

    if (data?.error) {
      updates.push('error = ?');
      values.push(data.error);
    }

    if (data?.retryCount !== undefined) {
      updates.push('retry_count = ?');
      values.push(data.retryCount);
    }

    if (data?.scheduledAt) {
      updates.push('scheduled_at = ?');
      values.push(data.scheduledAt.getTime());
    }

    values.push(id);

    const stmt = this.db.prepare(`
      UPDATE requests 
      SET ${updates.join(', ')} 
      WHERE id = ?
    `);

    stmt.run(...values);
  }

  addResponse(response: QueueResponse): void {
    const stmt = this.db.prepare(`
      INSERT INTO responses (id, request_id, result, error, tokens_used, completed_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      response.id,
      response.id, // request_id is the same as response id
      response.result ? JSON.stringify(response.result) : null,
      response.error || null,
      response.tokensUsed || 0,
      response.completedAt.getTime()
    );

    // Update daily stats
    this.updateDailyStats(response.tokensUsed || 0);
  }

  private updateDailyStats(tokensUsed: number): void {
    const today = new Date().toISOString().split('T')[0];
    
    const stmt = this.db.prepare(`
      INSERT INTO daily_stats (date, tokens_used, requests_count)
      VALUES (?, ?, 1)
      ON CONFLICT (date) DO UPDATE SET
        tokens_used = tokens_used + ?,
        requests_count = requests_count + 1
    `);

    stmt.run(today, tokensUsed, tokensUsed);
  }

  getStats(): QueueStats {
    const totalStmt = this.db.prepare('SELECT COUNT(*) as count FROM requests');
    const completedStmt = this.db.prepare("SELECT COUNT(*) as count FROM requests WHERE status = 'completed'");
    const failedStmt = this.db.prepare("SELECT COUNT(*) as count FROM requests WHERE status = 'failed'");
    const pendingStmt = this.db.prepare("SELECT COUNT(*) as count FROM requests WHERE status = 'pending'");
    const activeStmt = this.db.prepare("SELECT COUNT(*) as count FROM requests WHERE status = 'running'");
    
    const totalTokensStmt = this.db.prepare('SELECT COALESCE(SUM(tokens_used), 0) as total FROM responses');
    
    const today = new Date().toISOString().split('T')[0];
    const todayTokensStmt = this.db.prepare('SELECT COALESCE(tokens_used, 0) as tokens FROM daily_stats WHERE date = ?');

    return {
      totalRequests: (totalStmt.get() as any)?.count || 0,
      completedRequests: (completedStmt.get() as any)?.count || 0,
      failedRequests: (failedStmt.get() as any)?.count || 0,
      pendingRequests: (pendingStmt.get() as any)?.count || 0,
      activeRequests: (activeStmt.get() as any)?.count || 0,
      totalTokensUsed: (totalTokensStmt.get() as any)?.total || 0,
      tokensUsedToday: (todayTokensStmt.get(today) as any)?.tokens || 0,
    };
  }

  getTodayTokensUsed(): number {
    const today = new Date().toISOString().split('T')[0];
    const stmt = this.db.prepare('SELECT COALESCE(tokens_used, 0) as tokens FROM daily_stats WHERE date = ?');
    return (stmt.get(today) as any)?.tokens || 0;
  }

  getRequestById(id: string): QueueRequest | null {
    const stmt = this.db.prepare('SELECT * FROM requests WHERE id = ?');
    const row = stmt.get(id) as any;
    return row ? this.rowToRequest(row) : null;
  }

  deleteRequest(id: string): void {
    const stmt = this.db.prepare('DELETE FROM requests WHERE id = ?');
    stmt.run(id);
  }

  reset(): void {
    this.db.exec('DELETE FROM requests');
    this.db.exec('DELETE FROM responses');
    this.db.exec('DELETE FROM daily_stats');
  }

  close(): void {
    this.db.close();
  }

  private rowToRequest(row: any): QueueRequest {
    return {
      id: row.id,
      method: row.method,
      params: JSON.parse(row.params),
      priority: row.priority,
      retryCount: row.retry_count,
      maxRetries: row.max_retries,
      createdAt: new Date(row.created_at),
      scheduledAt: row.scheduled_at ? new Date(row.scheduled_at) : undefined,
      startedAt: row.started_at ? new Date(row.started_at) : undefined,
      completedAt: row.completed_at ? new Date(row.completed_at) : undefined,
      error: row.error,
    };
  }
}