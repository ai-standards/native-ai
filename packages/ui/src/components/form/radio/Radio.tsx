import React, { forwardRef } from 'react';
import { cn } from '../../../utils/cn';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioProps {
  /** Radio options */
  options: RadioOption[];
  /** Currently selected value */
  value?: string;
  /** Default selected value */
  defaultValue?: string;
  /** Name for the radio group */
  name: string;
  /** Called when selection changes */
  onChange?: (value: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const Radio = forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      options,
      value,
      defaultValue,
      name,
      onChange,
      disabled = false,
      orientation = 'vertical',
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || '');

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleChange = (optionValue: string) => {
      if (disabled) return;
      
      const newValue = optionValue;
      setSelectedValue(newValue);
      onChange?.(newValue);
    };

    const sizeStyles = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };

    const radioSizes = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    const orientationStyles = {
      horizontal: 'flex-row flex-wrap gap-4',
      vertical: 'flex-col gap-2'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          orientationStyles[orientation],
          sizeStyles[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <label
              key={option.value}
              className={cn(
                'flex items-center gap-2 cursor-pointer',
                isDisabled && 'cursor-not-allowed opacity-50'
              )}
            >
              <div className="relative">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => handleChange(option.value)}
                  disabled={isDisabled}
                  className="sr-only"
                />
                <div
                  className={cn(
                    'rounded-full border-2 flex items-center justify-center transition-colors',
                    radioSizes[size],
                    isSelected
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300 bg-white hover:border-gray-400',
                    isDisabled && 'cursor-not-allowed'
                  )}
                >
                  {isSelected && (
                    <div
                      className={cn(
                        'rounded-full bg-white',
                        size === 'sm' && 'w-1 h-1',
                        size === 'md' && 'w-1.5 h-1.5',
                        size === 'lg' && 'w-2 h-2'
                      )}
                    />
                  )}
                </div>
              </div>
              <span className={cn(isDisabled && 'text-gray-400')}>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio };