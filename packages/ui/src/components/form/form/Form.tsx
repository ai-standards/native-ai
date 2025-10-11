import React, { forwardRef, useRef, useCallback, useEffect } from 'react';
import { cn } from '../../../utils/cn';

export interface FormData {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

// Standard interface that all form control components should implement
export interface FormControlProps {
  /** Field name for form data collection */
  name?: string;
  /** Field value */
  value?: any;
  /** Default value */
  defaultValue?: any;
  /** Called when value changes */
  onChange?: (value: any) => void;
  /** Called when field loses focus */
  onBlur?: (event: React.FocusEvent) => void;
  /** Error state */
  error?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
}

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onChange'> {
  /** Called when form data changes (debounced) */
  onChange?: (data: FormData) => void;
  /** Called when form errors change (debounced) */
  onErrorChange?: (errors: FormErrors) => void;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Default form values */
  defaultValues?: FormData;
  /** Controlled form values */
  values?: FormData;
  /** Validation mode */
  validationMode?: 'onChange' | 'onBlur' | 'onSubmit';
  /** Additional CSS classes */
  className?: string;
  /** Form children */
  children?: React.ReactNode;
}

interface FormContextValue {
  formData: FormData;
  formErrors: FormErrors;
  updateField: (name: string, value: any) => void;
  updateError: (name: string, error: string | undefined) => void;
  validationMode: 'onChange' | 'onBlur' | 'onSubmit';
}

const FormContext = React.createContext<FormContextValue | null>(null);

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }
  return context;
};

const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      onChange,
      onErrorChange,
      debounceMs = 300,
      defaultValues = {},
      values,
      validationMode = 'onChange',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [formData, setFormData] = React.useState<FormData>(() => ({
      ...defaultValues,
      ...values
    }));
    const [formErrors, setFormErrors] = React.useState<FormErrors>({});
    
    const onChangeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const onErrorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const previousDataRef = useRef<FormData>(formData);
    const previousErrorsRef = useRef<FormErrors>(formErrors);

    // Update form data when controlled values change
    useEffect(() => {
      if (values) {
        setFormData(prevData => ({
          ...prevData,
          ...values
        }));
      }
    }, [values]);

    // Debounced onChange handler
    const debouncedOnChange = useCallback((newData: FormData) => {
      if (onChangeTimeoutRef.current) {
        clearTimeout(onChangeTimeoutRef.current);
      }
      
      onChangeTimeoutRef.current = setTimeout(() => {
        const hasChanged = JSON.stringify(previousDataRef.current) !== JSON.stringify(newData);
        if (hasChanged && onChange) {
          onChange(newData);
          previousDataRef.current = { ...newData };
        }
      }, debounceMs);
    }, [onChange, debounceMs]);

    // Debounced onErrorChange handler
    const debouncedOnError = useCallback((newErrors: FormErrors) => {
      if (onErrorTimeoutRef.current) {
        clearTimeout(onErrorTimeoutRef.current);
      }
      
      onErrorTimeoutRef.current = setTimeout(() => {
        const hasChanged = JSON.stringify(previousErrorsRef.current) !== JSON.stringify(newErrors);
        if (hasChanged && onErrorChange) {
          onErrorChange(newErrors);
          previousErrorsRef.current = { ...newErrors };
        }
      }, debounceMs);
    }, [onErrorChange, debounceMs]);

    // Update field value
    const updateField = useCallback((name: string, value: any) => {
      setFormData(prevData => {
        const newData = {
          ...prevData,
          [name]: value
        };
        
        // Trigger debounced onChange
        debouncedOnChange(newData);
        
        return newData;
      });
    }, [debouncedOnChange]);

    // Update field error
    const updateError = useCallback((name: string, error: string | undefined) => {
      setFormErrors(prevErrors => {
        const newErrors = {
          ...prevErrors,
          [name]: error
        };
        
        // Clean up undefined errors
        if (error === undefined) {
          delete newErrors[name];
        }
        
        // Trigger debounced onError
        debouncedOnError(newErrors);
        
        return newErrors;
      });
    }, [debouncedOnError]);

    // Cleanup timeouts
    useEffect(() => {
      return () => {
        if (onChangeTimeoutRef.current) {
          clearTimeout(onChangeTimeoutRef.current);
        }
        if (onErrorTimeoutRef.current) {
          clearTimeout(onErrorTimeoutRef.current);
        }
      };
    }, []);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      // Trigger immediate validation if needed
      if (validationMode === 'onSubmit') {
        // In a real implementation, you'd trigger validation on all fields here
        console.log('Form submitted with data:', formData);
      }
      
      // Call original onSubmit if provided
      if (props.onSubmit) {
        props.onSubmit(e);
      }
    };

    const contextValue: FormContextValue = React.useMemo(() => ({
      formData,
      formErrors,
      updateField,
      updateError,
      validationMode
    }), [formData, formErrors, updateField, updateError, validationMode]);

    // Recursively clone children to inject form context props
    const processChildren = (children: React.ReactNode): React.ReactNode => {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        // Check if child has a name prop (form control)
        if (child.props.name) {
          const name = child.props.name;
          const currentValue = formData[name];
          const currentError = formErrors[name];
          
          // Clone the element with form-connected props
          return React.cloneElement(child as React.ReactElement<any>, {
            value: currentValue !== undefined ? currentValue : child.props.value,
            onChange: (valueOrEvent: any) => {
              // Extract actual value from event or use directly
              let actualValue = valueOrEvent;
              
              // Handle React synthetic events (for native inputs)
              if (valueOrEvent && typeof valueOrEvent === 'object' && valueOrEvent.target) {
                actualValue = valueOrEvent.target.value;
              }
              
              // Call original onChange if provided
              if (child.props.onChange) {
                child.props.onChange(valueOrEvent);
              }
              // Update form state with actual value
              updateField(name, actualValue);
            },
            error: currentError !== undefined ? true : child.props.error,
            errorMessage: currentError || child.props.errorMessage,
            onBlur: (e: React.FocusEvent) => {
              // Call original onBlur if provided
              if (child.props.onBlur) {
                child.props.onBlur(e);
              }
              // Trigger validation on blur if needed
              if (validationMode === 'onBlur') {
                // In a real implementation, you'd trigger validation here
              }
            }
          });
        }

        // Recursively process children
        if (child.props.children) {
          return React.cloneElement(child as React.ReactElement<any>, {
            children: processChildren(child.props.children)
          });
        }

        return child;
      });
    };

    return (
      <FormContext.Provider value={contextValue}>
        <form
          ref={ref}
          className={cn('space-y-6', className)}
          onSubmit={handleSubmit}
          {...props}
        >
          {processChildren(children)}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = 'Form';

export { Form };