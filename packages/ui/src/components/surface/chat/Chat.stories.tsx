import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';
import { Chat, ChatMessages, ChatMessage, ChatPrompt, ChatMessageData, ChatMessagesRef } from './Chat';

const meta = {
  title: 'Surface/Chat',
  component: Chat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A lightweight chat interface with message display and input prompt.',
      },
    },
  },
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => {
    const [messages, setMessages] = useState([
      { id: 1, text: 'Hello! How can I help you today?', variant: 'assistant' as const, timestamp: new Date(Date.now() - 60000) },
      { id: 2, text: 'Hi there! I have a question about your services.', variant: 'user' as const, timestamp: new Date(Date.now() - 30000) },
    ]);

    const handleSubmit = (message: string) => {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        variant: 'user' as const,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
    };

    return (
      <div className="w-96 h-96">
        <Chat>
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                variant={message.variant}
                timestamp={message.timestamp}
                avatar={
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                    {message.variant === 'user' ? 'U' : 'A'}
                  </div>
                }
              >
                {message.text}
              </ChatMessage>
            ))}
          </div>
          <ChatPrompt onSubmit={handleSubmit} />
        </Chat>
      </div>
    );
  },
};

export const MessageVariants: Story = {
  args: { children: null },
  render: () => (
    <div className="w-96">
      <Chat>
        <ChatMessage variant="user" timestamp={new Date()}>
          This is a user message
        </ChatMessage>
        <ChatMessage variant="assistant" timestamp={new Date()}>
          This is an assistant message
        </ChatMessage>
        <ChatMessage variant="system" timestamp={new Date()}>
          This is a system message
        </ChatMessage>
      </Chat>
    </div>
  ),
};

export const WithAvatars: Story = {
  args: { children: null },
  render: () => (
    <div className="w-96">
      <Chat>
        <ChatMessage
          variant="assistant"
          avatar={
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
              AI
            </div>
          }
        >
          Hello! I'm your AI assistant. How can I help you today?
        </ChatMessage>
        <ChatMessage
          variant="user"
          avatar={
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
              👤
            </div>
          }
        >
          Can you help me understand how this chat component works?
        </ChatMessage>
      </Chat>
    </div>
  ),
};

export const LoadingState: Story = {
  args: { children: null },
  render: () => (
    <div className="w-96">
      <Chat>
        <ChatMessage variant="user">
          What's the weather like today?
        </ChatMessage>
        <ChatPrompt loading placeholder="AI is thinking..." />
      </Chat>
    </div>
  ),
};

export const LongConversation: Story = {
  args: { children: null },
  render: () => {
    const chatRef = useRef<ChatMessagesRef>(null);
    
    // Generate many messages to demonstrate lazy rendering
    const messages: ChatMessageData[] = Array.from({ length: 1000 }, (_, index) => ({
      id: index,
      variant: index % 2 === 0 ? 'assistant' : 'user',
      text: `Message ${index + 1}: ${index % 2 === 0 
        ? 'This is an assistant message with some helpful information.' 
        : 'This is a user message asking a question or providing information.'}`,
      timestamp: new Date(Date.now() - (1000 - index) * 10000),
      avatar: (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
          {index % 2 === 0 ? 'A' : 'U'}
        </div>
      ),
    }));

    const handleScrollToMessage = () => {
      const randomId = Math.floor(Math.random() * 1000);
      chatRef.current?.scrollToMessage(randomId);
    };

    return (
      <div className="w-96 h-96 flex flex-col">
        {/* Control buttons */}
        <div className="p-2 bg-gray-50 border-b flex gap-1 text-xs">
          <button
            onClick={() => chatRef.current?.scrollToTop()}
            className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
          >
            Top
          </button>
          <button
            onClick={() => chatRef.current?.scrollToBottom()}
            className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
          >
            Bottom
          </button>
          <button
            onClick={handleScrollToMessage}
            className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
          >
            Random
          </button>
        </div>
        
        <Chat>
          <ChatMessages ref={chatRef} messages={messages} itemHeight={100} />
          <ChatPrompt placeholder="Type your response..." />
        </Chat>
      </div>
    );
  },
};

export const LazyRenderingDemo: Story = {
  args: { children: null },
  render: () => {
    const chatRef = useRef<ChatMessagesRef>(null);
    
    // Generate 5000 messages to really test performance
    const messages: ChatMessageData[] = Array.from({ length: 5000 }, (_, index) => ({
      id: index,
      variant: ['user', 'assistant', 'system'][index % 3] as any,
      text: `Performance test message #${index + 1}. Notice smooth skeleton messages during scrolling - no more white flashes!`,
      timestamp: new Date(Date.now() - (5000 - index) * 5000),
    }));

    const scrollToMiddle = () => {
      if (chatRef.current) {
        chatRef.current.scrollToMessage(2500); // Middle message
      }
    };

    return (
      <div className="w-96 h-96 flex flex-col">
        <div className="p-2 bg-yellow-50 border-b text-xs text-yellow-800 flex justify-between items-center">
          <div>
            <strong>Skeleton Scrolling:</strong> 5,000 messages with smooth skeleton transitions!
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => chatRef.current?.scrollToTop()}
              className="px-2 py-1 bg-blue-600 text-white rounded text-xs"
            >
              ↑ Top
            </button>
            <button
              onClick={scrollToMiddle}
              className="px-2 py-1 bg-purple-600 text-white rounded text-xs"
            >
              📦 Mid
            </button>
            <button
              onClick={() => chatRef.current?.scrollToBottom()}
              className="px-2 py-1 bg-blue-600 text-white rounded text-xs"
            >
              ↓ Bottom
            </button>
          </div>
        </div>
        
        <Chat>
          <ChatMessages ref={chatRef} messages={messages} itemHeight={80} />
          <ChatPrompt placeholder="Add another message..." />
        </Chat>
      </div>
    );
  },
};