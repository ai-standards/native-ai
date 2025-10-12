import React, { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/utils/cn';

// Chat Message Data Interface
export interface ChatMessageData {
  id: string | number;
  variant?: 'user' | 'assistant' | 'system';
  text: React.ReactNode;
  timestamp?: Date;
  avatar?: React.ReactNode;
}

// Skeleton Message Component for smooth scrolling
const SkeletonMessage: React.FC<{ 
  variant?: 'user' | 'assistant' | 'system';
  index?: number;
}> = ({ 
  variant = 'assistant',
  index = 0
}) => {
  const isUser = variant === 'user';
  
  // Use index for consistent but varied widths
  const widths = ['w-32', 'w-40', 'w-48', 'w-56', 'w-64'];
  const primaryWidth = widths[index % widths.length];
  const secondaryWidth = widths[(index + 2) % widths.length];
  
  return (
    <div className={cn('flex gap-3 p-4 animate-pulse', isUser ? 'flex-row-reverse' : 'flex-row')}>
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
      
      <div className={cn('flex flex-col', isUser ? 'items-end' : 'items-start')}>
        <div
          className={cn(
            'px-4 py-2 rounded-lg',
            {
              'bg-blue-200': variant === 'user',
              'bg-gray-200': variant === 'assistant',
              'bg-yellow-100': variant === 'system'
            }
          )}
        >
          <div className="space-y-2">
            <div className={cn('h-4 bg-gray-400 rounded', primaryWidth)}></div>
            {index % 3 !== 0 && (
              <div className={cn('h-4 bg-gray-400 rounded', secondaryWidth)}></div>
            )}
          </div>
        </div>
        
        <div className="h-3 w-12 bg-gray-200 rounded mt-1"></div>
      </div>
    </div>
  );
};

// Chat Messages Container with Lazy Rendering
export interface ChatMessagesProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: ChatMessageData[];
  itemHeight?: number;
  overscan?: number;
}

export interface ChatMessagesRef {
  scrollToMessage: (messageId: string | number) => void;
  scrollToTop: () => void;
  scrollToBottom: () => void;
}

