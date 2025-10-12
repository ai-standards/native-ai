import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

export interface ScrollAreaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onScroll'> {
  /** Custom scrollbar styling */
  scrollbarVariant?: 'default' | 'minimal' | 'hidden';
  /** Maximum height of the scroll area */
  maxHeight?: string | number;
  /** Direction of scrolling */
  direction?: 'vertical' | 'horizontal' | 'both';
  /** Fade effect at edges during scroll */
  fadeEdges?: boolean;
  /** Size of fade effect */
  fadeSize?: 'sm' | 'md' | 'lg';
  /** Callback when scroll position changes */
  onScrollChange?: (scrollTop: number, scrollLeft: number) => void;
}

export interface ScrollAreaRef {
  scrollTo: (options: { top?: number; left?: number; behavior?: 'smooth' | 'auto' }) => void;
  scrollToTop: () => void;
  scrollToBottom: () => void;
  scrollToLeft: () => void;
  scrollToRight: () => void;
}

export const ScrollArea = React.forwardRef<ScrollAreaRef, ScrollAreaProps>(({
  scrollbarVariant = 'default',
  maxHeight,
  direction = 'vertical',
  fadeEdges = false,
  fadeSize = 'md',
  onScrollChange,
  className,
  children,
  ...props
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    scrollTop: 0,
    scrollLeft: 0,
    canScrollUp: false,
    canScrollDown: false,
    canScrollLeft: false,
    canScrollRight: false,
  });

  // Update scroll state
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollState = () => {
      const {
        scrollTop,
        scrollLeft,
        scrollHeight,
        scrollWidth,
        clientHeight,
        clientWidth,
      } = container;

      const newState = {
        scrollTop,
        scrollLeft,
        canScrollUp: scrollTop > 0,
        canScrollDown: scrollTop + clientHeight < scrollHeight,
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft + clientWidth < scrollWidth,
      };

      setScrollState(newState);
      onScrollChange?.(scrollTop, scrollLeft);
    };

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);
    
    // Update on resize
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [onScrollChange]);

  // Expose scroll methods via ref
  React.useImperativeHandle(ref, () => ({
    scrollTo: ({ top, left, behavior = 'auto' }) => {
      containerRef.current?.scrollTo({ top, left, behavior });
    },
    scrollToTop: () => {
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom: () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    },
    scrollToLeft: () => {
      containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    },
    scrollToRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: containerRef.current.scrollWidth,
          behavior: 'smooth'
        });
      }
    },
  }), []);

  const scrollbarStyles = {
    default: 'scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100',
    minimal: 'scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent',
    hidden: 'scrollbar-none',
  };

  const fadeStyles = {
    sm: '8px',
    md: '16px', 
    lg: '24px',
  };

  const fadeGradient = fadeStyles[fadeSize];

  return (
    <div
      className={cn(
        'relative',
        className
      )}
      {...props}
    >
      <div
        ref={containerRef}
        className={cn(
          'w-full',
          scrollbarStyles[scrollbarVariant],
          {
            'overflow-y-auto overflow-x-hidden': direction === 'vertical',
            'overflow-x-auto overflow-y-hidden': direction === 'horizontal', 
            'overflow-auto': direction === 'both',
          }
        )}
        style={{
          maxHeight: maxHeight,
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>

      {/* Fade effects */}
      {fadeEdges && (
        <>
          {/* Top fade */}
          {(direction === 'vertical' || direction === 'both') && scrollState.canScrollUp && (
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none z-10"
              style={{
                height: fadeGradient,
                background: `linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))`,
              }}
            />
          )}

          {/* Bottom fade */}
          {(direction === 'vertical' || direction === 'both') && scrollState.canScrollDown && (
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
              style={{
                height: fadeGradient,
                background: `linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))`,
              }}
            />
          )}

          {/* Left fade */}
          {(direction === 'horizontal' || direction === 'both') && scrollState.canScrollLeft && (
            <div
              className="absolute top-0 left-0 bottom-0 pointer-events-none z-10"
              style={{
                width: fadeGradient,
                background: `linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))`,
              }}
            />
          )}

          {/* Right fade */}
          {(direction === 'horizontal' || direction === 'both') && scrollState.canScrollRight && (
            <div
              className="absolute top-0 right-0 bottom-0 pointer-events-none z-10"
              style={{
                width: fadeGradient,
                background: `linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))`,
              }}
            />
          )}
        </>
      )}
    </div>
  );
});

ScrollArea.displayName = 'ScrollArea';