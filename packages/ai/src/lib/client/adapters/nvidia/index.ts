import OpenAI from 'openai';
import { NativeAiAdapter } from "../../../types/adapter";
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
} from "../../../types/client";

const DEFAULT_MODEL = 'nvidia/llama-3.1-nemotron-70b-instruct';

export class NvidiaAdapter implements NativeAiAdapter {
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({
      baseURL: 'https://integrate.api.nvidia.com/v1',
      apiKey: apiKey || process.env.NVIDIA_API_KEY,
    });
  }

  name() {
    return 'nvidia';
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
      throw new Error('No response from NVIDIA API');
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
      throw new Error('No response from NVIDIA API');
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
      throw new Error('No response from NVIDIA API');
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
    throw new Error('Image generation is not supported by NVIDIA NIM API. Use Visual Models APIs instead.');
  }

  async getAudio(request: GetAudioRequest): Promise<GetAudioResponse> {
    throw new Error('Audio generation is not supported by NVIDIA NIM API.');
  }

  async transcribeAudio(request: TranscribeAudioRequest): Promise<TranscribeAudioResponse> {
    throw new Error('Audio transcription is not supported by NVIDIA NIM API.');
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
}