import { describe, it, expect, vi } from 'vitest';
import { getClient, type NativeAiClientOptions } from './index';
import OpenAI from 'openai';

vi.mock('openai');

const MockOpenAI = vi.mocked(OpenAI);

describe('Client Index', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getClient', () => {
    it('should create OpenAI client with provided options', () => {
      const options: NativeAiClientOptions = {
        baseUrl: 'https://api.example.com',
        apiKey: 'test-key'
      };

      getClient(options);

      expect(MockOpenAI).toHaveBeenCalledWith({
        baseURL: 'https://api.example.com',
        apiKey: 'test-key'
      });
    });

    it('should create OpenAI client with partial options', () => {
      const options: NativeAiClientOptions = {
        apiKey: 'test-key'
      };

      getClient(options);

      expect(MockOpenAI).toHaveBeenCalledWith({
        baseURL: undefined,
        apiKey: 'test-key'
      });
    });

    it('should create OpenAI client with empty options', () => {
      const options: NativeAiClientOptions = {};

      getClient(options);

      expect(MockOpenAI).toHaveBeenCalledWith({
        baseURL: undefined,
        apiKey: undefined
      });
    });

    it('should return the created OpenAI instance', () => {
      const mockInstance = { test: 'instance' };
      MockOpenAI.mockImplementation(() => mockInstance as any);

      const options: NativeAiClientOptions = {
        apiKey: 'test-key'
      };

      const result = getClient(options);

      expect(result).toBe(mockInstance);
    });
  });

  describe('NativeAiClientOptions type', () => {
    it('should accept valid options', () => {
      const validOptions: NativeAiClientOptions = {
        baseUrl: 'https://api.example.com',
        apiKey: 'test-key'
      };

      // TypeScript compilation will validate this
      expect(validOptions).toBeDefined();
    });

    it('should accept optional properties', () => {
      const minimalOptions: NativeAiClientOptions = {};
      
      // TypeScript compilation will validate this
      expect(minimalOptions).toBeDefined();
    });
  });
});