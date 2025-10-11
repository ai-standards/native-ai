import OpenAI from 'openai';

export type NativeAiClientOptions = {
  baseUrl?: string;
  apiKey?: string;
}

export function getClient(options: NativeAiClientOptions) {
  return new OpenAI({
    baseURL: options.baseUrl,
    apiKey: options.apiKey
  });
}