import React, { forwardRef, useState, useCallback } from 'react';
import { cn } from '../../../utils/cn';

export interface NumberInputProps {
  /** Current value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Called when value changes */
  onChange?: (value: number | undefined) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment/decrement */
  step?: number;
  /** Decimal precision */
  precision?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text */
  helperText?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Show increment/decrement buttons */
  showControls?: boolean;
  /** Allow decimal numbers */
  allowDecimal?: boolean;
  /** Allow negative numbers */
  allowNegative?: boolean;
  /** Format display with thousands separator */
  formatThousands?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      min,
      max,
      step = 1,
      precision = 2,
      disabled = false,
      readOnly = false,
      size = 'md',
      label,
      placeholder = 'Enter number',
      helperText,
      error = false,
      errorMessage,
      showControls = true,
      allowDecimal = true,
      allowNegative = true,
      formatThousands = false,
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<string>(() => {
      const initialValue = value ?? defaultValue;
      return initialValue !== undefined ? formatNumber(initialValue) : '';
    });
    const [internalValue, setInternalValue] = useState<number | undefined>(value ?? defaultValue);

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
        setInputValue(formatNumber(value));
      }
    }, [value]);

    function formatNumber(num: number): string {
      if (isNaN(num)) return '';
      
      let formatted = num.toString();
      
      // Apply precision for decimal numbers
      if (allowDecimal && num % 1 !== 0) {
        formatted = num.toFixed(precision);
        // Remove trailing zeros
        formatted = formatted.replace(/\.?0+$/, '');
      }
      
      // Add thousands separator
      if (formatThousands) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = parts.join('.');
      }
      
      return formatted;
    }

    function parseNumber(str: string): number | undefined {
      if (!str.trim()) return undefined;
      
      // Remove thousands separators
      const cleaned = str.replace(/,/g, '');
      const num = parseFloat(cleaned);
      
      if (isNaN(num)) return undefined;
      return num;
    }

    function clampValue(num: number): number {
      let clamped = num;
      
      if (min !== undefined && clamped < min) clamped = min;
      if (max !== undefined && clamped > max) clamped = max;
      
      return clamped;
    }

    function validateInput(str: string): boolean {
      if (!str.trim()) return true; // Empty is valid
      
      // Remove thousands separators for validation
      const cleaned = str.replace(/,/g, '');
      
      // Check basic number format
      const decimalRegex = allowDecimal ? /^-?\d*\.?\d*$/ : /^-?\d*$/;
      if (!decimalRegex.test(cleaned)) return false;
      
      // Check negative numbers
      if (!allowNegative && cleaned.startsWith('-')) return false;
      
      return true;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      
      if (!validateInput(newValue)) return;
      
      setInputValue(newValue);
      
      const numValue = parseNumber(newValue);
      if (numValue !== undefined) {
        const clampedValue = clampValue(numValue);
        setInternalValue(clampedValue);
        onChange?.(clampedValue);
      } else {
        setInternalValue(undefined);
        onChange?.(undefined);
      }
    };

    const handleBlur = () => {
      if (internalValue !== undefined) {
        const formatted = formatNumber(internalValue);
        setInputValue(formatted);
      }
    };

    const increment = useCallback(() => {
      if (disabled || readOnly) return;
      
      const currentValue = internalValue ?? 0;
      const newValue = clampValue(currentValue + step);
      
      setInternalValue(newValue);
      setInputValue(formatNumber(newValue));
      onChange?.(newValue);
    }, [internalValue, step, disabled, readOnly, onChange]);

    const decrement = useCallback(() => {
      if (disabled || readOnly) return;
      
      const currentValue = internalValue ?? 0;
      const newValue = clampValue(currentValue - step);
      
      setInternalValue(newValue);
      setInputValue(formatNumber(newValue));
      onChange?.(newValue);
    }, [internalValue, step, disabled, readOnly, onChange]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        increment();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        decrement();
      }
    };

    const sizeStyles = {
      sm: {
        input: 'px-2 py-1 text-sm',
        button: 'w-6 h-6 text-xs'
      },
      md: {
        input: 'px-3 py-2 text-base',
        button: 'w-8 h-8 text-sm'
      },
      lg: {
        input: 'px-4 py-3 text-lg',
        button: 'w-10 h-10 text-base'
      }
    };

    const inputElement = (
      <div className="relative">
        <input
          ref={ref}
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          id={id}
          className={cn(
            'w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors',
            sizeStyles[size].input,
            showControls && 'pr-8',
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300',
            disabled && 'bg-gray-50 cursor-not-allowed opacity-50',
            readOnly && 'bg-gray-50',
            className
          )}
          {...props}
        />
        
        {showControls && (
          <div className="absolute right-0 top-0 h-full flex flex-col">
            <button
              type="button"
              onClick={increment}
              disabled={disabled || readOnly || (max !== undefined && internalValue !== undefined && internalValue >= max)}
              className={cn(
                'flex items-center justify-center border-l border-gray-300 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-1 rounded-tr-md',
                sizeStyles[size].button,
                error && 'border-red-500'
              )}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            
            <button
              type="button"
              onClick={decrement}
              disabled={disabled || readOnly || (min !== undefined && internalValue !== undefined && internalValue <= min)}
              className={cn(
                'flex items-center justify-center border-l border-t border-gray-300 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-1 rounded-br-md',
                sizeStyles[size].button,
                error && 'border-red-500'
              )}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );

    if (label) {
      return (
        <div className="space-y-1">
          <label
            htmlFor={id}
            className={cn(
              'block text-sm font-medium',
              error ? 'text-red-700' : 'text-gray-700',
              disabled && 'text-gray-400'
            )}
          >
            {label}
          </label>
          {inputElement}
          {helperText && !error && (
            <p className="text-sm text-gray-500">{helperText}</p>
          )}
          {error && errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
        </div>
      );
    }

    return (
      <div>
        {inputElement}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
        {error && errorMessage && (
          <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };