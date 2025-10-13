import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AnthropicAdapter } from '../anthropic';

// Mock fetch globally
global.fetch = vi.fn();

describe('AnthropicAdapter', () => {
  let adapter: AnthropicAdapter;
  const mockApiKey = 'sk-ant-test-key';

  beforeEach(() => {
    vi.clearAllMocks();
    adapter = new AnthropicAdapter(mockApiKey);
  });

  describe('constructor', () => {
    it('should throw error if no API key provided', () => {
      expect(() => new AnthropicAdapter()).toThrow('Anthropic API key is required');
    });

    it('should use environment variable if no API key provided', () => {
      process.env.ANTHROPIC_API_KEY = 'env-key';
      const envAdapter = new AnthropicAdapter();
      expect(envAdapter.raw().apiKey).toBe('env-key');
      delete process.env.ANTHROPIC_API_KEY;
    });

    it('should use provided API key over environment variable', () => {
      process.env.ANTHROPIC_API_KEY = 'env-key';
      const keyAdapter = new AnthropicAdapter('provided-key');
      expect(keyAdapter.raw().apiKey).toBe('provided-key');
      delete process.env.ANTHROPIC_API_KEY;
    });
  });

  describe('name', () => {
    it('should return "anthropic"', () => {
      expect(adapter.name()).toBe('anthropic');
    });
  });

  describe('getText', () => {
    it('should make correct API request and return response', async () => {
      const mockResponse = {
        content: [{ type: 'text', text: 'Hello, world!' }],
        model: 'claude-3-5-sonnet-20241022',
        usage: { input_tokens: 10, output_tokens: 5 },
        stop_reason: 'end_turn'
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const response = await adapter.getText({
        prompt: 'Hello',
        maxTokens: 100,
        temperature: 0.7
      });

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.anthropic.com/v1/messages',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': mockApiKey,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 100,
            messages: [{ role: 'user', content: 'Hello' }],
            temperature: 0.7,
            top_p: undefined,
            stop_sequences: undefined
          })
        })
      );

      expect(response).toEqual({
        text: 'Hello, world!',
        model: 'claude-3-5-sonnet-20241022',
        usage: {
          promptTokens: 10,
          completionTokens: 5,
          totalTokens: 15
        },
        finishReason: 'stop'
      });
    });

    it('should handle API errors', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 401,
        statusText: 'Unauthorized',
        json: () => Promise.resolve({ error: { message: 'Invalid API key' } })
      });

      await expect(adapter.getText({ prompt: 'Hello' })).rejects.toThrow(
        'Anthropic API error: 401 Invalid API key'
      );
    });
  });

  describe('chat', () => {
    it('should handle system messages correctly', async () => {
      const mockResponse = {
        content: [{ type: 'text', text: 'Assistant response' }],
        model: 'claude-3-5-sonnet-20241022',
        usage: { input_tokens: 20, output_tokens: 10 },
        stop_reason: 'end_turn'
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const response = await adapter.chat({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Hello' }
        ]
      });

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.anthropic.com/v1/messages',
        expect.objectContaining({
          body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 4096,
            messages: [{ role: 'user', content: 'Hello' }],
            system: 'You are a helpful assistant.',
            temperature: undefined,
            top_p: undefined,
            stop_sequences: undefined
          })
        })
      );

      expect(response.message.content).toBe('Assistant response');
    });
  });

  describe('getData', () => {
    it('should extract structured data', async () => {
      const mockResponse = {
        content: [{ type: 'text', text: '{"name": "John", "age": 30}' }],
        model: 'claude-3-5-sonnet-20241022',
        usage: { input_tokens: 15, output_tokens: 8 }
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const response = await adapter.getData({
        prompt: 'Extract name and age',
        format: 'json',
        schema: { name: 'string', age: 'number' }
      });

      expect(response.data).toEqual({ name: 'John', age: 30 });
      expect(response.format).toBe('json');
    });

    it('should handle JSON parsing errors gracefully', async () => {
      const mockResponse = {
        content: [{ type: 'text', text: 'Invalid JSON{' }],
        model: 'claude-3-5-sonnet-20241022',
        usage: { input_tokens: 15, output_tokens: 8 }
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const response = await adapter.getData({
        prompt: 'Extract data',
        format: 'json'
      });

      expect(response.data).toBe('Invalid JSON{');
    });
  });

  describe('unsupported methods', () => {
    it('should throw error for getImage', async () => {
      await expect(adapter.getImage()).rejects.toThrow(
        'Image generation is not supported by Anthropic API'
      );
    });

    it('should throw error for getAudio', async () => {
      await expect(adapter.getAudio()).rejects.toThrow(
        'Audio generation is not supported by Anthropic API'
      );
    });

    it('should throw error for transcribeAudio', async () => {
      await expect(adapter.transcribeAudio()).rejects.toThrow(
        'Audio transcription is not supported by Anthropic API'
      );
    });
  });

  describe('raw', () => {
    it('should return raw client configuration', () => {
      const raw = adapter.raw();
      expect(raw).toEqual({
        apiKey: mockApiKey,
        baseURL: 'https://api.anthropic.com/v1'
      });
    });
  });

  describe('finish reason mapping', () => {
    it('should map Anthropic finish reasons correctly', async () => {
      const testCases = [
        { anthropic: 'end_turn', expected: 'stop' },
        { anthropic: 'stop_sequence', expected: 'stop' },
        { anthropic: 'max_tokens', expected: 'length' },
        { anthropic: 'unknown', expected: undefined }
      ];

      for (const testCase of testCases) {
        const mockResponse = {
          content: [{ type: 'text', text: 'Test' }],
          model: 'claude-3-5-sonnet-20241022',
          stop_reason: testCase.anthropic
        };

        (global.fetch as any).mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });

        const response = await adapter.getText({ prompt: 'test' });
        expect(response.finishReason).toBe(testCase.expected);
      }
    });
  });
});