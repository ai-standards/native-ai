import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { KeytarAdapter } from './keytar-adapter';

// Mock keytar
vi.mock('keytar', () => ({
  setPassword: vi.fn(),
  getPassword: vi.fn(),
  deletePassword: vi.fn(),
  findCredentials: vi.fn()
}));

import * as keytar from 'keytar';
const mockedKeytar = vi.mocked(keytar);

describe('KeytarAdapter', () => {
  let adapter: KeytarAdapter;

  beforeEach(() => {
    adapter = new KeytarAdapter();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('setKey', () => {
    it('should store API key using keytar', async () => {
      mockedKeytar.setPassword.mockResolvedValue();

      await adapter.setKey('test-service', 'test-account', 'test-key');

      expect(mockedKeytar.setPassword).toHaveBeenCalledWith('test-service', 'test-account', 'test-key');
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.setPassword.mockRejectedValue(new Error('Keytar error'));

      await expect(adapter.setKey('test-service', 'test-account', 'test-key'))
        .rejects.toThrow('Failed to store API key: Keytar error');
    });

    it('should handle unknown error types', async () => {
      mockedKeytar.setPassword.mockRejectedValue('string error');

      await expect(adapter.setKey('test-service', 'test-account', 'test-key'))
        .rejects.toThrow('Failed to store API key: Unknown error');
    });
  });

  describe('getKey', () => {
    it('should retrieve API key using keytar', async () => {
      mockedKeytar.getPassword.mockResolvedValue('stored-key');

      const result = await adapter.getKey('test-service', 'test-account');

      expect(result).toBe('stored-key');
      expect(mockedKeytar.getPassword).toHaveBeenCalledWith('test-service', 'test-account');
    });

    it('should return null when key not found', async () => {
      mockedKeytar.getPassword.mockResolvedValue(null);

      const result = await adapter.getKey('test-service', 'test-account');

      expect(result).toBeNull();
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.getPassword.mockRejectedValue(new Error('Keytar error'));

      await expect(adapter.getKey('test-service', 'test-account'))
        .rejects.toThrow('Failed to retrieve API key: Keytar error');
    });

    it('should handle unknown error types', async () => {
      mockedKeytar.getPassword.mockRejectedValue('string error');

      await expect(adapter.getKey('test-service', 'test-account'))
        .rejects.toThrow('Failed to retrieve API key: Unknown error');
    });
  });

  describe('deleteKey', () => {
    it('should delete API key and return true when successful', async () => {
      mockedKeytar.deletePassword.mockResolvedValue(true);

      const result = await adapter.deleteKey('test-service', 'test-account');

      expect(result).toBe(true);
      expect(mockedKeytar.deletePassword).toHaveBeenCalledWith('test-service', 'test-account');
    });

    it('should return false when key does not exist', async () => {
      mockedKeytar.deletePassword.mockResolvedValue(false);

      const result = await adapter.deleteKey('test-service', 'test-account');

      expect(result).toBe(false);
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.deletePassword.mockRejectedValue(new Error('Keytar error'));

      await expect(adapter.deleteKey('test-service', 'test-account'))
        .rejects.toThrow('Failed to delete API key: Keytar error');
    });

    it('should handle unknown error types', async () => {
      mockedKeytar.deletePassword.mockRejectedValue('string error');

      await expect(adapter.deleteKey('test-service', 'test-account'))
        .rejects.toThrow('Failed to delete API key: Unknown error');
    });
  });

  describe('listAccounts', () => {
    it('should return array of account names', async () => {
      const mockCredentials = [
        { account: 'account1', password: 'key1' },
        { account: 'account2', password: 'key2' },
        { account: 'account3', password: 'key3' }
      ];
      mockedKeytar.findCredentials.mockResolvedValue(mockCredentials);

      const result = await adapter.listAccounts('test-service');

      expect(result).toEqual(['account1', 'account2', 'account3']);
      expect(mockedKeytar.findCredentials).toHaveBeenCalledWith('test-service');
    });

    it('should return empty array when no credentials found', async () => {
      mockedKeytar.findCredentials.mockResolvedValue([]);

      const result = await adapter.listAccounts('test-service');

      expect(result).toEqual([]);
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.findCredentials.mockRejectedValue(new Error('Keytar error'));

      await expect(adapter.listAccounts('test-service'))
        .rejects.toThrow('Failed to list accounts: Keytar error');
    });

    it('should handle unknown error types', async () => {
      mockedKeytar.findCredentials.mockRejectedValue('string error');

      await expect(adapter.listAccounts('test-service'))
        .rejects.toThrow('Failed to list accounts: Unknown error');
    });

    it('should handle credentials with different properties', async () => {
      const mockCredentials = [
        { account: 'test1', password: 'pass1' },
        { account: 'test2', password: 'pass2' }
      ];
      mockedKeytar.findCredentials.mockResolvedValue(mockCredentials);

      const result = await adapter.listAccounts('test-service');

      expect(result).toEqual(['test1', 'test2']);
    });
  });

  describe('adapter interface compliance', () => {
    it('should implement all required methods', () => {
      expect(typeof adapter.setKey).toBe('function');
      expect(typeof adapter.getKey).toBe('function');
      expect(typeof adapter.deleteKey).toBe('function');
      expect(typeof adapter.listAccounts).toBe('function');
    });

    it('should be instantiable', () => {
      expect(adapter).toBeInstanceOf(KeytarAdapter);
    });
  });
});