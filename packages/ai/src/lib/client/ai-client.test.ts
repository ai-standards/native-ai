import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AiClient } from './ai-client';
import type { NativeAiAdapter } from '../types/adapter';
import type { 
  GetTextRequest, 
  ChatRequest, 
  GetDataRequest, 
  GetImageRequest, 
  GetAudioRequest, 
  TranscribeAudioRequest 
} from '../types/client';

describe('AiClient', () => {
  let mockAdapter: NativeAiAdapter;
  let aiClient: AiClient;

  beforeEach(() => {
    mockAdapter = {
      name: vi.fn(() => 'test-adapter'),
      getText: vi.fn(),
      chat: vi.fn(),
      chatStream: vi.fn(),
      getData: vi.fn(),
      getImage: vi.fn(),
      getAudio: vi.fn(),
      transcribeAudio: vi.fn(),
      raw: vi.fn()
    };
    aiClient = new AiClient(mockAdapter);
  });

  describe('getText', () => {
    it('should call adapter getText method', async () => {
      const request: GetTextRequest = { prompt: 'test prompt' };
      const expectedResponse = { text: 'response text', model: 'test-model' };
      
      vi.mocked(mockAdapter.getText!).mockResolvedValue(expectedResponse);

      const result = await aiClient.getText(request);

      expect(mockAdapter.getText).toHaveBeenCalledWith(request);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw error when adapter does not support getText', async () => {
      mockAdapter.getText = undefined;
      const request: GetTextRequest = { prompt: 'test prompt' };

      await expect(aiClient.getText(request)).rejects.toThrow('test-adapter does not support getText');
    });
  });

  describe('chat', () => {
    it('should call adapter chat method', async () => {
      const request: ChatRequest = { 
        messages: [{ role: 'user', content: 'hello' }] 
      };
      const expectedResponse = { 
        message: { role: 'assistant' as const, content: 'hi' }, 
        model: 'test-model' 
      };
      
      vi.mocked(mockAdapter.chat!).mockResolvedValue(expectedResponse);

      const result = await aiClient.chat(request);

      expect(mockAdapter.chat).toHaveBeenCalledWith(request);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw error when adapter does not support chat', async () => {
      mockAdapter.chat = undefined;
      const request: ChatRequest = { 
        messages: [{ role: 'user', content: 'hello' }] 
      };

      await expect(aiClient.chat(request)).rejects.toThrow('test-adapter does not support chat');
    });
  });

  describe('chatStream', () => {
    it('should call adapter chatStream method', () => {
      const request: ChatRequest = { 
        messages: [{ role: 'user', content: 'hello' }] 
      };
      const mockStream = (async function*() {
        yield { delta: { content: 'hi' }, model: 'test-model' };
      })();
      
      vi.mocked(mockAdapter.chatStream!).mockReturnValue(mockStream);

      const result = aiClient.chatStream(request);

      expect(mockAdapter.chatStream).toHaveBeenCalledWith(request);
      expect(result).toBe(mockStream);
    });

    it('should throw error when adapter does not support chatStream', () => {
      mockAdapter.chatStream = undefined;
      const request: ChatRequest = { 
        messages: [{ role: 'user', content: 'hello' }] 
      };

      expect(() => aiClient.chatStream(request)).toThrow('test-adapter does not support chatStream');
    });
  });

  describe('getData', () => {
    it('should call adapter getData method', async () => {
      const request: GetDataRequest = { 
        prompt: 'extract data', 
        format: 'json' 
      };
      const expectedResponse = { 
        data: { key: 'value' }, 
        format: 'json', 
        model: 'test-model' 
      };
      
      vi.mocked(mockAdapter.getData!).mockResolvedValue(expectedResponse);

      const result = await aiClient.getData(request);

      expect(mockAdapter.getData).toHaveBeenCalledWith(request);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw error when adapter does not support getData', async () => {
      mockAdapter.getData = undefined;
      const request: GetDataRequest = { 
        prompt: 'extract data', 
        format: 'json' 
      };

      await expect(aiClient.getData(request)).rejects.toThrow('test-adapter does not support getData');
    });
  });

  describe('getImage', () => {
    it('should call adapter getImage method', async () => {
      const request: GetImageRequest = { 
        prompt: 'generate image' 
      };
      const expectedResponse = { 
        data: [{ url: 'http://example.com/image.jpg' }], 
        created: 1234567890 
      };
      
      vi.mocked(mockAdapter.getImage!).mockResolvedValue(expectedResponse);

      const result = await aiClient.getImage(request);

      expect(mockAdapter.getImage).toHaveBeenCalledWith(request);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw error when adapter does not support getImage', async () => {
      mockAdapter.getImage = undefined;
      const request: GetImageRequest = { 
        prompt: 'generate image' 
      };

      await expect(aiClient.getImage(request)).rejects.toThrow('test-adapter does not support getImage');
    });
  });

  describe('getAudio', () => {
    it('should call adapter getAudio method', async () => {
      const request: GetAudioRequest = { 
        input: 'text to speech' 
      };
      const expectedResponse = { 
        audio: new ArrayBuffer(8), 
        contentType: 'audio/mp3' 
      };
      
      vi.mocked(mockAdapter.getAudio!).mockResolvedValue(expectedResponse);

      const result = await aiClient.getAudio(request);

      expect(mockAdapter.getAudio).toHaveBeenCalledWith(request);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw error when adapter does not support getAudio', async () => {
      mockAdapter.getAudio = undefined;
      const request: GetAudioRequest = { 
        input: 'text to speech' 
      };

      await expect(aiClient.getAudio(request)).rejects.toThrow('test-adapter does not support getAudio');
    });
  });

  describe('transcribeAudio', () => {
    it('should call adapter transcribeAudio method', async () => {
      const request: TranscribeAudioRequest = { 
        file: new File(['audio'], 'audio.mp3', { type: 'audio/mp3' }) 
      };
      const expectedResponse = { 
        text: 'transcribed text' 
      };
      
      vi.mocked(mockAdapter.transcribeAudio!).mockResolvedValue(expectedResponse);

      const result = await aiClient.transcribeAudio(request);

      expect(mockAdapter.transcribeAudio).toHaveBeenCalledWith(request);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw error when adapter does not support transcribeAudio', async () => {
      mockAdapter.transcribeAudio = undefined;
      const request: TranscribeAudioRequest = { 
        file: new File(['audio'], 'audio.mp3', { type: 'audio/mp3' }) 
      };

      await expect(aiClient.transcribeAudio(request)).rejects.toThrow('test-adapter does not support transcribeAudio');
    });
  });
});