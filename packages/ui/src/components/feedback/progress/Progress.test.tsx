import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';

describe('Progress', () => {
  it('renders with default props', () => {
    render(<Progress />);
    
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeTruthy();
    expect(progress.getAttribute('aria-valuenow')).toBe('0');
    expect(progress.getAttribute('aria-valuemin')).toBe('0');
    expect(progress.getAttribute('aria-valuemax')).toBe('100');
  });

  it('renders with custom value and range', () => {
    render(<Progress value={50} min={10} max={200} />);
    
    const progress = screen.getByRole('progressbar');
    expect(progress.getAttribute('aria-valuenow')).toBe('50');
    expect(progress.getAttribute('aria-valuemin')).toBe('10');
    expect(progress.getAttribute('aria-valuemax')).toBe('200');
  });

  it('displays label when provided', () => {
    render(<Progress label="Upload Progress" />);
    
    expect(screen.getByText('Upload Progress')).toBeTruthy();
    const progress = screen.getByRole('progressbar');
    expect(progress.getAttribute('aria-label')).toBe('Upload Progress');
  });

  it('shows percentage when showValue is true', () => {
    render(<Progress value={75} showValue />);
    
    expect(screen.getByText('75%')).toBeTruthy();
  });

  it('does not show percentage in indeterminate mode', () => {
    render(<Progress indeterminate showValue />);
    
    expect(screen.queryByText('%')).toBe(null);
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Progress size="sm" />);
    
    let progressBar = document.querySelector('[role="progressbar"]');
    expect(progressBar?.className).toContain('h-1');
    
    rerender(<Progress size="lg" />);
    progressBar = document.querySelector('[role="progressbar"]');
    expect(progressBar?.className).toContain('h-3');
  });

  it('applies variant classes correctly', () => {
    render(<Progress variant="success" value={50} />);
    
    const progressFill = document.querySelector('[role="progressbar"] > div');
    expect(progressFill?.className).toContain('bg-green-600');
  });

  it('calculates percentage correctly', () => {
    render(<Progress value={25} min={0} max={50} />);
    
    const progressFill = document.querySelector('[role="progressbar"] > div') as HTMLElement;
    expect(progressFill?.style.width).toBe('50%');
  });

  it('handles indeterminate mode', () => {
    render(<Progress indeterminate />);
    
    const progress = screen.getByRole('progressbar');
    expect(progress.getAttribute('aria-valuenow')).toBe(null);
    
    const progressFill = document.querySelector('[role="progressbar"] > div');
    expect(progressFill?.className).toContain('animate-pulse');
  });

  it('clamps values within min/max range', () => {
    render(<Progress value={150} max={100} showValue />);
    
    expect(screen.getByText('100%')).toBeTruthy();
  });

  it('applies custom className', () => {
    render(<Progress className="custom-class" />);
    
    const container = screen.getByRole('progressbar').parentElement;
    expect(container?.className).toContain('custom-class');
  });

  it('forwards additional props', () => {
    render(<Progress data-testid="custom-progress" id="test-progress" />);
    
    const container = screen.getByTestId('custom-progress');
    expect(container.getAttribute('id')).toBe('test-progress');
  });
});