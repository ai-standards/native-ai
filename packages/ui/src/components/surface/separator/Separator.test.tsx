import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Separator } from './Separator';

describe('Separator', () => {
  it('renders horizontal separator by default', () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
  });

  it('renders vertical separator', () => {
    render(<Separator orientation="vertical" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('h-full');
  });

  it('applies level styles', () => {
    render(<Separator level={1} data-testid="separator" />);
    const separatorElement = screen.getByRole('separator');
    expect(separatorElement).toHaveClass('border-gray-400');
  });

  it('applies spacing styles', () => {
    render(<Separator spacing="lg" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('my-6');
  });

  it('renders as decorative when specified', () => {
    render(<Separator decorative data-testid="separator" />);
    const separatorElement = screen.getByRole('presentation');
    expect(separatorElement).toBeInTheDocument();
  });

  it('renders with content', () => {
    render(<Separator>Section Title</Separator>);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('applies orientation attribute', () => {
    render(<Separator orientation="vertical" />);
    const separator = screen.getByRole('separator');
    expect(separator).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with custom className', () => {
    render(<Separator className="custom-class" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Separator data-custom="value" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-custom', 'value');
  });
});