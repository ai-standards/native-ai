import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />);
    
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toBeTruthy();
    expect(skeleton.className).toContain('bg-gray-200');
    expect(skeleton.className).toContain('animate-pulse');
    expect(skeleton.className).toContain('rounded');
  });

  it('applies variant classes correctly', () => {
    const { rerender, container } = render(<Skeleton variant="circular" />);
    
    let skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).toContain('rounded-full');
    
    rerender(<Skeleton variant="text" />);
    skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).toContain('rounded');
    
    rerender(<Skeleton variant="rectangular" />);
    skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).toContain('rounded');
  });

  it('applies animation classes correctly', () => {
    const { rerender, container } = render(<Skeleton animation="pulse" />);
    
    let skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).toContain('animate-pulse');
    
    rerender(<Skeleton animation="none" />);
    skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).not.toContain('animate-pulse');
  });

  it('applies custom dimensions', () => {
    const { container } = render(<Skeleton width="200px" height="100px" />);
    
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.style.width).toBe('200px');
    expect(skeleton.style.height).toBe('100px');
  });

  it('renders multiple lines for text variant', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    
    const wrapper = container.firstChild as HTMLElement;
    const skeletons = wrapper.children;
    expect(skeletons.length).toBe(3);
    expect(wrapper.className).toContain('space-y-2');
  });

  it('makes last line shorter in multi-line text', () => {
    const { container } = render(<Skeleton variant="text" lines={2} />);
    
    const wrapper = container.firstChild as HTMLElement;
    const lastSkeleton = wrapper.children[1] as HTMLElement;
    expect(lastSkeleton.style.width).toBe('75%');
  });

  it('applies default dimensions based on variant', () => {
    const { rerender, container } = render(<Skeleton variant="circular" />);
    
    let skeleton = container.firstChild as HTMLElement;
    expect(skeleton.style.width).toBe('2.5rem');
    expect(skeleton.style.height).toBe('2.5rem');
    
    rerender(<Skeleton variant="text" />);
    skeleton = container.firstChild as HTMLElement;
    expect(skeleton.style.width).toBe('100%');
    expect(skeleton.style.height).toBe('1rem');
  });

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="custom-class" />);
    
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).toContain('custom-class');
  });

  it('forwards additional props', () => {
    const { container } = render(<Skeleton data-testid="custom-skeleton" id="test-skeleton" />);
    
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.getAttribute('data-testid')).toBe('custom-skeleton');
    expect(skeleton.getAttribute('id')).toBe('test-skeleton');
  });
});