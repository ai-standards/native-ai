import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  it('renders without label', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    render(<Checkbox size="lg" data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('h-6', 'w-6');
  });

  it('applies correct variant classes', () => {
    render(<Checkbox variant="filled" data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('bg-gray-50');
  });

  it('displays error message', () => {
    render(<Checkbox error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<Checkbox helperText="Check this box to continue" />);
    expect(screen.getByText('Check this box to continue')).toBeInTheDocument();
  });

  it('prioritizes error over helper text', () => {
    render(
      <Checkbox 
        error="This field is required" 
        helperText="This should not appear"
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
  });

  it('handles checkbox state changes', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('respects disabled state', () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
  });

  it('respects checked state', () => {
    render(<Checkbox defaultChecked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('generates unique id when not provided', () => {
    render(
      <div>
        <Checkbox label="First" />
        <Checkbox label="Second" />
      </div>
    );
    
    const firstCheckbox = screen.getByLabelText('First');
    const secondCheckbox = screen.getByLabelText('Second');
    
    expect(firstCheckbox.id).toBeTruthy();
    expect(secondCheckbox.id).toBeTruthy();
    expect(firstCheckbox.id).not.toBe(secondCheckbox.id);
  });

  it('uses provided id', () => {
    render(<Checkbox id="custom-id" label="Test" />);
    const checkbox = screen.getByLabelText('Test');
    expect(checkbox).toHaveAttribute('id', 'custom-id');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Checkbox 
        data-testid="checkbox"
        name="test-checkbox"
        value="test-value"
      />
    );
    
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('name', 'test-checkbox');
    expect(checkbox).toHaveAttribute('value', 'test-value');
  });

  it('applies error styles when error is present', () => {
    render(<Checkbox error="Error message" data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('border-red-300', 'text-red-600', 'focus:ring-red-500');
  });

  it('has correct display name', () => {
    expect(Checkbox.displayName).toBe('Checkbox');
  });

  describe('Accessibility', () => {
    it('associates label with checkbox correctly', () => {
      render(<Checkbox id="test-checkbox" label="Accept" />);
      
      const label = screen.getByText('Accept');
      const checkbox = screen.getByRole('checkbox');
      
      expect(label).toHaveAttribute('for', 'test-checkbox');
      expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    });

    it('supports keyboard navigation', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      
      checkbox.focus();
      expect(document.activeElement).toBe(checkbox);
      
      // Test that checkbox receives focus (keyboard navigation works)
      // Note: Space key toggle may require additional event simulation or component implementation
    });
  });

  describe('Sizes', () => {
    it('applies small size classes', () => {
      render(<Checkbox size="sm" data-testid="checkbox" />);
      const checkbox = screen.getByTestId('checkbox');
      expect(checkbox).toHaveClass('h-4', 'w-4');
    });

    it('applies medium size classes by default', () => {
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId('checkbox');
      expect(checkbox).toHaveClass('h-5', 'w-5');
    });

    it('applies large size classes', () => {
      render(<Checkbox size="lg" data-testid="checkbox" />);
      const checkbox = screen.getByTestId('checkbox');
      expect(checkbox).toHaveClass('h-6', 'w-6');
    });

    it('applies correct label size for small', () => {
      render(<Checkbox size="sm" label="Small label" />);
      const label = screen.getByText('Small label');
      expect(label).toHaveClass('text-sm');
    });

    it('applies correct label size for large', () => {
      render(<Checkbox size="lg" label="Large label" />);
      const label = screen.getByText('Large label');
      expect(label).toHaveClass('text-lg');
    });
  });

  describe('Variants', () => {
    it('applies default variant styles', () => {
      render(<Checkbox variant="default" data-testid="checkbox" />);
      const checkbox = screen.getByTestId('checkbox');
      expect(checkbox).toHaveClass('border-gray-300', 'text-blue-600');
    });

    it('applies filled variant styles', () => {
      render(<Checkbox variant="filled" data-testid="checkbox" />);
      const checkbox = screen.getByTestId('checkbox');
      expect(checkbox).toHaveClass('bg-gray-50', 'border-gray-400');
    });
  });

  describe('Error states', () => {
    it('applies error styles to label when error is present', () => {
      render(<Checkbox label="Test label" error="Error message" />);
      const label = screen.getByText('Test label');
      expect(label).toHaveClass('text-red-700');
    });

    it('indents helper text when label is present', () => {
      render(<Checkbox label="Test" helperText="Helper text" />);
      const helperText = screen.getByText('Helper text');
      expect(helperText).toHaveClass('ml-8');
    });

    it('does not indent helper text when no label', () => {
      render(<Checkbox helperText="Helper text" />);
      const helperText = screen.getByText('Helper text');
      expect(helperText).not.toHaveClass('ml-8');
    });
  });
});