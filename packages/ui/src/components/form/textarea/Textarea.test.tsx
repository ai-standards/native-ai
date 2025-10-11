import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea Component', () => {
  it('renders with placeholder', () => {
    render(<Textarea placeholder="Enter text here" />);
    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Textarea label="Message" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    render(<Textarea variant="filled" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('bg-gray-100');
  });

  it('applies correct resize classes', () => {
    render(<Textarea resize="none" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('resize-none');
  });

  it('displays error message', () => {
    render(<Textarea error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<Textarea helperText="Enter detailed information" />);
    expect(screen.getByText('Enter detailed information')).toBeInTheDocument();
  });

  it('prioritizes error over helper text', () => {
    render(
      <Textarea 
        error="This field is required" 
        helperText="This should not appear"
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
  });

  it('handles user input', () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Hello world' } });
    
    expect(handleChange).toHaveBeenCalled();
    expect(textarea).toHaveValue('Hello world');
  });

  it('respects disabled state', () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
  });

  it('sets correct number of rows', () => {
    render(<Textarea rows={5} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('generates unique id when not provided', () => {
    render(
      <div>
        <Textarea label="First" />
        <Textarea label="Second" />
      </div>
    );
    
    const firstTextarea = screen.getByLabelText('First');
    const secondTextarea = screen.getByLabelText('Second');
    
    expect(firstTextarea.id).toBeTruthy();
    expect(secondTextarea.id).toBeTruthy();
    expect(firstTextarea.id).not.toBe(secondTextarea.id);
  });

  it('uses provided id', () => {
    render(<Textarea id="custom-id" label="Test" />);
    const textarea = screen.getByLabelText('Test');
    expect(textarea).toHaveAttribute('id', 'custom-id');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('applies custom className', () => {
    render(<Textarea className="custom-class" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Textarea 
        data-testid="textarea"
        aria-describedby="description"
        maxLength={100}
      />
    );
    
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('aria-describedby', 'description');
    expect(textarea).toHaveAttribute('maxLength', '100');
  });

  it('applies error styles when error is present', () => {
    render(<Textarea error="Error message" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveClass('border-red-300', 'focus:border-red-500', 'focus:ring-red-500');
  });

  it('has correct display name', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });

  describe('Accessibility', () => {
    it('associates label with textarea correctly', () => {
      render(<Textarea id="test-textarea" label="Description" />);
      
      const label = screen.getByText('Description');
      const textarea = screen.getByRole('textbox');
      
      expect(label).toHaveAttribute('for', 'test-textarea');
      expect(textarea).toHaveAttribute('id', 'test-textarea');
    });

    it('has proper ARIA attributes', () => {
      render(
        <Textarea 
          label="Message"
          error="Required field"
          data-testid="textarea"
        />
      );
      
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveAttribute('aria-invalid');
    });

    it('supports keyboard navigation', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      
      textarea.focus();
      expect(document.activeElement).toBe(textarea);
    });
  });

  describe('Variants', () => {
    it('applies default variant styles', () => {
      render(<Textarea variant="default" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveClass('border', 'border-gray-300', 'bg-white');
    });

    it('applies filled variant styles', () => {
      render(<Textarea variant="filled" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveClass('border-0', 'bg-gray-100');
    });
  });

  describe('Resize Options', () => {
    it('applies vertical resize by default', () => {
      render(<Textarea data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveClass('resize-y');
    });

    it('applies no resize when specified', () => {
      render(<Textarea resize="none" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveClass('resize-none');
    });

    it('applies horizontal resize when specified', () => {
      render(<Textarea resize="horizontal" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveClass('resize-x');
    });

    it('applies both resize when specified', () => {
      render(<Textarea resize="both" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');
      expect(textarea).toHaveClass('resize');
    });
  });
});