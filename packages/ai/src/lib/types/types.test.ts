import { describe, it, expect } from 'vitest';
import type { NativeAiAdapter } from './adapter';
import type { 
  NativeAiClient, 
  BaseMessage,
  GetTextRequest,
  GetTextResponse,
  ChatRequest,
  ChatResponse,
  ChatStreamResponse,
  GetDataRequest,
  GetDataResponse,
  GetImageRequest,
  GetImageResponse,
  GetAudioRequest,
  GetAudioResponse,
  TranscribeAudioRequest,
  TranscribeAudioResponse
} from './client';

describe('Type Definitions', () => {
  describe('NativeAiAdapter interface', () => {
    it('should define the correct interface structure', () => {
      // TypeScript will validate at compile time that these properties exist
      const mockAdapter: Partial<NativeAiAdapter> = {
        name: () => 'test',
        getText: async () => ({ text: '', model: '' }),
        chat: async () => ({ message: { role: 'assistant', content: '' }, model: '' }),
        chatStream: async function*() { yield { delta: {}, model: '' }; },
        getData: async () => ({ data: {}, format: 'json', model: '' }),
        getImage: async () => ({ data: [], created: 0 }),
        getAudio: async () => ({ audio: new ArrayBuffer(0), contentType: '' }),
        transcribeAudio: async () => ({ text: '' }),
        raw: () => undefined
      };

      expect(mockAdapter.name).toBeDefined();
    });
  });

  describe('NativeAiClient interface', () => {
    it('should define all required methods', () => {
      const mockClient: Partial<NativeAiClient> = {
        getText: async () => ({ text: '', model: '' }),
        chat: async () => ({ message: { role: 'assistant', content: '' }, model: '' }),
        chatStream: async function*() { yield { delta: {}, model: '' }; },
        getData: async () => ({ data: {}, format: 'json', model: '' }),
        getImage: async () => ({ data: [], created: 0 }),
        getAudio: async () => ({ audio: new ArrayBuffer(0), contentType: '' }),
        transcribeAudio: async () => ({ text: '' })
      };

      expect(mockClient.getText).toBeDefined();
      expect(mockClient.chat).toBeDefined();
      expect(mockClient.chatStream).toBeDefined();
    });
  });

  describe('BaseMessage type', () => {
    it('should accept valid message roles', () => {
      const systemMessage: BaseMessage = { role: 'system', content: 'You are helpful' };
      const userMessage: BaseMessage = { role: 'user', content: 'Hello' };
      const assistantMessage: BaseMessage = { role: 'assistant', content: 'Hi there!' };

      expect(systemMessage.role).toBe('system');
      expect(userMessage.role).toBe('user');
      expect(assistantMessage.role).toBe('assistant');
    });
  });

  describe('Request/Response types', () => {
    it('should validate GetTextRequest structure', () => {
      const request: GetTextRequest = {
        prompt: 'test prompt',
        model: 'gpt-4',
        maxTokens: 100,
        temperature: 0.7,
        topP: 1,
        frequencyPenalty: 0,
        presencePenalty: 0,
        stop: ['END']
      };

      expect(request.prompt).toBe('test prompt');
      expect(request.model).toBe('gpt-4');
    });

    it('should validate ChatRequest structure', () => {
      const request: ChatRequest = {
        messages: [
          { role: 'user', content: 'Hello' }
        ],
        model: 'gpt-4',
        maxTokens: 100,
        temperature: 0.7,
        stream: false
      };

      expect(request.messages).toHaveLength(1);
      expect(request.messages[0].role).toBe('user');
    });

    it('should validate GetDataRequest structure', () => {
      const request: GetDataRequest = {
        prompt: 'extract data',
        format: 'json',
        schema: { type: 'object' },
        model: 'gpt-4'
      };

      expect(request.format).toBe('json');
      expect(request.schema).toBeDefined();
    });

    it('should validate GetImageRequest structure', () => {
      const request: GetImageRequest = {
        prompt: 'a sunset',
        model: 'dall-e-3',
        n: 1,
        size: '1024x1024',
        quality: 'hd',
        style: 'vivid',
        responseFormat: 'url'
      };

      expect(request.prompt).toBe('a sunset');
      expect(request.size).toBe('1024x1024');
    });

    it('should validate GetAudioRequest structure', () => {
      const request: GetAudioRequest = {
        input: 'hello world',
        model: 'tts-1',
        voice: 'alloy',
        responseFormat: 'mp3',
        speed: 1.0
      };

      expect(request.input).toBe('hello world');
      expect(request.voice).toBe('alloy');
    });

    it('should validate TranscribeAudioRequest structure', () => {
      const file = new File(['audio'], 'test.mp3', { type: 'audio/mp3' });
      const request: TranscribeAudioRequest = {
        file,
        model: 'whisper-1',
        language: 'en',
        prompt: 'transcribe this',
        responseFormat: 'json',
        temperature: 0
      };

      expect(request.file).toBe(file);
      expect(request.model).toBe('whisper-1');
    });
  });

  describe('Response types', () => {
    it('should validate GetTextResponse structure', () => {
      const response: GetTextResponse = {
        text: 'generated text',
        model: 'gpt-4',
        usage: {
          promptTokens: 10,
          completionTokens: 5,
          totalTokens: 15
        },
        finishReason: 'stop'
      };

      expect(response.text).toBe('generated text');
      expect(response.usage?.totalTokens).toBe(15);
    });

    it('should validate ChatResponse structure', () => {
      const response: ChatResponse = {
        message: { role: 'assistant', content: 'Hello!' },
        model: 'gpt-4',
        usage: {
          promptTokens: 5,
          completionTokens: 3,
          totalTokens: 8
        },
        finishReason: 'stop'
      };

      expect(response.message.role).toBe('assistant');
      expect(response.message.content).toBe('Hello!');
    });

    it('should validate ChatStreamResponse structure', () => {
      const response: ChatStreamResponse = {
        delta: {
          role: 'assistant',
          content: 'chunk'
        },
        model: 'gpt-4',
        finishReason: 'stop'
      };

      expect(response.delta.content).toBe('chunk');
      expect(response.model).toBe('gpt-4');
    });
  });
});