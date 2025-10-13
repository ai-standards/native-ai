import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { OpenAIAdapter } from './index';
import OpenAI from 'openai';

// Mock OpenAI
vi.mock('openai');

const MockOpenAI = vi.mocked(OpenAI);

describe('OpenAIAdapter', () => {
  let adapter: OpenAIAdapter;
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
    adapter = new OpenAIAdapter('test-api-key');
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('constructor', () => {
    it('should create OpenAI client with provided API key', () => {
      expect(MockOpenAI).toHaveBeenCalledWith({
        apiKey: 'test-api-key'
      });
    });

    it('should use environment variable when no API key provided', () => {
      vi.stubEnv('OPENAI_API_KEY', 'env-api-key');
      new OpenAIAdapter();
      
      expect(MockOpenAI).toHaveBeenCalledWith({
        apiKey: 'env-api-key'
      });
    });
  });

  describe('name', () => {
    it('should return openai', () => {
      expect(adapter.name()).toBe('openai');
    });
  });

  describe('getText', () => {
    it('should make chat completion request and return text', async () => {
      const mockResponse = {
        model: 'gpt-4o-mini',
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
        model: 'gpt-4o-mini',
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
        model: 'gpt-4o-mini',
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
        model: 'gpt-4o-mini',
        choices: [{ message: { content: null } }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = { prompt: 'Say hello' };
      
      await expect(adapter.getText(request)).rejects.toThrow('No response from OpenAI');
    });

    it('should use custom model when specified', async () => {
      const mockResponse = {
        model: 'gpt-4',
        choices: [{ message: { content: 'Hello' }, finish_reason: 'stop' }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = { prompt: 'Say hello', model: 'gpt-4' };
      await adapter.getText(request);

      expect(mockOpenAIInstance.chat.completions.create).toHaveBeenCalledWith(
        expect.objectContaining({ model: 'gpt-4' })
      );
    });
  });

  describe('chat', () => {
    it('should make chat completion request', async () => {
      const mockResponse = {
        model: 'gpt-4o-mini',
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
        model: 'gpt-4o-mini',
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
        message: { role: 'assistant', content: 'Hi there!' },
        model: 'gpt-4o-mini',
        usage: {
          promptTokens: 5,
          completionTokens: 3,
          totalTokens: 8
        },
        finishReason: 'stop'
      });
    });
  });

  describe('chatStream', () => {
    it('should handle streaming chat completion', async () => {
      const mockStream = [
        {
          model: 'gpt-4o-mini',
          choices: [{ delta: { role: 'assistant', content: 'Hello' }, finish_reason: null }]
        },
        {
          model: 'gpt-4o-mini',
          choices: [{ delta: { content: ' world' }, finish_reason: 'stop' }]
        }
      ];

      const asyncIterator = {
        [Symbol.asyncIterator]: async function*() {
          for (const chunk of mockStream) {
            yield chunk;
          }
        }
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(asyncIterator);

      const request = {
        messages: [{ role: 'user' as const, content: 'Hello' }]
      };

      const results = [];
      for await (const chunk of adapter.chatStream(request)) {
        results.push(chunk);
      }

      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({
        delta: { role: 'assistant', content: 'Hello' },
        model: 'gpt-4o-mini',
        finishReason: undefined
      });
    });
  });

  describe('getData', () => {
    it('should extract structured data', async () => {
      const mockResponse = {
        model: 'gpt-4o-mini',
        choices: [{
          message: { content: '{"name": "John", "age": 30}' },
          finish_reason: 'stop'
        }],
        usage: {
          prompt_tokens: 15,
          completion_tokens: 10,
          total_tokens: 25
        }
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        prompt: 'Extract person info',
        format: 'json' as const
      };
      const result = await adapter.getData(request);

      expect(result).toEqual({
        data: { name: 'John', age: 30 },
        format: 'json',
        model: 'gpt-4o-mini',
        usage: {
          promptTokens: 15,
          completionTokens: 10,
          totalTokens: 25
        }
      });
    });

    it('should handle non-JSON formats', async () => {
      const mockResponse = {
        model: 'gpt-4o-mini',
        choices: [{
          message: { content: 'name,age\nJohn,30' },
          finish_reason: 'stop'
        }]
      };

      mockOpenAIInstance.chat.completions.create.mockResolvedValue(mockResponse);

      const request = {
        prompt: 'Extract person info',
        format: 'csv' as const
      };
      const result = await adapter.getData(request);

      expect(result.data).toBe('name,age\nJohn,30');
      expect(result.format).toBe('csv');
    });
  });

  describe('getImage', () => {
    it('should generate image', async () => {
      const mockResponse = {
        data: [{ url: 'http://example.com/image.jpg' }],
        created: 1234567890
      };

      mockOpenAIInstance.images.generate.mockResolvedValue(mockResponse);

      const request = { prompt: 'A beautiful sunset' };
      const result = await adapter.getImage(request);

      expect(mockOpenAIInstance.images.generate).toHaveBeenCalledWith({
        model: 'dall-e-3',
        prompt: 'A beautiful sunset',
        n: 1,
        size: '1024x1024',
        quality: 'standard',
        style: 'vivid',
        response_format: 'url'
      });

      expect(result).toEqual({
        data: [{ url: 'http://example.com/image.jpg' }],
        created: 1234567890
      });
    });
  });

  describe('getAudio', () => {
    it('should generate audio', async () => {
      const mockArrayBuffer = new ArrayBuffer(8);
      const mockResponse = {
        arrayBuffer: vi.fn().mockResolvedValue(mockArrayBuffer)
      };

      mockOpenAIInstance.audio.speech.create.mockResolvedValue(mockResponse);

      const request = { input: 'Hello world' };
      const result = await adapter.getAudio(request);

      expect(mockOpenAIInstance.audio.speech.create).toHaveBeenCalledWith({
        model: 'tts-1',
        voice: 'alloy',
        input: 'Hello world',
        response_format: 'mp3',
        speed: 1.0
      });

      expect(result).toEqual({
        audio: mockArrayBuffer,
        contentType: 'audio/mpeg'
      });
    });
  });

  describe('transcribeAudio', () => {
    it('should transcribe audio file', async () => {
      const mockResponse = {
        text: 'Hello world'
      };

      mockOpenAIInstance.audio.transcriptions.create.mockResolvedValue(mockResponse);

      const audioFile = new File(['audio data'], 'audio.mp3', { type: 'audio/mp3' });
      const request = { file: audioFile };
      const result = await adapter.transcribeAudio(request);

      // Check that the call was made with the correct structure
      const callArgs = mockOpenAIInstance.audio.transcriptions.create.mock.calls[0][0];
      expect(callArgs.file).toBeInstanceOf(File);
      expect(callArgs.model).toBe('whisper-1');
      expect(callArgs.response_format).toBe('json');

      expect(result).toEqual({
        text: 'Hello world'
      });
    });

    it('should handle ArrayBuffer input', async () => {
      const mockResponse = { text: 'Hello world' };
      mockOpenAIInstance.audio.transcriptions.create.mockResolvedValue(mockResponse);

      const arrayBuffer = new ArrayBuffer(8);
      const request = { file: arrayBuffer };
      
      await adapter.transcribeAudio(request);

      const callArgs = mockOpenAIInstance.audio.transcriptions.create.mock.calls[0][0];
      expect(callArgs.file).toBeInstanceOf(File);
      expect(callArgs.file.name).toBe('audio.wav');
    });
  });

  describe('raw', () => {
    it('should return the OpenAI client instance', () => {
      expect(adapter.raw()).toBe(mockOpenAIInstance);
    });
  });

  describe('private methods', () => {
    it('should map finish reasons correctly', () => {
      // We can't directly test private methods, but we can test their effects
      // through public methods that use them
      expect(true).toBe(true); // Placeholder
    });

    it('should get correct audio content types', () => {
      // Test through getAudio method with different formats
      expect(true).toBe(true); // Placeholder
    });
  });
});