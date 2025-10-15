---
title: @nativeai/ai
description: AI engine and models for native AI
package: ai
version: 0.9.0
---

# Native AI Client

A unified TypeScript/JavaScript client library for AI services with support for multiple providers. Currently supports OpenAI, Anthropic, Mistral, and NVIDIA with a clean, extensible adapter pattern.

## Installation

```bash
npm install @ai-standards/ai
```

## Supported Providers

The library supports multiple AI providers through a unified interface:

| Provider | Models | Features |
|----------|--------|----------|
| **OpenAI** | GPT-4o, GPT-4, GPT-3.5, DALL-E, Whisper | Chat, Text, Images, Audio, Transcription |
| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Opus/Haiku | Chat, Text generation |
| **Mistral** | Mistral Large, Codestral, Mixtral | Chat, Text, Code generation |
| **NVIDIA** | 100+ models (Llama, Phi, Qwen, etc.) | Chat, Text, Code generation |

### Provider Examples

```typescript
import { clientFactory, NativeAiProvider } from '@ai-standards/ai';
```

**OpenAI:**
```typescript
const client = await clientFactory({
  provider: NativeAiProvider.openAi,
  apiKey: 'your-openai-key'
});
```

**Anthropic:**
```typescript
const client = await clientFactory({
  provider: NativeAiProvider.anthropic,
  apiKey: 'your-anthropic-key'
});
```

**Mistral:**
```typescript
const client = await clientFactory({
  provider: NativeAiProvider.mistral,
  apiKey: 'your-mistral-key'
});
```

**NVIDIA:**
```typescript
const client = await clientFactory({
  provider: NativeAiProvider.nvidia,
  apiKey: 'your-nvidia-key'
});

// Use specific NVIDIA models
const response = await client.chat({
  model: 'nvidia/llama-3.1-nemotron-70b-instruct', // Default
  // or: 'meta/llama-3.1-405b-instruct'
  // or: 'microsoft/phi-4-mini-instruct'
  // or: 'deepseek-ai/deepseek-r1'
  messages: [{ role: 'user', content: 'Hello!' }]
});
```

### Environment Variables

Each provider supports environment variables for API keys:

```bash
export OPENAI_API_KEY="your-openai-key"
export ANTHROPIC_API_KEY="your-anthropic-key" 
export MISTRAL_API_KEY="your-mistral-key"
export NVIDIA_API_KEY="your-nvidia-key"
```

## Quick Start

### 1. Store your API key securely

```typescript
import { setKey } from '@ai-standards/ai';

// Store your API key (one-time setup)
await setKey('your-openai-api-key', 'openai');
// or: await setKey('your-nvidia-key', 'nvidia');
// or: await setKey('your-anthropic-key', 'anthropic');
// or: await setKey('your-mistral-key', 'mistral');
```

### 2. Create and use the client

```typescript
import { clientFactory, NativeAiProvider } from '@ai-standards/ai';

// Client automatically uses your stored API key (defaults to OpenAI)
const client = await clientFactory();

// Or specify a provider
const nvidiaClient = await clientFactory({
  provider: NativeAiProvider.nvidia
});

// Start using AI features immediately
const response = await client.getText({
  prompt: "Write a haiku about programming"
});
console.log(response.text);
```

### Alternative Methods

**Manual API Key (not recommended for production):**
```typescript
const client = await clientFactory({
  provider: NativeAiProvider.nvidia,
  apiKey: 'your-nvidia-api-key'
});
```

**Environment Variable:**
```bash
export NVIDIA_API_KEY="your-nvidia-api-key"
# or: export OPENAI_API_KEY="your-openai-api-key"
```
```typescript
const client = await clientFactory({
  provider: NativeAiProvider.nvidia
}); // Uses environment variable
```

## Secure API Key Storage

The client uses your system's secure credential manager (Keychain on macOS, Credential Vault on Windows, Secret Service on Linux) to safely store API keys.

### Basic Key Management

```typescript
import { setKey, getKey, destroyKey } from '@ai-standards/ai';

// Store your API key (one-time setup)
await setKey('your-openai-api-key', 'openai');

// Check if key exists
const key = await getKey('openai');
console.log(key ? 'Key stored' : 'No key found');

// Remove stored key
await destroyKey('openai');
```

