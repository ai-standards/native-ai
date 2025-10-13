# OpenAI Adapter

This adapter provides integration with OpenAI's GPT models and services using the Native AI client interface.

## Supported Features

The OpenAI adapter supports all Native AI methods:

- ✅ `getText()` - Text completion using ChatGPT models
- ✅ `chat()` - Chat completions with conversation history
- ✅ `chatStream()` - Streaming chat completions for real-time responses
- ✅ `getData()` - Structured data extraction from text
- ✅ `getImage()` - Image generation using DALL-E models
- ✅ `getAudio()` - Text-to-speech using OpenAI's TTS models
- ✅ `transcribeAudio()` - Audio transcription using Whisper

## Setup

### 1. Get an OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (it starts with `sk-`)

### 2. Set Environment Variable

Set your API key as an environment variable:

```bash
export OPENAI_API_KEY="sk-your-api-key-here"
```

Or add it to your `.env` file:

```env
OPENAI_API_KEY=sk-your-api-key-here
```

### 3. Usage

```typescript
import { NativeAI } from '@native-ai/client';
import { OpenAIAdapter } from '@native-ai/client/adapters/openai';

// Using environment variable
const ai = new NativeAI(new OpenAIAdapter());

// Or passing API key directly
const ai = new NativeAI(new OpenAIAdapter('sk-your-api-key-here'));

// Text completion
const response = await ai.getText({
  prompt: "Explain quantum computing in simple terms",
  model: "gpt-4o-mini", // Optional, defaults to gpt-4o-mini
  maxTokens: 1000,
  temperature: 0.7
});

// Chat with conversation history
const chatResponse = await ai.chat({
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the capital of France?' }
  ],
  model: "gpt-4o"
});

// Streaming chat
for await (const chunk of ai.chatStream({
  messages: [
    { role: 'user', content: 'Tell me a story about a robot' }
  ]
})) {
  if (chunk.delta.content) {
    process.stdout.write(chunk.delta.content);
  }
}

// Structured data extraction
const dataResponse = await ai.getData({
  prompt: "Extract the name, age, and occupation from: John Smith is a 30-year-old software engineer.",
  format: "json",
  schema: {
    name: "string",
    age: "number", 
    occupation: "string"
  }
});

// Image generation
const imageResponse = await ai.getImage({
  prompt: "A futuristic city with flying cars",
  model: "dall-e-3",
  size: "1024x1024",
  quality: "hd",
  style: "vivid"
});

// Text-to-speech
const audioResponse = await ai.getAudio({
  input: "Hello, this is a test of OpenAI's text-to-speech.",
  model: "tts-1",
  voice: "alloy"
});

// Audio transcription
const transcription = await ai.transcribeAudio({
  file: audioFile, // File, Blob, or ArrayBuffer
  model: "whisper-1",
  language: "en"
});
```

## Available Models

### Chat Models

| Model | Description | Context Length | Cost |
|-------|-------------|----------------|------|
| `gpt-4o` | Most capable model | 128K tokens | Higher |
| `gpt-4o-mini` | Fast and cost-effective (Default) | 128K tokens | Lower |
| `gpt-4-turbo` | Previous generation flagship | 128K tokens | Medium |
| `gpt-3.5-turbo` | Legacy fast model | 16K tokens | Lowest |

### Image Models

| Model | Description | Sizes | Quality |
|-------|-------------|-------|---------|
| `dall-e-3` | Latest image generation (Default) | 1024×1024, 1792×1024, 1024×1792 | standard, hd |
| `dall-e-2` | Previous generation | 256×256, 512×512, 1024×1024 | standard |

### Audio Models

| Model | Type | Description |
|-------|------|-------------|
| `tts-1` | Text-to-Speech | Standard quality (Default) |
| `tts-1-hd` | Text-to-Speech | High definition |
| `whisper-1` | Transcription | Audio to text (Default) |

### Available Voices (TTS)

- `alloy` - Neutral (Default)
- `echo` - Male
- `fable` - British accent
- `onyx` - Deep male
- `nova` - Young female
- `shimmer` - Soft female

## Configuration Options

### Text & Chat Parameters

| Native AI Parameter | OpenAI Parameter | Description | Default |
|-------------------|------------------|-------------|---------|
| `model` | `model` | The GPT model to use | `gpt-4o-mini` |
| `maxTokens` | `max_tokens` | Maximum tokens in response | - |
| `temperature` | `temperature` | Sampling temperature (0.0 to 2.0) | 1.0 |
| `topP` | `top_p` | Nucleus sampling parameter | 1.0 |
| `frequencyPenalty` | `frequency_penalty` | Penalty for repeated tokens | 0.0 |
| `presencePenalty` | `presence_penalty` | Penalty for new topics | 0.0 |
| `stop` | `stop` | Stop sequences to end generation | - |

### Image Generation Parameters

