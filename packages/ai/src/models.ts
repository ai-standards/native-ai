import { AIModel, ModelType } from './types';

export abstract class BaseModel implements AIModel {
  id: string;
  name: string;
  version: string;
  type: ModelType;

  constructor(id: string, name: string, version: string, type: ModelType) {
    this.id = id;
    this.name = name;
    this.version = version;
    this.type = type;
  }

  abstract process(input: string): Promise<string>;
}

export class TextModel extends BaseModel {
  constructor(id: string, name: string, version: string = '1.0.0') {
    super(id, name, version, 'text');
  }

  async process(input: string): Promise<string> {
    // Simulate text processing
    await new Promise(resolve => setTimeout(resolve, 100));
    return `Processed text: ${input}`;
  }
}

export class ImageModel extends BaseModel {
  constructor(id: string, name: string, version: string = '1.0.0') {
    super(id, name, version, 'image');
  }

  async process(input: string): Promise<string> {
    // Simulate image processing
    await new Promise(resolve => setTimeout(resolve, 200));
    return `Processed image: ${input}`;
  }
}

export class MultimodalModel extends BaseModel {
  constructor(id: string, name: string, version: string = '1.0.0') {
    super(id, name, version, 'multimodal');
  }

  async process(input: string): Promise<string> {
    // Simulate multimodal processing
    await new Promise(resolve => setTimeout(resolve, 300));
    return `Processed multimodal input: ${input}`;
  }
}

export class EmbeddingModel extends BaseModel {
  constructor(id: string, name: string, version: string = '1.0.0') {
    super(id, name, version, 'embedding');
  }

  async process(input: string): Promise<string> {
    // Simulate embedding generation
    await new Promise(resolve => setTimeout(resolve, 150));
    const embedding = Array.from({ length: 768 }, () => Math.random()).join(',');
    return `Embedding for "${input}": [${embedding.substring(0, 50)}...]`;
  }
}

// Model factory
export const createModel = (type: ModelType, id: string, name: string, version?: string): BaseModel => {
  switch (type) {
    case 'text':
      return new TextModel(id, name, version);
    case 'image':
      return new ImageModel(id, name, version);
    case 'multimodal':
      return new MultimodalModel(id, name, version);
    case 'embedding':
      return new EmbeddingModel(id, name, version);
    default:
      throw new Error(`Unknown model type: ${type}`);
  }
};