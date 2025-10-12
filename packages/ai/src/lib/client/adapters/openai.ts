import OpenAI from 'openai';
import { NativeAiAdapter } from "../../types/adapter";
import { 
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
} from "../../types/client";

const DEFAULT_MODEL = 'gpt-4o-mini';

export class OpenAIAdapter implements NativeAiAdapter {
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
  }

  name() {
    return 'openai';
  }

  async getText(request: GetTextRequest): Promise<GetTextResponse> {
    const completion = await this.client.chat.completions.create({
      model: request.model || DEFAULT_MODEL,
      messages: [{ role: 'user', content: request.prompt }],
      max_tokens: request.maxTokens,
      temperature: request.temperature,
      top_p: request.topP,
      frequency_penalty: request.frequencyPenalty,
      presence_penalty: request.presencePenalty,
      stop: request.stop,
    });

    const message = completion.choices[0]?.message;
    if (!message?.content) {
      throw new Error('No response from OpenAI');
    }

    return {
      text: message.content,
      model: completion.model,
      usage: completion.usage ? {
        promptTokens: completion.usage.prompt_tokens,
        completionTokens: completion.usage.completion_tokens,
        totalTokens: completion.usage.total_tokens,
      } : undefined,
      finishReason: this.mapFinishReason(completion.choices[0]?.finish_reason),
    };
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    const completion = await this.client.chat.completions.create({
      model: request.model || DEFAULT_MODEL,
      messages: request.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
      max_tokens: request.maxTokens,
      temperature: request.temperature,
      top_p: request.topP,
      frequency_penalty: request.frequencyPenalty,
      presence_penalty: request.presencePenalty,
      stop: request.stop,
      stream: false,
    });

    const message = completion.choices[0]?.message;
    if (!message?.content) {
      throw new Error('No response from OpenAI');
    }

    return {
      message: {
        role: 'assistant',
        content: message.content,
      },
      model: completion.model,
      usage: completion.usage ? {
        promptTokens: completion.usage.prompt_tokens,
        completionTokens: completion.usage.completion_tokens,
        totalTokens: completion.usage.total_tokens,
      } : undefined,
      finishReason: this.mapChatFinishReason(completion.choices[0]?.finish_reason),
    };
  }

  async *chatStream(request: ChatRequest): AsyncIterable<ChatStreamResponse> {
    const stream = await this.client.chat.completions.create({
      model: request.model || DEFAULT_MODEL,
      messages: request.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
      max_tokens: request.maxTokens,
      temperature: request.temperature,
      top_p: request.topP,
      frequency_penalty: request.frequencyPenalty,
      presence_penalty: request.presencePenalty,
      stop: request.stop,
      stream: true,
    });

    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta;
      if (delta) {
        yield {
          delta: {
            role: delta.role as 'assistant' | undefined,
            content: delta.content || undefined,
          },
          model: chunk.model,
          finishReason: this.mapChatFinishReason(chunk.choices[0]?.finish_reason),
        };
      }
    }
  }

  async getData(request: GetDataRequest): Promise<GetDataResponse> {
    let systemPrompt = `You are a data extraction assistant. Extract the requested information in ${request.format.toUpperCase()} format.`;
    
    if (request.schema) {
      systemPrompt += ` Follow this schema: ${typeof request.schema === 'string' ? request.schema : JSON.stringify(request.schema)}`;
    }

    const completion = await this.client.chat.completions.create({
      model: request.model || DEFAULT_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: request.prompt }
      ],
      max_tokens: request.maxTokens,
      temperature: request.temperature || 0.1, // Lower temperature for structured data
    });

    const message = completion.choices[0]?.message;
    if (!message?.content) {
      throw new Error('No response from OpenAI');
    }

    let parsedData: any;
    try {
      switch (request.format) {
        case 'json':
          parsedData = JSON.parse(message.content);
          break;
        case 'csv':
        case 'xml':
        case 'yaml':
        case 'markdown':
        default:
          parsedData = message.content;
          break;
      }
    } catch (error) {
      // If parsing fails, return raw content
      parsedData = message.content;
    }

    return {
      data: parsedData,
      format: request.format,
      model: completion.model,
      usage: completion.usage ? {
        promptTokens: completion.usage.prompt_tokens,
        completionTokens: completion.usage.completion_tokens,
        totalTokens: completion.usage.total_tokens,
      } : undefined,
    };
  }

  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    const response = await this.client.images.generate({
      model: request.model || 'dall-e-3',
      prompt: request.prompt,
      n: request.n || 1,
      size: request.size || '1024x1024',
      quality: request.quality || 'standard',
      style: request.style || 'vivid',
      response_format: request.responseFormat || 'url',
    });

    return {
      data: (response.data || []).map(item => ({
        url: item.url,
        b64_json: item.b64_json,
        revised_prompt: item.revised_prompt,
      })),
      created: response.created,
    };
  }

  async getAudio(request: GetAudioRequest): Promise<GetAudioResponse> {
    const response = await this.client.audio.speech.create({
      model: request.model || 'tts-1',
      voice: request.voice || 'alloy',
      input: request.input,
      response_format: request.responseFormat || 'mp3',
      speed: request.speed || 1.0,
    });

    const arrayBuffer = await response.arrayBuffer();
    const contentType = this.getAudioContentType(request.responseFormat || 'mp3');

    return {
      audio: arrayBuffer,
      contentType,
    };
  }

  async transcribeAudio(request: TranscribeAudioRequest): Promise<TranscribeAudioResponse> {
    // Convert File/Blob to the format OpenAI expects
    let file: File;
    if (request.file instanceof ArrayBuffer) {
      file = new File([request.file], 'audio.wav', { type: 'audio/wav' });
    } else if (request.file instanceof Blob) {
      file = new File([request.file], 'audio.wav', { type: request.file.type || 'audio/wav' });
    } else {
      file = request.file;
    }

    const responseFormat = request.responseFormat || 'json';

    const response = await this.client.audio.transcriptions.create({
      file,
      model: request.model || 'whisper-1',
      language: request.language,
      prompt: request.prompt,
      response_format: responseFormat as any,
      temperature: request.temperature,
    });

    // Handle different response formats
    if (typeof response === 'string') {
      return { text: response };
    }

    // For verbose_json format, try to access additional properties
    const result: TranscribeAudioResponse = {
      text: response.text,
    };

    // Try to access additional properties that might be available in verbose format
    if (responseFormat === 'verbose_json') {
      const verboseResponse = response as any;
      if (verboseResponse.language) result.language = verboseResponse.language;
      if (verboseResponse.duration) result.duration = verboseResponse.duration;
      if (verboseResponse.segments) {
        result.segments = verboseResponse.segments.map((segment: any) => ({
          id: segment.id,
          seek: segment.seek,
          start: segment.start,
          end: segment.end,
          text: segment.text,
          tokens: segment.tokens,
          temperature: segment.temperature,
          avg_logprob: segment.avg_logprob,
          compression_ratio: segment.compression_ratio,
          no_speech_prob: segment.no_speech_prob,
        }));
      }
    }

    return result;
  }

  raw() {
    return this.client;
  }

  private mapFinishReason(reason?: string | null): 'stop' | 'length' | 'content_filter' | undefined {
    switch (reason) {
      case 'stop':
        return 'stop';
      case 'length':
        return 'length';
      case 'content_filter':
        return 'content_filter';
      default:
        return undefined;
    }
  }

  private mapChatFinishReason(reason?: string | null): 'stop' | 'length' | 'content_filter' | 'function_call' | undefined {
    switch (reason) {
      case 'stop':
        return 'stop';
      case 'length':
        return 'length';
      case 'content_filter':
        return 'content_filter';
      case 'function_call':
        return 'function_call';
      default:
        return undefined;
    }
  }

  private getAudioContentType(format: string): string {
    switch (format) {
      case 'mp3':
        return 'audio/mpeg';
      case 'opus':
        return 'audio/opus';
      case 'aac':
        return 'audio/aac';
      case 'flac':
        return 'audio/flac';
      case 'wav':
        return 'audio/wav';
      case 'pcm':
        return 'audio/pcm';
      default:
        return 'audio/mpeg';
    }
  }
}
