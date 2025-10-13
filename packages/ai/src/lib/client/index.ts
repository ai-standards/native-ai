import { getKey } from "../api-key";
import { NativeAiAdapter } from "../types/adapter";
import { OpenAIAdapter } from "./adapters/openai";
import { AnthropicAdapter } from "./adapters/anthropic";
import { MistralAdapter } from "./adapters/mistral";
import { NvidiaAdapter } from "./adapters/nvidia";
import { AiClient } from "./ai-client";
import { NativeAiClient } from "../types/client";

export enum NativeAiProvider {
    openAi = 'openai',
    anthropic = 'anthropic',
    mistral = 'mistral',
    nvidia = 'nvidia'
}

export interface NativeAiClientOptions {
    apiKey?: string;
    provider?: NativeAiProvider;
}

export async function clientFactory(options: NativeAiClientOptions = {}): Promise<NativeAiClient> {
    const provider = options.provider || NativeAiProvider.openAi;
    const account = String(provider);
    let apiKey: string | undefined | null = options.apiKey;
    
    if (!apiKey) {
        apiKey = await getKey(account);
        if (!apiKey) {
            throw new Error(`No API key available for provider: ${account}`);
        }
    }

    const adapter = createAdapter(provider, apiKey);
    return new AiClient(adapter);
}

export function createAdapter(provider: NativeAiProvider, apiKey: string): NativeAiAdapter {
    switch (provider) {
        case NativeAiProvider.openAi:
            return new OpenAIAdapter(apiKey);
        case NativeAiProvider.anthropic:
            return new AnthropicAdapter(apiKey);
        case NativeAiProvider.mistral:
            return new MistralAdapter(apiKey);
        case NativeAiProvider.nvidia:
            return new NvidiaAdapter(apiKey);
        default:
            throw new Error(`Unsupported provider: ${provider}. Supported providers: openai, anthropic, mistral, nvidia`);
    }
}