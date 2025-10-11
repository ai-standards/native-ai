import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  RateLimiter, 
  InputValidator, 
  SecureMemory, 
  AuditLogger, 
  EnvironmentChecker 
} from './security';

describe('Security Features', () => {
  describe('RateLimiter', () => {
    let rateLimiter: RateLimiter;

    beforeEach(() => {
      rateLimiter = new RateLimiter(3, 1000); // 3 attempts per second for testing
    });

    it('should allow requests within limit', () => {
      expect(() => rateLimiter.checkLimit('test-key')).not.toThrow();
      expect(() => rateLimiter.checkLimit('test-key')).not.toThrow();
      expect(() => rateLimiter.checkLimit('test-key')).not.toThrow();
    });

    it('should block requests exceeding limit', () => {
      rateLimiter.checkLimit('test-key');
      rateLimiter.checkLimit('test-key');
      rateLimiter.checkLimit('test-key');
      
      expect(() => rateLimiter.checkLimit('test-key'))
        .toThrow('Rate limit exceeded for test-key. Try again later.');
    });

    it('should track different keys separately', () => {
      rateLimiter.checkLimit('key1');
      rateLimiter.checkLimit('key1');
      rateLimiter.checkLimit('key1');
      
      expect(() => rateLimiter.checkLimit('key2')).not.toThrow();
    });

    it('should reset specific key', () => {
      rateLimiter.checkLimit('test-key');
      rateLimiter.checkLimit('test-key');
      rateLimiter.checkLimit('test-key');
      
      rateLimiter.reset('test-key');
      expect(() => rateLimiter.checkLimit('test-key')).not.toThrow();
    });
  });

  describe('InputValidator', () => {
    describe('validateService', () => {
      it('should accept valid service names', () => {
        expect(() => InputValidator.validateService('openai')).not.toThrow();
        expect(() => InputValidator.validateService('anthropic-api')).not.toThrow();
        expect(() => InputValidator.validateService('service_123')).not.toThrow();
      });

      it('should reject empty or non-string values', () => {
        expect(() => InputValidator.validateService('')).toThrow('Service name is required');
        expect(() => InputValidator.validateService(null as any)).toThrow('Service name is required');
        expect(() => InputValidator.validateService(123 as any)).toThrow('Service name is required');
      });

      it('should reject overly long names', () => {
        const longName = 'a'.repeat(256);
        expect(() => InputValidator.validateService(longName)).toThrow('Service name too long');
      });

      it('should reject names with control characters', () => {
        expect(() => InputValidator.validateService('test\x00name')).toThrow('forbidden control characters');
        expect(() => InputValidator.validateService('test\x1fname')).toThrow('forbidden control characters');
      });

      it('should reject names with injection characters', () => {
        expect(() => InputValidator.validateService('test<script>')).toThrow('potentially unsafe characters');
        expect(() => InputValidator.validateService('test"name')).toThrow('potentially unsafe characters');
        expect(() => InputValidator.validateService("test'name")).toThrow('potentially unsafe characters');
      });

      it('should reject names with leading/trailing whitespace', () => {
        expect(() => InputValidator.validateService(' testname')).toThrow('leading/trailing whitespace');
        expect(() => InputValidator.validateService('testname ')).toThrow('leading/trailing whitespace');
      });
    });

    describe('validateAccount', () => {
      it('should accept valid account names', () => {
        expect(() => InputValidator.validateAccount('user123')).not.toThrow();
        expect(() => InputValidator.validateAccount('api-key')).not.toThrow();
      });

      it('should reject invalid account names', () => {
        expect(() => InputValidator.validateAccount('')).toThrow('Account name is required');
        expect(() => InputValidator.validateAccount('test\x00name')).toThrow('forbidden control characters');
      });
    });

    describe('validateKey', () => {
      it('should accept valid API keys', () => {
        expect(() => InputValidator.validateKey('sk-1234567890abcdef')).not.toThrow();
        expect(() => InputValidator.validateKey('valid-api-key-here')).not.toThrow();
      });

      it('should reject short keys', () => {
        expect(() => InputValidator.validateKey('short')).toThrow('API key too short');
      });

      it('should reject overly long keys', () => {
        const longKey = 'a'.repeat(1025);
        expect(() => InputValidator.validateKey(longKey)).toThrow('API key too long');
      });

      it('should reject keys with whitespace', () => {
        expect(() => InputValidator.validateKey(' validkey')).toThrow('leading/trailing whitespace');
        expect(() => InputValidator.validateKey('validkey ')).toThrow('leading/trailing whitespace');
      });
    });
  });

  describe('SecureMemory', () => {
    it('should attempt to wipe strings', () => {
      const sensitive = 'secret-data';
      expect(() => SecureMemory.wipe(sensitive)).not.toThrow();
    });

    it('should attempt to wipe objects', () => {
      const sensitive = { key: 'value', secret: 'data' };
      SecureMemory.wipe(sensitive);
      // Note: Actual wiping effectiveness varies by JS engine
      expect(sensitive.key).toBeNull();
      expect(sensitive.secret).toBeNull();
    });

    it('should generate random bytes', () => {
      const bytes1 = SecureMemory.randomBytes(16);
      const bytes2 = SecureMemory.randomBytes(16);
      
      expect(bytes1).toHaveLength(16);
      expect(bytes2).toHaveLength(16);
      expect(bytes1).not.toEqual(bytes2); // Should be different
    });
  });

  describe('AuditLogger', () => {
    let logger: AuditLogger;

    beforeEach(() => {
      logger = new AuditLogger();
    });

    it('should log events', () => {
      logger.log({
        action: 'test-action',
        level: 'info',
        message: 'Test message'
      });

      const logs = logger.getLogs();
      expect(logs).toHaveLength(1);
      expect(logs[0].action).toBe('test-action');
      expect(logs[0].message).toBe('Test message');
      expect(logs[0].timestamp).toBeDefined();
    });

    it('should filter logs', () => {
      logger.log({ action: 'action1', level: 'info', message: 'Message 1' });
      logger.log({ action: 'action2', level: 'error', message: 'Message 2' });
      logger.log({ action: 'action1', level: 'warning', message: 'Message 3' });

      const filtered = logger.getLogs({ action: 'action1' });
      expect(filtered).toHaveLength(2);
      expect(filtered.every(log => log.action === 'action1')).toBe(true);
    });

    it('should limit log count', () => {
      const smallLogger = new AuditLogger(2);
      
      smallLogger.log({ action: 'action1', level: 'info', message: 'Message 1' });
      smallLogger.log({ action: 'action2', level: 'info', message: 'Message 2' });
      smallLogger.log({ action: 'action3', level: 'info', message: 'Message 3' });

      const logs = smallLogger.getLogs();
      expect(logs).toHaveLength(2);
      expect(logs[0].action).toBe('action2'); // First one was rotated out
    });

    it('should clear logs', () => {
      logger.log({ action: 'test', level: 'info', message: 'Test' });
      expect(logger.getLogs()).toHaveLength(1);
      
      logger.clear();
      expect(logger.getLogs()).toHaveLength(0);
    });
  });

  describe('EnvironmentChecker', () => {
    it('should check Node.js environment', () => {
      const warnings = EnvironmentChecker.checkNodeEnvironment();
      expect(Array.isArray(warnings)).toBe(true);
      // Specific warnings depend on environment setup
    });

    it('should check web environment when window is available', () => {
      // Mock window and location objects
      const originalWindow = global.window;
      const originalLocation = global.location;
      
      global.window = {
        crypto: { subtle: {} },
        indexedDB: {},
      } as any;
      
      global.location = {
        protocol: 'https:',
        hostname: 'example.com'
      } as any;

      const warnings = EnvironmentChecker.checkWebEnvironment();
      expect(Array.isArray(warnings)).toBe(true);

      // Restore
      global.window = originalWindow;
      global.location = originalLocation;
    });
  });
});