import React, { forwardRef } from 'react';
import { cn } from '../../../utils/cn';

export interface SwitchProps {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Called when switch state changes */
  onChange?: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Label position */
  labelPosition?: 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Switch name */
  name?: string;
  /** Switch id */
  id?: string;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      size = 'md',
      label,
      labelPosition = 'right',
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked);

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleToggle = () => {
      if (disabled) return;
      
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange?.(newChecked);
    };

    const sizeStyles = {
      sm: {
        switch: 'w-8 h-4',
        thumb: 'w-3 h-3',
        translate: 'translate-x-4'
      },
      md: {
        switch: 'w-11 h-6',
        thumb: 'w-5 h-5',
        translate: 'translate-x-5'
      },
      lg: {
        switch: 'w-14 h-8',
        thumb: 'w-7 h-7',
        translate: 'translate-x-6'
      }
    };

    const switchElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={label ? `${id}-label` : undefined}
        disabled={disabled}
        name={name}
        id={id}
        onClick={handleToggle}
        className={cn(
          'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          sizeStyles[size].switch,
          isChecked ? 'bg-blue-600' : 'bg-gray-200',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out',
            sizeStyles[size].thumb,
            isChecked ? sizeStyles[size].translate : 'translate-x-0'
          )}
        />
      </button>
    );

    if (label) {
      return (
        <div className="flex items-center gap-2">
          {labelPosition === 'left' && (
            <label
              id={`${id}-label`}
              htmlFor={id}
              className={cn(
                'text-sm font-medium cursor-pointer',
                disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
              )}
            >
              {label}
            </label>
          )}
          {switchElement}
          {labelPosition === 'right' && (
            <label
              id={`${id}-label`}
              htmlFor={id}
              className={cn(
                'text-sm font-medium cursor-pointer',
                disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
              )}
            >
              {label}
            </label>
          )}
        </div>
      );
    }

    return switchElement;
  }
);

Switch.displayName = 'Switch';

export { Switch };