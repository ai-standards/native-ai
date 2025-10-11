import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders with default unchecked state', () => {
    render(<Switch />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute('aria-checked')).toBe('false');
  });

  it('renders with default checked state', () => {
    render(<Switch defaultChecked />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement.getAttribute('aria-checked')).toBe('true');
  });

  it('handles controlled checked state', () => {
    render(<Switch checked={true} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement.getAttribute('aria-checked')).toBe('true');
  });

  it('calls onChange when toggled', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} disabled />);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with label on the right', () => {
    render(<Switch label="Enable notifications" id="notifications" />);
    
    const label = screen.getByText('Enable notifications');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('notifications');
  });

  it('renders with label on the left', () => {
    render(<Switch label="Dark mode" labelPosition="left" id="darkmode" />);
    
    const label = screen.getByText('Dark mode');
    expect(label).toBeDefined();
  });

  it('applies disabled styles when disabled', () => {
    render(<Switch disabled />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('cursor-not-allowed', 'opacity-50');
  });

  it('toggles state on multiple clicks', () => {
    render(<Switch />);
    
    const switchElement = screen.getByRole('switch');
    
    // Initial state is unchecked
    expect(switchElement.getAttribute('aria-checked')).toBe('false');
    
    // First click - should be checked
    fireEvent.click(switchElement);
    expect(switchElement.getAttribute('aria-checked')).toBe('true');
    
    // Second click - should be unchecked
    fireEvent.click(switchElement);
    expect(switchElement.getAttribute('aria-checked')).toBe('false');
  });

  it('applies custom className', () => {
    render(<Switch className="custom-switch" />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('custom-switch');
  });

  it('sets name attribute', () => {
    render(<Switch name="switch-name" />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement.getAttribute('name')).toBe('switch-name');
  });

  it('focuses properly with keyboard navigation', () => {
    render(<Switch />);
    
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    
    expect(document.activeElement).toBe(switchElement);
  });

  it('updates when controlled value changes', () => {
    const { rerender } = render(<Switch checked={false} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement.getAttribute('aria-checked')).toBe('false');
    
    rerender(<Switch checked={true} />);
    expect(switchElement.getAttribute('aria-checked')).toBe('true');
  });
});