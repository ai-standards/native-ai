import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { setKey, getKey, destroyKey, listAccounts } from './api-key';

// Mock keytar
vi.mock('keytar', () => ({
  setPassword: vi.fn(),
  getPassword: vi.fn(),
  deletePassword: vi.fn(),
  findCredentials: vi.fn()
}));

import * as keytar from 'keytar';
const mockedKeytar = vi.mocked(keytar);

describe('API Key Management', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('setKey', () => {
    it('should store API key with default account', async () => {
      mockedKeytar.setPassword.mockResolvedValue();

      await setKey('test-key');

      expect(mockedKeytar.setPassword).toHaveBeenCalledWith('native-ai', 'api-key', 'test-key');
    });

    it('should store API key with custom account', async () => {
      mockedKeytar.setPassword.mockResolvedValue();

      await setKey('test-key', 'custom-account');

      expect(mockedKeytar.setPassword).toHaveBeenCalledWith('native-ai', 'custom-account', 'test-key');
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.setPassword.mockRejectedValue(new Error('Keytar error'));

      await expect(setKey('test-key')).rejects.toThrow('Failed to store API key: Keytar error');
    });
  });

  describe('getKey', () => {
    it('should retrieve API key with default account', async () => {
      mockedKeytar.getPassword.mockResolvedValue('stored-key');

      const result = await getKey();

      expect(result).toBe('stored-key');
      expect(mockedKeytar.getPassword).toHaveBeenCalledWith('native-ai', 'api-key');
    });

    it('should retrieve API key with custom account', async () => {
      mockedKeytar.getPassword.mockResolvedValue('stored-key');

      const result = await getKey('custom-account');

      expect(result).toBe('stored-key');
      expect(mockedKeytar.getPassword).toHaveBeenCalledWith('native-ai', 'custom-account');
    });

    it('should return null when key not found', async () => {
      mockedKeytar.getPassword.mockResolvedValue(null);

      const result = await getKey();

      expect(result).toBeNull();
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.getPassword.mockRejectedValue(new Error('Keytar error'));

      await expect(getKey()).rejects.toThrow('Failed to retrieve API key: Keytar error');
    });
  });

  describe('destroyKey', () => {
    it('should delete API key with default account', async () => {
      mockedKeytar.deletePassword.mockResolvedValue(true);

      const result = await destroyKey();

      expect(result).toBe(true);
      expect(mockedKeytar.deletePassword).toHaveBeenCalledWith('native-ai', 'api-key');
    });

    it('should delete API key with custom account', async () => {
      mockedKeytar.deletePassword.mockResolvedValue(true);

      const result = await destroyKey('custom-account');

      expect(result).toBe(true);
      expect(mockedKeytar.deletePassword).toHaveBeenCalledWith('native-ai', 'custom-account');
    });

    it('should return false when key does not exist', async () => {
      mockedKeytar.deletePassword.mockResolvedValue(false);

      const result = await destroyKey();

      expect(result).toBe(false);
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.deletePassword.mockRejectedValue(new Error('Keytar error'));

      await expect(destroyKey()).rejects.toThrow('Failed to delete API key: Keytar error');
    });
  });

  describe('listAccounts', () => {
    it('should return array of account names', async () => {
      const mockCredentials = [
        { account: 'api-key', password: 'key1' },
        { account: 'openai', password: 'key2' },
        { account: 'anthropic', password: 'key3' }
      ];
      mockedKeytar.findCredentials.mockResolvedValue(mockCredentials);

      const result = await listAccounts();

      expect(result).toEqual(['api-key', 'openai', 'anthropic']);
      expect(mockedKeytar.findCredentials).toHaveBeenCalledWith('native-ai');
    });

    it('should return empty array when no credentials found', async () => {
      mockedKeytar.findCredentials.mockResolvedValue([]);

      const result = await listAccounts();

      expect(result).toEqual([]);
    });

    it('should throw error when keytar fails', async () => {
      mockedKeytar.findCredentials.mockRejectedValue(new Error('Keytar error'));

      await expect(listAccounts()).rejects.toThrow('Failed to list accounts: Keytar error');
    });
  });
});