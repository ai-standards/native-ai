# Chat Component

A lightweight chat interface with lazy rendering for optimal performance.

## Components

- **Chat** - Main container
- **ChatMessages** - Lazy-rendered message list (for large conversations)
- **ChatMessage** - Individual message display
- **ChatPrompt** - Input area for sending messages

## Usage

### Basic Chat
```tsx
import { Chat, ChatMessage, ChatPrompt } from '@/components/surface/chat';

<Chat>
  <ChatMessage variant="assistant">Hello! How can I help?</ChatMessage>
  <ChatMessage variant="user">I have a question</ChatMessage>
  <ChatPrompt onSubmit={(message) => console.log(message)} />
</Chat>
```

### Lazy Rendering (Recommended for >50 messages)
```tsx
import { Chat, ChatMessages, ChatPrompt, ChatMessagesRef } from '@/components/surface/chat';

const messages = [
  { id: 1, text: 'Hello!', variant: 'assistant' },
  { id: 2, text: 'Hi there!', variant: 'user' },
  // ... thousands of messages
];

const chatRef = useRef<ChatMessagesRef>(null);

<Chat>
  <ChatMessages 
    ref={chatRef}
    messages={messages} 
    itemHeight={80}
    overscan={5}
  />
  <ChatPrompt onSubmit={handleSubmit} />
</Chat>

// Scroll methods
chatRef.current?.scrollToTop();
chatRef.current?.scrollToBottom();
chatRef.current?.scrollToMessage(messageId);
```

## Features

- **Lazy Rendering** - Only visible messages rendered for performance
- **Scroll Methods** - scrollToTop(), scrollToBottom(), scrollToMessage(id)
- **No Bounce Effect** - Smooth scrolling without jiggly bouncing
- User, assistant, and system message variants
- Timestamps and avatars
- Loading states
- Enter to send, Shift+Enter for new line
- Responsive design
- Virtual scrolling for thousands of messages