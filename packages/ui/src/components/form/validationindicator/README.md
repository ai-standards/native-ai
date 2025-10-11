# ValidationIndicator

Visual validation status indicators for form fields with icons and optional status text.

## Features

- **Status States** - Idle, validating, valid, invalid, and warning states
- **Visual Feedback** - Clear icons and colors for each validation state
- **Loading Animation** - Animated spinner for async validation
- **Flexible Display** - Icon-only or with status text
- **Size Variants** - Small, medium, and large sizing options
- **Positioning** - Start or end positioning relative to content
- **Accessibility** - Proper ARIA live regions for status updates

## Usage

```tsx
import { ValidationIndicator } from '@/components/form';

// Basic icon-only indicator
<ValidationIndicator status="valid" />

// With status text
<ValidationIndicator 
  status="validating" 
  showText 
/>

// Custom status text
<ValidationIndicator 
  status="invalid" 
  statusText="Email already exists"
  showText 
/>

// Custom icons
<ValidationIndicator 
  status="valid"
  icons={{ valid: <CheckIcon /> }}
/>

// Different sizes and positions
<ValidationIndicator 
  status="warning" 
  size="lg" 
  position="start"
  showText 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'idle' \| 'validating' \| 'valid' \| 'invalid' \| 'warning'` | `'idle'` | Validation status |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `showText` | `boolean` | `false` | Show status text |
| `statusText` | `string` | - | Custom status text |
| `className` | `string` | `''` | Additional CSS class names |
| `icons` | `object` | `{}` | Custom icons for each status |
| `position` | `'start' \| 'end'` | `'end'` | Position of the indicator |
| `animate` | `boolean` | `true` | Animate transitions |

## Status States

### Idle
- **Color:** Gray
- **Default Text:** "Ready"
- **Use:** Initial state, no validation performed
- **Behavior:** Hidden by default unless `showText` is true

### Validating
- **Color:** Blue
- **Default Text:** "Validating..."
- **Icon:** Animated spinner
- **Use:** During async validation processes

### Valid
- **Color:** Green
- **Default Text:** "Valid"
- **Icon:** Check circle
- **Use:** Successful validation

### Invalid
- **Color:** Red
- **Default Text:** "Invalid"
- **Icon:** Error circle
- **Use:** Failed validation

### Warning
- **Color:** Yellow
- **Default Text:** "Warning"
- **Icon:** Warning triangle
- **Use:** Valid but with cautionary notes

## Size Variants

### Small (`sm`)
- Icon: 12px (w-3 h-3)
- Text: text-xs
- Use: Compact layouts, dense forms

### Medium (`md`)
- Icon: 16px (w-4 h-4)
- Text: text-sm
- Use: Standard form fields

### Large (`lg`)
- Icon: 20px (w-5 h-5)
- Text: text-base
- Use: Prominent validation, accessibility

## Positioning

### Start
Icon appears before text content.

### End
Icon appears after text content (default).

## Custom Icons

Override default icons for any status:

```tsx
<ValidationIndicator
  status="valid"
  icons={{
    valid: <CustomCheckIcon />,
    invalid: <CustomErrorIcon />,
  }}
/>
```

Icon components should:
- Accept className prop for sizing
- Include `aria-hidden="true"` for accessibility
- Use currentColor for theming

## Animations

### Loading Animation
When `status="validating"` and `animate={true}`, the icon rotates continuously.

### Color Transitions
Smooth color transitions when status changes (when `animate={true}`).

### Disable Animations
Set `animate={false}` for instant state changes without transitions.

## Accessibility

### ARIA Live Region
Component uses `role="status"` and `aria-live="polite"` to announce status changes to screen readers.

### Status Communication
- Visual indicators are supplemented with text when `showText={true}`
- Custom status text provides context-specific information
- Icons include `aria-hidden="true"` to prevent duplication

### Integration with Form Fields
Best practices for associating with form inputs:

```tsx
<input 
  aria-describedby="field-status"
  // ... other props
/>
<div id="field-status">
  <ValidationIndicator status="invalid" showText />
</div>
```

## Integration Patterns

### Inline with Input Fields
Position indicator inside or adjacent to form fields:

```tsx
<div className="relative">
  <input className="pr-10 ..." />
  <div className="absolute right-3 top-1/2 -translate-y-1/2">
    <ValidationIndicator status={status} />
  </div>
</div>
```

### Below Form Fields
Display status information below fields:

```tsx
<input />
<div className="mt-1">
  <ValidationIndicator status={status} showText />
</div>
```

### Real-time Validation
Use with async validation:

```tsx
const [status, setStatus] = useState('idle');

const validate = async (value) => {
  setStatus('validating');
  try {
    await validateAsync(value);
    setStatus('valid');
  } catch {
    setStatus('invalid');
  }
};
```

## Styling

### Color Scheme
Uses semantic colors that work across light/dark themes:
- Idle: Gray tones
- Validating: Blue tones  
- Valid: Green tones
- Invalid: Red tones
- Warning: Yellow tones

### Responsive Design
Scales appropriately across device sizes while maintaining visual hierarchy.

### Theme Compatibility
Automatically adapts to light/dark theme contexts through Tailwind's dark mode utilities.