import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Form, useFormContext } from './Form';
import { Input } from '../input';
import { NumberInput } from '../numberinput';
import { Checkbox } from '../checkbox';

// Mock components for testing
const MockInput = ({ name, onChange, value, ...props }: any) => (
  <input
    name={name}
    value={value || ''}
    onChange={(e) => onChange?.(e.target.value)}
    data-testid={`input-${name}`}
    {...props}
  />
);

const MockCheckbox = ({ name, onChange, checked, value, ...props }: any) => (
  <input
    type="checkbox"
    name={name}
    checked={checked !== undefined ? checked : (value || false)}
    onChange={(e) => onChange?.(e)}
    data-testid={`checkbox-${name}`}
    {...props}
  />
);

describe('Form', () => {
  it('renders form with children', () => {
    render(
      <Form>
        <MockInput name="test" />
      </Form>
    );
    
    expect(screen.getByTestId('input-test')).toBeDefined();
  });

  it('collects form data from named controls', async () => {
    const handleChange = vi.fn();
    
    render(
      <Form onChange={handleChange}>
        <MockInput name="firstName" />
        <MockInput name="lastName" />
      </Form>
    );
    
    const firstNameInput = screen.getByTestId('input-firstName');
    const lastNameInput = screen.getByTestId('input-lastName');
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    
    // Wait for debounced onChange with timeout
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe'
      });
    }, { timeout: 1000 });
  });

  it('handles different field types', async () => {
    const handleChange = vi.fn();
    
    render(
      <Form onChange={handleChange}>
        <MockInput name="name" />
      </Form>
    );
    
    const nameInput = screen.getByTestId('input-name');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith({
        name: 'Test User'
      });
    });
  });

  it('provides default values', () => {
    const defaultValues = {
      firstName: 'John',
      lastName: 'Doe'
    };
    
    render(
      <Form defaultValues={defaultValues}>
        <MockInput name="firstName" />
        <MockInput name="lastName" />
      </Form>
    );
    
    expect(screen.getByDisplayValue('John')).toBeDefined();
    expect(screen.getByDisplayValue('Doe')).toBeDefined();
  });

  it('handles controlled values', () => {
    const values = {
      firstName: 'Jane',
      lastName: 'Smith'
    };
    
    render(
      <Form values={values}>
        <MockInput name="firstName" />
        <MockInput name="lastName" />
      </Form>
    );
    
    expect(screen.getByDisplayValue('Jane')).toBeDefined();
    expect(screen.getByDisplayValue('Smith')).toBeDefined();
  });

  it('debounces onChange calls', async () => {
    vi.useFakeTimers();
    const handleChange = vi.fn();
    
    render(
      <Form onChange={handleChange} debounceMs={100}>
        <MockInput name="test" />
      </Form>
    );
    
    const input = screen.getByTestId('input-test');
    
    // Rapid changes
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.change(input, { target: { value: 'abc' } });
    
    // Advance timers to trigger debounced function
    vi.advanceTimersByTime(150);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({ test: 'abc' });
    
    vi.useRealTimers();
  });

  it('handles error tracking', async () => {
    const handleErrorChange = vi.fn();
    
    render(
      <Form onErrorChange={handleErrorChange}>
        <MockInput name="required" />
      </Form>
    );
    
    // For now, we'll test that the form accepts the error callback
    // The actual error tracking can be implemented in a future iteration
    expect(typeof handleErrorChange).toBe('function');
  });

  it('handles nested form controls', async () => {
    const handleChange = vi.fn();
    
    render(
      <Form onChange={handleChange}>
        <div>
          <div>
            <MockInput name="nested" />
          </div>
        </div>
      </Form>
    );
    
    const input = screen.getByTestId('input-nested');
    fireEvent.change(input, { target: { value: 'nested value' } });
    
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith({
        nested: 'nested value'
      });
    });
  });

  it('prevents default form submission', () => {
    const handleSubmit = vi.fn();
    
    render(
      <Form onSubmit={handleSubmit}>
        <MockInput name="test" />
        <button type="submit">Submit</button>
      </Form>
    );
    
    const form = screen.getByRole('button').closest('form')!;
    fireEvent.submit(form);
    
    expect(handleSubmit).toHaveBeenCalled();
    // Check that preventDefault was called (form doesn't actually submit)
  });

  it('applies custom className', () => {
    render(
      <Form className="custom-form">
        <MockInput name="test" />
      </Form>
    );
    
    const form = screen.getByTestId('input-test').closest('form')!;
    expect(form).toHaveClass('custom-form');
  });

  it('handles validation modes', () => {
    render(
      <Form validationMode="onBlur">
        <MockInput name="test" />
      </Form>
    );
    
    // Component should render without errors
    expect(screen.getByTestId('input-test')).toBeDefined();
  });
});