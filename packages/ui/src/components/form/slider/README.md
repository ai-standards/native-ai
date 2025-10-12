# Slider Component

Range slider for numeric values with customizable ranges, steps, and formatting.

## Features

- **Numeric Range** - Configurable min/max values and step increments  
- **Controlled/Uncontrolled** - Works as both controlled and uncontrolled component
- **Visual Feedback** - Progress track and interactive thumb with hover/drag states
- **Value Display** - Optional value display with custom formatting
- **Size Variants** - Small, medium, and large sizes
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Smooth Animation** - CSS transitions for visual feedback

## Usage

```tsx
import { Slider } from '@/components/form';

// Basic usage
<Slider />

// With label and value display
<Slider 
  label="Volume" 
  showValue 
  id="volume" 
/>

// Custom range and steps
<Slider 
  label="Temperature"
  min={-10}
  max={40}
  step={0.5}
  defaultValue={20}
  showValue
  formatValue={(val) => `${val}°C`}
  id="temperature"
/>

// Controlled
<Slider 
  value={sliderValue}
  onChange={setSliderValue}
  label="Brightness"
  showValue
  id="brightness"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | Controlled value |
| `defaultValue` | `number` | `50` | Default value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `onChange` | `(value: number) => void` | - | Value change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `label` | `string` | - | Label text |
| `showValue` | `boolean` | `false` | Show value display |
| `formatValue` | `(value: number) => string` | `val => val.toString()` | Value formatter |
| `name` | `string` | - | Input name |
| `id` | `string` | - | Input id |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

- Uses native HTML range input for keyboard navigation
- Supports arrow keys for precise value adjustment
- Labels are properly associated with slider controls
- Visual focus indicators for keyboard users