import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AspectRatio } from './AspectRatio';

describe('AspectRatio', () => {
  it('renders aspect ratio container with content', () => {
    render(
      <AspectRatio data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies 16/9 ratio by default', () => {
    render(
      <AspectRatio data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    // 16/9 ratio = 56.25% padding-bottom
    expect(container.style.paddingBottom).toBe('56.25%');
  });

  it('applies custom numeric ratio', () => {
    render(
      <AspectRatio ratio={2} data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    // 2:1 ratio = 50% padding-bottom
    expect(container.style.paddingBottom).toBe('50%');
  });

  it('applies square ratio', () => {
    render(
      <AspectRatio ratio="square" data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    // 1:1 ratio = 100% padding-bottom
    expect(container.style.paddingBottom).toBe('100%');
  });

  it('applies 4/3 ratio', () => {
    render(
      <AspectRatio ratio="4/3" data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    // 4/3 ratio = 75% padding-bottom
    expect(container.style.paddingBottom).toBe('75%');
  });

  it('uses width and height for custom ratio', () => {
    render(
      <AspectRatio width={800} height={600} data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    // 800/600 = 1.333... ratio = 75% padding-bottom
    expect(container.style.paddingBottom).toBe('75%');
  });

  it('renders with custom className', () => {
    render(
      <AspectRatio className="custom-class" data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    expect(container).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(
      <AspectRatio data-custom="value" data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    expect(container).toHaveAttribute('data-custom', 'value');
  });

  it('positions content absolutely', () => {
    render(
      <AspectRatio>
        <div data-testid="content">Content</div>
      </AspectRatio>
    );
    
    const content = screen.getByTestId('content');
    expect(content.parentElement).toHaveClass('absolute', 'inset-0');
  });
});