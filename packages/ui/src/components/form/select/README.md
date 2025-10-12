# Select Component

A flexible select dropdown component with labels, validation, and multiple variants. Built with accessibility in mind.

## Features

- **Multiple Variants**: Default and filled styles
- **Validation**: Built-in error and helper text support
- **Disabled Options**: Support for individual disabled options
- **Custom Styling**: Appearance-none with custom dropdown arrow
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **TypeScript**: Full type safety with comprehensive props interface

## Usage

```tsx
import { Select } from '@/components/form/select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// Basic usage
<Select options={options} placeholder="Choose an option" />

// With label and validation
<Select
  label="Country"
  options={options}
  placeholder="Select your country"
  error="This field is required"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<{value: string, label: string, disabled?: boolean}>` | - | Array of options to display |
| `label` | `string` | - | Label text displayed above the select |
| `error` | `string` | - | Error message to display below the select |
| `helperText` | `string` | - | Helper text to display below the select |
| `variant` | `'default' \| 'filled'` | `'default'` | Visual style variant |
| `placeholder` | `string` | - | Placeholder text shown as first disabled option |
| `className` | `string` | - | Additional CSS classes |

All standard HTML select attributes are also supported.