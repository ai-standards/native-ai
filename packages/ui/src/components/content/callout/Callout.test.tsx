import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Callout } from './Callout';

describe('Callout', () => {
  it('renders callout with default props', () => {
    render(<Callout data-testid="callout">Important message</Callout>);
    const callout = screen.getByTestId('callout');
    expect(callout).toBeInTheDocument();
    expect(screen.getByText('Important message')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Callout variant="error" data-testid="callout">Error message</Callout>);
    const callout = screen.getByTestId('callout');
    expect(callout).toHaveClass('bg-red-50', 'border-red-200', 'text-red-900');
  });

  it('applies size styles', () => {
    render(<Callout size="lg" data-testid="callout">Large callout</Callout>);
    const callout = screen.getByTestId('callout');
    expect(callout).toHaveClass('p-6');
  });

  it('renders with title', () => {
    render(<Callout title="Alert Title">Message content</Callout>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Message content')).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<Callout icon="">Custom icon callout</Callout>);
    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('shows default icon for variant', () => {
    render(<Callout variant="success">Success message</Callout>);
    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('renders dismiss button when dismissible', () => {
    render(<Callout dismissible>Dismissible callout</Callout>);
    expect(screen.getByRole('button', { name: 'Dismiss callout' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismissed', () => {
    const onDismiss = vi.fn();
    render(<Callout dismissible onDismiss={onDismiss}>Callout</Callout>);
    
    const dismissButton = screen.getByRole('button', { name: 'Dismiss callout' });
    fireEvent.click(dismissButton);
    
    expect(onDismiss).toHaveBeenCalled();
  });

  it('hides callout when dismissed', () => {
    render(<Callout dismissible data-testid="callout">Callout</Callout>);
    
    const dismissButton = screen.getByRole('button', { name: 'Dismiss callout' });
    fireEvent.click(dismissButton);
    
    expect(screen.queryByTestId('callout')).not.toBeInTheDocument();
  });
});