# Anthropic Adapter

This adapter provides integration with Anthropic's Claude API using the Native AI client interface.

## Supported Features

The Anthropic adapter supports the following Native AI methods:

- ✅ `getText()` - Text completion
- ✅ `chat()` - Chat completions
- ✅ `chatStream()` - Streaming chat completions
- ✅ `getData()` - Structured data extraction
- ❌ `getImage()` - Not supported (Anthropic doesn't provide image generation)
- ❌ `getAudio()` - Not supported (Anthropic doesn't provide audio generation)
- ❌ `transcribeAudio()` - Not supported (Anthropic doesn't provide transcription)

## Setup

### 1. Get an Anthropic API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (it starts with `sk-ant-`)

### 2. Set Environment Variable

Set your API key as an environment variable:

```bash
export ANTHROPIC_API_KEY="sk-ant-your-api-key-here"
```

Or add it to your `.env` file:

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

### 3. Usage

```typescript
import { NativeAI } from '@native-ai/client';
import { AnthropicAdapter } from '@native-ai/client/adapters/anthropic';

// Using environment variable
const ai = new NativeAI(new AnthropicAdapter());

// Or passing API key directly
const ai = new NativeAI(new AnthropicAdapter('sk-ant-your-api-key-here'));

// Text completion
const response = await ai.getText({
  prompt: "Explain quantum computing in simple terms",
  model: "claude-3-5-sonnet-20241022", // Optional, defaults to claude-3-5-sonnet-20241022
  maxTokens: 1000,
  temperature: 0.7
});

// Chat
const chatResponse = await ai.chat({
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the capital of France?' }
  ],
  model: "claude-3-5-sonnet-20241022"
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
```

## Available Models

The adapter supports all current Claude models:

- `claude-3-5-sonnet-20241022` (Default) - Most capable model
- `claude-3-5-haiku-20241022` - Fast and cost-effective
- `claude-3-opus-20240229` - Most powerful for complex tasks
- `claude-3-sonnet-20240229` - Balanced performance
- `claude-3-haiku-20240307` - Fastest response times

## Configuration Options

### Model Parameters

The adapter supports the following parameters that map to Anthropic's API:

| Native AI Parameter | Anthropic Parameter | Description |
|-------------------|------------------|-------------|
| `model` | `model` | The Claude model to use |
| `maxTokens` | `max_tokens` | Maximum tokens in response (default: 4096) |
| `temperature` | `temperature` | Sampling temperature (0.0 to 1.0) |
| `topP` | `top_p` | Nucleus sampling parameter |
| `stop` | `stop_sequences` | Stop sequences to end generation |

### System Messages

For chat requests, system messages are automatically extracted and passed to Anthropic's `system` parameter:

```typescript
await ai.chat({
  messages: [
    { role: 'system', content: 'You are an expert chef.' }, // Becomes system parameter
    { role: 'user', content: 'How do I make pasta?' }
  ]
});
```

## Error Handling

The adapter provides clear error messages for common issues:

```typescript
try {
  const response = await ai.getText({ prompt: "Hello" });
} catch (error) {
  if (error.message.includes('API key is required')) {
    console.error('Please set ANTHROPIC_API_KEY environment variable');
  } else if (error.message.includes('Anthropic API error')) {
    console.error('API request failed:', error.message);
  }
}
```

## Rate Limits

Anthropic has rate limits based on your plan:

- **Free tier**: 5 requests/minute, 25,000 tokens/day
- **Pro tier**: 50 requests/minute, 100,000 tokens/day  
- **Team tier**: Higher limits based on usage

The adapter will throw errors if you exceed rate limits. Consider implementing retry logic with exponential backoff for production applications.

## Streaming Support

The adapter supports streaming responses for chat completions:

```typescript
for await (const chunk of ai.chatStream({
  messages: [{ role: 'user', content: 'Count from 1 to 10' }]
})) {
  if (chunk.delta.content) {
    console.log('Received:', chunk.delta.content);
  }
  if (chunk.finishReason) {
    console.log('Finished:', chunk.finishReason);
    break;
  }
}
```

## Limitations

1. **No Image Generation**: Anthropic doesn't provide image generation capabilities
2. **No Audio Support**: No audio generation or transcription
3. **Context Length**: Different models have different context length limits
4. **System Message Position**: System messages must be the first message in the conversation

## Examples

### Basic Text Completion

```typescript
const response = await ai.getText({
  prompt: "Write a haiku about programming",
  temperature: 0.8,
  maxTokens: 100
});
console.log(response.text);
```

### Multi-turn Conversation

```typescript
const conversation = [
  { role: 'user', content: 'What is machine learning?' },
];

let response = await ai.chat({ messages: conversation });
conversation.push(response.message);

conversation.push({ role: 'user', content: 'Can you give me an example?' });
response = await ai.chat({ messages: conversation });
console.log(response.message.content);
```

### JSON Data Extraction

```typescript
const response = await ai.getData({
  prompt: `
    Extract structured information from this text:
    "Apple Inc. reported revenue of $394.3 billion in fiscal 2022, 
     an increase of 8% year-over-year. The company has 164,000 employees."
  `,
  format: 'json',
  schema: {
    company: 'string',
    revenue: 'string', 
    growth: 'string',
    employees: 'number'
  }
});

console.log(response.data);
// Output: { company: 'Apple Inc.', revenue: '$394.3 billion', growth: '8%', employees: 164000 }
```