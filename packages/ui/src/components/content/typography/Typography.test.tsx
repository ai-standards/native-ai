import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text, Heading, Link } from './Typography';

describe('Text', () => {
  it('renders text with default props', () => {
    render(<Text data-testid="text">Hello World</Text>);
    const text = screen.getByTestId('text');
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Text variant="caption" data-testid="text">Caption text</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('text-xs');
  });

  it('applies weight styles', () => {
    render(<Text weight="bold" data-testid="text">Bold text</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-bold');
  });

  it('applies color styles', () => {
    render(<Text color="accent" data-testid="text">Accent text</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('text-blue-600');
  });

  it('applies alignment styles', () => {
    render(<Text align="center" data-testid="text">Centered text</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('text-center');
  });

  it('renders as different elements', () => {
    render(<Text as="span" data-testid="text">Span text</Text>);
    const text = screen.getByTestId('text');
    expect(text.tagName).toBe('SPAN');
  });

  it('renders with custom className', () => {
    render(<Text className="custom-class" data-testid="text">Text</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Text data-custom="value" data-testid="text">Text</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveAttribute('data-custom', 'value');
  });
});

describe('Heading', () => {
  it('renders heading with default level 2', () => {
    render(<Heading data-testid="heading">Test Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders different heading levels', () => {
    render(<Heading level={1} data-testid="heading">H1 Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H1');
  });

  it('applies size styles', () => {
    render(<Heading size="xl" data-testid="heading">Large Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('text-2xl');
  });

  it('applies weight styles', () => {
    render(<Heading weight="bold" data-testid="heading">Bold Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('font-bold');
  });

  it('applies color styles', () => {
    render(<Heading color="muted" data-testid="heading">Muted Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('text-gray-600');
  });

  it('applies alignment styles', () => {
    render(<Heading align="center" data-testid="heading">Centered Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('text-center');
  });

  it('applies margin bottom styles', () => {
    render(<Heading mb="lg" data-testid="heading">Heading with Margin</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('mb-6');
  });

  it('renders with custom className', () => {
    render(<Heading className="custom-class" data-testid="heading">Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Heading data-custom="value" data-testid="heading">Heading</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveAttribute('data-custom', 'value');
  });
});

describe('Link', () => {
  it('renders link with default props', () => {
    render(<Link href="/test" data-testid="link">Test Link</Link>);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Link variant="muted" data-testid="link">Muted Link</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('text-gray-600');
  });

  it('applies underline styles', () => {
    render(<Link underline="always" data-testid="link">Always Underlined</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('underline');
  });

  it('opens external links in new tab', () => {
    render(<Link external href="https://example.com" data-testid="link">External Link</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByLabelText('Opens in new tab')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Link className="custom-class" data-testid="link">Link</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Link data-custom="value" data-testid="link">Link</Link>);
    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('data-custom', 'value');
  });
});