### Why Use Secure Storage?

✅ **Secure** - Keys stored in system credential manager  
✅ **Convenient** - No need to manage API keys in code  
✅ **Safe** - No risk of accidentally committing keys to version control  
✅ **Cross-platform** - Works on macOS, Windows, and Linux

## Client Methods

### 1. Text Generation (`getText`)

Generate text completions from a prompt.

```typescript
const response = await client.getText({
  prompt: "Write a haiku about programming",
  model: "gpt-4o-mini", // optional, defaults to gpt-4o-mini
  maxTokens: 100,
  temperature: 0.7,
  topP: 1.0,
  frequencyPenalty: 0,
  presencePenalty: 0,
  stop: ["END"]
});

console.log(response.text);
console.log(`Model used: ${response.model}`);
console.log(`Tokens used: ${response.usage?.totalTokens}`);
```

**Response:**
```typescript
{
  text: "Code flows like water\nBugs dance in morning sunlight\nCoffee solves all things",
  model: "gpt-4o-mini",
  usage: {
    promptTokens: 8,
    completionTokens: 20,
    totalTokens: 28
  },
  finishReason: "stop"
}
```

### 2. Chat Conversations (`chat`)

Have conversations with the AI using a message-based format.

```typescript
const response = await client.chat({
  messages: [
    { role: "system", content: "You are a helpful coding assistant." },
    { role: "user", content: "How do I create a REST API in Node.js?" },
    { role: "assistant", content: "To create a REST API in Node.js, you can use Express..." },
    { role: "user", content: "What about authentication?" }
  ],
  model: "gpt-4o-mini",
  maxTokens: 500,
  temperature: 0.7
});

console.log(response.message.content);
```

**Response:**
```typescript
{
  message: {
    role: "assistant",
    content: "For authentication in your REST API, you have several options:\n\n1. **JWT (JSON Web Tokens)**..."
  },
  model: "gpt-4o-mini",
  usage: {
    promptTokens: 45,
    completionTokens: 150,
    totalTokens: 195
  },
  finishReason: "stop"
}
```

### 3. Streaming Chat (`chatStream`)

Get real-time streaming responses for chat conversations.

```typescript
const stream = client.chatStream({
  messages: [
    { role: "user", content: "Explain quantum computing in simple terms" }
  ],
  model: "gpt-4o-mini",
  maxTokens: 200
});

console.log("Streaming response:");
for await (const chunk of stream) {
  if (chunk.delta.content) {
    process.stdout.write(chunk.delta.content);
  }
  
  if (chunk.finishReason) {
    console.log(`\nStream finished: ${chunk.finishReason}`);
  }
}
```

**Stream chunks:**
```typescript
{ delta: { content: "Quantum" }, model: "gpt-4o-mini" }
{ delta: { content: " computing" }, model: "gpt-4o-mini" }
{ delta: { content: " is like" }, model: "gpt-4o-mini" }
// ... more chunks
{ delta: { content: "" }, model: "gpt-4o-mini", finishReason: "stop" }
```

#### NVIDIA Model Examples

NVIDIA provides access to 100+ models through their API. Here are some popular choices:

```typescript
// Using NVIDIA's flagship model
const client = await clientFactory({
  provider: NativeAiProvider.nvidia
});

const response = await client.chat({
  model: 'nvidia/llama-3.1-nemotron-70b-instruct', // Default NVIDIA model
  messages: [{ role: 'user', content: 'Explain machine learning' }]
});

// Using Meta's Llama models via NVIDIA
const llamaResponse = await client.chat({
  model: 'meta/llama-3.1-405b-instruct', // Largest Llama model
  messages: [{ role: 'user', content: 'Write a Python function' }]
});

// Using Microsoft's Phi models for efficient inference
const phiResponse = await client.chat({
  model: 'microsoft/phi-4-mini-instruct', // Fast and efficient
  messages: [{ role: 'user', content: 'Summarize this article' }]
});

// Using DeepSeek for reasoning tasks
const reasoningResponse = await client.chat({
  model: 'deepseek-ai/deepseek-r1', // Advanced reasoning model
  messages: [{ role: 'user', content: 'Solve this logic puzzle' }]
});

// Using Qwen for thinking/chain-of-thought
const thinkingResponse = await client.chat({
  model: 'qwen/qwen3-next-80b-a3b-thinking', // Shows reasoning process
  messages: [{ role: 'user', content: 'Analyze this complex problem' }]
});
```

