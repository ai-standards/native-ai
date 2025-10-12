// Base types
export interface BaseMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ApiError {
  message: string;
  code?: string;
  type?: string;
}

// getText types
export interface GetTextRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  stop?: string | string[];
}

export interface GetTextResponse {
  text: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  finishReason?: 'stop' | 'length' | 'content_filter';
}

// chat types
export interface ChatRequest {
  messages: BaseMessage[];
  model?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  stop?: string | string[];
  stream?: boolean;
}

export interface ChatResponse {
  message: BaseMessage;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  finishReason?: 'stop' | 'length' | 'content_filter' | 'function_call';
}

export interface ChatStreamResponse {
  delta: {
    role?: 'assistant';
    content?: string;
  };
  model: string;
  finishReason?: 'stop' | 'length' | 'content_filter' | 'function_call';
}

// getData types (for structured data extraction)
export interface GetDataRequest {
  prompt: string;
  format: 'json' | 'csv' | 'xml' | 'yaml' | 'markdown';
  schema?: string | object;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface GetDataResponse<T = any> {
  data: T;
  format: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// getImage types
export interface GetImageRequest {
  prompt: string;
  model?: string;
  n?: number;
  size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
  responseFormat?: 'url' | 'b64_json';
}

export interface GetImageResponse {
  data: Array<{
    url?: string;
    b64_json?: string;
    revised_prompt?: string;
  }>;
  created: number;
}

// getAudio types
export interface GetAudioRequest {
  input: string;
  model?: string;
  voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  responseFormat?: 'mp3' | 'opus' | 'aac' | 'flac' | 'wav' | 'pcm';
  speed?: number; // 0.25 to 4.0
}

export interface GetAudioResponse {
  audio: ArrayBuffer;
  contentType: string;
}

// Transcription types (for audio-to-text)
export interface TranscribeAudioRequest {
  file: File | Blob | ArrayBuffer;
  model?: string;
  language?: string;
  prompt?: string;
  responseFormat?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt';
  temperature?: number;
}

export interface TranscribeAudioResponse {
  text: string;
  language?: string;
  duration?: number;
  segments?: Array<{
    id: number;
    seek: number;
    start: number;
    end: number;
    text: string;
    tokens: number[];
    temperature: number;
    avg_logprob: number;
    compression_ratio: number;
    no_speech_prob: number;
  }>;
}

// Main client interface
export interface NativeAiClient {
  /**
   * Generate text completion from a prompt
   */
  getText(request: GetTextRequest): Promise<GetTextResponse>;
  
  /**
   * Chat with the AI using a conversation format
   */
  chat(request: ChatRequest): Promise<ChatResponse>;
  
  /**
   * Chat with streaming response
   */
  chatStream(request: ChatRequest): AsyncIterable<ChatStreamResponse>;
  
  /**
   * Generate data
   */
  getData(request: GetDataRequest): Promise<GetDataResponse>;
  
  /**
   * Generate images from text prompts
   */
  getImage(request: GetImageRequest): Promise<GetImageResponse>;
  
  /**
   * Generate audio (text-to-speech) from text input
   */
  getAudio(request: GetAudioRequest): Promise<GetAudioResponse>;
  
  /**
   * Transcribe audio to text (speech-to-text)
   */
  transcribeAudio(request: TranscribeAudioRequest): Promise<TranscribeAudioResponse>;
}