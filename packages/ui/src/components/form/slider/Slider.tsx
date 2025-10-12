import React, { forwardRef, useRef, useCallback } from 'react';
import { cn } from '../../../utils/cn';

export interface SliderProps {
  /** Current value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Called when value changes */
  onChange?: (value: number) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Show value display */
  showValue?: boolean;
  /** Value formatter function */
  formatValue?: (value: number) => string;
  /** Additional CSS classes */
  className?: string;
  /** Slider name */
  name?: string;
  /** Slider id */
  id?: string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      defaultValue = 50,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      disabled = false,
      size = 'md',
      label,
      showValue = false,
      formatValue = (val) => val.toString(),
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const [sliderValue, setSliderValue] = React.useState(value ?? defaultValue);
    const [isDragging, setIsDragging] = React.useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (value !== undefined) {
        setSliderValue(value);
      }
    }, [value]);

    const handleChange = useCallback((newValue: number) => {
      const clampedValue = Math.max(min, Math.min(max, newValue));
      setSliderValue(clampedValue);
      onChange?.(clampedValue);
    }, [min, max, onChange]);

    const getValueFromMouseEvent = useCallback((e: MouseEvent | React.MouseEvent) => {
      if (!trackRef.current) return sliderValue;
      
      const rect = trackRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const rawValue = min + percentage * (max - min);
      
      // Round to nearest step
      const steppedValue = Math.round(rawValue / step) * step;
      return Math.max(min, Math.min(max, steppedValue));
    }, [min, max, step, sliderValue]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      if (disabled) return;
      
      e.preventDefault();
      setIsDragging(true);
      
      const newValue = getValueFromMouseEvent(e);
      handleChange(newValue);
    }, [disabled, getValueFromMouseEvent, handleChange]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
      if (!isDragging || disabled) return;
      
      const newValue = getValueFromMouseEvent(e);
      handleChange(newValue);
    }, [isDragging, disabled, getValueFromMouseEvent, handleChange]);

    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
    }, []);

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const newValue = parseFloat(e.target.value);
      handleChange(newValue);
    };

    const percentage = ((sliderValue - min) / (max - min)) * 100;

    const sizeStyles = {
      sm: {
        track: 'h-1',
        thumb: 'w-3 h-3',
        label: 'text-sm'
      },
      md: {
        track: 'h-2',
        thumb: 'w-4 h-4',
        label: 'text-base'
      },
      lg: {
        track: 'h-3',
        thumb: 'w-5 h-5',
        label: 'text-lg'
      }
    };

    const sliderElement = (
      <div className={cn('relative flex items-center', className)}>
        <div className="relative flex-1">
          {/* Track */}
          <div
            ref={trackRef}
            className={cn(
              'relative w-full bg-gray-200 rounded-full cursor-pointer',
              sizeStyles[size].track,
              disabled && 'opacity-50 cursor-not-allowed'
            )}
            onMouseDown={handleMouseDown}
          >
            {/* Progress */}
            <div
              className={cn(
                'bg-blue-600 rounded-full transition-all duration-150 pointer-events-none',
                sizeStyles[size].track
              )}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Hidden input for accessibility */}
          <input
            ref={ref || inputRef}
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue}
            onChange={handleInputChange}
            disabled={disabled}
            name={name}
            id={id}
            className="sr-only"
            {...props}
          />

          {/* Thumb */}
          <div
            className={cn(
              'absolute top-1/2 transform -translate-y-1/2 bg-white border-2 border-blue-600 rounded-full shadow-sm transition-all duration-150 pointer-events-none',
              sizeStyles[size].thumb,
              isDragging && 'scale-110 shadow-md',
              disabled && 'border-gray-400 bg-gray-100'
            )}
            style={{ left: `calc(${percentage}% - ${sizeStyles[size].thumb.includes('w-3') ? '6px' : sizeStyles[size].thumb.includes('w-4') ? '8px' : '10px'})` }}
          />
        </div>

        {showValue && (
          <div className={cn('ml-3 min-w-0 flex-shrink-0', sizeStyles[size].label)}>
            <span className={cn('font-medium', disabled && 'text-gray-400')}>
              {formatValue(sliderValue)}
            </span>
          </div>
        )}
      </div>
    );

    if (label) {
      return (
        <div className="space-y-2">
          <label
            htmlFor={id}
            className={cn(
              'block font-medium',
              sizeStyles[size].label,
              disabled ? 'text-gray-400' : 'text-gray-700'
            )}
          >
            {label}
          </label>
          {sliderElement}
        </div>
      );
    }

    return sliderElement;
  }
);

Slider.displayName = 'Slider';

export { Slider };