### 4. Structured Data Extraction (`getData`)

Extract structured data in various formats (JSON, CSV, XML, etc.).

```typescript
const response = await client.getData({
  prompt: `Extract the following information from this text:
  "John Smith, age 30, works as a Software Engineer at TechCorp, earns $120,000 annually"
  
  Extract: name, age, job_title, company, salary`,
  format: "json",
  schema: {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "number" },
      job_title: { type: "string" },
      company: { type: "string" },
      salary: { type: "number" }
    }
  },
  model: "gpt-4o-mini"
});

console.log(response.data);
```

**Response:**
```typescript
{
  data: {
    name: "John Smith",
    age: 30,
    job_title: "Software Engineer",
    company: "TechCorp",
    salary: 120000
  },
  format: "json",
  model: "gpt-4o-mini",
  usage: {
    promptTokens: 35,
    completionTokens: 25,
    totalTokens: 60
  }
}
```

**CSV Format Example:**
```typescript
const csvResponse = await client.getData({
  prompt: "Convert this data to CSV format: John (30), Jane (25), Bob (35)",
  format: "csv"
});

console.log(csvResponse.data);
// Output: "name,age\nJohn,30\nJane,25\nBob,35"
```

### 5. Image Generation (`getImage`)

Generate images from text descriptions.

```typescript
const response = await client.getImage({
  prompt: "A serene mountain landscape at sunset with a crystal clear lake reflection",
  model: "dall-e-3",
  n: 1,
  size: "1024x1024",
  quality: "hd",
  style: "vivid",
  responseFormat: "url"
});

console.log(`Generated image: ${response.data[0].url}`);
console.log(`Revised prompt: ${response.data[0].revised_prompt}`);
```

**Response:**
```typescript
{
  data: [
    {
      url: "https://oaidalleapiprodscus.blob.core.windows.net/...",
      revised_prompt: "A tranquil mountain landscape during sunset..."
    }
  ],
  created: 1697123456
}
```

**Generate multiple images:**
```typescript
const multipleImages = await client.getImage({
  prompt: "A cute robot assistant",
  model: "dall-e-2", // DALL-E 2 supports multiple images
  n: 3,
  size: "512x512"
});

multipleImages.data.forEach((image, index) => {
  console.log(`Image ${index + 1}: ${image.url}`);
});
```

### 6. Text-to-Speech (`getAudio`)

Convert text to speech audio.

```typescript
const response = await client.getAudio({
  input: "Hello! This is a test of the text-to-speech functionality.",
  model: "tts-1",
  voice: "alloy", // alloy, echo, fable, onyx, nova, shimmer
  responseFormat: "mp3",
  speed: 1.0
});

// Save the audio to a file
import { writeFileSync } from 'fs';
const buffer = Buffer.from(response.audio);
writeFileSync('output.mp3', buffer);

console.log(`Audio generated: ${response.contentType}`);
```

**Different voices and formats:**
```typescript
// High-quality voice with different format
const highQualityAudio = await client.getAudio({
  input: "This is a high-quality audio sample.",
  model: "tts-1-hd",
  voice: "nova",
  responseFormat: "wav",
  speed: 0.8 // Slower speech
});

// Save as WAV
const wavBuffer = Buffer.from(highQualityAudio.audio);
writeFileSync('output.wav', wavBuffer);
```

### 7. Speech-to-Text (`transcribeAudio`)

Transcribe audio files to text.

```typescript
import { readFileSync } from 'fs';

// Load audio file
const audioFile = new File([readFileSync('audio.mp3')], 'audio.mp3', { 
  type: 'audio/mp3' 
});

const response = await client.transcribeAudio({
  file: audioFile,
  model: "whisper-1",
  language: "en", // optional
  prompt: "This is a podcast about technology", // optional context
  responseFormat: "json",
  temperature: 0
});

console.log(`Transcription: ${response.text}`);
```

