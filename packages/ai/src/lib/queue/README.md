# AI Queue

The AI Queue enables you to manage and throttle AI client requests with advanced queuing capabilities, retry logic, and rate limiting.

## Features

- **Concurrent Request Management**: Set maximum concurrent requests to prevent overwhelming AI services
- **Retry Logic**: Automatic retry with exponential backoff for failed requests
- **Token Limits**: Daily token usage limits to manage costs
- **Priority Queuing**: Prioritize important requests
- **Event System**: Observable events for monitoring queue activity
- **Request Scheduling**: Delay request execution
- **Statistics**: Comprehensive queue and usage statistics
- **Start/Stop/Reset Controls**: Full lifecycle management

## Installation

The queue is included with the `@nativeai/ai` package:

```bash
npm install @nativeai/ai
```

## Basic Usage

### Creating and Starting a Queue

```typescript
import { AiQueue, clientFactory } from '@nativeai/ai';

// Create an AI client
const client = clientFactory({
  provider: 'openai',
  apiKey: 'your-api-key'
});

// Create a queue with configuration
const queue = new AiQueue(client, {
  maxConcurrentRequests: 5,
  maxRetries: 3,
  maxTokensPerDay: 100000,
  retryDelay: 1000
});

// Start processing requests
queue.start();

// Add requests to the queue
const requestId1 = await queue.addRequest('getText', {
  prompt: 'Hello, how are you?',
  maxTokens: 100
});

const requestId2 = await queue.addRequest('chat', {
  messages: [
    { role: 'user', content: 'What is the weather like?' }
  ]
});

// Stop the queue when done
await queue.stop();
```

### Configuration Options

```typescript
interface QueueConfig {
  maxConcurrentRequests?: number; // Default: 5
  maxRetries?: number;           // Default: 3
  maxTokensPerDay?: number;      // Default: 100000
  retryDelay?: number;           // Default: 1000ms
  dbPath?: string;               // Optional SQLite database path
}
```

## Advanced Usage

### Priority Requests

```typescript
// Add high priority requests (higher number = higher priority)
const urgentRequestId = await queue.addRequest('getText', {
  prompt: 'Urgent request!'
}, { 
  priority: 10 
});

// Add low priority requests
const backgroundRequestId = await queue.addRequest('getText', {
  prompt: 'Background processing'
}, { 
  priority: 1 
});
```

### Delayed Requests

```typescript
// Schedule a request to run after 5 seconds
const delayedRequestId = await queue.addRequest('getText', {
  prompt: 'This will run later'
}, { 
  delay: 5000 
});
```

### Custom Retry Settings

```typescript
// Override default retry settings for specific requests
const requestId = await queue.addRequest('getText', {
  prompt: 'Retry this up to 5 times'
}, { 
  maxRetries: 5 
});
```

## Event Monitoring

### Listening to Queue Events

```typescript
// Listen to all queue events
queue.addEventListener((event) => {
  console.log('Queue event:', event.type, event);
});

// Example event types:
// - request_added
// - request_started  
// - request_completed
// - request_failed
// - request_retried
// - queue_started
// - queue_stopped
// - queue_reset
```

### Monitoring Specific Events

```typescript
let completedRequests = 0;
let failedRequests = 0;

queue.addEventListener((event) => {
  switch (event.type) {
    case 'request_completed':
      completedRequests++;
      console.log(`Request completed: ${event.requestId}`);
      console.log(`Tokens used: ${event.data?.tokensUsed}`);
      break;
      
    case 'request_failed':
      failedRequests++;
      console.log(`Request failed: ${event.requestId}`);
      console.log(`Error: ${event.data?.error}`);
      break;
      
    case 'request_retried':
      console.log(`Request retry ${event.data?.retryCount}: ${event.requestId}`);
      break;
  }
});
```

## Queue Management

### Getting Queue Status

```typescript
const status = queue.getStatus();
console.log('Queue running:', status.isRunning);
console.log('Active requests:', status.activeRequests);
console.log('Pending requests:', status.pendingRequests);
```

### Getting Statistics

```typescript
const stats = queue.getStats();
console.log('Total requests:', stats.totalRequests);
console.log('Completed requests:', stats.completedRequests);
console.log('Failed requests:', stats.failedRequests);
console.log('Pending requests:', stats.pendingRequests);
console.log('Active requests:', stats.activeRequests);
console.log('Total tokens used:', stats.totalTokensUsed);
console.log('Tokens used today:', stats.tokensUsedToday);
```

### Request Management

