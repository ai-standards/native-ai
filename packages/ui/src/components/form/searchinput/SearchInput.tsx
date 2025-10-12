import React, { forwardRef, useState, useRef, useCallback, useMemo } from 'react';
import { cn } from '../../../utils/cn';
import { ErrorMessage } from '../errormessage/ErrorMessage';
import { HelperText } from '../helpertext/HelperText';
import { useDebounce } from '../../../hooks';

export interface SearchOption {
  value: string;
  label: string;
  description?: string;
  category?: string;
}

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Search suggestions/autocomplete options */
  suggestions?: SearchOption[];
  /** Called when search is performed */
  onSearch?: (query: string) => void;
  /** Called when suggestion is selected */
  onSuggestionSelect?: (suggestion: SearchOption) => void;
  /** Debounce delay for search in milliseconds */
  debounceMs?: number;
  /** Show search button */
  showSearchButton?: boolean;
  /** Show clear button */
  showClearButton?: boolean;
  /** Loading state for search */
  loading?: boolean;
  /** Maximum number of suggestions to show */
  maxSuggestions?: number;
  /** Filter suggestions based on input */
  filterSuggestions?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Input id */
  id?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'md',
      suggestions = [],
      onSearch,
      onSuggestionSelect,
      debounceMs = 300,
      showSearchButton = true,
      showClearButton = true,
      loading = false,
      maxSuggestions = 10,
      filterSuggestions = true,
      className,
      id,
      value,
      onChange,
      onFocus,
      onBlur,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(() => {
      if (value !== undefined) return value as string;
      if (defaultValue !== undefined) return defaultValue as string;
      return '';
    });
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const inputId = id || `search-${Math.random().toString(36).substr(2, 9)}`;

    // Update input value when controlled value changes
    React.useEffect(() => {
      if (value !== undefined) {
        setInputValue(value as string);
      }
    }, [value]);

    // Filter suggestions based on input using useMemo to prevent infinite re-renders
    const filteredSuggestions = useMemo(() => {
      if (!filterSuggestions) {
        return suggestions.slice(0, maxSuggestions);
      }

      if (!inputValue.trim()) {
        return [];
      }

      return suggestions
        .filter(suggestion => 
          suggestion.label.toLowerCase().includes(inputValue.toLowerCase()) ||
          suggestion.description?.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, maxSuggestions);
    }, [inputValue, suggestions, filterSuggestions, maxSuggestions]);

    // Update dropdown state when suggestions or input change
    React.useEffect(() => {
      if (filteredSuggestions.length > 0 && inputValue.trim()) {
        setIsOpen(true);
      } else if (!inputValue.trim()) {
        setIsOpen(false);
      }
    }, [filteredSuggestions, inputValue]);

    // Debounced search using our robust hook
    const debouncedSearch = useDebounce((query: string) => {
      if (onSearch && query.trim()) {
        onSearch(query);
      }
    }, debounceMs);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setSelectedIndex(-1);

      // Trigger debounced search
      debouncedSearch(newValue);

      // Call original onChange
      if (onChange) {
        onChange(e);
      }
    };

    // Handle search action
    const handleSearch = () => {
      if (onSearch) {
        onSearch(inputValue);
      }
      setIsOpen(false);
    };

    // Handle clear action
    const handleClear = () => {
      setInputValue('');
      setIsOpen(false);
      setSelectedIndex(-1);
      
      const syntheticEvent = {
        target: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      
      if (onChange) {
        onChange(syntheticEvent);
      }
      
      inputRef.current?.focus();
    };

    // Handle suggestion selection
    const handleSuggestionSelect = (suggestion: SearchOption) => {
      setInputValue(suggestion.value);
      setIsOpen(false);
      setSelectedIndex(-1);
      
      if (onSuggestionSelect) {
        onSuggestionSelect(suggestion);
      }
      
      const syntheticEvent = {
        target: { value: suggestion.value }
      } as React.ChangeEvent<HTMLInputElement>;
      
      if (onChange) {
        onChange(syntheticEvent);
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || filteredSuggestions.length === 0) {
        if (e.key === 'Enter') {
          handleSearch();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
          
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
          
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            handleSuggestionSelect(filteredSuggestions[selectedIndex]);
          } else {
            handleSearch();
          }
          break;
          
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          break;
      }
    };

    // Handle focus
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      // Open dropdown on focus if there's input and suggestions
      if (inputValue.trim() && filteredSuggestions.length > 0) {
        setIsOpen(true);
      }
      
      if (onFocus) {
        onFocus(e);
      }
    };

    // Handle blur with delay to allow suggestion clicks
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // Clear any existing blur timeout
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
      
      blurTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        setSelectedIndex(-1);
        blurTimeoutRef.current = null;
      }, 150);
      
      if (onBlur) {
        onBlur(e);
      }
    };

    // Close suggestions when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    // Cleanup blur timeout on unmount
    React.useEffect(() => {
      return () => {
        if (blurTimeoutRef.current) {
          clearTimeout(blurTimeoutRef.current);
        }
      };
    }, []);

    const sizeStyles = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };

    const iconSizes = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium',
              error ? 'text-red-700' : 'text-gray-700'
            )}
          >
            {label}
          </label>
        )}

        <div className="relative" ref={containerRef}>
          <div className="relative">
            {/* Search icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className={cn(iconSizes[size], 'text-gray-400')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              ref={ref || inputRef}
              id={inputId}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={cn(
                'w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pl-10',
                sizeStyles[size],
                (showClearButton && inputValue) || (showSearchButton && !loading) ? 'pr-20' : 
                showClearButton || showSearchButton ? 'pr-10' : 'pr-3',
                error 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300',
                className
              )}
              {...props}
            />

            {/* Clear and Search buttons */}
            <div className="absolute inset-y-0 right-0 flex items-center">
              {showClearButton && inputValue && (
                <button
                  type="button"
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className={cn(iconSizes[size])} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              
              {showSearchButton && (
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={loading}
                  aria-label={loading ? "Searching..." : "Search"}
                  className={cn(
                    'p-1 mr-2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50',
                    loading && 'cursor-not-allowed'
                  )}
                >
                  {loading ? (
                    <svg className={cn(iconSizes[size], 'animate-spin')} fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                    </svg>
                  ) : (
                    <svg className={cn(iconSizes[size])} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Suggestions dropdown */}
          {isOpen && filteredSuggestions.length > 0 && (
            <ul className="absolute top-full left-0 z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={`${suggestion.value}-${index}`}
                  ref={el => suggestionRefs.current[index] = el}
                  onClick={() => handleSuggestionSelect(suggestion)}
                  className={cn(
                    'px-3 py-2 cursor-pointer transition-colors',
                    index === selectedIndex
                      ? 'bg-blue-100 text-blue-900'
                      : 'hover:bg-gray-100'
                  )}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{suggestion.label}</span>
                    {suggestion.description && (
                      <span className="text-sm text-gray-600">{suggestion.description}</span>
                    )}
                    {suggestion.category && (
                      <span className="text-xs text-blue-600 uppercase tracking-wide">{suggestion.category}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ErrorMessage message={error} fieldId={inputId} />
        <HelperText text={!error ? helperText : undefined} fieldId={inputId} />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };