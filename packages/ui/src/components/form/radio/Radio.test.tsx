import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Radio } from './Radio';

const mockOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

describe('Radio', () => {
  it('renders all options', () => {
    render(<Radio options={mockOptions} name="test-radio" />);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects default value', () => {
    render(<Radio options={mockOptions} name="test-radio" defaultValue="option2" />);
    
    const option2Radio = screen.getByRole('radio', { name: 'Option 2' });
    expect(option2Radio).toBeChecked();
  });

  it('handles controlled value', () => {
    render(<Radio options={mockOptions} name="test-radio" value="option1" />);
    
    const option1Radio = screen.getByRole('radio', { name: 'Option 1' });
    expect(option1Radio).toBeChecked();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    render(<Radio options={mockOptions} name="test-radio" onChange={handleChange} />);
    
    const option2Radio = screen.getByRole('radio', { name: 'Option 2' });
    fireEvent.click(option2Radio);
    
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Radio options={mockOptions} name="test-radio" onChange={handleChange} disabled />);
    
    const option1Radio = screen.getByRole('radio', { name: 'Option 1' });
    fireEvent.click(option1Radio);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('disables individual options', () => {
    const optionsWithDisabled = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2', disabled: true },
      { label: 'Option 3', value: 'option3' }
    ];
    
    render(<Radio options={optionsWithDisabled} name="test-radio" />);
    
    const option2Radio = screen.getByRole('radio', { name: 'Option 2' });
    expect(option2Radio).toBeDisabled();
  });

  it('applies horizontal orientation class', () => {
    const { container } = render(
      <Radio options={mockOptions} name="test-radio" orientation="horizontal" />
    );
    
    const radioGroup = container.firstChild;
    expect(radioGroup).toHaveClass('flex-row');
  });

  it('applies vertical orientation class', () => {
    const { container } = render(
      <Radio options={mockOptions} name="test-radio" orientation="vertical" />
    );
    
    const radioGroup = container.firstChild;
    expect(radioGroup).toHaveClass('flex-col');
  });

  it('applies size classes', () => {
    const { container } = render(
      <Radio options={mockOptions} name="test-radio" size="lg" />
    );
    
    const radioGroup = container.firstChild;
    expect(radioGroup).toHaveClass('text-lg');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Radio options={mockOptions} name="test-radio" className="custom-class" />
    );
    
    const radioGroup = container.firstChild;
    expect(radioGroup).toHaveClass('custom-class');
  });

  it('maintains selection state', () => {
    render(<Radio options={mockOptions} name="test-radio" />);
    
    const option1Radio = screen.getByRole('radio', { name: 'Option 1' });
    const option2Radio = screen.getByRole('radio', { name: 'Option 2' });
    
    fireEvent.click(option1Radio);
    expect(option1Radio).toBeChecked();
    expect(option2Radio).not.toBeChecked();
    
    fireEvent.click(option2Radio);
    expect(option1Radio).not.toBeChecked();
    expect(option2Radio).toBeChecked();
  });
});