```typescript
// Get request details
const request = queue.getRequest(requestId);
console.log('Request method:', request?.method);
console.log('Request params:', request?.params);
console.log('Created at:', request?.createdAt);

// Cancel pending requests
const cancelled = queue.cancelRequest(requestId);
if (cancelled) {
  console.log('Request cancelled successfully');
}
```

### Queue Control

```typescript
// Reset the queue (clears all requests and data)
queue.reset();

// Stop the queue and wait for active requests to complete
await queue.stop();

// Clean up resources
await queue.dispose();
```

## Complete Example

```typescript
import { AiQueue, clientFactory } from '@nativeai/ai';

async function runQueueExample() {
  // Create client and queue
  const client = clientFactory({
    provider: 'openai',
    apiKey: process.env.OPENAI_API_KEY
  });

  const queue = new AiQueue(client, {
    maxConcurrentRequests: 3,
    maxRetries: 2,
    maxTokensPerDay: 10000
  });

  // Set up event monitoring
  queue.addEventListener((event) => {
    console.log(`[${event.timestamp.toISOString()}] ${event.type}:`, event.requestId);
  });

  // Start the queue
  console.log('Starting queue...');
  queue.start();

  try {
    // Add multiple requests with different priorities
    const requests = [
      queue.addRequest('getText', { prompt: 'High priority task' }, { priority: 10 }),
      queue.addRequest('getText', { prompt: 'Medium priority task' }, { priority: 5 }),
      queue.addRequest('getText', { prompt: 'Low priority task' }, { priority: 1 }),
      queue.addRequest('chat', { 
        messages: [{ role: 'user', content: 'Chat request' }] 
      }),
    ];

    // Wait for all requests to be added
    const requestIds = await Promise.all(requests);
    console.log('Added requests:', requestIds);

    // Monitor progress
    const checkProgress = () => {
      const stats = queue.getStats();
      console.log(`Progress: ${stats.completedRequests}/${stats.totalRequests} completed`);
      
      if (stats.completedRequests + stats.failedRequests < stats.totalRequests) {
        setTimeout(checkProgress, 1000);
      } else {
        console.log('All requests processed!');
        console.log('Final stats:', stats);
      }
    };

    checkProgress();

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Clean shutdown after requests complete
    setTimeout(async () => {
      await queue.stop();
      await queue.dispose();
      console.log('Queue stopped and disposed');
    }, 10000);
  }
}

runQueueExample().catch(console.error);
```

## Error Handling

The queue automatically handles various error scenarios:

- **Network errors**: Automatic retry with exponential backoff
- **Rate limiting**: Respects daily token limits
- **Invalid requests**: Proper error reporting through events
- **Service unavailability**: Retry logic with configurable delays

```typescript
queue.addEventListener((event) => {
  if (event.type === 'request_failed') {
    const error = event.data?.error;
    console.error(`Request ${event.requestId} failed:`, error);
    
    // Handle specific error types
    if (error.includes('rate limit')) {
      console.log('Rate limit hit, requests will be delayed');
    } else if (error.includes('token limit')) {
      console.log('Daily token limit reached');
    }
  }
});
```

## Best Practices

1. **Set appropriate concurrency limits**: Don't overwhelm AI services
2. **Monitor token usage**: Keep track of daily limits to manage costs
3. **Use priority queuing**: Prioritize user-facing requests over background tasks
4. **Handle events properly**: Monitor for failures and rate limits
5. **Graceful shutdown**: Always stop the queue before terminating your application

```typescript
// Graceful shutdown example
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await queue.stop();
  await queue.dispose();
  process.exit(0);
});
```

## API Reference

### AiQueue Class

#### Constructor
```typescript
new AiQueue(client: NativeAiClient, config?: QueueConfig)
```

#### Methods
- `start()`: Start queue processing
- `stop()`: Stop queue processing and wait for active requests
- `reset()`: Clear all requests and reset statistics
- `addRequest(method, params, options?)`: Add a request to the queue
- `getStatus()`: Get current queue status
- `getStats()`: Get queue statistics
- `getRequest(id)`: Get request details by ID
- `cancelRequest(id)`: Cancel a pending request
- `addEventListener(listener)`: Add event listener
- `removeEventListener(listener)`: Remove event listener
- `dispose()`: Clean up resources

### Events

All events include `type`, `timestamp`, and optionally `requestId` and `data` properties.

## Storage

By default, the queue uses in-memory storage. For persistence across application restarts, you can use SQLite storage:

```typescript
// Note: Requires better-sqlite3 to be installed separately
import { QueueDatabase } from '@nativeai/ai';

const queue = new AiQueue(client, {
  dbPath: './queue.db'  // Will use SQLite for persistence
});
```

## License

MIT