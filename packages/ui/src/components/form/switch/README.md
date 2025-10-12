# Switch Component

Toggle switch for boolean values with customizable sizes and label positions.

## Features

- **Toggle Control** - Clean switch interface for on/off states
- **Controlled/Uncontrolled** - Works as both controlled and uncontrolled component
- **Size Variants** - Small, medium, and large sizes
- **Flexible Labels** - Optional labels with left or right positioning
- **Disabled State** - Support for disabled switches
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Smooth Animation** - CSS transitions for visual feedback

## Usage

```tsx
import { Switch } from '@/components/form';

// Basic usage
<Switch />

// With label
<Switch label="Enable notifications" id="notifications" />

// Controlled
<Switch 
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Dark mode"
  id="darkmode"
/>

// Different sizes
<Switch size="sm" label="Small switch" />
<Switch size="lg" label="Large switch" />

// Label positioning
<Switch 
  label="Settings" 
  labelPosition="left" 
  id="settings"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state |
| `onChange` | `(checked: boolean) => void` | - | State change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `label` | `string` | - | Label text |
| `labelPosition` | `'left' \| 'right'` | `'right'` | Label position |
| `name` | `string` | - | Input name |
| `id` | `string` | - | Input id |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

- Uses proper `role="switch"` and `aria-checked` attributes
- Supports keyboard navigation and focus management
- Labels are properly associated with switch controls
- Maintains focus visibility with ring styles