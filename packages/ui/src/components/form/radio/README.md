# Radio Component

Radio button groups for exclusive selection with customizable options and layouts.

## Features

- **Multiple Options** - Support for arrays of radio options with labels and values
- **Controlled/Uncontrolled** - Works as both controlled and uncontrolled component
- **Flexible Layout** - Horizontal or vertical orientation
- **Size Variants** - Small, medium, and large sizes
- **Individual Disabling** - Disable specific options or entire group
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Custom Styling** - Extensible with custom CSS classes

## Usage

```tsx
import { Radio } from '@/components/form';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

// Basic usage
<Radio options={options} name="basic-radio" />

// With default selection
<Radio 
  options={options} 
  name="default-radio" 
  defaultValue="option2" 
/>

// Controlled
<Radio 
  options={options} 
  name="controlled-radio" 
  value={selectedValue}
  onChange={setSelectedValue}
/>

// Horizontal layout
<Radio 
  options={options} 
  name="horizontal-radio" 
  orientation="horizontal" 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `RadioOption[]` | - | Array of radio options |
| `value` | `string` | - | Controlled selected value |
| `defaultValue` | `string` | - | Default selected value |
| `name` | `string` | - | Name for radio group (required) |
| `onChange` | `(value: string) => void` | - | Selection change handler |
| `disabled` | `boolean` | `false` | Disable entire group |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout orientation |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `className` | `string` | - | Additional CSS classes |

## RadioOption Interface

```tsx
interface RadioOption {
  label: string;     // Display text
  value: string;     // Option value
  disabled?: boolean; // Individual disable state
}
```