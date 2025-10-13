import { NativeAiAdapter } from "../../../types/adapter";
import { 
  GetTextRequest, 
  GetTextResponse, 
  ChatRequest, 
  ChatResponse, 
  ChatStreamResponse,
  GetDataRequest,
  GetDataResponse,
} from "../../../types/client";

const DEFAULT_MODEL = 'claude-3-5-sonnet-20241022';

export class AnthropicAdapter implements NativeAiAdapter {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY || '';
    this.baseURL = 'https://api.anthropic.com/v1';
    
    if (!this.apiKey) {
      throw new Error('Anthropic API key is required. Set ANTHROPIC_API_KEY environment variable or pass it to the constructor.');
    }
  }

  name() {
    return 'anthropic';
  }

  async getText(request: GetTextRequest): Promise<GetTextResponse> {
    const response = await this.makeRequest('/messages', {
      model: request.model || DEFAULT_MODEL,
      max_tokens: request.maxTokens || 4096,
      messages: [{ role: 'user', content: request.prompt }],
      temperature: request.temperature,
      top_p: request.topP,
      stop_sequences: Array.isArray(request.stop) ? request.stop : request.stop ? [request.stop] : undefined,
    });

    const content = response.content[0];
    if (!content || content.type !== 'text') {
      throw new Error('No text response from Anthropic');
    }

    return {
      text: content.text,
      model: response.model,
      usage: response.usage ? {
        promptTokens: response.usage.input_tokens,
        completionTokens: response.usage.output_tokens,
        totalTokens: response.usage.input_tokens + response.usage.output_tokens,
      } : undefined,
      finishReason: this.mapFinishReason(response.stop_reason),
    };
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    // Convert messages to Anthropic format
    const messages = request.messages.filter(msg => msg.role !== 'system');
    const systemMessage = request.messages.find(msg => msg.role === 'system')?.content;

    const anthropicMessages = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content,
    }));

    const requestBody: any = {
      model: request.model || DEFAULT_MODEL,
      max_tokens: request.maxTokens || 4096,
      messages: anthropicMessages,
      temperature: request.temperature,
      top_p: request.topP,
      stop_sequences: Array.isArray(request.stop) ? request.stop : request.stop ? [request.stop] : undefined,
    };

    if (systemMessage) {
      requestBody.system = systemMessage;
    }

    const response = await this.makeRequest('/messages', requestBody);

    const content = response.content[0];
    if (!content || content.type !== 'text') {
      throw new Error('No text response from Anthropic');
    }

    return {
      message: {
        role: 'assistant',
        content: content.text,
      },
      model: response.model,
      usage: response.usage ? {
        promptTokens: response.usage.input_tokens,
        completionTokens: response.usage.output_tokens,
        totalTokens: response.usage.input_tokens + response.usage.output_tokens,
      } : undefined,
      finishReason: this.mapChatFinishReason(response.stop_reason),
    };
  }

  async *chatStream(request: ChatRequest): AsyncIterable<ChatStreamResponse> {
    // Convert messages to Anthropic format
    const messages = request.messages.filter(msg => msg.role !== 'system');
    const systemMessage = request.messages.find(msg => msg.role === 'system')?.content;

    const anthropicMessages = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content,
    }));

    const requestBody: any = {
      model: request.model || DEFAULT_MODEL,
      max_tokens: request.maxTokens || 4096,
      messages: anthropicMessages,
      temperature: request.temperature,
      top_p: request.topP,
      stop_sequences: Array.isArray(request.stop) ? request.stop : request.stop ? [request.stop] : undefined,
      stream: true,
    };

    if (systemMessage) {
      requestBody.system = systemMessage;
    }

    const response = await fetch(`${this.baseURL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`Anthropic API error: ${response.status} ${error.error?.message || response.statusText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('Failed to get response stream');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') return;

            try {
              const parsed = JSON.parse(data);
              
              if (parsed.type === 'content_block_delta') {
                yield {
                  delta: {
                    role: 'assistant',
                    content: parsed.delta.text,
                  },
                  model: request.model || DEFAULT_MODEL,
                  finishReason: undefined,
                };
              } else if (parsed.type === 'message_stop') {
                yield {
                  delta: {},
                  model: request.model || DEFAULT_MODEL,
                  finishReason: this.mapChatFinishReason(parsed.stop_reason),
                };
              }
            } catch (error) {
              // Skip invalid JSON
              continue;
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  async getData(request: GetDataRequest): Promise<GetDataResponse> {
    let systemPrompt = `You are a data extraction assistant. Extract the requested information in ${request.format.toUpperCase()} format.`;
    
    if (request.schema) {
      systemPrompt += ` Follow this schema: ${typeof request.schema === 'string' ? request.schema : JSON.stringify(request.schema)}`;
    }

    const response = await this.makeRequest('/messages', {
      model: request.model || DEFAULT_MODEL,
      max_tokens: request.maxTokens || 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: request.prompt }],
      temperature: request.temperature ?? 0.1, // Lower temperature for structured data
    });

    const content = response.content[0];
    if (!content || content.type !== 'text') {
      throw new Error('No text response from Anthropic');
    }

    let parsedData: any;
    try {
      switch (request.format) {
        case 'json':
          parsedData = JSON.parse(content.text);
          break;
        case 'csv':
        case 'xml':
        case 'yaml':
        case 'markdown':
        default:
          parsedData = content.text;
          break;
      }
    } catch (error) {
      // If parsing fails, return raw content
      parsedData = content.text;
    }

    return {
      data: parsedData,
      format: request.format,
      model: response.model,
      usage: response.usage ? {
        promptTokens: response.usage.input_tokens,
        completionTokens: response.usage.output_tokens,
        totalTokens: response.usage.input_tokens + response.usage.output_tokens,
      } : undefined,
    };
  }

  // Anthropic doesn't support image generation, audio generation, or transcription
  async getImage(): Promise<never> {
    throw new Error('Image generation is not supported by Anthropic API');
  }

  async getAudio(): Promise<never> {
    throw new Error('Audio generation is not supported by Anthropic API');
  }

  async transcribeAudio(): Promise<never> {
    throw new Error('Audio transcription is not supported by Anthropic API');
  }

  raw() {
    return { apiKey: this.apiKey, baseURL: this.baseURL };
  }

  private async makeRequest(endpoint: string, body: any): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`Anthropic API error: ${response.status} ${error.error?.message || response.statusText}`);
    }

    return response.json();
  }

  private mapFinishReason(reason?: string | null): 'stop' | 'length' | 'content_filter' | undefined {
    switch (reason) {
      case 'end_turn':
      case 'stop_sequence':
        return 'stop';
      case 'max_tokens':
        return 'length';
      default:
        return undefined;
    }
  }

  private mapChatFinishReason(reason?: string | null): 'stop' | 'length' | 'content_filter' | 'function_call' | undefined {
    switch (reason) {
      case 'end_turn':
      case 'stop_sequence':
        return 'stop';
      case 'max_tokens':
        return 'length';
      default:
        return undefined;
    }
  }
}