import React, { useState, forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { ErrorMessage } from '../errormessage/ErrorMessage';
import { HelperText } from '../helpertext/HelperText';

export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show password strength indicator */
  showStrength?: boolean;
  /** Custom strength validation function */
  validateStrength?: (password: string) => { score: number; feedback: string };
  /** Show character count */
  showCount?: boolean;
  /** Maximum character length */
  maxLength?: number;
  /** Additional CSS classes */
  className?: string;
  /** Input id */
  id?: string;
}

interface PasswordStrength {
  score: number; // 0-4 (weak to strong)
  feedback: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'md',
      showStrength = false,
      validateStrength,
      showCount = false,
      maxLength,
      className,
      id,
      value,
      defaultValue,
      onChange,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [passwordValue, setPasswordValue] = useState((value || defaultValue || '') as string);
    const [strength, setStrength] = useState<PasswordStrength>({ score: 0, feedback: '' });

    const inputId = id || `password-${Math.random().toString(36).substr(2, 9)}`;

    // Default password strength validation
    const defaultValidateStrength = (password: string): PasswordStrength => {
      let score = 0;
      let feedback = 'Too weak';

      if (password.length >= 8) score++;
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
      if (/\d/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;

      switch (score) {
        case 0:
        case 1:
          feedback = 'Too weak';
          break;
        case 2:
          feedback = 'Weak';
          break;
        case 3:
          feedback = 'Good';
          break;
        case 4:
          feedback = 'Strong';
          break;
      }

      return { score, feedback };
    };

    const getStrength = validateStrength || defaultValidateStrength;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setPasswordValue(newValue);

      // Update strength if enabled
      if (showStrength) {
        setStrength(getStrength(newValue));
      }

      // Call original onChange
      if (onChange) {
        onChange(e);
      }
    };

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    const sizeStyles = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };

    const strengthColors = [
      'bg-red-500',    // 0 - Too weak
      'bg-red-400',    // 1 - Too weak  
      'bg-yellow-500', // 2 - Weak
      'bg-blue-500',   // 3 - Good
      'bg-green-500'   // 4 - Strong
    ];

    const strengthLabels = ['Too weak', 'Too weak', 'Weak', 'Good', 'Strong'];

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

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={isVisible ? 'text' : 'password'}
            value={value !== undefined ? value : passwordValue}
            onChange={handleChange}
            onBlur={onBlur}
            maxLength={maxLength}
            className={cn(
              'w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-10',
              sizeStyles[size],
              error 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300',
              className
            )}
            {...props}
          />

          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {isVisible ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878l4.242 4.242m0 0l1.414 1.414M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-.438-1.575m-6.838-1.692a4.502 4.502 0 013.831 2.807M14.828 14.828L16.243 16.243" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Character count */}
        {showCount && maxLength && (
          <div className="flex justify-end">
            <span className={cn(
              'text-xs',
              passwordValue.length > maxLength * 0.9 ? 'text-yellow-600' : 'text-gray-500',
              passwordValue.length >= maxLength && 'text-red-600'
            )}>
              {passwordValue.length}/{maxLength}
            </span>
          </div>
        )}

        {/* Password strength indicator */}
        {showStrength && passwordValue && (
          <div className="space-y-1">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={cn(
                    'h-1 flex-1 rounded-full transition-colors',
                    level <= strength.score ? strengthColors[strength.score] : 'bg-gray-200'
                  )}
                />
              ))}
            </div>
            <p className={cn(
              'text-xs font-medium',
              strength.score <= 1 && 'text-red-600',
              strength.score === 2 && 'text-yellow-600',
              strength.score === 3 && 'text-blue-600',
              strength.score === 4 && 'text-green-600'
            )}>
              Password strength: {strength.feedback}
            </p>
          </div>
        )}

        <ErrorMessage message={error} fieldId={inputId} />
        <HelperText text={!error ? helperText : undefined} fieldId={inputId} />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };