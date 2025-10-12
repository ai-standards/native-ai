import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Toast, ToastContainer } from './Toast';

// Mock timers
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  if (vi.isFakeTimers()) {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  }
});

describe('Toast', () => {
  it('renders with default props', () => {
    render(<Toast>Test message</Toast>);
    
    const toast = screen.getByRole('alert');
    expect(toast).toBeTruthy();
    expect(screen.getByText('Test message')).toBeTruthy();
  });

  it('renders with title', () => {
    render(<Toast title="Test Title">Test message</Toast>);
    
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test message')).toBeTruthy();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Toast variant="success">Success message</Toast>);
    
    let toast = screen.getByRole('alert');
    expect(toast.className).toContain('border-green-200');
    
    rerender(<Toast variant="error">Error message</Toast>);
    toast = screen.getByRole('alert');
    expect(toast.className).toContain('border-red-200');
  });

  it('shows default icon by default', () => {
    const { container } = render(<Toast variant="info">Info message</Toast>);
    
    const icon = container.querySelector('svg');
    expect(icon).toBeTruthy();
  });

  it('hides icon when showIcon is false', () => {
    const { container } = render(<Toast showIcon={false} closable={false}>No icon message</Toast>);
    
    const icon = container.querySelector('svg');
    expect(icon).toBe(null);
  });

  it('renders custom icon', () => {
    const customIcon = <div data-testid="custom-icon">Custom</div>;
    render(<Toast icon={customIcon}>Custom icon message</Toast>);
    
    expect(screen.getByTestId('custom-icon')).toBeTruthy();
  });

  it('shows close button when closable', () => {
    render(<Toast closable>Closable message</Toast>);
    
    const closeButton = screen.getByLabelText('Close toast');
    expect(closeButton).toBeTruthy();
  });

  it('hides close button when not closable', () => {
    render(<Toast closable={false}>Not closable message</Toast>);
    
    expect(screen.queryByLabelText('Close toast')).toBe(null);
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<Toast closable onClose={onClose}>Closable message</Toast>);
    
    const closeButton = screen.getByLabelText('Close toast');
    fireEvent.click(closeButton);
    
    // Wait for exit animation
    act(() => {
      vi.advanceTimersByTime(300);
    });
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('auto-dismisses after duration', () => {
    const onClose = vi.fn();
    render(<Toast duration={3000} onClose={onClose}>Auto-dismiss message</Toast>);
    
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    
    // Wait for exit animation
    act(() => {
      vi.advanceTimersByTime(300);
    });
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not auto-dismiss when duration is 0', () => {
    const onClose = vi.fn();
    render(<Toast duration={0} onClose={onClose}>Persistent message</Toast>);
    
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    
    expect(onClose).not.toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    render(<Toast>Accessible toast</Toast>);
    
    const toast = screen.getByRole('alert');
    expect(toast.getAttribute('aria-live')).toBe('assertive');
    expect(toast.getAttribute('aria-atomic')).toBe('true');
  });

  it('applies custom className', () => {
    render(<Toast className="custom-class">Custom class message</Toast>);
    
    const toast = screen.getByRole('alert');
    expect(toast.className).toContain('custom-class');
  });
});

describe('ToastContainer', () => {
  it('renders with default props', () => {
    const { container } = render(
      <ToastContainer>
        <Toast>Toast 1</Toast>
        <Toast>Toast 2</Toast>
      </ToastContainer>
    );
    
    expect(screen.getByText('Toast 1')).toBeTruthy();
    expect(screen.getByText('Toast 2')).toBeTruthy();
    expect((container.firstChild as HTMLElement)?.className).toContain('top-4');
    expect((container.firstChild as HTMLElement)?.className).toContain('right-4');
  });

  it('applies position classes correctly', () => {
    const { rerender, container } = render(
      <ToastContainer position="bottom-left">
        <Toast>Toast</Toast>
      </ToastContainer>
    );
    
    expect((container.firstChild as HTMLElement)?.className).toContain('bottom-4');
    expect((container.firstChild as HTMLElement)?.className).toContain('left-4');
    
    rerender(
      <ToastContainer position="top-center">
        <Toast>Toast</Toast>
      </ToastContainer>
    );
    
    expect((container.firstChild as HTMLElement)?.className).toContain('top-4');
    expect((container.firstChild as HTMLElement)?.className).toContain('left-1/2');
  });

  it('limits number of toasts based on max prop', () => {
    render(
      <ToastContainer max={2}>
        <Toast>Toast 1</Toast>
        <Toast>Toast 2</Toast>
        <Toast>Toast 3</Toast>
      </ToastContainer>
    );
    
    expect(screen.getByText('Toast 1')).toBeTruthy();
    expect(screen.getByText('Toast 2')).toBeTruthy();
    expect(screen.queryByText('Toast 3')).toBe(null);
  });

  it('applies custom className', () => {
    const { container } = render(
      <ToastContainer className="custom-container">
        <Toast>Toast</Toast>
      </ToastContainer>
    );
    
    expect((container.firstChild as HTMLElement)?.className).toContain('custom-container');
  });
});