| Parameter | Values | Description | Default |
|-----------|---------|-------------|---------|
| `size` | `256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792` | Image dimensions | `1024x1024` |
| `quality` | `standard`, `hd` | Image quality | `standard` |
| `style` | `vivid`, `natural` | Image style | `vivid` |
| `n` | 1-10 | Number of images | 1 |

### Audio Parameters

| Parameter | Values | Description | Default |
|-----------|---------|-------------|---------|
| `voice` | `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer` | TTS voice | `alloy` |
| `speed` | 0.25-4.0 | Speech speed | 1.0 |
| `responseFormat` | `mp3`, `opus`, `aac`, `flac`, `wav`, `pcm` | Audio format | `mp3` |

## Error Handling

The adapter provides clear error messages for common issues:

```typescript
try {
  const response = await ai.getText({ prompt: "Hello" });
} catch (error) {
  if (error.message.includes('API key')) {
    console.error('Please set OPENAI_API_KEY environment variable');
  } else if (error.message.includes('rate limit')) {
    console.error('Rate limit exceeded. Please wait and try again.');
  } else if (error.message.includes('insufficient_quota')) {
    console.error('Insufficient credits. Please add funds to your OpenAI account.');
  }
}
```

## Rate Limits

OpenAI has different rate limits based on your usage tier:

- **Free tier**: 3 requests/minute, $5/month limit
- **Tier 1**: 3,500 requests/minute, $100/month spent
- **Tier 2**: 5,000 requests/minute, $1,000/month spent
- **Higher tiers**: Increased limits with more usage

The adapter will throw errors if you exceed rate limits. Consider implementing retry logic with exponential backoff.

## Streaming Support

The adapter supports real-time streaming for chat completions:

```typescript
console.log('Assistant: ');
for await (const chunk of ai.chatStream({
  messages: [{ role: 'user', content: 'Write a poem about technology' }]
})) {
  if (chunk.delta.content) {
    process.stdout.write(chunk.delta.content);
  }
  if (chunk.finishReason === 'stop') {
    console.log('\n[Finished]');
    break;
  }
}
```

## Advanced Usage

### Function Calling

OpenAI models support function calling for structured interactions:

```typescript
// Note: Function calling requires direct access to OpenAI client
const openaiClient = adapter.raw();
const response = await openaiClient.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "What's the weather like?" }],
  functions: [
    {
      name: "get_weather",
      description: "Get current weather",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string" }
        }
      }
    }
  ]
});
```

### Custom Headers & Configuration

```typescript
const adapter = new OpenAIAdapter(apiKey);
const client = adapter.raw(); // Access underlying OpenAI client

// Configure custom headers
client.defaultHeaders = {
  'Custom-Header': 'value'
};

// Configure timeout
client.timeout = 30000; // 30 seconds
```

### Data Extraction with JSON Mode

For reliable JSON extraction, use the `getData` method:

```typescript
const response = await ai.getData({
  prompt: `
    Analyze this customer review and extract sentiment and topics:
    "The product arrived quickly but the quality was disappointing. 
     Customer service was helpful though."
  `,
  format: 'json',
  schema: {
    sentiment: 'positive | neutral | negative',
    topics: ['string'],
    confidence: 'number'
  },
  temperature: 0.1 // Low temperature for consistent results
});

console.log(response.data);
// Output: { sentiment: 'negative', topics: ['delivery', 'quality', 'service'], confidence: 0.85 }
```

## File Handling

### Audio Transcription

```typescript
// From file upload
const file = event.target.files[0]; // HTML file input
const transcription = await ai.transcribeAudio({
  file,
  model: "whisper-1",
  language: "en", // Optional: auto-detect if not specified
  responseFormat: "verbose_json" // Get detailed timing info
});

// From ArrayBuffer
const audioBuffer = await fetch('/audio.mp3').then(r => r.arrayBuffer());
const transcription = await ai.transcribeAudio({
  file: audioBuffer,
  model: "whisper-1"
});
```

### Image Generation Response Handling

```typescript
const imageResponse = await ai.getImage({
  prompt: "A sunset over mountains",
  responseFormat: "url" // or "b64_json"
});

for (const image of imageResponse.data) {
  if (image.url) {
    console.log('Image URL:', image.url);
  }
  if (image.b64_json) {
    // Convert to blob for display
    const blob = new Blob([Buffer.from(image.b64_json, 'base64')], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
  }
}
```

## Troubleshooting

### Common Issues

1. **Invalid API Key**: Ensure your key starts with `sk-` and is active
2. **Rate Limits**: Implement exponential backoff retry logic
3. **Token Limits**: Monitor `usage` in responses to track token consumption
4. **Model Access**: Some models require special access (GPT-4, DALL-E 3)

### Debug Mode

```typescript
// Enable debug logging (if using OpenAI SDK directly)
process.env.DEBUG = 'openai:*';

const adapter = new OpenAIAdapter(apiKey);
```

### Usage Monitoring

```typescript
const response = await ai.getText({ prompt: "Hello" });
console.log('Tokens used:', response.usage?.totalTokens);
console.log('Cost estimate:', response.usage?.totalTokens * 0.0001); // Rough estimate
```