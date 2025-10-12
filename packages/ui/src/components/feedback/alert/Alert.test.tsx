import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders with default props', () => {
    render(<Alert>Test message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeTruthy();
    expect(screen.getByText('Test message')).toBeTruthy();
  });

  it('renders with title', () => {
    render(<Alert title="Test Title">Test message</Alert>);
    
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test message')).toBeTruthy();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Alert variant="success">Success message</Alert>);
    
    let alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-green-50');
    expect(alert.className).toContain('border-green-200');
    
    rerender(<Alert variant="error">Error message</Alert>);
    alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-red-50');
    expect(alert.className).toContain('border-red-200');
  });

  it('shows default icon by default', () => {
    const { container } = render(<Alert variant="info">Info message</Alert>);
    
    const icon = container.querySelector('svg');
    expect(icon).toBeTruthy();
  });

  it('hides icon when showIcon is false', () => {
    const { container } = render(<Alert showIcon={false}>No icon message</Alert>);
    
    const icon = container.querySelector('svg');
    expect(icon).toBe(null);
  });

  it('renders custom icon', () => {
    const customIcon = <div data-testid="custom-icon">Custom</div>;
    render(<Alert icon={customIcon}>Custom icon message</Alert>);
    
    expect(screen.getByTestId('custom-icon')).toBeTruthy();
  });

  it('shows dismiss button when dismissible', () => {
    render(<Alert dismissible>Dismissible message</Alert>);
    
    const dismissButton = screen.getByLabelText('Dismiss alert');
    expect(dismissButton).toBeTruthy();
  });

  it('calls onDismiss when dismiss button is clicked', () => {
    const onDismiss = vi.fn();
    render(<Alert dismissible onDismiss={onDismiss}>Dismissible message</Alert>);
    
    const dismissButton = screen.getByLabelText('Dismiss alert');
    fireEvent.click(dismissButton);
    
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('hides alert after dismissing', () => {
    render(<Alert dismissible>Dismissible message</Alert>);
    
    const dismissButton = screen.getByLabelText('Dismiss alert');
    fireEvent.click(dismissButton);
    
    expect(screen.queryByRole('alert')).toBe(null);
  });

  it('has proper accessibility attributes', () => {
    render(<Alert>Accessible alert</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert.getAttribute('aria-live')).toBe('polite');
  });

  it('applies custom className', () => {
    render(<Alert className="custom-class">Custom class message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('custom-class');
  });

  it('forwards additional props', () => {
    render(<Alert data-testid="custom-alert" id="test-alert">Props message</Alert>);
    
    const alert = screen.getByTestId('custom-alert');
    expect(alert.getAttribute('id')).toBe('test-alert');
  });
});