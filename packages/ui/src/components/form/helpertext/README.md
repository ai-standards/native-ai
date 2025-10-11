# HelperText

Helper text component for providing contextual information and guidance to users.

## Features

- **Contextual Guidance** - Clear, helpful information for form fields
- **Visual Variants** - Different styles for info, warning, and success states
- **Flexible Positioning** - Below field or inline placement options
- **Icon Support** - Optional icons with variant-specific defaults
- **Accessibility** - Proper ARIA associations with form fields
- **Size Variants** - Small, medium, and large sizing options

## Usage

```tsx
import { HelperText } from '@/components/form';

// Basic usage
<HelperText text="Enter your email address" />

// With field association
<HelperText 
  text="We'll never share your email" 
  fieldId="email-field" 
/>

// With icon and variant
<HelperText 
  text="This setting is recommended" 
  variant="success"
  showIcon
/>

// Custom icon
<HelperText 
  text="Important information" 
  icon={<InfoIcon />}
  showIcon
/>

// Inline positioning
<HelperText 
  text="Optional field" 
  position="inline" 
/>

// Different sizes
<HelperText text="Small helper" size="sm" />
<HelperText text="Large helper" size="lg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Helper text content |
| `fieldId` | `string` | - | Field ID for accessibility association |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `showIcon` | `boolean` | `false` | Show helper icon |
| `className` | `string` | `''` | Additional CSS class names |
| `icon` | `ReactNode` | - | Custom helper icon |
| `variant` | `'default' \| 'info' \| 'warning' \| 'success'` | `'default'` | Helper text variant |
| `position` | `'below' \| 'inline'` | `'below'` | Position relative to field |

## Variants

### Default
Standard gray text for general helper information.

### Info
Blue accent for additional information or tips.

### Warning
Yellow accent for cautionary guidance or important notices.

### Success
Green accent for positive feedback or recommended actions.

## Positioning

### Below
Standard positioning beneath form fields (default).

### Inline
Positioned next to elements, useful for checkboxes or short explanations.

## Icons

### Variant Icons
Each variant has an appropriate default icon:
- **Default:** Information circle (outline)
- **Info:** Information circle (filled)
- **Warning:** Warning triangle
- **Success:** Check circle

### Custom Icons
Override defaults with any React component or SVG element.

### Icon Accessibility
Icons include `aria-hidden="true"` to prevent screen reader duplication.

## Accessibility

### Field Association
When `fieldId` is provided, creates an ID that form fields can reference:

```tsx
<input 
  id="email"
  aria-describedby="email-helper"
  // ... other props
/>
<HelperText 
  text="Email format: user@domain.com" 
  fieldId="email" 
  // Creates id="email-helper"
/>
```

### Screen Reader Support
- Helper text provides additional context without being intrusive
- No special announcements (unlike error messages)
- Properly associated with form controls

## Size Variants

### Small (`sm`)
Compact helper text for dense layouts or secondary information.

### Medium (`md`)
Standard size for most helper text scenarios.

### Large (`lg`)
Prominent helper text for important guidance or accessibility needs.

## Best Practices

### Content Guidelines
- Keep text concise but informative
- Use positive, helpful language
- Provide actionable guidance when possible
- Avoid redundancy with labels

### Visual Design
- Use variants sparingly to maintain hierarchy
- Consider contrast ratios for accessibility
- Ensure helper text doesn't overwhelm the interface

### UX Considerations
- Display helper text proactively, not just on errors
- Use consistent language patterns across similar fields
- Consider progressive disclosure for complex help

## Integration

### Form Libraries
Works seamlessly with form validation libraries:
- React Hook Form
- Formik
- Final Form
- Custom validation systems

### Component Integration
Designed to complement other form components:

```tsx
<FormField 
  label="Password"
  helperText={<HelperText text="Min 8 characters" variant="info" />}
>
  <Input type="password" />
</FormField>
```

## Styling

### Color Schemes
- Maintains consistency across light/dark themes
- Uses semantic colors for different variants
- Provides appropriate contrast ratios

### Typography
- Inherits font family from parent context
- Scales appropriately with size variants
- Maintains readability at all sizes