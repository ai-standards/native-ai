import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

export interface StickyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position to stick to */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Offset from the edge */
  offset?: number | string;
  /** Z-index for stacking */
  zIndex?: number;
  /** Whether to add shadow when stuck */
  showShadow?: boolean;
  /** Callback when stick state changes */
  onStickyChange?: (isSticky: boolean) => void;
  /** Container to observe for stickiness (defaults to viewport) */
  container?: React.RefObject<HTMLElement>;
}

export const Sticky: React.FC<StickyProps> = ({
  position = 'top',
  offset = 0,
  zIndex = 10,
  showShadow = false,
  onStickyChange,
  container,
  className,
  children,
  style,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerContainer = container?.current || document.documentElement;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newIsSticky = !entry.isIntersecting;
        
        if (newIsSticky !== isSticky) {
          setIsSticky(newIsSticky);
          onStickyChange?.(newIsSticky);
        }
      },
      {
        root: container?.current || null,
        rootMargin: `${getOffsetMargin(position, offset)}`,
        threshold: [0, 1],
      }
    );

    // Create a sentinel element to observe
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.visibility = 'hidden';
    sentinel.style.pointerEvents = 'none';
    
    // Position sentinel based on sticky position
    if (position === 'top') {
      element.parentNode?.insertBefore(sentinel, element);
      sentinel.style.height = '1px';
    } else if (position === 'bottom') {
      element.parentNode?.insertBefore(sentinel, element.nextSibling);
      sentinel.style.height = '1px';
    }

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [position, offset, isSticky, onStickyChange, container]);

  const getOffsetMargin = (pos: string, offsetValue: number | string) => {
    const offsetStr = typeof offsetValue === 'number' ? `${offsetValue}px` : offsetValue;
    
    switch (pos) {
      case 'top':
        return `-${offsetStr} 0px 0px 0px`;
      case 'bottom':
        return `0px 0px -${offsetStr} 0px`;
      case 'left':
        return `0px 0px 0px -${offsetStr}`;
      case 'right':
        return `0px -${offsetStr} 0px 0px`;
      default:
        return '0px';
    }
  };

  const positionStyles = {
    top: { top: offset },
    bottom: { bottom: offset },
    left: { left: offset },
    right: { right: offset },
  };

  const stickyStyles = {
    position: 'sticky' as const,
    ...positionStyles[position],
    zIndex,
  };

  const shadowClasses = {
    top: 'shadow-lg',
    bottom: 'shadow-lg',
    left: 'shadow-lg',
    right: 'shadow-lg',
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-shadow duration-200',
        {
          [shadowClasses[position]]: showShadow && isSticky,
        },
        className
      )}
      style={{
        ...stickyStyles,
        ...style,
      }}
      data-sticky={isSticky}
      {...props}
    >
      {children}
    </div>
  );
};