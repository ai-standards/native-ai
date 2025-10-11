/**
 * Security utilities for API key management
 */

/**
 * Rate limiter for preventing brute force attacks
 */
export class RateLimiter {
  private attempts = new Map<string, { count: number; resetTime: number }>();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts = 10, windowMs = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  checkLimit(key: string): void {
    const now = Date.now();
    const attempt = this.attempts.get(key);

    if (!attempt || now > attempt.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + this.windowMs });
      return;
    }

    if (attempt.count >= this.maxAttempts) {
      throw new Error(`Rate limit exceeded for ${key}. Try again later.`);
    }

    attempt.count++;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }

  clearExpired(): void {
    const now = Date.now();
    for (const [key, attempt] of this.attempts.entries()) {
      if (now > attempt.resetTime) {
        this.attempts.delete(key);
      }
    }
  }
}

/**
 * Input validation utilities
 */
export class InputValidator {
  private static readonly MAX_LENGTH = 255;
  private static readonly FORBIDDEN_CHARS = /[\x00-\x1f\x7f-\x9f]/;
  private static readonly INJECTION_PATTERNS = /[<>'"&;]/;

  static validateService(service: string): void {
    if (!service || typeof service !== 'string') {
      throw new Error('Service name is required and must be a string');
    }

    if (service.length > this.MAX_LENGTH) {
      throw new Error(`Service name too long (max ${this.MAX_LENGTH} characters)`);
    }

    if (this.FORBIDDEN_CHARS.test(service)) {
      throw new Error('Service name contains forbidden control characters');
    }

    if (this.INJECTION_PATTERNS.test(service)) {
      throw new Error('Service name contains potentially unsafe characters');
    }

    if (service.trim() !== service) {
      throw new Error('Service name cannot have leading/trailing whitespace');
    }
  }

  static validateAccount(account: string): void {
    if (!account || typeof account !== 'string') {
      throw new Error('Account name is required and must be a string');
    }

    if (account.length > this.MAX_LENGTH) {
      throw new Error(`Account name too long (max ${this.MAX_LENGTH} characters)`);
    }

    if (this.FORBIDDEN_CHARS.test(account)) {
      throw new Error('Account name contains forbidden control characters');
    }

    if (this.INJECTION_PATTERNS.test(account)) {
      throw new Error('Account name contains potentially unsafe characters');
    }

    if (account.trim() !== account) {
      throw new Error('Account name cannot have leading/trailing whitespace');
    }
  }

  static validateKey(key: string): void {
    if (!key || typeof key !== 'string') {
      throw new Error('API key is required and must be a string');
    }

    if (key.length < 8) {
      throw new Error('API key too short (minimum 8 characters)');
    }

    if (key.length > 1024) {
      throw new Error('API key too long (maximum 1024 characters)');
    }

    if (key.trim() !== key) {
      throw new Error('API key cannot have leading/trailing whitespace');
    }
  }
}

/**
 * Secure memory utilities
 */
export class SecureMemory {
  /**
   * Attempt to securely wipe a string from memory
   * Note: This is best-effort in JavaScript due to garbage collection
   */
  static wipe(sensitive: any): void {
    if (typeof sensitive === 'string') {
      // Create array to overwrite string memory locations
      const arr = new Array(sensitive.length).fill('\0');
      try {
        // Attempt to overwrite (limited effectiveness in JS)
        for (let i = 0; i < sensitive.length; i++) {
          (sensitive as any)[i] = '\0';
        }
      } catch {
        // Silently fail - some strings are immutable
      }
    }

    if (sensitive && typeof sensitive === 'object') {
      for (const key in sensitive) {
        if (sensitive.hasOwnProperty(key)) {
          try {
            sensitive[key] = null;
          } catch {
            // Silently fail for read-only properties
          }
        }
      }
    }
  }

