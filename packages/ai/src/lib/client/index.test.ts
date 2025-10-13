import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock dependencies
vi.mock('../api-key');
vi.mock('./adapters/openai');
vi.mock('./adapters/anthropic');
vi.mock('./adapters/mistral');
vi.mock('./adapters/nvidia');
vi.mock('./ai-client');

import { clientFactory, createAdapter, NativeAiProvider, type NativeAiClientOptions } from './index';
import { getKey } from '../api-key';
import { OpenAIAdapter } from './adapters/openai';
import { AnthropicAdapter } from './adapters/anthropic';
import { MistralAdapter } from './adapters/mistral';
import { NvidiaAdapter } from './adapters/nvidia';

const mockGetKey = vi.mocked(getKey);
const MockOpenAIAdapter = vi.mocked(OpenAIAdapter);
const MockAnthropicAdapter = vi.mocked(AnthropicAdapter);
const MockMistralAdapter = vi.mocked(MistralAdapter);
const MockNvidiaAdapter = vi.mocked(NvidiaAdapter);

describe('Client Factory', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('clientFactory', () => {
    it('should create a client with provided API key and default provider', async () => {
      const options: NativeAiClientOptions = {
        apiKey: 'test-api-key'
      };

      const client = await clientFactory(options);

      expect(client).toBeDefined();
      expect(MockOpenAIAdapter).toHaveBeenCalledWith('test-api-key');
      expect(mockGetKey).not.toHaveBeenCalled();
    });

    it('should create a client with specified provider', async () => {
      const options: NativeAiClientOptions = {
        apiKey: 'test-api-key',
        provider: NativeAiProvider.openAi
      };

      const client = await clientFactory(options);

      expect(client).toBeDefined();
      expect(MockOpenAIAdapter).toHaveBeenCalledWith('test-api-key');
    });

    it('should retrieve API key from storage when not provided', async () => {
      mockGetKey.mockResolvedValue('stored-api-key');

      const client = await clientFactory({});

      expect(client).toBeDefined();
      expect(mockGetKey).toHaveBeenCalledWith('openai');
      expect(MockOpenAIAdapter).toHaveBeenCalledWith('stored-api-key');
    });

    it('should throw error when no API key is available', async () => {
      mockGetKey.mockResolvedValue(null);

      await expect(clientFactory({})).rejects.toThrow('No API key available for provider: openai');
    });

    it('should handle empty options object', async () => {
      mockGetKey.mockResolvedValue('stored-api-key');

      const client = await clientFactory();

      expect(client).toBeDefined();
      expect(mockGetKey).toHaveBeenCalledWith('openai');
      expect(MockOpenAIAdapter).toHaveBeenCalledWith('stored-api-key');
    });
  });

  describe('createAdapter', () => {
    it('should create OpenAI adapter for openai provider', () => {
      const adapter = createAdapter(NativeAiProvider.openAi, 'test-api-key');

      expect(adapter).toBeDefined();
      expect(MockOpenAIAdapter).toHaveBeenCalledWith('test-api-key');
    });

    it('should create Anthropic adapter for anthropic provider', () => {
      const adapter = createAdapter(NativeAiProvider.anthropic, 'test-api-key');

      expect(adapter).toBeDefined();
      expect(MockAnthropicAdapter).toHaveBeenCalledWith('test-api-key');
    });

    it('should create Mistral adapter for mistral provider', () => {
      const adapter = createAdapter(NativeAiProvider.mistral, 'test-api-key');

      expect(adapter).toBeDefined();
      expect(MockMistralAdapter).toHaveBeenCalledWith('test-api-key');
    });

    it('should create NVIDIA adapter for nvidia provider', () => {
      const adapter = createAdapter(NativeAiProvider.nvidia, 'test-api-key');

      expect(adapter).toBeDefined();
      expect(MockNvidiaAdapter).toHaveBeenCalledWith('test-api-key');
    });

    it('should throw error for unsupported provider', () => {
      expect(() => {
        createAdapter('unsupported' as NativeAiProvider, 'test-api-key');
      }).toThrow('Unsupported provider: unsupported. Supported providers: openai, anthropic, mistral, nvidia');
    });
  });

  describe('NativeAiProvider enum', () => {
    it('should have correct enum values', () => {
      expect(NativeAiProvider.openAi).toBe('openai');
      expect(NativeAiProvider.anthropic).toBe('anthropic');
      expect(NativeAiProvider.mistral).toBe('mistral');
      expect(NativeAiProvider.nvidia).toBe('nvidia');
    });
  });
});