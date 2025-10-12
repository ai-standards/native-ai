import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Quote } from './Quote';

describe('Quote', () => {
  it('renders quote with default props', () => {
    render(<Quote data-testid="quote">This is a quote</Quote>);
    const quote = screen.getByTestId('quote');
    expect(quote).toBeInTheDocument();
    expect(quote.tagName).toBe('BLOCKQUOTE');
    expect(screen.getByText('This is a quote')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Quote variant="bordered" data-testid="quote">Bordered quote</Quote>);
    const quote = screen.getByTestId('quote');
    expect(quote).toHaveClass('border-l-4', 'border-blue-500', 'pl-4');
  });

  it('applies size styles', () => {
    render(<Quote size="lg" data-testid="quote">Large quote</Quote>);
    const quote = screen.getByTestId('quote');
    expect(quote).toHaveClass('text-lg');
  });

  it('renders with citation', () => {
    render(<Quote cite="John Doe">Quote with citation</Quote>);
    expect(screen.getByText('— John Doe')).toBeInTheDocument();
  });

  it('applies citation alignment', () => {
    render(<Quote cite="Author" citeAlign="left">Quote</Quote>);
    const cite = screen.getByText('— Author');
    expect(cite).toHaveClass('text-left');
  });

  it('renders quotation marks for default variant', () => {
    render(<Quote variant="default">Quote</Quote>);
    const quotes = screen.getAllByText('"');
    expect(quotes).toHaveLength(2);
  });

  it('renders with custom className', () => {
    render(<Quote className="custom-class" data-testid="quote">Quote</Quote>);
    const quote = screen.getByTestId('quote');
    expect(quote).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Quote data-custom="value" data-testid="quote">Quote</Quote>);
    const quote = screen.getByTestId('quote');
    expect(quote).toHaveAttribute('data-custom', 'value');
  });
});