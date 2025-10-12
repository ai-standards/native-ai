import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { useDebounce } from './useDebounce';

// Test component that uses the debounce hook
const TestComponent: React.FC<{ onSearch: (query: string) => void; delay?: number }> = ({ 
  onSearch, 
  delay = 300 
}) => {
  const [query, setQuery] = React.useState('');
  const debouncedSearch = useDebounce(onSearch, delay);

  React.useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  return (
    <input
      data-testid="search-input"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

describe('useDebounce integration test', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should work in a real component without hanging', () => {
    const mockSearch = vi.fn();
    render(<TestComponent onSearch={mockSearch} delay={500} />);

    const input = screen.getByTestId('search-input');

    // Type rapidly
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.change(input, { target: { value: 'abc' } });

    // Should not be called yet
    expect(mockSearch).not.toHaveBeenCalled();

    // Fast forward time
    vi.advanceTimersByTime(500);

    // Should be called once with the final value
    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(mockSearch).toHaveBeenCalledWith('abc');
  });

  it('should cleanup properly when component unmounts', () => {
    const mockSearch = vi.fn();
    const { unmount } = render(<TestComponent onSearch={mockSearch} delay={500} />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test' } });

    // Unmount before debounce completes
    unmount();

    // Complete the time
    vi.advanceTimersByTime(500);

    // Should not be called after unmount
    expect(mockSearch).not.toHaveBeenCalled();
  });
});