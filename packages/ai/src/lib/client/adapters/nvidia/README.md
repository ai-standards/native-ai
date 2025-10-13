# NVIDIA Adapter

This adapter provides integration with NVIDIA's NIM (NVIDIA Inference Microservices) API, which offers access to a comprehensive catalog of AI models through OpenAI-compatible endpoints.

## Features

- **Chat Completions**: Support for text generation and conversational AI
- **Streaming**: Real-time token streaming for chat responses
- **Data Extraction**: Structured data extraction in various formats (JSON, CSV, XML, etc.)
- **100+ Models**: Access to models from NVIDIA, Meta, Microsoft, Google, Mistral, and more

## Setup

1. Get your API key from [NVIDIA Developer](https://developer.nvidia.com/)
2. Set your API key as an environment variable:
   ```bash
   export NVIDIA_API_KEY="your-api-key-here"
   ```

## Usage

### Recommended: Using clientFactory

The `clientFactory` provides a unified interface with secure key storage, consistent error handling, and cross-provider compatibility:

```typescript
import { clientFactory, NativeAiProvider } from '@native-ai/ai';

const client = await clientFactory({
  provider: NativeAiProvider.nvidia,
  apiKey: 'your-nvidia-api-key'
});

// Chat with default model (nvidia/llama-3.1-nemotron-70b-instruct)
const response = await client.chat({
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ]
});

// Use a specific model
const response = await client.chat({
  model: 'meta/llama-3.1-405b-instruct',
  messages: [
    { role: 'user', content: 'Explain quantum computing' }
  ]
});
```

### Direct Adapter Usage (Opt-in)

For cases where you need direct control, are building custom abstractions, or prefer minimal dependencies:

```typescript
import { NvidiaAdapter } from '@native-ai/ai/adapters/nvidia';

const nvidia = new NvidiaAdapter('your-api-key');

// Same methods available as with clientFactory
const response = await nvidia.chat({
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ]
});

// Access the underlying OpenAI client if needed
const rawClient = nvidia.raw();
```

## Supported Models

The adapter supports 100+ models across multiple categories:

### Featured Models
- `nvidia/llama-3.1-nemotron-70b-instruct` (default)
- `meta/llama-3.1-405b-instruct`
- `microsoft/phi-4-mini-instruct`
- `deepseek-ai/deepseek-r1`
- `qwen/qwen3-next-80b-a3b-thinking`
- `mistralai/mistral-2-large-instruct`

### Model Categories
- **LLM APIs**: Chat completion models
- **Code Models**: Specialized for code generation
- **Multimodal**: Vision and text understanding
- **Retrieval**: Embedding and reranking models
- **Visual Models**: Image generation and analysis
- **Healthcare**: Medical and scientific models

## API Compatibility

This adapter uses NVIDIA's OpenAI-compatible endpoint at `https://integrate.api.nvidia.com/v1`, providing seamless integration with the existing OpenAI client while accessing NVIDIA's extensive model catalog.

## Limitations

- **Image Generation**: Not supported through LLM APIs (use Visual Models APIs separately)
- **Audio Generation/Transcription**: Not supported through LLM APIs
- **Function Calling**: Support depends on the specific model used

## Environment Variables

- `NVIDIA_API_KEY`: Your NVIDIA API key (required)

## Links

- [NVIDIA NIM Documentation](https://docs.api.nvidia.com/nim/)
- [Model Catalog](https://docs.api.nvidia.com/nim/reference/llm-apis)
- [Developer Portal](https://developer.nvidia.com/)