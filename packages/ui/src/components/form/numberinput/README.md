# NumberInput Component

Numeric input component with increment/decrement controls, validation, and formatting options.

## Features

- **Increment/Decrement Controls** - Built-in buttons for easy value adjustment
- **Keyboard Navigation** - Arrow keys for precise value control
- **Number Validation** - Automatic validation and input filtering
- **Min/Max Limits** - Configurable value boundaries with enforcement
- **Step Control** - Customizable increment/decrement amounts
- **Decimal Support** - Optional decimal number handling with precision control
- **Formatting Options** - Thousands separators and decimal precision
- **Size Variants** - Small, medium, and large input sizes
- **Accessibility** - Screen reader support and keyboard navigation

## Usage

```tsx
import { NumberInput } from '@/components/form';

// Basic usage
<NumberInput />

// With label and constraints
<NumberInput 
  label="Quantity"
  min={1}
  max={100}
  defaultValue={10}
  onChange={handleChange}
  id="quantity"
/>

// Currency input
<NumberInput 
  label="Price"
  step={0.01}
  precision={2}
  formatThousands
  defaultValue={199.99}
  helperText="Price in USD"
  id="price"
/>

// Integer only
<NumberInput 
  label="Items Count"
  allowDecimal={false}
  allowNegative={false}
  min={0}
  defaultValue={5}
  id="count"
/>

// With validation
<NumberInput 
  label="Age"
  min={0}
  max={120}
  error={hasError}
  errorMessage="Please enter a valid age"
  id="age"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | Controlled value |
| `defaultValue` | `number` | - | Default value |
| `onChange` | `(value: number \| undefined) => void` | - | Value change handler |
| `min` | `number` | - | Minimum allowed value |
| `max` | `number` | - | Maximum allowed value |
| `step` | `number` | `1` | Increment/decrement step |
| `precision` | `number` | `2` | Decimal precision |
| `disabled` | `boolean` | `false` | Disabled state |
| `readOnly` | `boolean` | `false` | Read-only state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `label` | `string` | - | Label text |
| `placeholder` | `string` | `'Enter number'` | Placeholder text |
| `helperText` | `string` | - | Helper text |
| `error` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message text |
| `showControls` | `boolean` | `true` | Show increment/decrement buttons |
| `allowDecimal` | `boolean` | `true` | Allow decimal numbers |
| `allowNegative` | `boolean` | `true` | Allow negative numbers |
| `formatThousands` | `boolean` | `false` | Format with thousands separators |
| `name` | `string` | - | Input name |
| `id` | `string` | - | Input id |
| `className` | `string` | - | Additional CSS classes |

## Validation

The component includes automatic validation for:

- **Number format** - Rejects non-numeric input
- **Min/max bounds** - Enforces value limits
- **Decimal restrictions** - Honors `allowDecimal` setting
- **Negative number restrictions** - Honors `allowNegative` setting
- **Step validation** - Ensures values align with step increments

## Formatting

### Thousands Separator
```tsx
<NumberInput formatThousands defaultValue={12345} />
// Displays: 12,345
```

### Decimal Precision
```tsx
<NumberInput precision={2} defaultValue={19.999} />
// Displays: 20.00 (rounded and formatted)
```

## Keyboard Support

- **Arrow Up/Down** - Increment/decrement by step amount
- **Number keys** - Direct numeric input
- **Decimal point** - When `allowDecimal` is true
- **Minus sign** - When `allowNegative` is true

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management for control buttons
- Accessible error announcements