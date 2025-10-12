import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner />);
    
    const spinner = screen.getByRole('status');
    expect(spinner).toBeTruthy();
    expect(spinner.getAttribute('aria-busy')).toBe('true');
    expect(spinner.getAttribute('aria-label')).toBe('Loading...');
  });

  it('renders with custom label', () => {
    render(<Spinner label="Processing..." />);
    
    const spinner = screen.getByRole('status');
    expect(spinner.getAttribute('aria-label')).toBe('Processing...');
    expect(screen.getByText('Processing...')).toBeTruthy();
  });

  it('applies size classes correctly', () => {
    const { rerender, container } = render(<Spinner size="xs" />);
    
    let svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.classList.contains('w-3')).toBe(true);
    expect(svg?.classList.contains('h-3')).toBe(true);
    
    rerender(<Spinner size="xl" />);
    svg = container.querySelector('svg');
    expect(svg?.classList.contains('w-12')).toBe(true);
    expect(svg?.classList.contains('h-12')).toBe(true);
  });

  it('applies variant classes correctly', () => {
    const { rerender, container } = render(<Spinner variant="success" />);
    
    let svg = container.querySelector('svg');
    expect(svg?.classList.contains('text-green-600')).toBe(true);
    
    rerender(<Spinner variant="error" />);
    svg = container.querySelector('svg');
    expect(svg?.classList.contains('text-red-600')).toBe(true);
  });

  it('applies display classes correctly', () => {
    const { rerender } = render(<Spinner display="inline" />);
    
    let spinner = screen.getByRole('status');
    expect(spinner.className).toContain('inline-flex');
    
    rerender(<Spinner display="block" />);
    spinner = screen.getByRole('status');
    expect(spinner.className).toContain('flex');
  });

  it('includes animation class', () => {
    const { container } = render(<Spinner />);
    
    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('animate-spin')).toBe(true);
  });

  it('applies custom className', () => {
    render(<Spinner className="custom-class" />);
    
    const spinner = screen.getByRole('status');
    expect(spinner.className).toContain('custom-class');
  });

  it('forwards additional props', () => {
    render(<Spinner data-testid="custom-spinner" id="test-spinner" />);
    
    const spinner = screen.getByTestId('custom-spinner');
    expect(spinner.getAttribute('id')).toBe('test-spinner');
  });
});