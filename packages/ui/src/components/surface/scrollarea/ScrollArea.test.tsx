import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ScrollArea } from './ScrollArea';

// Mock ResizeObserver
const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

describe('ScrollArea', () => {
  it('renders scroll area with content', () => {
    render(
      <ScrollArea data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    
    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies scrollbar variant styles', () => {
    render(
      <ScrollArea scrollbarVariant="minimal" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    
    const scrollContainer = screen.getByTestId('scroll-area').firstChild;
    expect(scrollContainer).toHaveClass('scrollbar-thin');
  });

  it('applies direction classes', () => {
    render(
      <ScrollArea direction="horizontal" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    
    const scrollContainer = screen.getByTestId('scroll-area').firstChild;
    expect(scrollContainer).toHaveClass('overflow-x-auto');
    expect(scrollContainer).toHaveClass('overflow-y-hidden');
  });

  it('applies maxHeight style', () => {
    render(
      <ScrollArea maxHeight="200px" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    
    const scrollContainer = screen.getByTestId('scroll-area').firstChild as HTMLElement;
    expect(scrollContainer.style.maxHeight).toBe('200px');
  });

  it('calls onScrollChange when scrolling', () => {
    const onScrollChange = vi.fn();
    render(
      <ScrollArea onScrollChange={onScrollChange} data-testid="scroll-area">
        <div style={{ height: '1000px' }}>Tall content</div>
      </ScrollArea>
    );
    
    const scrollContainer = screen.getByTestId('scroll-area').firstChild as HTMLElement;
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } });
    
    expect(onScrollChange).toHaveBeenCalled();
  });

  it('exposes scroll methods via ref', () => {
    const ref = React.createRef<any>();
    render(
      <ScrollArea ref={ref}>
        <div style={{ height: '1000px' }}>Tall content</div>
      </ScrollArea>
    );
    
    expect(ref.current).toHaveProperty('scrollTo');
    expect(ref.current).toHaveProperty('scrollToTop');
    expect(ref.current).toHaveProperty('scrollToBottom');
    expect(ref.current).toHaveProperty('scrollToLeft');
    expect(ref.current).toHaveProperty('scrollToRight');
  });

  it('renders with custom className', () => {
    render(
      <ScrollArea className="custom-class" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    
    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(
      <ScrollArea data-custom="value" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    
    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toHaveAttribute('data-custom', 'value');
  });
});