  /**
   * Create a secure random string for padding/salting
   */
  static randomBytes(length: number): Uint8Array {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      return crypto.getRandomValues(new Uint8Array(length));
    } else if (typeof require !== 'undefined') {
      // Node.js fallback
      const nodeCrypto = require('crypto');
      return new Uint8Array(nodeCrypto.randomBytes(length));
    } else {
      throw new Error('No secure random number generator available');
    }
  }
}

/**
 * Audit logger for security events
 */
export class AuditLogger {
  private logs: AuditEvent[] = [];
  private maxLogs: number;
  
  constructor(maxLogs = 1000) {
    this.maxLogs = maxLogs;
  }

  log(event: AuditEvent): void {
    this.logs.push({
      ...event,
      timestamp: new Date().toISOString(),
      sessionId: this.getSessionId()
    });

    // Rotate logs if needed
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // In production, you might want to send this to a logging service
    if (event.level === 'error' || event.level === 'warning') {
      console.warn(`[AUDIT] ${event.level.toUpperCase()}: ${event.action} - ${event.message}`);
    }
  }

  getLogs(filter?: Partial<AuditEvent>): AuditEvent[] {
    if (!filter) return [...this.logs];
    
    return this.logs.filter(log => {
      return Object.entries(filter).every(([key, value]) => 
        log[key as keyof AuditEvent] === value
      );
    });
  }

  clear(): void {
    this.logs = [];
  }

  private getSessionId(): string {
    // Simple session ID - in production you'd want a proper session management
    return typeof window !== 'undefined' 
      ? `web-${Date.now()}`
      : `node-${process.pid}`;
  }
}

export interface AuditEvent {
  action: string;
  service?: string;
  account?: string;
  level: 'info' | 'warning' | 'error';
  message: string;
  timestamp?: string;
  sessionId?: string;
  userAgent?: string;
  ip?: string;
}

/**
 * Environment security checker
 */
export class EnvironmentChecker {
  static checkWebEnvironment(): SecurityWarning[] {
    const warnings: SecurityWarning[] = [];

    if (typeof window === 'undefined') {
      return warnings; // Node.js environment
    }

    // Check for HTTPS in production
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      warnings.push({
        level: 'high',
        message: 'API keys should only be used over HTTPS in production',
        recommendation: 'Deploy your application with HTTPS enabled'
      });
    }

    // Check for Web Crypto API
    if (!window.crypto || !window.crypto.subtle) {
      warnings.push({
        level: 'high',
        message: 'Web Crypto API not available - encryption not possible',
        recommendation: 'Use a modern browser that supports Web Crypto API'
      });
    }

    // Check for IndexedDB
    if (!window.indexedDB) {
      warnings.push({
        level: 'medium',
        message: 'IndexedDB not available - secure storage not possible',
        recommendation: 'Use a browser that supports IndexedDB'
      });
    }

    // Check for development environment indicators
    if (location.hostname === 'localhost' || location.hostname.includes('dev')) {
      warnings.push({
        level: 'info',
        message: 'Development environment detected',
        recommendation: 'Ensure API keys are not committed to version control'
      });
    }

    return warnings;
  }

  static checkNodeEnvironment(): SecurityWarning[] {
    const warnings: SecurityWarning[] = [];

    if (typeof window !== 'undefined') {
      return warnings; // Browser environment
    }

    // Check for production environment
    if (process.env.NODE_ENV !== 'production') {
      warnings.push({
        level: 'info',
        message: 'Non-production environment detected',
        recommendation: 'Ensure API keys are properly managed in production'
      });
    }

    // Check for keytar availability
    try {
      require.resolve('keytar');
    } catch {
      warnings.push({
        level: 'medium',
        message: 'Keytar not available - system keychain access not possible',
        recommendation: 'Install keytar for secure system keychain storage'
      });
    }

    return warnings;
  }
}

export interface SecurityWarning {
  level: 'info' | 'medium' | 'high';
  message: string;
  recommendation: string;
}