// AI Engine types and interfaces
export interface AIModel {
  id: string;
  name: string;
  version: string;
  type: ModelType;
}

export interface AIConfig {
  modelId: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
}

export interface AIResponse {
  content: string;
  tokens: number;
  model: string;
  timestamp: Date;
}

export interface AIPrompt {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export type ModelType = 'text' | 'image' | 'multimodal' | 'embedding';

export interface AIEngine {
  generate(prompt: AIPrompt[], config?: AIConfig): Promise<AIResponse>;
  getModel(id: string): AIModel | null;
  listModels(): AIModel[];
}