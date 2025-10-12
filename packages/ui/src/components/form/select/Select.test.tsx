import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select Component', () => {
  it('renders with options', () => {
    render(<Select options={sampleOptions} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select label="Choose Option" options={sampleOptions} />);
    expect(screen.getByLabelText('Choose Option')).toBeInTheDocument();
    expect(screen.getByText('Choose Option')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(
      <Select 
        options={sampleOptions} 
        placeholder="Select an option" 
      />
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    render(
      <Select 
        variant="filled" 
        options={sampleOptions} 
        data-testid="select" 
      />
    );
    const select = screen.getByTestId('select');
    expect(select).toHaveClass('bg-gray-100');
  });

  it('displays error message', () => {
    render(
      <Select 
        options={sampleOptions} 
        error="This field is required" 
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <Select 
        options={sampleOptions} 
        helperText="Choose wisely" 
      />
    );
    expect(screen.getByText('Choose wisely')).toBeInTheDocument();
  });

  it('prioritizes error over helper text', () => {
    render(
      <Select 
        options={sampleOptions}
        error="This field is required" 
        helperText="This should not appear"
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
  });

  it('handles selection change', () => {
    const handleChange = vi.fn();
    render(
      <Select 
        options={sampleOptions} 
        onChange={handleChange} 
      />
    );
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('respects disabled state', () => {
    render(<Select options={sampleOptions} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
  });

  it('renders disabled options', () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ];
    
    render(<Select options={optionsWithDisabled} />);
    const disabledOption = screen.getByText('Option 2');
    expect(disabledOption).toHaveProperty('disabled', true);
  });

  it('generates unique id when not provided', () => {
    render(
      <div>
        <Select label="First" options={sampleOptions} />
        <Select label="Second" options={sampleOptions} />
      </div>
    );
    
    const firstSelect = screen.getByLabelText('First');
    const secondSelect = screen.getByLabelText('Second');
    
    expect(firstSelect.id).toBeTruthy();
    expect(secondSelect.id).toBeTruthy();
    expect(firstSelect.id).not.toBe(secondSelect.id);
  });

  it('uses provided id', () => {
    render(
      <Select 
        id="custom-id" 
        label="Test" 
        options={sampleOptions} 
      />
    );
    const select = screen.getByLabelText('Test');
    expect(select).toHaveAttribute('id', 'custom-id');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Select ref={ref} options={sampleOptions} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it('applies custom className', () => {
    render(
      <Select 
        className="custom-class" 
        options={sampleOptions}
        data-testid="select" 
      />
    );
    const select = screen.getByTestId('select');
    expect(select).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Select 
        options={sampleOptions}
        data-testid="select"
        aria-describedby="description"
        name="test-select"
      />
    );
    
    const select = screen.getByTestId('select');
    expect(select).toHaveAttribute('aria-describedby', 'description');
    expect(select).toHaveAttribute('name', 'test-select');
  });

  it('applies error styles when error is present', () => {
    render(
      <Select 
        options={sampleOptions}
        error="Error message" 
        data-testid="select" 
      />
    );
    const select = screen.getByTestId('select');
    expect(select).toHaveClass('border-red-300', 'focus:border-red-500', 'focus:ring-red-500');
  });

  it('has correct display name', () => {
    expect(Select.displayName).toBe('Select');
  });

  it('renders dropdown arrow', () => {
    render(<Select options={sampleOptions} />);
    const arrow = screen.getByRole('combobox').nextElementSibling;
    expect(arrow).toHaveClass('absolute', 'inset-y-0', 'right-0');
  });

  describe('Accessibility', () => {
    it('associates label with select correctly', () => {
      render(
        <Select 
          id="test-select" 
          label="Choose" 
          options={sampleOptions} 
        />
      );
      
      const label = screen.getByText('Choose');
      const select = screen.getByRole('combobox');
      
      expect(label).toHaveAttribute('for', 'test-select');
      expect(select).toHaveAttribute('id', 'test-select');
    });

    it('supports keyboard navigation', () => {
      render(<Select options={sampleOptions} />);
      const select = screen.getByRole('combobox');
      
      select.focus();
      expect(document.activeElement).toBe(select);
    });
  });

  describe('Variants', () => {
    it('applies default variant styles', () => {
      render(
        <Select 
          variant="default" 
          options={sampleOptions}
          data-testid="select" 
        />
      );
      const select = screen.getByTestId('select');
      expect(select).toHaveClass('border', 'border-gray-300', 'bg-white');
    });

    it('applies filled variant styles', () => {
      render(
        <Select 
          variant="filled" 
          options={sampleOptions}
          data-testid="select" 
        />
      );
      const select = screen.getByTestId('select');
      expect(select).toHaveClass('border-0', 'bg-gray-100');
    });
  });
});