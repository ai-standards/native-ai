import { describe, it, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Link } from './Link';

describe('Link', () => {
  it('renders with default props', () => {
    render(<Link href="/test">Test Link</Link>);
    
    const link = screen.getByRole('link');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('/test');
    expect(link.textContent).toBe('Test Link');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Link href="#" variant="primary">Link</Link>);
    
    let link = screen.getByRole('link');
    expect(link.classList.contains('text-blue-600')).toBe(true);
    
    rerender(<Link href="#" variant="destructive">Link</Link>);
    link = screen.getByRole('link');
    expect(link.classList.contains('text-red-600')).toBe(true);
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<NavLink href="#" size="sm">Link</Link>);
    
    let link = screen.getByRole('link');
    expect(link.classList.contains('text-sm')).toBe(true);
    
    rerender(<NavLink href="#" size="lg">Link</Link>);
    link = screen.getByRole('link');
    expect(link.classList.contains('text-lg')).toBe(true);
  });

  it('applies underline classes correctly', () => {
    const { rerender } = render(<NavLink href="#" underline="none">Link</Link>);
    
    let link = screen.getByRole('link');
    expect(link.classList.contains('no-underline')).toBe(true);
    
    rerender(<NavLink href="#" underline="always">Link</Link>);
    link = screen.getByRole('link');
    expect(link.classList.contains('underline')).toBe(true);
  });

  it('handles active state correctly', () => {
    render(<NavLink href="#" isActive>Active Link</Link>);
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('aria-current')).toBe('page');
    expect(link.classList.contains('font-medium')).toBe(true);
  });

  it('handles disabled state correctly', () => {
    const onClick = vi.fn();
    render(<NavLink href="/test" disabled onClick={onClick}>Disabled Link</Link>);
    
    const link = screen.getByText('Disabled Link');
    expect(link.getAttribute('href')).toBeNull();
    expect(link.getAttribute('aria-disabled')).toBe('true');
    expect(link.classList.contains('cursor-not-allowed')).toBe(true);
    
    fireEvent.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('automatically detects external links', () => {
    render(<NavLink href="https://example.com">External Link</Link>);
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  test('detects mailto links as external', () => {
    render(<NavLink href="mailto:test@example.com">Email Link</Link>);
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('target')).toBe('_blank');
  });

  test('detects tel links as external', () => {
    render(<NavLink href="tel:+1234567890">Phone Link</Link>);
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('target')).toBe('_blank');
  });

  test('shows external icon by default for external links', () => {
    const { container } = render(<NavLink href="https://example.com">External</Link>);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  test('hides external icon when showExternalIcon is false', () => {
    const { container } = render(
      <NavLink href="https://example.com" showExternalIcon={false}>External</Link>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toBeNull();
  });

  test('does not show external icon for internal links', () => {
    const { container } = render(<NavLink href="/internal">Internal</Link>);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeNull();
  });

  test('allows manual external designation', () => {
    render(<NavLink href="#" external>Manual External</Link>);
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  test('respects custom target and rel', () => {
    render(
      <NavLink 
        href="https://example.com" 
        target="_self" 
        rel="custom-rel"
      >
        Custom Link
      </Link>
    );
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('target')).toBe('_self');
    expect(link.getAttribute('rel')).toBe('custom-rel');
  });

  it('calls onClick handler when not disabled', () => {
    const onClick = vi.fn();
    render(<NavLink href="#" onClick={onClick}>Clickable Link</Link>);
    
    const link = screen.getByRole('link');
    fireEvent.click(link);
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<NavLink href="#" className="custom-class">Link</Link>);
    
    const link = screen.getByRole('link');
    expect(link.classList.contains('custom-class')).toBe(true);
  });

  it('forwards additional props', () => {
    render(<NavLink href="#" data-testid="test-link" id="link-id">Link</Link>);
    
    const link = screen.getByTestId('test-link');
    expect(link.getAttribute('id')).toBe('link-id');
  });

  test('does not show external icon when disabled', () => {
    const { container } = render(
      <NavLink href="https://example.com" disabled>External Disabled</Link>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toBeNull();
  });
});