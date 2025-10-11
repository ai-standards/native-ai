import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { ValidationIndicator } from './ValidationIndicator';

describe('ValidationIndicator', () => {
  it('does not render when status is idle and showText is false', () => {
    const { container } = render(<ValidationIndicator status="idle" />);
    
    expect(container.firstChild).toBeNull();
  });

  it('renders when status is idle and showText is true', () => {
    render(<ValidationIndicator status="idle" showText />);
    
    expect(screen.getByText('Ready')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders icon for non-idle status', () => {
    const { container } = render(<ValidationIndicator status="valid" />);
    
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('shows status text when showText is true', () => {
    render(<ValidationIndicator status="valid" showText />);
    
    expect(screen.getByText('Valid')).toBeInTheDocument();
  });

  it('uses custom status text when provided', () => {
    render(
      <ValidationIndicator 
        status="valid" 
        statusText="All good!" 
        showText 
      />
    );
    
    expect(screen.getByText('All good!')).toBeInTheDocument();
  });

  it('applies correct color classes for each status', () => {
    const { rerender } = render(<ValidationIndicator status="valid" showText />);
    let statusElement = screen.getByRole('status');
    expect(statusElement).toHaveClass('text-green-500');

    rerender(<ValidationIndicator status="invalid" showText />);
    statusElement = screen.getByRole('status');
    expect(statusElement).toHaveClass('text-red-500');

    rerender(<ValidationIndicator status="warning" showText />);
    statusElement = screen.getByRole('status');
    expect(statusElement).toHaveClass('text-yellow-500');

    rerender(<ValidationIndicator status="validating" showText />);
    statusElement = screen.getByRole('status');
    expect(statusElement).toHaveClass('text-blue-500');
  });

  it('applies size classes correctly', () => {
    render(<ValidationIndicator status="valid" size="lg" showText />);
    
    const textElement = screen.getByText('Valid');
    expect(textElement).toHaveClass('text-base');
  });

  it('uses custom icon when provided', () => {
    const customIcon = <span data-testid="custom-icon">✓</span>;
    render(
      <ValidationIndicator 
        status="valid" 
        icons={{ valid: customIcon }}
      />
    );
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies animation classes for validating status', () => {
    const { container } = render(<ValidationIndicator status="validating" animate />);
    
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('animate-spin');
  });

  it('does not apply animation classes when animate is false', () => {
    const { container } = render(<ValidationIndicator status="validating" animate={false} />);
    
    const icon = container.querySelector('svg');
    expect(icon).not.toHaveClass('animate-spin');
  });

  it('positions icon correctly based on position prop', () => {
    const { container: startContainer } = render(
      <ValidationIndicator status="valid" position="start" showText />
    );
    const { container: endContainer } = render(
      <ValidationIndicator status="valid" position="end" showText />
    );
    
    // Both should render the same elements, just in different order
    expect(startContainer.querySelector('svg')).toBeInTheDocument();
    expect(endContainer.querySelector('svg')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ValidationIndicator status="valid" className="custom-class" />);
    
    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(<ValidationIndicator status="validating" showText />);
    
    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveAttribute('role', 'status');
    expect(statusElement).toHaveAttribute('aria-live', 'polite');
  });

  it('handles all status values', () => {
    const statuses = ['idle', 'validating', 'valid', 'invalid', 'warning'] as const;
    
    statuses.forEach(status => {
      const { container } = render(<ValidationIndicator status={status} showText />);
      if (status === 'idle') {
        expect(screen.getByText('Ready')).toBeInTheDocument();
      } else {
        expect(container.querySelector('svg')).toBeInTheDocument();
      }
    });
  });

  it('applies transition classes when animate is true', () => {
    render(<ValidationIndicator status="valid" animate />);
    
    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveClass('transition-colors');
  });

  it('does not apply transition classes when animate is false', () => {
    render(<ValidationIndicator status="valid" animate={false} />);
    
    const statusElement = screen.getByRole('status');
    expect(statusElement).not.toHaveClass('transition-colors');
  });
});