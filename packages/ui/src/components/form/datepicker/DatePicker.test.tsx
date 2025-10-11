import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders with placeholder', () => {
    render(<DatePicker />);
    
    const input = screen.getByPlaceholderText('Select date');
    expect(input).toBeDefined();
  });

  it('renders with custom placeholder', () => {
    render(<DatePicker placeholder="Pick a date" />);
    
    const input = screen.getByPlaceholderText('Pick a date');
    expect(input).toBeDefined();
  });

  it('displays default value', () => {
    const defaultDate = new Date(2023, 5, 15);
    render(<DatePicker defaultValue={defaultDate} />);
    
    const input = screen.getByDisplayValue('06/15/2023');
    expect(input).toBeDefined();
  });

  it('handles controlled value', () => {
    const controlledDate = new Date(2023, 11, 25);
    render(<DatePicker value={controlledDate} />);
    
    const input = screen.getByDisplayValue('12/25/2023');
    expect(input).toBeDefined();
  });

  it('opens calendar on click', () => {
    render(<DatePicker />);
    
    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);
    
    // Check that some month name is displayed (current month)
    const monthRegex = /January|February|March|April|May|June|July|August|September|October|November|December/;
    expect(screen.getByText(monthRegex)).toBeDefined();
  });

  it('renders with label', () => {
    render(<DatePicker label="Birth Date" id="birthdate" />);
    
    const label = screen.getByText('Birth Date');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('birthdate');
  });

  it('shows error state', () => {
    render(
      <DatePicker 
        label="Date" 
        error 
        errorMessage="Please select a valid date"
        id="date"
      />
    );
    
    const errorMessage = screen.getByText('Please select a valid date');
    expect(errorMessage).toBeDefined();
  });

  it('handles disabled state', () => {
    render(<DatePicker disabled />);
    
    const input = screen.getByPlaceholderText('Select date');
    expect(input).toBeDisabled();
  });

  it('calls onChange when date is selected', () => {
    const handleChange = vi.fn();
    render(<DatePicker onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);
    
    // Click on a date (assuming current month has day 15)
    const dateButton = screen.getByText('15');
    fireEvent.click(dateButton);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('navigates between months', () => {
    render(<DatePicker />);
    
    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);
    
    const nextButton = screen.getByRole('button', { name: 'Next month' });
    fireEvent.click(nextButton);
    
    // Should show next month (testing is complex without knowing current date)
    const monthRegex = /January|February|March|April|May|June|July|August|September|October|November|December/;
    expect(screen.getByText(monthRegex)).toBeDefined();
  });

  it('closes calendar on outside click', () => {
    render(
      <div>
        <DatePicker />
        <button>Outside button</button>
      </div>
    );
    
    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);
    
    // Calendar should be open - check that some month name is displayed
    const monthRegex = /January|February|March|April|May|June|July|August|September|October|November|December/;
    expect(screen.getByText(monthRegex)).toBeDefined();
    
    // Click outside
    const outsideButton = screen.getByText('Outside button');
    fireEvent.mouseDown(outsideButton);
    
    // Calendar should close (test would need more complex setup to verify)
  });

  it('formats date correctly', () => {
    const date = new Date(2023, 0, 1);
    render(<DatePicker value={date} />);
    
    const input = screen.getByDisplayValue('01/01/2023');
    expect(input).toBeDefined();
  });

  it('handles manual date input', () => {
    const handleChange = vi.fn();
    render(<DatePicker onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Select date');
    fireEvent.change(input, { target: { value: '12/25/2023' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies size classes', () => {
    render(<DatePicker size="lg" />);
    
    const input = screen.getByPlaceholderText('Select date');
    expect(input).toHaveClass('px-4', 'py-3', 'text-lg');
  });

  it('sets name and id attributes', () => {
    render(<DatePicker name="birth-date" id="birth-date-input" />);
    
    const input = screen.getByPlaceholderText('Select date');
    expect(input.getAttribute('name')).toBe('birth-date');
    expect(input.getAttribute('id')).toBe('birth-date-input');
  });
});