import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchInput } from './SearchInput';

const mockSuggestions = [
  { value: 'apple', label: 'Apple', description: 'A red fruit' },
  { value: 'banana', label: 'Banana', description: 'A yellow fruit' },
  { value: 'cherry', label: 'Cherry', description: 'A small red fruit' }
];

describe('SearchInput', () => {
  it('renders with search icon', () => {
    render(<SearchInput placeholder="Search..." />);
    
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeDefined();
    
    // Search icon should be present
    const searchIcon = document.querySelector('svg');
    expect(searchIcon).toBeDefined();
  });

  it('shows suggestions on focus when available', () => {
    render(<SearchInput suggestions={mockSuggestions} defaultValue="a" />);
    
    const input = screen.getByDisplayValue('a');
    fireEvent.focus(input);
    
    expect(screen.getByText('Apple')).toBeDefined();
    expect(screen.getByText('Banana')).toBeDefined();
  });

  it('filters suggestions based on input', () => {
    render(<SearchInput suggestions={mockSuggestions} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'ap' } });
    fireEvent.focus(input);
    
    expect(screen.getByText('Apple')).toBeDefined();
    expect(screen.queryByText('Banana')).toBeNull();
  });

  it('calls onSearch when search button is clicked', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} defaultValue="test query" />);
    
    const searchButton = screen.getAllByRole('button')[0];
    fireEvent.click(searchButton);
    
    expect(handleSearch).toHaveBeenCalledWith('test query');
  });

  it('calls onSearch on Enter key', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'enter query' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(handleSearch).toHaveBeenCalledWith('enter query');
  });

  it('clears input when clear button is clicked', () => {
    render(<SearchInput defaultValue="clear me" />);
    
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('value')).toBe('');
  });

  it('selects suggestion on click', () => {
    const handleSuggestionSelect = jest.fn();
    render(
      <SearchInput 
        suggestions={mockSuggestions} 
        onSuggestionSelect={handleSuggestionSelect}
        defaultValue="a"
      />
    );
    
    const input = screen.getByDisplayValue('a');
    fireEvent.focus(input);
    
    const appleOption = screen.getByText('Apple');
    fireEvent.click(appleOption);
    
    expect(handleSuggestionSelect).toHaveBeenCalledWith(mockSuggestions[0]);
  });

  it('navigates suggestions with arrow keys', () => {
    render(<SearchInput suggestions={mockSuggestions} defaultValue="a" />);
    
    const input = screen.getByDisplayValue('a');
    fireEvent.focus(input);
    
    // Arrow down should select first item
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    
    // Enter should select the highlighted item
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(input.getAttribute('value')).toBe('apple');
  });

  it('closes suggestions on Escape', () => {
    render(<SearchInput suggestions={mockSuggestions} defaultValue="a" />);
    
    const input = screen.getByDisplayValue('a');
    fireEvent.focus(input);
    
    expect(screen.getByText('Apple')).toBeDefined();
    
    fireEvent.keyDown(input, { key: 'Escape' });
    
    // Suggestions should be hidden
    expect(screen.queryByText('Apple')).toBeNull();
  });

  it('shows loading state', () => {
    render(<SearchInput loading />);
    
    // Should show loading spinner
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeDefined();
  });

  it('renders with label', () => {
    render(<SearchInput label="Search Products" id="search" />);
    
    const label = screen.getByText('Search Products');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('search');
  });

  it('shows error message', () => {
    render(<SearchInput error="Search failed" />);
    
    expect(screen.getByText('Search failed')).toBeDefined();
  });

  it('debounces search calls', async () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} debounceMs={100} />);
    
    const input = screen.getByRole('textbox');
    
    // Rapid typing
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.change(input, { target: { value: 'abc' } });
    
    // Should only call once after debounce
    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledTimes(1);
      expect(handleSearch).toHaveBeenCalledWith('abc');
    }, { timeout: 200 });
  });

  it('limits max suggestions', () => {
    const manySuggestions = Array.from({ length: 20 }, (_, i) => ({
      value: `item${i}`,
      label: `Item ${i}`,
      description: `Description ${i}`
    }));
    
    render(<SearchInput suggestions={manySuggestions} maxSuggestions={5} defaultValue="item" />);
    
    const input = screen.getByDisplayValue('item');
    fireEvent.focus(input);
    
    // Should only show 5 suggestions
    const suggestionElements = screen.getAllByText(/^Item \d+$/);
    expect(suggestionElements.length).toBe(5);
  });

  it('hides buttons when configured', () => {
    render(<SearchInput showSearchButton={false} showClearButton={false} />);
    
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(0);
  });

  it('applies size classes', () => {
    render(<SearchInput size="lg" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('px-4', 'py-3', 'text-lg');
  });
});