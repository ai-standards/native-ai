import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { FormField } from './FormField';

describe('FormField', () => {
  const mockInput = <input type="text" />;

  it('renders with label and children', () => {
    render(
      <FormField label="Test Field">
        {mockInput}
      </FormField>
    );

    expect(screen.getByText('Test Field')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(
      <FormField label="Required Field" required>
        {mockInput}
      </FormField>
    );

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(
      <FormField label="Test Field" error="This field is required">
        {mockInput}
      </FormField>
    );

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('This field is required');
  });

  it('displays helper text when no error', () => {
    render(
      <FormField label="Test Field" helperText="Enter your information">
        {mockInput}
      </FormField>
    );

    expect(screen.getByText('Enter your information')).toBeInTheDocument();
  });

  it('hides helper text when error is present', () => {
    render(
      <FormField 
        label="Test Field" 
        error="This field is required"
        helperText="Enter your information"
      >
        {mockInput}
      </FormField>
    );

    expect(screen.queryByText('Enter your information')).not.toBeInTheDocument();
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies correct layout for left label position', () => {
    const { container } = render(
      <FormField label="Test Field" labelPosition="left">
        {mockInput}
      </FormField>
    );

    const fieldContainer = container.firstChild as HTMLElement;
    expect(fieldContainer).toHaveClass('flex', 'items-start', 'gap-3');
  });

  it('applies correct layout for floating label position', () => {
    const { container } = render(
      <FormField label="Test Field" labelPosition="floating">
        {mockInput}
      </FormField>
    );

    const fieldContainer = container.firstChild as HTMLElement;
    expect(fieldContainer).toHaveClass('relative');
  });

  it('passes id to child input', () => {
    render(
      <FormField label="Test Field" id="test-field">
        {mockInput}
      </FormField>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'test-field');
  });

  it('sets aria-describedby when error is present', () => {
    render(
      <FormField label="Test Field" id="test-field" error="Error message">
        {mockInput}
      </FormField>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'test-field-error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-describedby when helper text is present', () => {
    render(
      <FormField label="Test Field" id="test-field" helperText="Helper text">
        {mockInput}
      </FormField>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'test-field-helper');
  });

  it('applies size classes correctly', () => {
    render(
      <FormField label="Test Field" size="lg">
        {mockInput}
      </FormField>
    );

    const label = screen.getByText('Test Field');
    expect(label).toHaveClass('text-lg');
  });

  it('hides required indicator when showRequiredIndicator is false', () => {
    render(
      <FormField label="Required Field" required showRequiredIndicator={false}>
        {mockInput}
      </FormField>
    );

    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });
});