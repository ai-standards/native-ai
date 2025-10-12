# FormField

Field wrapper component that provides consistent labeling, error handling, and layout for form controls.

## Features

- **Flexible Labeling** - Top, left, or floating label positions
- **Error Handling** - Built-in error message display with ARIA support
- **Helper Text** - Contextual help information for users
- **Required Indicators** - Visual asterisk for required fields
- **Size Variants** - Small, medium, and large sizing options
- **Accessibility** - Full ARIA support and keyboard navigation
- **Auto ID Generation** - Automatic field ID generation for accessibility

## Usage

```tsx
import { FormField } from '@/components/form';

// Basic usage
<FormField label="Username">
  <input type="text" />
</FormField>

// With validation
<FormField 
  label="Email" 
  required 
  error="Please enter a valid email"
>
  <input type="email" />
</FormField>

// With helper text
<FormField 
  label="Password" 
  helperText="Must be at least 8 characters"
>
  <input type="password" />
</FormField>

// Left-aligned label
<FormField label="Description" labelPosition="left">
  <textarea />
</FormField>

// Floating label
<FormField label="Notes" labelPosition="floating">
  <textarea />
</FormField>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | auto-generated | Unique identifier for the field |
| `label` | `string` | - | Field label text |
| `required` | `boolean` | `false` | Whether the field is required |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text to display below the field |
| `className` | `string` | `''` | Additional CSS class names |
| `children` | `ReactNode` | - | Child form control component |
| `labelPosition` | `'top' \| 'left' \| 'floating'` | `'top'` | Label position |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field size |
| `showRequiredIndicator` | `boolean` | `true` | Show asterisk for required fields |

## Label Positions

### Top Label (Default)
Standard layout with label above the input field.

### Left Label
Horizontal layout with label to the left of the input field. Good for compact forms.

### Floating Label
Label positioned inside the input field, moves up when focused or has content.

## Error Handling

- Error messages automatically hide helper text when present
- ARIA attributes are set for screen readers
- Visual styling changes to indicate error state
- Error icon included for better visual indication

## Accessibility

- Automatic `id` generation for form controls
- Proper `aria-describedby` attributes for errors and helper text
- Required field indication with `aria-label`
- Error messages have `role="alert"` for screen readers
- Proper label association with `htmlFor` attribute

## Size Variants

- **Small** - Compact sizing for dense layouts
- **Medium** - Standard sizing for most use cases
- **Large** - Larger sizing for improved accessibility

## Integration

Works seamlessly with all form components in this library and standard HTML form elements. The wrapper automatically applies necessary ARIA attributes and IDs to child components.