**Verbose format with timestamps:**
```typescript
const verboseResponse = await client.transcribeAudio({
  file: audioFile,
  model: "whisper-1",
  responseFormat: "verbose_json"
});

console.log(`Full transcription: ${verboseResponse.text}`);
console.log(`Language detected: ${verboseResponse.language}`);
console.log(`Duration: ${verboseResponse.duration} seconds`);

// Print segments with timestamps
verboseResponse.segments?.forEach(segment => {
  console.log(`[${segment.start}s - ${segment.end}s]: ${segment.text}`);
});
```

**Different response formats:**
```typescript
// Get SRT subtitle format
const srtResponse = await client.transcribeAudio({
  file: audioFile,
  responseFormat: "srt"
});
console.log(srtResponse.text); // SRT formatted subtitles

// Get VTT format
const vttResponse = await client.transcribeAudio({
  file: audioFile,
  responseFormat: "vtt"
});
console.log(vttResponse.text); // WebVTT formatted subtitles
```

## Advanced Usage

### Error Handling

```typescript
import { clientFactory, NativeAiProvider } from '@ai-standards/ai';

try {
  const client = await clientFactory({
    provider: NativeAiProvider.openAi,
    apiKey: 'invalid-key'
  });
  
  const response = await client.getText({
    prompt: "Hello world"
  });
} catch (error) {
  console.error('Error:', error.message);
}
```

### Custom Configuration

```typescript
// Use specific model for all requests
const client = await clientFactory({
  provider: NativeAiProvider.openAi,
  apiKey: process.env.OPENAI_API_KEY
});

// All requests will use gpt-4 unless overridden
const response = await client.getText({
  prompt: "Explain machine learning",
  model: "gpt-4", // Override default
  temperature: 0.3,
  maxTokens: 1000
});
```

### Working with Files

```typescript
// For browser environments
const fileInput = document.getElementById('audioFile') as HTMLInputElement;
const file = fileInput.files?.[0];

if (file) {
  const transcription = await client.transcribeAudio({
    file: file,
    model: "whisper-1"
  });
  console.log(transcription.text);
}

// For Node.js environments
import { createReadStream } from 'fs';

const audioBuffer = readFileSync('audio.mp3');
const audioFile = new File([audioBuffer], 'audio.mp3', { type: 'audio/mp3' });

const transcription = await client.transcribeAudio({
  file: audioFile,
  model: "whisper-1"
});
```

## API Reference

### Core Functions

```typescript
// Client factory
function clientFactory(options?: NativeAiClientOptions): Promise<NativeAiClient>

// Key management
function setKey(key: string, account?: string): Promise<void>
function getKey(account?: string): Promise<string | null>
function destroyKey(account?: string): Promise<boolean>
```

### Key Types

```typescript
// Client options (optional - uses stored keys by default)
interface NativeAiClientOptions {
  apiKey?: string;      // Manual API key (alternative method)
  provider?: string;    // Provider name (defaults to 'openai')
}

// Message format for chat
interface BaseMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}
```

### Supported Models

**OpenAI Models:**
- Text/Chat: `gpt-4o-mini` (default), `gpt-4`, `gpt-3.5-turbo`, `gpt-4-turbo`
- Images: `dall-e-3` (default), `dall-e-2`
- Audio TTS: `tts-1` (default), `tts-1-hd`
- Audio STT: `whisper-1` (default)

### Supported Audio Formats

**Input (Speech-to-Text):** mp3, mp4, mpeg, mpga, m4a, wav, webm

**Output (Text-to-Speech):** mp3, opus, aac, flac, wav, pcm

### Supported Voices

**TTS Voices:** alloy, echo, fable, onyx, nova, shimmer

## Error Handling

The client provides detailed error information:

```typescript
try {
  const response = await client.getText({
    prompt: "Test",
    maxTokens: -1 // Invalid parameter
  });
} catch (error) {
  console.error('API Error:', error.message);
  console.error('Error code:', error.code);
  console.error('Error type:', error.type);
}
```

## Contributing

This library uses an adapter pattern to support multiple AI providers. To add a new provider:

1. Implement the `NativeAiAdapter` interface
2. Add the provider to `NativeAiProvider` enum
3. Update the `createAdapter` factory function
4. Add comprehensive tests

## License

MIT License - see LICENSE file for details.

---
*This documentation is automatically generated from the ai package README. [View source](https://github.com/ai-standards/native-ai/tree/main/packages/ai)*
