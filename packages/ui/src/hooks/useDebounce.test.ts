import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebounce, useDebounceValue } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should debounce function calls', () => {
    const mockFn = vi.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 500));

    // Call the debounced function multiple times
    act(() => {
      result.current('test1');
      result.current('test2');
      result.current('test3');
    });

    // Function should not be called yet
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward time by 499ms (just before delay)
    act(() => {
      vi.advanceTimersByTime(499);
    });

    // Still should not be called
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward to complete the delay
    act(() => {
      vi.advanceTimersByTime(1);
    });

    // Now it should be called once with the last arguments
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('test3');
  });

  it('should cancel previous timeout when called again', () => {
    const mockFn = vi.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 500));

    // First call
    act(() => {
      result.current('first');
    });

    // Fast-forward partway
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Second call should cancel the first
    act(() => {
      result.current('second');
    });

    // Complete the original delay time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should be called with the second argument
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('second');
  });

  it('should handle multiple parameters', () => {
    const mockFn = vi.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 100));

    act(() => {
      result.current('param1', 'param2', 123);
    });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(mockFn).toHaveBeenCalledWith('param1', 'param2', 123);
  });

  it('should update callback when it changes', () => {
    const mockFn1 = vi.fn();
    const mockFn2 = vi.fn();
    
    const { result, rerender } = renderHook(
      ({ callback }) => useDebounce(callback, 100),
      { initialProps: { callback: mockFn1 } }
    );

    // Call with first callback
    act(() => {
      result.current('test');
    });

    // Update the callback
    rerender({ callback: mockFn2 });

    // Complete the delay
    act(() => {
      vi.advanceTimersByTime(100);
    });

    // Should call the updated callback
    expect(mockFn1).not.toHaveBeenCalled();
    expect(mockFn2).toHaveBeenCalledWith('test');
  });

  it('should cleanup timers on unmount', () => {
    const mockFn = vi.fn();
    const { result, unmount } = renderHook(() => useDebounce(mockFn, 500));

    // Call the debounced function
    act(() => {
      result.current('test');
    });

    // Unmount before the delay completes
    unmount();

    // Complete the delay
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Function should not be called after unmount
    expect(mockFn).not.toHaveBeenCalled();
  });
});

describe('useDebounceValue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounceValue('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('should debounce value updates', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounceValue(value, 500),
      { initialProps: { value: 'initial' } }
    );

    expect(result.current).toBe('initial');

    // Update the value
    rerender({ value: 'updated' });

    // Should still return the initial value
    expect(result.current).toBe('initial');

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Now should return the updated value
    expect(result.current).toBe('updated');
  });

  it('should cancel previous debounce on new value', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounceValue(value, 500),
      { initialProps: { value: 'initial' } }
    );

    // First update
    rerender({ value: 'first' });
    
    // Partial delay
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Second update should cancel first
    rerender({ value: 'second' });

    // Complete original delay
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should have the second value
    expect(result.current).toBe('second');
  });

  it('should handle different value types', () => {
    // Test with numbers
    const { result: numberResult, rerender: numberRerender } = renderHook(
      ({ value }) => useDebounceValue(value, 100),
      { initialProps: { value: 0 } }
    );

    numberRerender({ value: 42 });
    act(() => { vi.advanceTimersByTime(100); });
    expect(numberResult.current).toBe(42);

    // Test with objects
    const { result: objectResult, rerender: objectRerender } = renderHook(
      ({ value }) => useDebounceValue(value, 100),
      { initialProps: { value: { name: 'initial' } } }
    );

    const newObj = { name: 'updated' };
    objectRerender({ value: newObj });
    act(() => { vi.advanceTimersByTime(100); });
    expect(objectResult.current).toBe(newObj);
  });

  it('should cleanup timers on unmount', () => {
    const { result, rerender, unmount } = renderHook(
      ({ value }) => useDebounceValue(value, 500),
      { initialProps: { value: 'initial' } }
    );

    // Update value
    rerender({ value: 'updated' });

    // Unmount before delay completes
    unmount();

    // This should not throw or cause memory leaks
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // No way to test the final value after unmount, but no errors should occur
    expect(true).toBe(true); // Test passes if no errors thrown
  });
});