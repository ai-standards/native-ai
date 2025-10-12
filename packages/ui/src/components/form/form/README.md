# Form Component

Form wrapper component that automatically collects data from named form controls and provides debounced change tracking with error management.

## Features

- **Automatic Data Collection** - Automatically gathers data from all named form controls
- **Debounced Updates** - Configurable debouncing for onChange and error events
- **Error Tracking** - Centralized error collection from all form components
- **Default Values** - Support for default and controlled form values
- **Validation Modes** - Multiple validation trigger modes (onChange, onBlur, onSubmit)
- **Form Context** - Provides form state to child components via React Context
- **TypeScript Support** - Full TypeScript support with FormControlProps interface
- **Nested Controls** - Automatically finds and connects deeply nested form controls

## Usage

```tsx
import { Form, Input, NumberInput, Checkbox } from '@/components/form';

// Basic form with data collection
<Form onChange={(data) => console.log('Form data:', data)}>
  <Input name="firstName" label="First Name" />
  <Input name="lastName" label="Last Name" />
  <NumberInput name="age" label="Age" />
  <Checkbox name="newsletter" label="Subscribe to newsletter" />
</Form>

// With error tracking and validation
<Form 
  onChange={handleDataChange}
  onErrorChange={handleErrorChange}
  debounceMs={500}
>
  <Input 
    name="email"
    label="Email"
    error={!!errors.email}
    errorMessage={errors.email}
  />
  <NumberInput 
    name="age"
    label="Age"
    min={18}
    error={!!errors.age}
    errorMessage={errors.age}
  />
</Form>

// With default values
<Form 
  defaultValues={{
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  }}
  onChange={handleChange}
>
  <Input name="firstName" label="First Name" />
  <Input name="lastName" label="Last Name" />
  <NumberInput name="age" label="Age" />
</Form>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onChange` | `(data: FormData) => void` | - | Called when form data changes (debounced) |
| `onErrorChange` | `(errors: FormErrors) => void` | - | Called when form errors change (debounced) |
| `debounceMs` | `number` | `300` | Debounce delay in milliseconds |
| `defaultValues` | `FormData` | `{}` | Default form values |
| `values` | `FormData` | - | Controlled form values |
| `validationMode` | `'onChange' \| 'onBlur' \| 'onSubmit'` | `'onChange'` | When to trigger validation |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Form content |

## FormControlProps Interface

All form components should implement the `FormControlProps` interface for automatic integration:

```tsx
interface FormControlProps {
  name?: string;                    // Required for data collection
  value?: any;                      // Current value
  defaultValue?: any;               // Default value
  onChange?: (value: any) => void;  // Value change handler
  onBlur?: (event: React.FocusEvent) => void; // Blur handler
  error?: boolean;                  // Error state
  errorMessage?: string;            // Error message
  disabled?: boolean;               // Disabled state
  readOnly?: boolean;               // Read-only state
}
```

## Form Context

The Form component provides context to child components via `useFormContext`:

```tsx
import { useFormContext } from '@/components/form';

const CustomFormField = () => {
  const { formData, formErrors, updateField, updateError } = useFormContext();
  
  // Access current form state
  console.log('Current form data:', formData);
  console.log('Current form errors:', formErrors);
  
  // Update field programmatically
  updateField('fieldName', 'newValue');
  updateError('fieldName', 'Error message');
  
  return <div>Custom field content</div>;
};
```

## Data Collection

The Form component automatically:

1. **Finds named controls** - Searches for components with `name` props
2. **Connects handlers** - Injects onChange handlers to collect data
3. **Manages state** - Maintains internal form state
4. **Debounces updates** - Prevents excessive callback calls
5. **Handles errors** - Collects and manages validation errors

## Validation Modes

### onChange (Default)
```tsx
<Form validationMode="onChange">
  {/* Validation triggers on every change */}
</Form>
```

### onBlur
```tsx
<Form validationMode="onBlur">
  {/* Validation triggers when fields lose focus */}
</Form>
```

### onSubmit
```tsx
<Form validationMode="onSubmit">
  {/* Validation triggers only on form submission */}
</Form>
```

## Nested Controls

The Form component automatically finds controls nested in any component structure:

```tsx
<Form onChange={handleChange}>
  <div className="section">
    <div className="row">
      <Input name="nested" label="Nested Input" />
    </div>
  </div>
</Form>
```

## Error Management

The Form component provides centralized error tracking:

```tsx
const [formErrors, setFormErrors] = useState({});

<Form onErrorChange={setFormErrors}>
  <Input 
    name="email"
    error={!!formErrors.email}
    errorMessage={formErrors.email}
  />
</Form>
```

## Integration with Existing Components

All form components in this library automatically implement `FormControlProps` and work seamlessly with the Form wrapper. No additional configuration is required.