import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { Chat, ChatMessages, ChatMessage, ChatPrompt, ChatMessagesRef } from './Chat';

describe('Chat', () => {
  it('renders chat container', () => {
    render(
      <Chat data-testid="chat">
        <div>Chat content</div>
      </Chat>
    );
    
    expect(screen.getByTestId('chat')).toBeInTheDocument();
  });
});

describe('ChatMessages', () => {
  const mockMessages = [
    { id: 1, text: 'Message 1', variant: 'user' as const },
    { id: 2, text: 'Message 2', variant: 'assistant' as const },
    { id: 3, text: 'Message 3', variant: 'user' as const },
  ];

  it('renders messages', () => {
    render(
      <ChatMessages messages={mockMessages} data-testid="chat-messages" />
    );
    
    expect(screen.getByTestId('chat-messages')).toBeInTheDocument();
    expect(screen.getByText('Message 1')).toBeInTheDocument();
    expect(screen.getByText('Message 2')).toBeInTheDocument();
    expect(screen.getByText('Message 3')).toBeInTheDocument();
  });

  it('handles empty messages array', () => {
    render(
      <ChatMessages messages={[]} data-testid="chat-messages" />
    );
    
    expect(screen.getByTestId('chat-messages')).toBeInTheDocument();
  });

  it('exposes scroll methods via ref', () => {
    const ref = React.createRef<ChatMessagesRef>();
    
    render(<ChatMessages ref={ref} messages={mockMessages} />);
    
    // Test that scroll methods exist
    expect(ref.current?.scrollToTop).toBeDefined();
    expect(ref.current?.scrollToBottom).toBeDefined();
    expect(ref.current?.scrollToMessage).toBeDefined();
  });
});

describe('ChatMessage', () => {
  it('renders user message', () => {
    render(
      <ChatMessage variant="user" data-testid="message">
        Hello world
      </ChatMessage>
    );
    
    expect(screen.getByTestId('message')).toBeInTheDocument();
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders assistant message', () => {
    render(
      <ChatMessage variant="assistant" data-testid="message">
        Hi there!
      </ChatMessage>
    );
    
    expect(screen.getByTestId('message')).toBeInTheDocument();
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });

  it('displays timestamp when provided', () => {
    const timestamp = new Date('2023-10-12T10:30:00');
    render(
      <ChatMessage timestamp={timestamp}>
        Message with time
      </ChatMessage>
    );
    
    expect(screen.getByText('10:30 AM')).toBeInTheDocument();
  });
});

describe('ChatPrompt', () => {
  it('renders prompt input', () => {
    render(<ChatPrompt data-testid="prompt" />);
    
    expect(screen.getByTestId('prompt')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type a message...')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const onSubmit = vi.fn();
    render(<ChatPrompt onSubmit={onSubmit} />);
    
    const input = screen.getByPlaceholderText('Type a message...');
    const button = screen.getByRole('button', { name: 'Send' });
    
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(button);
    
    expect(onSubmit).toHaveBeenCalledWith('Test message');
  });

  it('clears input after submit', () => {
    const onSubmit = vi.fn();
    render(<ChatPrompt onSubmit={onSubmit} />);
    
    const input = screen.getByPlaceholderText('Type a message...') as HTMLTextAreaElement;
    const button = screen.getByRole('button', { name: 'Send' });
    
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });

  it('submits on Enter key', () => {
    const onSubmit = vi.fn();
    render(<ChatPrompt onSubmit={onSubmit} />);
    
    const input = screen.getByPlaceholderText('Type a message...');
    
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(onSubmit).toHaveBeenCalledWith('Test message');
  });

  it('does not submit on Shift+Enter', () => {
    const onSubmit = vi.fn();
    render(<ChatPrompt onSubmit={onSubmit} />);
    
    const input = screen.getByPlaceholderText('Type a message...');
    
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.keyDown(input, { key: 'Enter', shiftKey: true });
    
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('disables input when loading', () => {
    render(<ChatPrompt loading />);
    
    const input = screen.getByPlaceholderText('Type a message...');
    const button = screen.getByRole('button');
    
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
    expect(screen.getByText('...')).toBeInTheDocument();
  });
});