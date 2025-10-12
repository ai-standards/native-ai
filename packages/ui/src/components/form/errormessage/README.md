# ErrorMessage

Styled error message component for displaying validation errors and other error states.

## Features

- **Consistent Styling** - Unified error display across all form components
- **Accessibility** - Proper ARIA roles and attributes for screen readers
- **Size Variants** - Small, medium, and large sizing options
- **Icons** - Optional error icons with customization support
- **Animations** - Smooth fade and slide transitions
- **Auto Association** - Automatic field ID association for accessibility

## Usage

```tsx
import { ErrorMessage } from '@/components/form';

// Basic usage
<ErrorMessage message="This field is required" />

// With field association
<ErrorMessage 
  message="Please enter a valid email" 
  fieldId="email-field" 
/>

// Without icon
<ErrorMessage 
  message="Error without icon" 
  showIcon={false} 
/>

// Custom icon
<ErrorMessage 
  message="Custom error" 
  icon={<CustomIcon />} 
/>

// Different sizes
<ErrorMessage message="Small error" size="sm" />
<ErrorMessage message="Large error" size="lg" />

// Animation variants
<ErrorMessage message="Fade in" animation="fade" />
<ErrorMessage message="Slide in" animation="slide" />
<ErrorMessage message="No animation" animation="none" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | - | Error message text |
| `fieldId` | `string` | - | Field ID for accessibility association |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `showIcon` | `boolean` | `true` | Show error icon |
| `className` | `string` | `''` | Additional CSS class names |
| `icon` | `ReactNode` | - | Custom error icon |
| `animation` | `'fade' \| 'slide' \| 'none'` | `'fade'` | Animation variant |

## Size Variants

### Small (`sm`)
Compact error messages for dense layouts or secondary validation.

### Medium (`md`)
Standard size for most form validation scenarios.

### Large (`lg`)
Prominent error messages for important validation or accessibility needs.

## Animations

### Fade
Smooth opacity transition when error appears/disappears.

### Slide
Combines opacity with upward slide motion for dynamic feel.

### None
No animation - instant display for performance-critical scenarios.

## Accessibility

### ARIA Attributes
- `role="alert"` announces errors to screen readers immediately
- Automatic `id` generation based on field ID
- `aria-hidden` on decorative icons

### Field Association
When `fieldId` is provided, the error message gets an ID that can be referenced by form fields using `aria-describedby`.

```tsx
<input 
  id="email"
  aria-describedby="email-error"
  // ... other props
/>
<ErrorMessage 
  message="Invalid email" 
  fieldId="email" 
  // Creates id="email-error"
/>
```

## Icons

### Default Icon
Uses a standard exclamation icon in a circle for consistent error indication.

### Custom Icons
Replace the default icon with any React node:

```tsx
<ErrorMessage 
  icon={<AlertTriangle className="w-4 h-4" />}
  message="Warning message"
/>
```

### No Icon
Hide icons entirely for text-only error messages:

```tsx
<ErrorMessage 
  showIcon={false}
  message="Simple text error"
/>
```

## Integration

### Form Libraries
Works seamlessly with validation libraries:
- React Hook Form
- Formik
- Yup validation
- Custom validation logic

### Component Integration
Designed to work with other form components in this library:

```tsx
<FormField 
  label="Email"
  error={<ErrorMessage message={emailError} />}
>
  <Input type="email" />
</FormField>
```

## Styling

### Color Scheme
Uses consistent red color palette:
- Light mode: `text-red-600`
- Dark mode: `text-red-400`

### Responsive Design
Maintains legibility across all screen sizes with appropriate text scaling.

### Theming
Supports light/dark theme switching through Tailwind CSS classes.