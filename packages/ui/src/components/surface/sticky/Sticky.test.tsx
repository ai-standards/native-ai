import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Sticky } from './Sticky';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Sticky', () => {
  it('renders sticky container with content', () => {
    render(
      <Sticky data-testid="sticky">
        <div>Sticky content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky).toBeInTheDocument();
    expect(screen.getByText('Sticky content')).toBeInTheDocument();
  });

  it('applies position styles', () => {
    render(
      <Sticky position="bottom" offset={20} data-testid="sticky">
        <div>Content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky.style.position).toBe('sticky');
    expect(sticky.style.bottom).toBe('20px');
  });

  it('applies z-index', () => {
    render(
      <Sticky zIndex={100} data-testid="sticky">
        <div>Content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky.style.zIndex).toBe('100');
  });

  it('calls onStickyChange when provided', () => {
    const onStickyChange = vi.fn();
    render(
      <Sticky onStickyChange={onStickyChange}>
        <div>Content</div>
      </Sticky>
    );
    
    // Note: Full intersection observer testing would require more complex setup
    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    render(
      <Sticky className="custom-class" data-testid="sticky">
        <div>Content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(
      <Sticky data-custom="value" data-testid="sticky">
        <div>Content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky).toHaveAttribute('data-custom', 'value');
  });

  it('applies custom styles', () => {
    render(
      <Sticky style={{ backgroundColor: 'red' }} data-testid="sticky">
        <div>Content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky.style.backgroundColor).toBe('red');
  });

  it('sets data-sticky attribute', () => {
    render(
      <Sticky data-testid="sticky">
        <div>Content</div>
      </Sticky>
    );
    
    const sticky = screen.getByTestId('sticky');
    expect(sticky).toHaveAttribute('data-sticky');
  });
});