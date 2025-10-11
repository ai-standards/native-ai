import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput } from './PasswordInput';

describe('PasswordInput', () => {
  it('renders with default hidden state', () => {
    render(<PasswordInput placeholder="Enter password" />);
    
    const input = screen.getByPlaceholderText('Enter password');
    expect(input.getAttribute('type')).toBe('password');
  });

  it('toggles visibility when button is clicked', () => {
    render(<PasswordInput placeholder="Enter password" />);
    
    const input = screen.getByPlaceholderText('Enter password');
    const toggleButton = screen.getByRole('button');
    
    expect(input.getAttribute('type')).toBe('password');
    
    fireEvent.click(toggleButton);
    expect(input.getAttribute('type')).toBe('text');
    
    fireEvent.click(toggleButton);
    expect(input.getAttribute('type')).toBe('password');
  });

  it('renders with label', () => {
    render(<PasswordInput label="Password" id="password" />);
    
    const label = screen.getByText('Password');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('password');
  });

  it('shows error message', () => {
    render(<PasswordInput error="Password is required" />);
    
    expect(screen.getByText('Password is required')).toBeDefined();
  });

  it('shows helper text', () => {
    render(<PasswordInput helperText="Must be at least 8 characters" />);
    
    expect(screen.getByText('Must be at least 8 characters')).toBeDefined();
  });

  it('shows character count when enabled', () => {
    render(<PasswordInput showCount maxLength={10} defaultValue="test" />);
    
    expect(screen.getByText('4/10')).toBeDefined();
  });

  it('shows password strength when enabled', () => {
    render(<PasswordInput showStrength defaultValue="weakpass" />);
    
    expect(screen.getByText(/Password strength:/)).toBeDefined();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<PasswordInput onChange={handleChange} />);
    
    const input = screen.getByDisplayValue('');
    fireEvent.change(input, { target: { value: 'newpassword' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('handles controlled value', () => {
    render(<PasswordInput value="controlled" onChange={() => {}} />);
    
    const input = screen.getByDisplayValue('controlled');
    expect(input).toBeDefined();
  });

  it('applies size classes', () => {
    render(<PasswordInput size="lg" />);
    
    const input = document.querySelector('input[type="password"]');
    expect(input).toHaveClass('px-4', 'py-3', 'text-lg');
  });

  it('respects maxLength attribute', () => {
    render(<PasswordInput maxLength={8} />);
    
    const input = document.querySelector('input[type="password"]');
    expect(input.getAttribute('maxlength')).toBe('8');
  });

  it('updates strength score correctly', () => {
    render(<PasswordInput showStrength />);
    
    const input = document.querySelector('input[type="password"]');
    expect(input).toBeTruthy();
    
    // Weak password
    fireEvent.change(input!, { target: { value: 'weak' } });
    expect(screen.getByText(/Too weak/)).toBeDefined();
    
    // Strong password
    fireEvent.change(input!, { target: { value: 'StrongPass123!' } });
    expect(screen.getByText(/Strong/)).toBeDefined();
  });

  it('uses custom strength validation', () => {
    const customValidate = (password: string) => ({
      score: password.length > 5 ? 4 : 0,
      feedback: password.length > 5 ? 'Custom Strong' : 'Custom Weak'
    });
    
    render(<PasswordInput showStrength validateStrength={customValidate} />);
    
    const input = document.querySelector('input[type="password"]');
    expect(input).toBeTruthy();
    
    // Test weak password (5 chars or less)
    fireEvent.change(input!, { target: { value: 'test' } });
    expect(screen.getByText(/Custom Weak/)).toBeDefined();
    
    // Test strong password (more than 5 chars)
    fireEvent.change(input!, { target: { value: 'custom' } });
    expect(screen.getByText(/Custom Strong/)).toBeDefined();
  });

  it('sets name and id attributes', () => {
    render(<PasswordInput name="password" id="password-input" />);
    
    const input = document.querySelector('input[type="password"]');
    expect(input).toBeTruthy();
    expect(input!.getAttribute('name')).toBe('password');
    expect(input!.getAttribute('id')).toBe('password-input');
  });

  it('applies error styling', () => {
    render(<PasswordInput error="Error message" />);
    
    const input = document.querySelector('input[type="password"]');
    expect(input).toHaveClass('border-red-500');
  });
});