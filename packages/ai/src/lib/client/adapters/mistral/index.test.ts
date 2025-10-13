import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MistralAdapter } from './index';

// Mock fetch
global.fetch = vi.fn();

describe('MistralAdapter', () => {
  let adapter: MistralAdapter;
  let mockFetch: any;

  beforeEach(() => {
    mockFetch = vi.mocked(fetch);
    mockFetch.mockClear();
    adapter = new MistralAdapter('test-api-key');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    it('should create adapter with provided API key', () => {
      expect(() => new MistralAdapter('test-key')).not.toThrow();
    });

    it('should use environment variable if no API key provided', () => {
      process.env.MISTRAL_API_KEY = 'env-key';
      expect(() => new MistralAdapter()).not.toThrow();
    });

    it('should throw error if no API key is available', () => {
      delete process.env.MISTRAL_API_KEY;
      expect(() => new MistralAdapter()).toThrow('Mistral API key is required');
    });
  });

  describe('name', () => {
    it('should return "mistral"', () => {
      expect(adapter.name()).toBe('mistral');
    });
  });

  describe('getText', () => {
    it('should make correct API call and return response', async () => {
      const mockResponse = {
        choices: [{
          message: { content: 'Hello world' },
          finish_reason: 'stop'
        }],
        model: 'mistral-small-latest',
        usage: {
          prompt_tokens: 10,
          completion_tokens: 5,
          total_tokens: 15
        }
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await adapter.getText({
        prompt: 'Hello',
        maxTokens: 100,
        temperature: 0.7
      });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.mistral.ai/v1/chat/completions',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer test-api-key'
          },
          body: JSON.stringify({
            model: 'mistral-small-latest',
            messages: [{ role: 'user', content: 'Hello' }],
            max_tokens: 100,
            temperature: 0.7
          })
        })
      );

      expect(result).toEqual({
        text: 'Hello world',
        model: 'mistral-small-latest',
        usage: {
          promptTokens: 10,
          completionTokens: 5,
          totalTokens: 15
        },
        finishReason: 'stop'
      });
    });

    it('should throw error if no response content', async () => {
      const mockResponse = {
        choices: [{ message: {}, finish_reason: 'stop' }],
        model: 'mistral-small-latest'
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      await expect(adapter.getText({ prompt: 'Hello' })).rejects.toThrow('No response from Mistral');
    });

    it('should handle API errors', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        text: () => Promise.resolve('Unauthorized')
      });

      await expect(adapter.getText({ prompt: 'Hello' })).rejects.toThrow('Mistral API error: 401 Unauthorized');
    });
  });

  describe('chat', () => {
    it('should make correct API call and return response', async () => {
      const mockResponse = {
        choices: [{
          message: { role: 'assistant', content: 'Hello there!' },
          finish_reason: 'stop'
        }],
        model: 'mistral-small-latest',
        usage: {
          prompt_tokens: 15,
          completion_tokens: 8,
          total_tokens: 23
        }
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await adapter.chat({
        messages: [
          { role: 'user', content: 'Hello' }
        ],
        temperature: 0.8
      });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.mistral.ai/v1/chat/completions',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({
            model: 'mistral-small-latest',
            messages: [{ role: 'user', content: 'Hello' }],
            temperature: 0.8
          })
        })
      );

      expect(result).toEqual({
        message: { role: 'assistant', content: 'Hello there!' },
        model: 'mistral-small-latest',
        usage: {
          promptTokens: 15,
          completionTokens: 8,
          totalTokens: 23
        },
        finishReason: 'stop'
      });
    });
  });

  describe('chatStream', () => {
    it('should handle streaming responses', async () => {
      const mockStreamData = [
        'data: {"choices":[{"delta":{"role":"assistant","content":"Hello"},"finish_reason":null}],"model":"mistral-small-latest"}',
        'data: {"choices":[{"delta":{"content":" world"},"finish_reason":null}],"model":"mistral-small-latest"}',
        'data: {"choices":[{"delta":{},"finish_reason":"stop"}],"model":"mistral-small-latest"}',
        'data: [DONE]'
      ].join('\n');

      const mockReader = {
        read: vi.fn()
          .mockResolvedValueOnce({ done: false, value: new TextEncoder().encode(mockStreamData) })
          .mockResolvedValueOnce({ done: true }),
        releaseLock: vi.fn()
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        body: {
          getReader: () => mockReader
        }
      });

      const chunks: any[] = [];
      for await (const chunk of adapter.chatStream({ messages: [{ role: 'user', content: 'Hello' }] })) {
        chunks.push(chunk);
      }

      expect(chunks).toHaveLength(3);
      expect(chunks[0]).toEqual({
        delta: { role: 'assistant', content: 'Hello' },
        model: 'mistral-small-latest',
        finishReason: null
      });
      expect(chunks[1]).toEqual({
        delta: { content: ' world' },
        model: 'mistral-small-latest',
        finishReason: null
      });
    });
  });

  describe('getData', () => {
    it('should extract JSON data correctly', async () => {
      const mockResponse = {
        choices: [{
          message: { content: '{"name": "John", "age": 30}' },
          finish_reason: 'stop'
        }],
        model: 'mistral-small-latest'
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await adapter.getData({
        prompt: 'Extract data from this text',
        format: 'json'
      });

      expect(result.data).toEqual({ name: 'John', age: 30 });
      expect(result.format).toBe('json');
    });

    it('should handle non-JSON formats', async () => {
      const mockResponse = {
        choices: [{
          message: { content: 'Name: John\nAge: 30' },
          finish_reason: 'stop'
        }],
        model: 'mistral-small-latest'
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await adapter.getData({
        prompt: 'Extract data from this text',
        format: 'csv'
      });

      expect(result.data).toBe('Name: John\nAge: 30');
      expect(result.format).toBe('csv');
    });
  });

  describe('getImage', () => {
    it('should throw error as not supported', async () => {
      await expect(adapter.getImage()).rejects.toThrow('Image generation is not supported by Mistral AI');
    });
  });

  describe('getAudio', () => {
    it('should throw error as not supported', async () => {
      await expect(adapter.getAudio()).rejects.toThrow('Audio generation is not supported by Mistral AI');
    });
  });

  describe('transcribeAudio', () => {
    it('should handle audio transcription', async () => {
      const mockResponse = {
        text: 'Hello world',
        language: 'en',
        segments: [
          {
            text: 'Hello world',
            start: 0,
            end: 2,
            type: 'transcription_segment'
          }
        ]
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const audioFile = new File([''], 'audio.wav', { type: 'audio/wav' });
      const result = await adapter.transcribeAudio({
        audio: audioFile,
        model: 'mistral-large-latest'
      });

      expect(result).toEqual({
        text: 'Hello world',
        language: 'en',
        segments: mockResponse.segments,
        usage: undefined
      });
    });

    it('should throw error if no audio provided', async () => {
      await expect(adapter.transcribeAudio({})).rejects.toThrow('Audio data is required for transcription');
    });
  });
});