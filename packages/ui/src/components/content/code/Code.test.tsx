import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Code, CodeBlock } from './Code';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

describe('Code', () => {
  it('renders inline code by default', () => {
    render(<Code data-testid="code">const x = 42;</Code>);
    const code = screen.getByTestId('code');
    expect(code).toBeInTheDocument();
    expect(code.tagName).toBe('CODE');
    expect(code).toHaveClass('px-1.5', 'py-0.5');
    expect(screen.getByText('const x = 42;')).toBeInTheDocument();
  });

  it('renders block code variant', () => {
    render(
      <Code variant="block" data-testid="code">
        function hello() {'\n'}  console.log('Hello');{'\n'}
      </Code>
    );
    const container = screen.getByTestId('code');
    expect(container).toBeInTheDocument();
    const pre = container.querySelector('pre');
    expect(pre).toHaveClass('bg-gray-900');
  });

  it('applies language class', () => {
    render(
      <Code variant="block" language="javascript" data-testid="code">
        const x = 42;
      </Code>
    );
    const code = screen.getByTestId('code').querySelector('code');
    expect(code).toHaveClass('language-javascript');
  });

  it('shows line numbers when enabled', () => {
    render(
      <Code variant="block" showLineNumbers data-testid="code">
        {`line 1\nline 2\nline 3`}
      </Code>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('shows copy button when copyable', () => {
    render(
      <Code variant="block" copyable data-testid="code">
        const x = 42;
      </Code>
    );
    expect(screen.getByRole('button', { name: 'Copy code to clipboard' })).toBeInTheDocument();
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('copies code to clipboard when copy button is clicked', async () => {
    const writeTextSpy = vi.spyOn(navigator.clipboard, 'writeText');
    render(
      <Code variant="block" copyable data-testid="code">
        const x = 42;
      </Code>
    );
    
    const copyButton = screen.getByRole('button', { name: 'Copy code to clipboard' });
    fireEvent.click(copyButton);
    
    expect(writeTextSpy).toHaveBeenCalledWith('const x = 42;');
  });

  it('shows copied state after copying', async () => {
    vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    render(
      <Code variant="block" copyable data-testid="code">
        const x = 42;
      </Code>
    );
    
    const copyButton = screen.getByRole('button', { name: 'Copy code to clipboard' });
    fireEvent.click(copyButton);
    
    // Wait for the async state update
    await screen.findByText('Copied!');
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Code className="custom-class" data-testid="code">Code</Code>);
    const code = screen.getByTestId('code');
    expect(code).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Code data-custom="value" data-testid="code">Code</Code>);
    const code = screen.getByTestId('code');
    expect(code).toHaveAttribute('data-custom', 'value');
  });
});

describe('CodeBlock', () => {
  it('renders as block variant', () => {
    render(<CodeBlock data-testid="code">const x = 42;</CodeBlock>);
    const container = screen.getByTestId('code');
    const pre = container.querySelector('pre');
    expect(pre).toHaveClass('bg-gray-900');
  });

  it('accepts all CodeProps except variant', () => {
    render(
      <CodeBlock 
        language="javascript" 
        copyable 
        showLineNumbers 
        data-testid="code"
      >
        const x = 42;
      </CodeBlock>
    );
    expect(screen.getByRole('button', { name: 'Copy code to clipboard' })).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});