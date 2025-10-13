import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NvidiaAdapter } from './index';
import OpenAI from 'openai';

// Mock OpenAI
vi.mock('openai');

const MockOpenAI = vi.mocked(OpenAI);

describe('NvidiaAdapter', () => {
  let adapter: NvidiaAdapter;
  let mockOpenAIInstance: any;

  beforeEach(() => {
    mockOpenAIInstance = {
      chat: {
        completions: {
          create: vi.fn()
        }
      },
      images: {
        generate: vi.fn()
      },
      audio: {
        speech: {
          create: vi.fn()
        },
        transcriptions: {
          create: vi.fn()
        }
      }
    };

    MockOpenAI.mockImplementation(() => mockOpenAIInstance);
    adapter = new NvidiaAdapter('test-api-key');
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('constructor', () => {
    it('should create OpenAI client with NVIDIA base URL and provided API key', () => {
      expect(MockOpenAI).toHaveBeenCalledWith({
        baseURL: 'https://integrate.api.nvidia.com/v1',
        apiKey: 'test-api-key'
      });
    });

    it('should use environment variable when no API key provided', () => {
      vi.stubEnv('NVIDIA_API_KEY', 'env-api-key');
      new NvidiaAdapter();
      
      expect(MockOpenAI).toHaveBeenCalledWith({
        baseURL: 'https://integrate.api.nvidia.com/v1',
        apiKey: 'env-api-key'
      });
    });
  });

  describe('name', () => {
    it('should return nvidia', () => {
      expect(adapter.name()).toBe('nvidia');
    });
  });

  describe('getText', () => {
    it('should make chat completion request and return text', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{
          message: { content: 'Hello world' },
          finish_reason: 'stop'
        }],
        usage: {
          prompt_tokens: 10,
          completion_tokens: 5,
          total_tokens: 15
        }
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = { prompt: 'Say hello' };
      const result = await adapter.getText(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith({
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        messages: [{ role: 'user', content: 'Say hello' }],
        max_tokens: undefined,
        temperature: undefined,
        top_p: undefined,
        frequency_penalty: undefined,
        presence_penalty: undefined,
        stop: undefined
      });

      expect(result).toEqual({
        text: 'Hello world',
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        usage: {
          promptTokens: 10,
          completionTokens: 5,
          totalTokens: 15
        },
        finishReason: 'stop'
      });
    });

    it('should throw error when no content in response', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{ message: { content: null } }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = { prompt: 'Say hello' };
      
      await expect(adapter.getText(request)).rejects.toThrow('No response from NVIDIA API');
    });

    it('should use custom model when specified', async () => {
      const mockResponse = {
        model: 'meta/llama-3.1-405b-instruct',
        choices: [{ message: { content: 'Hello' }, finish_reason: 'stop' }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = { prompt: 'Say hello', model: 'meta/llama-3.1-405b-instruct' };
      await adapter.getText(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith(
        expect.objectContaining({ model: 'meta/llama-3.1-405b-instruct' })
      );
    });

    it('should pass through all request parameters', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{ message: { content: 'Hello' }, finish_reason: 'stop' }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        prompt: 'Say hello',
        model: 'microsoft/phi-4-mini-instruct',
        maxTokens: 100,
        temperature: 0.7,
        topP: 0.9,
        frequencyPenalty: 0.1,
        presencePenalty: 0.2,
        stop: ['END']
      };
      
      await adapter.getText(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith({
        model: 'microsoft/phi-4-mini-instruct',
        messages: [{ role: 'user', content: 'Say hello' }],
        max_tokens: 100,
        temperature: 0.7,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.2,
        stop: ['END']
      });
    });
  });

  describe('chat', () => {
    it('should make chat completion request', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{
          message: { content: 'Hi there!' },
          finish_reason: 'stop'
        }],
        usage: {
          prompt_tokens: 5,
          completion_tokens: 3,
          total_tokens: 8
        }
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        messages: [
          { role: 'user' as const, content: 'Hello' }
        ]
      };

      const result = await adapter.chat(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith({
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        messages: [{ role: 'user', content: 'Hello' }],
        max_tokens: undefined,
        temperature: undefined,
        top_p: undefined,
        frequency_penalty: undefined,
        presence_penalty: undefined,
        stop: undefined,
        stream: false
      });

      expect(result).toEqual({
        message: {
          role: 'assistant',
          content: 'Hi there!'
        },
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        usage: {
          promptTokens: 5,
          completionTokens: 3,
          totalTokens: 8
        },
        finishReason: 'stop'
      });
    });

    it('should handle conversation with multiple messages', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{
          message: { content: 'I understand your question about AI.' },
          finish_reason: 'stop'
        }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        messages: [
          { role: 'user' as const, content: 'Hello' },
          { role: 'assistant' as const, content: 'Hi there! How can I help you?' },
          { role: 'user' as const, content: 'Tell me about AI' }
        ]
      };

      await adapter.chat(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith(
        expect.objectContaining({
          messages: [
            { role: 'user', content: 'Hello' },
            { role: 'assistant', content: 'Hi there! How can I help you?' },
            { role: 'user', content: 'Tell me about AI' }
          ]
        })
      );
    });

    it('should throw error when no content in response', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{ message: { content: null } }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        messages: [{ role: 'user' as const, content: 'Hello' }]
      };
      
      await expect(adapter.chat(request)).rejects.toThrow('No response from NVIDIA API');
    });
  });

  describe('chatStream', () => {
    it('should handle streaming chat completions', async () => {
      const mockChunks = [
        {
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          choices: [{ delta: { role: 'assistant', content: 'Hello' } }]
        },
        {
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          choices: [{ delta: { content: ' there!' } }]
        },
        {
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          choices: [{ delta: {}, finish_reason: 'stop' }]
        }
      ];

      // Create async iterator
      const mockStream = {
        [Symbol.asyncIterator]: async function* () {
          for (const chunk of mockChunks) {
            yield chunk;
          }
        }
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockStream);

      const request = {
        messages: [{ role: 'user' as const, content: 'Hello' }]
      };

      const results = [];
      for await (const chunk of adapter.chatStream(request)) {
        results.push(chunk);
      }

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith(
        expect.objectContaining({
          stream: true
        })
      );

      expect(results).toEqual([
        {
          delta: { role: 'assistant', content: 'Hello' },
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          finishReason: undefined
        },
        {
          delta: { role: undefined, content: ' there!' },
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          finishReason: undefined
        },
        {
          delta: { role: undefined, content: undefined },
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          finishReason: 'stop'
        }
      ]);
    });
  });

  describe('getData', () => {
    it('should extract structured data in JSON format', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{
          message: { content: '{"name": "John", "age": 30}' },
          finish_reason: 'stop'
        }],
        usage: {
          prompt_tokens: 20,
          completion_tokens: 10,
          total_tokens: 30
        }
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        prompt: 'Extract person info from: John is 30 years old',
        format: 'json' as const,
        schema: { name: 'string', age: 'number' }
      };

      const result = await adapter.getData(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith({
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        messages: [
          {
            role: 'system',
            content: 'You are a data extraction assistant. Extract the requested information in JSON format. Follow this schema: {"name":"string","age":"number"}'
          },
          { role: 'user', content: 'Extract person info from: John is 30 years old' }
        ],
        max_tokens: undefined,
        temperature: 0.1
      });

      expect(result).toEqual({
        data: { name: 'John', age: 30 },
        format: 'json',
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        usage: {
          promptTokens: 20,
          completionTokens: 10,
          totalTokens: 30
        }
      });
    });

    it('should handle non-JSON formats', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{
          message: { content: 'name,age\\nJohn,30' }
        }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        prompt: 'Extract as CSV',
        format: 'csv' as const
      };

      const result = await adapter.getData(request);

      expect(result.data).toBe('name,age\\nJohn,30');
      expect(result.format).toBe('csv');
    });

    it('should fallback to raw content when JSON parsing fails', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{
          message: { content: 'invalid json content' }
        }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        prompt: 'Extract data',
        format: 'json' as const
      };

      const result = await adapter.getData(request);

      expect(result.data).toBe('invalid json content');
    });
  });

  describe('getImage', () => {
    it('should throw error as image generation is not supported', async () => {
      const request = {
        prompt: 'A beautiful landscape'
      };

      await expect(adapter.getImage(request)).rejects.toThrow(
        'Image generation is not supported by NVIDIA NIM API. Use Visual Models APIs instead.'
      );
    });
  });

  describe('getAudio', () => {
    it('should throw error as audio generation is not supported', async () => {
      const request = {
        input: 'Hello world'
      };

      await expect(adapter.getAudio(request)).rejects.toThrow(
        'Audio generation is not supported by NVIDIA NIM API.'
      );
    });
  });

  describe('transcribeAudio', () => {
    it('should throw error as audio transcription is not supported', async () => {
      const request = {
        file: new File([''], 'audio.mp3', { type: 'audio/mpeg' })
      };

      await expect(adapter.transcribeAudio(request)).rejects.toThrow(
        'Audio transcription is not supported by NVIDIA NIM API.'
      );
    });
  });

  describe('raw', () => {
    it('should return the underlying OpenAI client', () => {
      expect(adapter.raw()).toBe(mockOpenAIInstance);
    });
  });

  describe('finish reason mapping', () => {
    it('should map finish reasons correctly for getText', async () => {
      const testCases = [
        { input: 'stop', expected: 'stop' },
        { input: 'length', expected: 'length' },
        { input: 'content_filter', expected: 'content_filter' },
        { input: 'unknown', expected: undefined },
        { input: null, expected: undefined }
      ];

      for (const testCase of testCases) {
        const mockResponse = {
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          choices: [{
            message: { content: 'Test' },
            finish_reason: testCase.input
          }]
        };

        mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

        const result = await adapter.getText({ prompt: 'test' });
        expect(result.finishReason).toBe(testCase.expected);
      }
    });

    it('should map finish reasons correctly for chat', async () => {
      const testCases = [
        { input: 'function_call', expected: 'function_call' },
        { input: 'stop', expected: 'stop' },
        { input: 'length', expected: 'length' },
        { input: 'content_filter', expected: 'content_filter' }
      ];

      for (const testCase of testCases) {
        const mockResponse = {
          model: 'nvidia/llama-3.1-nemotron-70b-instruct',
          choices: [{
            message: { content: 'Test' },
            finish_reason: testCase.input
          }]
        };

        mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

        const result = await adapter.chat({ 
          messages: [{ role: 'user', content: 'test' }] 
        });
        expect(result.finishReason).toBe(testCase.expected);
      }
    });
  });

  describe('model selection', () => {
    it('should use default NVIDIA model when none specified', async () => {
      const mockResponse = {
        model: 'nvidia/llama-3.1-nemotron-70b-instruct',
        choices: [{ message: { content: 'Test' } }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      await adapter.getText({ prompt: 'test' });

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith(
        expect.objectContaining({
          model: 'nvidia/llama-3.1-nemotron-70b-instruct'
        })
      );
    });

    it('should support popular NVIDIA model variants', async () => {
      const models = [
        'meta/llama-3.1-405b-instruct',
        'microsoft/phi-4-mini-instruct',
        'deepseek-ai/deepseek-r1',
        'qwen/qwen3-next-80b-a3b-instruct',
        'mistralai/mistral-2-large-instruct'
      ];

      for (const model of models) {
        const mockResponse = {
          model,
          choices: [{ message: { content: 'Test' } }]
        };

        mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

        await adapter.getText({ prompt: 'test', model });

        expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith(
          expect.objectContaining({ model })
        );
      }
    });
  });
});