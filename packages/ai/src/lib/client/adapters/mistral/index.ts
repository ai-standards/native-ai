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

const DEFAULT_MODEL = 'mistral-small-latest';

export class MistralAdapter implements NativeAiAdapter {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.MISTRAL_API_KEY || '';
    this.baseURL = 'https://api.mistral.ai/v1';
    
    if (!this.apiKey) {
      throw new Error('Mistral API key is required. Set MISTRAL_API_KEY environment variable or pass it to the constructor.');
    }
  }

  name() {
    return 'mistral';
  }

  async getText(request: GetTextRequest): Promise<GetTextResponse> {
    const response = await this.makeRequest('/chat/completions', {
      model: request.model || DEFAULT_MODEL,
      messages: [{ role: 'user', content: request.prompt }],
      max_tokens: request.maxTokens,
      temperature: request.temperature,
      top_p: request.topP,
      frequency_penalty: request.frequencyPenalty,
      presence_penalty: request.presencePenalty,
      stop: Array.isArray(request.stop) ? request.stop : request.stop ? [request.stop] : undefined,
    });

    const choice = response.choices[0];
    if (!choice?.message?.content) {
      throw new Error('No response from Mistral');
    }

    return {
      text: choice.message.content,
      model: response.model,
      usage: response.usage ? {
        promptTokens: response.usage.prompt_tokens,
        completionTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      } : undefined,
      finishReason: choice.finish_reason,
    };
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    const response = await this.makeRequest('/chat/completions', {
      model: request.model || DEFAULT_MODEL,
      messages: request.messages,
      max_tokens: request.maxTokens,
      temperature: request.temperature,
      top_p: request.topP,
      frequency_penalty: request.frequencyPenalty,
      presence_penalty: request.presencePenalty,
      stop: Array.isArray(request.stop) ? request.stop : request.stop ? [request.stop] : undefined,
    });

    const choice = response.choices[0];
    if (!choice?.message) {
      throw new Error('No response from Mistral');
    }

    return {
      message: choice.message,
      model: response.model,
      usage: response.usage ? {
        promptTokens: response.usage.prompt_tokens,
        completionTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      } : undefined,
      finishReason: choice.finish_reason,
    };
  }

  async *chatStream(request: ChatRequest): AsyncGenerator<ChatStreamResponse> {
    const response = await this.makeStreamRequest('/chat/completions', {
      model: request.model || DEFAULT_MODEL,
      messages: request.messages,
      max_tokens: request.maxTokens,
      temperature: request.temperature,
      top_p: request.topP,
      frequency_penalty: request.frequencyPenalty,
      presence_penalty: request.presencePenalty,
      stop: Array.isArray(request.stop) ? request.stop : request.stop ? [request.stop] : undefined,
      stream: true,
    });

    if (!response.body) {
      throw new Error('No response body from Mistral streaming');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          
          if (trimmedLine === 'data: [DONE]') {
            return;
          }
          
          if (trimmedLine.startsWith('data: ')) {
            try {
              const data = JSON.parse(trimmedLine.slice(6));
              const choice = data.choices[0];
              
              if (choice?.delta) {
                yield {
                  delta: choice.delta,
                  model: data.model,
                  finishReason: choice.finish_reason,
                };
              }
            } catch (error) {
              // Skip malformed JSON
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
    // Format the request for structured data extraction
    const systemPrompt = `You are a helpful assistant that extracts structured data from text. 
Extract the requested information from the provided text and format it according to the ${request.format} format.
${request.format === 'json' ? 'Return the data as valid JSON only, without any additional text or formatting.' : ''}`;

    const requestBody: any = {
      model: request.model || DEFAULT_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: request.prompt }
      ],
      max_tokens: request.maxTokens,
      temperature: request.temperature || 0.1, // Lower temperature for structured data
    };

    // Add response format for JSON
    if (request.format === 'json') {
      requestBody.response_format = { type: 'json_object' };
    }

    const response = await this.makeRequest('/chat/completions', requestBody);

    const choice = response.choices[0];
    if (!choice?.message?.content) {
      throw new Error('No response from Mistral');
    }

    let data: any;
    if (request.format === 'json') {
      try {
        data = JSON.parse(choice.message.content);
      } catch (error) {
        throw new Error(`Failed to parse JSON response: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else {
      data = choice.message.content;
    }

    return {
      data,
      format: request.format,
      model: response.model,
      usage: response.usage ? {
        promptTokens: response.usage.prompt_tokens,
        completionTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      } : undefined,
    };
  }

  // Image generation not supported by Mistral API
  async getImage(): Promise<never> {
    throw new Error('Image generation is not supported by Mistral AI');
  }

  // Audio generation not supported by Mistral API
  async getAudio(): Promise<never> {
    throw new Error('Audio generation is not supported by Mistral AI');
  }

  // Audio transcription is supported by Mistral API
  async transcribeAudio(request: any): Promise<any> {
    if (!request.audio) {
      throw new Error('Audio data is required for transcription');
    }

    const formData = new FormData();
    
    // Handle different audio input types
    if (request.audio instanceof File) {
      formData.append('file', request.audio);
    } else if (request.audio instanceof Blob) {
      formData.append('file', request.audio, 'audio.wav');
    } else if (typeof request.audio === 'string') {
      // Assume it's a base64 encoded audio
      const audioBlob = this.base64ToBlob(request.audio, 'audio/wav');
      formData.append('file', audioBlob, 'audio.wav');
    } else {
      throw new Error('Unsupported audio format');
    }

    formData.append('model', request.model || 'mistral-large-latest');
    
    if (request.language) {
      formData.append('language', request.language);
    }
    if (request.temperature !== undefined) {
      formData.append('temperature', request.temperature.toString());
    }
    if (request.timestamp_granularities) {
      formData.append('timestamp_granularities[]', 'segment');
    }

    const response = await fetch(`${this.baseURL}/audio/transcriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mistral transcription error: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    
    return {
      text: result.text,
      language: result.language,
      segments: result.segments,
      usage: result.usage ? {
        promptTokens: result.usage.prompt_tokens || 0,
        completionTokens: result.usage.completion_tokens || 0,
        totalTokens: result.usage.total_tokens || 0,
      } : undefined,
    };
  }

  private async makeRequest(endpoint: string, body: any) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mistral API error: ${response.status} ${errorText}`);
    }

    return response.json();
  }

  private async makeStreamRequest(endpoint: string, body: any) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mistral API error: ${response.status} ${errorText}`);
    }

    return response;
  }

  private base64ToBlob(base64: string, mimeType: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }
}