# Checkbox Component

A flexible checkbox component with labels, validation, and multiple sizes. Built with accessibility in mind.

## Features

- **Multiple Sizes**: Small, medium, and large options
- **Variants**: Default and filled styles
- **Validation**: Built-in error and helper text support
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **TypeScript**: Full type safety with comprehensive props interface
- **Flexible Layout**: Works with or without labels

## Usage

```tsx
import { Checkbox } from '@/components/form/checkbox';

// Basic usage
<Checkbox label="Accept terms and conditions" />

// With validation
<Checkbox
  label="I agree to the privacy policy"
  error="You must accept the privacy policy"
/>

// Different sizes
<Checkbox label="Small checkbox" size="sm" />
<Checkbox label="Large checkbox" size="lg" />

// Without label
<Checkbox />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed next to the checkbox |
| `error` | `string` | - | Error message to display below the checkbox |
| `helperText` | `string` | - | Helper text to display below the checkbox |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `variant` | `'default' \| 'filled'` | `'default'` | Visual style variant |
| `indeterminate` | `boolean` | `false` | Whether checkbox is in indeterminate state |
| `className` | `string` | - | Additional CSS classes |

All standard HTML input attributes are also supported (except `type` and `size`).