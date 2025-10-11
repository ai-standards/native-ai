# Input Component

A flexible, accessible input field component with labels, validation, and icon support.

## Features

- **Flexible Styling**: Default and filled variants
- **Form Integration**: Works seamlessly with forms and validation libraries
- **Icon Support**: Left and right icon slots
- **Error Handling**: Built-in error state styling and messaging
- **Labels & Help Text**: Optional labels and helper text
- **Accessibility**: Proper labeling, focus management, and ARIA attributes
- **TypeScript**: Full TypeScript support with proper type definitions

## Usage

```tsx
import { Input } from '@/lib/ui/input';

// Basic usage
<Input placeholder="Enter your name" />

// With label
<Input label="Email" type="email" placeholder="Enter email" />

// With validation
<Input 
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
  placeholder="Enter password"
/>

// With helper text
<Input 
  label="Username"
  placeholder="Choose username"
  helperText="Must be unique and 3-20 characters"
/>

// With icons
<Input 
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below input |
| `variant` | `'default' \| 'filled'` | `'default'` | Visual style variant |
| `leftIcon` | `React.ReactNode` | - | Icon displayed on the left |
| `rightIcon` | `React.ReactNode` | - | Icon displayed on the right |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | auto-generated | Input ID for label association |

Inherits all standard HTML input props (`type`, `placeholder`, `disabled`, `required`, etc.)

## Variants

### Default
Standard input with border and white background.

### Filled
Input with gray background that becomes white on focus.

## States

### Normal
Default appearance with subtle border and shadow.

### Focus
Blue border and ring when focused.

### Error
Red border and text when error prop is provided.

### Disabled
Reduced opacity and disabled cursor when disabled.

## Accessibility

- Automatic ID generation for label association
- Proper ARIA attributes for error states
- Focus management with visible focus rings
- Screen reader compatible error announcements

## Examples

```tsx
// Login form
<Input 
  label="Email"
  type="email"
  required
  placeholder="Enter your email"
/>

// Search with icon
<Input 
  leftIcon={<SearchIcon className="h-4 w-4" />}
  placeholder="Search products..."
  variant="filled"
/>

// Form with validation
<Input 
  label="Phone Number"
  type="tel"
  error={errors.phone}
  helperText="Include country code"
  placeholder="+1 (555) 123-4567"
/>
```

## Integration with Forms

Works great with popular form libraries:

```tsx
// React Hook Form
<Input 
  {...register('email', { required: 'Email is required' })}
  label="Email"
  error={errors.email?.message}
/>

// Formik
<Input 
  name="username"
  value={values.username}
  onChange={handleChange}
  onBlur={handleBlur}
  error={touched.username && errors.username}
  label="Username"
/>
```