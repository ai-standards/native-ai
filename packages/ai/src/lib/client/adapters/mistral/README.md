# Mistral AI Adapter

This adapter provides integration with Mistral AI's API for the Native AI client library.

## Features

- **Text Generation**: Complete text generation using Mistral models
- **Chat Conversations**: Multi-turn conversations with context
- **Streaming Chat**: Real-time streaming responses
- **Data Extraction**: Structured data extraction with JSON support
- **Audio Transcription**: Speech-to-text functionality

## Supported Models

- `mistral-small-latest` (default)
- `mistral-large-latest` 
- `mistral-medium-latest`
- `ministral-3b-latest`
- `ministral-8b-latest`
- `open-mistral-7b`
- `open-mistral-nemo`
- `pixtral-12b-latest`
- `codestral-latest`

## Usage

### Recommended: Using clientFactory

The `clientFactory` provides a unified interface with secure key storage, consistent error handling, and cross-provider compatibility:

```typescript
import { clientFactory, NativeAiProvider } from '@native-ai/ai';

const client = await clientFactory({
  provider: NativeAiProvider.mistral,
  apiKey: 'your-mistral-api-key' // Optional if using env variable
});

// Text generation
const response = await client.getText({
  prompt: 'Explain quantum computing in simple terms',
  maxTokens: 100,
  temperature: 0.7
});

console.log(response.text);

// Chat conversations
const chatResponse = await client.chat({
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the capital of France?' }
  ],
  temperature: 0.8
});

console.log(chatResponse.message.content);

// Streaming chat
for await (const chunk of client.chatStream({
  messages: [
    { role: 'user', content: 'Tell me a story about space exploration' }
  ]
})) {
  if (chunk.delta.content) {
    process.stdout.write(chunk.delta.content);
  }
}

// Structured data extraction
const dataResponse = await client.getData({
  prompt: 'Extract contact information: John Doe, email: john@example.com, phone: 555-1234',
  format: 'json'
});

console.log(dataResponse.data);
```

### Direct Adapter Usage (Opt-in)

For cases where you need direct control, are building custom abstractions, or prefer minimal dependencies:

```typescript
import { MistralAdapter } from '@native-ai/ai/adapters/mistral';

const mistral = new MistralAdapter('your-api-key');

// Same methods available as with clientFactory
const response = await mistral.getText({
  prompt: 'Explain quantum computing in simple terms',
  maxTokens: 100,
  temperature: 0.7
});

console.log(response.text);

// Access the underlying Mistral client if needed
const rawClient = mistral.raw();
```

## Configuration

### Environment Variables

Set your Mistral API key as an environment variable:

```bash
export MISTRAL_API_KEY="your-api-key-here"
```

### Constructor Options

```typescript
const adapter = new MistralAdapter(apiKey?: string);
```

If no API key is provided, the adapter will look for the `MISTRAL_API_KEY` environment variable.

## API Reference

### Methods

#### `getText(request: GetTextRequest): Promise<GetTextResponse>`

Generate text from a prompt.

#### `chat(request: ChatRequest): Promise<ChatResponse>`

Conduct a chat conversation.

#### `chatStream(request: ChatRequest): AsyncGenerator<ChatStreamResponse>`

Stream chat responses in real-time.

#### `getData(request: GetDataRequest): Promise<GetDataResponse>`

Extract structured data from text.

#### `transcribeAudio(request: TranscribeAudioRequest): Promise<TranscribeAudioResponse>`

Transcribe audio to text.

### Limitations

- **Image Generation**: Not supported by Mistral AI
- **Audio Generation**: Not supported by Mistral AI

## Error Handling

The adapter throws descriptive errors for various scenarios:

```typescript
try {
  const response = await adapter.getText({ prompt: 'Hello' });
} catch (error) {
  console.error('Mistral API error:', error.message);
}
```

Common error scenarios:
- Missing API key
- Invalid API key
- Rate limiting
- Model not available
- Network issues

## Authentication

Obtain an API key from [Mistral AI Console](https://console.mistral.ai/). The API key should have appropriate permissions for the features you intend to use.

## Rate Limits

Mistral AI has rate limits that vary by model and subscription plan. The adapter will throw appropriate errors when limits are exceeded.