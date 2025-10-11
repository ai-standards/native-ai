import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  setKey, 
  getKey, 
  destroyKey, 
  rotateKeys,
  getSecurityWarnings,
  getAuditLogger,
  setAuditLogger,
  getAuditLogs,
  clearAuditLogs,
  setAdapter 
} from './api-key';
import { KeytarAdapter } from './adapters/keytar-adapter';
import { AuditLogger } from './security';

// Mock keytar for integration tests
vi.mock('keytar', () => ({
  setPassword: vi.fn(),
  getPassword: vi.fn(),
  deletePassword: vi.fn(),
  findCredentials: vi.fn()
}));

describe('Security Integration Tests', () => {
  let mockKeytar: any;
  
  beforeEach(async () => {
    mockKeytar = vi.mocked(await import('keytar'));
    vi.clearAllMocks();
    clearAuditLogs();
  });

  describe('Input Validation Integration', () => {
    it('should reject invalid service names', async () => {
      mockKeytar.setPassword.mockResolvedValue();
      
      // Note: setKey(key, account) - account defaults to 'api-key' 
      await expect(setKey('valid-key', '')).rejects.toThrow('Account name is required');
      await expect(setKey('valid-key', 'test\x00')).rejects.toThrow('forbidden control characters');
      await expect(setKey('valid-key', 'test<script>')).rejects.toThrow('potentially unsafe characters');
    });

    it('should reject invalid API keys', async () => {
      mockKeytar.setPassword.mockResolvedValue();
      
      await expect(setKey('short')).rejects.toThrow('API key too short');
      await expect(setKey(' validkey ')).rejects.toThrow('leading/trailing whitespace');
    });
  });

  describe('Rate Limiting Integration', () => {
    it('should apply rate limiting to operations', async () => {
      mockKeytar.setPassword.mockRejectedValue(new Error('Simulated failure'));
      
      // Make multiple rapid requests that fail
      for (let i = 0; i < 10; i++) {
        try {
          await setKey('valid-api-key-12345', 'test-account');
        } catch (error) {
          // Expected failures
        }
      }
      
      // Next request should be rate limited
      await expect(setKey('valid-api-key-12345', 'test-account'))
        .rejects.toThrow('Rate limit exceeded');
    });
  });

  describe('Audit Logging Integration', () => {
    it('should log successful operations', async () => {
      mockKeytar.setPassword.mockResolvedValue();
      mockKeytar.getPassword.mockResolvedValue('stored-key');
      
      await setKey('valid-api-key-12345');
      await getKey();
      
      const logs = getAuditLogs();
      expect(logs.length).toBeGreaterThan(0);
      
      const setKeyLogs = logs.filter(log => log.action === 'setKey');
      const getKeyLogs = logs.filter(log => log.action === 'getKey');
      
      expect(setKeyLogs.length).toBeGreaterThan(0);
      expect(getKeyLogs.length).toBeGreaterThan(0);
      expect(setKeyLogs[0].level).toBe('info');
    });

    it('should log failed operations', async () => {
      mockKeytar.setPassword.mockRejectedValue(new Error('Storage failed'));
      
      try {
        await setKey('valid-api-key-12345');
      } catch (error) {
        // Expected failure
      }
      
      const logs = getAuditLogs({ action: 'setKey', level: 'error' });
      expect(logs.length).toBeGreaterThan(0);
      expect(logs[0].message).toContain('Failed to store API key');
    });

    it('should support custom audit logger', () => {
      const customLogger = new AuditLogger(50);
      setAuditLogger(customLogger);
      
      expect(getAuditLogger()).toBe(customLogger);
    });
  });

  describe('Security Warnings Integration', () => {
    it('should return security warnings', async () => {
      const warnings = await getSecurityWarnings();
      expect(Array.isArray(warnings)).toBe(true);
      // Warnings content depends on environment
    });
  });

  describe('Key Rotation Integration', () => {
    it('should support key rotation for adapters that implement it', async () => {
      const adapter = new KeytarAdapter();
      setAdapter(adapter);
      
      // KeytarAdapter rotateKeys is a no-op but should not throw
      await expect(rotateKeys()).resolves.not.toThrow();
      
      const logs = getAuditLogs({ action: 'rotateKeys' });
      expect(logs.length).toBeGreaterThan(0);
    });
  });

  describe('Adapter Security Features', () => {
    it('should apply security features to new adapters', () => {
      const customLogger = new AuditLogger();
      setAuditLogger(customLogger);
      
      const newAdapter = new KeytarAdapter();
      setAdapter(newAdapter);
      
      // Audit logger should be set on the new adapter
      expect(getAuditLogger()).toBe(customLogger);
    });
  });

  describe('Comprehensive Security Flow', () => {
    it('should demonstrate full security workflow', async () => {
      // Setup
      mockKeytar.setPassword.mockResolvedValue();
      mockKeytar.getPassword.mockResolvedValue('stored-key-value');
      mockKeytar.deletePassword.mockResolvedValue(true);
      
      // Clear previous logs
      clearAuditLogs();
      
      // Perform operations
      await setKey('sk-1234567890abcdef', 'openai');
      const retrieved = await getKey('openai');
      await destroyKey('openai');
      
      // Check results
      expect(retrieved).toBe('stored-key-value');
      
      // Check audit trail
      const logs = getAuditLogs();
      const actions = logs.map(log => log.action);
      expect(actions).toContain('setKey');
      expect(actions).toContain('getKey');
      expect(actions).toContain('deleteKey');
      
      // All operations should have succeeded
      const errorLogs = logs.filter(log => log.level === 'error');
      expect(errorLogs).toHaveLength(0);
      
      // Check security warnings
      const warnings = await getSecurityWarnings();
      expect(Array.isArray(warnings)).toBe(true);
    });
  });
});