export const ChatMessages = React.forwardRef<ChatMessagesRef, ChatMessagesProps>(({
  messages,
  itemHeight = 80,
  overscan = 10, // Increase overscan for better coverage
  className,
  ...props
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Update container height and scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setContainerHeight(container.clientHeight);
    };

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set scrolling to false after scroll ends (shorter timeout for responsiveness)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    updateDimensions();
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Calculate visible range with aggressive skeleton padding
  const { startIndex, endIndex, totalHeight, beforeSkeletons, afterSkeletons } = useMemo(() => {
    if (containerHeight === 0) {
      return { 
        startIndex: 0, 
        endIndex: messages.length, 
        totalHeight: messages.length * itemHeight,
        beforeSkeletons: 0,
        afterSkeletons: 0
      };
    }

    // Calculate actual visible area with padding
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const bufferSize = Math.max(overscan, Math.ceil(visibleCount / 2)); // More aggressive buffering
    
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - bufferSize);
    const end = Math.min(messages.length, start + visibleCount + bufferSize * 2);
    
    // Show skeletons for any non-rendered areas
    const skeletonCount = Math.ceil(visibleCount / 3); // Enough to fill visible gaps
    const beforeSkeletons = start > 0 ? skeletonCount : 0;
    const afterSkeletons = end < messages.length ? skeletonCount : 0;

    return {
      startIndex: start,
      endIndex: end,
      totalHeight: messages.length * itemHeight,
      beforeSkeletons,
      afterSkeletons
    };
  }, [messages.length, itemHeight, scrollTop, containerHeight, overscan]);

  // Visible messages
  const visibleMessages = messages.slice(startIndex, endIndex);

  // Expose scroll methods via ref
  React.useImperativeHandle(ref, () => ({
    scrollToMessage: (messageId: string | number) => {
      const messageIndex = messages.findIndex(msg => msg.id === messageId);
      if (messageIndex !== -1 && containerRef.current) {
        const targetScrollTop = messageIndex * itemHeight;
        containerRef.current.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    },
    scrollToTop: () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    scrollToBottom: () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: totalHeight,
          behavior: 'smooth'
        });
      }
    },
  }), [messages, itemHeight, totalHeight]);

  return (
    <div
      ref={containerRef}
      className={cn('flex-1 overflow-y-auto overscroll-none', className)}
      style={{ 
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'auto' // Prevent bounce
      }}
      {...props}
    >
      <div style={{ height: Math.max(totalHeight, containerHeight), position: 'relative' }}>
        {/* Before skeleton messages */}
        {beforeSkeletons > 0 && (
          <div
            style={{
              transform: `translateY(${Math.max(0, (startIndex - beforeSkeletons)) * itemHeight}px)`,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            {Array.from({ length: beforeSkeletons }, (_, index) => (
              <div key={`skeleton-before-${index}`} style={{ minHeight: itemHeight }}>
                <SkeletonMessage 
                  variant={index % 2 === 0 ? 'assistant' : 'user'} 
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Actual messages */}
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          {visibleMessages.map((message, index) => (
            <div
              key={message.id}
              style={{ minHeight: itemHeight }}
            >
              <ChatMessage
                variant={message.variant}
                timestamp={message.timestamp}
                avatar={message.avatar}
              >
                {message.text}
              </ChatMessage>
            </div>
          ))}
        </div>
        
        {/* After skeleton messages */}
        {afterSkeletons > 0 && (
          <div
            style={{
              transform: `translateY(${endIndex * itemHeight}px)`,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            {Array.from({ length: afterSkeletons }, (_, index) => (
              <div key={`skeleton-after-${index}`} style={{ minHeight: itemHeight }}>
                <SkeletonMessage 
                  variant={index % 2 === 0 ? 'user' : 'assistant'} 
                  index={index + beforeSkeletons}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Gradient overlays during scrolling for smoother transitions */}
        {isScrolling && (
          <>
            {startIndex > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              />
            )}
            {endIndex < messages.length && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(255,255,255,0.8), transparent)',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
});

ChatMessages.displayName = 'ChatMessages';

// Chat Container Component
export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Chat: React.FC<ChatProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Chat Message Component
export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'user' | 'assistant' | 'system';
  avatar?: React.ReactNode;
  timestamp?: Date;
  children: React.ReactNode;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  variant = 'user',
  avatar,
  timestamp,
  className,
  children,
  ...props
}) => {
  const isUser = variant === 'user';
  
  return (
    <div
      className={cn(
        'flex gap-3 p-4',
        isUser ? 'flex-row-reverse' : 'flex-row',
        className
      )}
      {...props}
    >
      {avatar && (
        <div className="flex-shrink-0">
          {avatar}
        </div>
      )}
      
      <div className={cn('flex flex-col', isUser ? 'items-end' : 'items-start')}>
        <div
          className={cn(
            'max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 rounded-lg text-sm',
            {
              'bg-blue-600 text-white': variant === 'user',
              'bg-gray-100 text-gray-900': variant === 'assistant',
              'bg-yellow-50 text-yellow-800 border border-yellow-200': variant === 'system'
            }
          )}
        >
          {children}
        </div>
        
        {timestamp && (
          <span className="text-xs text-gray-500 mt-1">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
    </div>
  );
};

// Chat Prompt Component
export interface ChatPromptProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const ChatPrompt: React.FC<ChatPromptProps> = ({
  onSubmit,
  placeholder = 'Type a message...',
  disabled = false,
  loading = false,
  className,
  ...props
}) => {
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled && !loading) {
      onSubmit?.(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      className={cn(
        'p-4 border-t border-gray-200 bg-gray-50',
        className
      )}
      {...props}
    >
      <form onSubmit={handleSubmit} className="flex gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || loading}
          rows={1}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          style={{ minHeight: '40px', maxHeight: '120px' }}
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled || loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};