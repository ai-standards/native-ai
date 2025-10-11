import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { HelperText } from './HelperText';

describe('HelperText', () => {
  it('renders with text', () => {
    render(<HelperText text="Enter your email address" />);
    
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('does not render when no text', () => {
    const { container } = render(<HelperText />);
    
    expect(container.firstChild).toBeNull();
  });

  it('hides icon by default', () => {
    const { container } = render(<HelperText text="Helper text" />);
    
    const icon = container.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });

  it('shows icon when showIcon is true', () => {
    const { container } = render(<HelperText text="Helper text" showIcon />);
    
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('uses custom icon when provided', () => {
    const customIcon = <span data-testid="custom-icon">?</span>;
    render(<HelperText text="Helper text" icon={customIcon} showIcon />);
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    render(<HelperText text="Helper text" size="lg" />);
    
    const helperElement = screen.getByText('Helper text').parentElement;
    expect(helperElement).toHaveClass('text-base');
  });

  it('applies variant classes correctly', () => {
    render(<HelperText text="Helper text" variant="info" />);
    
    const helperElement = screen.getByText('Helper text');
    expect(helperElement).toHaveClass('text-blue-600');
  });

  it('sets correct id when fieldId provided', () => {
    render(<HelperText text="Helper text" fieldId="test-field" />);
    
    const helperElement = screen.getByText('Helper text').parentElement;
    expect(helperElement).toHaveAttribute('id', 'test-field-helper');
  });

  it('applies custom className', () => {
    render(<HelperText text="Helper text" className="custom-class" />);
    
    const helperElement = screen.getByText('Helper text').parentElement;
    expect(helperElement).toHaveClass('custom-class');
  });

  it('applies position classes correctly', () => {
    render(<HelperText text="Helper text" position="inline" />);
    
    const helperElement = screen.getByText('Helper text').parentElement;
    expect(helperElement).toHaveClass('ml-2');
  });

  it('applies flex layout when icon is shown', () => {
    render(<HelperText text="Helper text" showIcon />);
    
    const helperElement = screen.getByText('Helper text').parentElement;
    expect(helperElement).toHaveClass('flex', 'items-start', 'gap-1');
  });

  it('shows different icons for different variants', () => {
    const { container: infoContainer } = render(
      <HelperText text="Info text" variant="info" showIcon />
    );
    const { container: warningContainer } = render(
      <HelperText text="Warning text" variant="warning" showIcon />
    );
    
    const infoIcon = infoContainer.querySelector('svg');
    const warningIcon = warningContainer.querySelector('svg');
    
    expect(infoIcon).toBeInTheDocument();
    expect(warningIcon).toBeInTheDocument();
    expect(infoIcon).not.toEqual(warningIcon);
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<HelperText text="Helper text" showIcon />);
    
    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('handles all variant types', () => {
    const variants = ['default', 'info', 'warning', 'success'] as const;
    
    variants.forEach(variant => {
      const { container } = render(<HelperText text="Test" variant={variant} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it('handles empty text gracefully', () => {
    const { container } = render(<HelperText text="" />);
    
    expect(container.firstChild).toBeNull();
  });
});