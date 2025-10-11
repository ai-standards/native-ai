# FormSection

Form section component for grouping related form fields with optional dividers, titles, and collapsible functionality.

## Features

- **Section Headers** - Optional titles and descriptions for sections
- **Visual Dividers** - Separators between form sections
- **Collapsible Content** - Expandable/collapsible sections for better UX
- **Size Variants** - Small, medium, and large spacing options
- **Controlled State** - Support for controlled and uncontrolled collapse state
- **Accessibility** - Full ARIA support for collapsible sections

## Usage

```tsx
import { FormSection, FormField } from '@/components/form';

// Basic section
<FormSection>
  <FormField label="First Name">
    <input type="text" />
  </FormField>
  <FormField label="Last Name">
    <input type="text" />
  </FormField>
</FormSection>

// With title and description
<FormSection 
  title="Contact Information"
  description="Please provide your contact details"
>
  <FormField label="Email">
    <input type="email" />
  </FormField>
  <FormField label="Phone">
    <input type="tel" />
  </FormField>
</FormSection>

// With divider
<FormSection title="Billing Address" showDivider>
  <FormField label="Street Address">
    <input type="text" />
  </FormField>
</FormSection>

// Collapsible section
<FormSection 
  title="Advanced Options" 
  collapsible 
  defaultCollapsed
>
  <FormField label="API Key">
    <input type="text" />
  </FormField>
</FormSection>

// Controlled collapsible
<FormSection
  title="Settings"
  collapsible
  collapsed={isCollapsed}
  onCollapsedChange={setIsCollapsed}
>
  {/* Fields */}
</FormSection>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Section title |
| `description` | `string` | - | Section description |
| `className` | `string` | `''` | Additional CSS class names |
| `children` | `ReactNode` | - | Section content |
| `showDivider` | `boolean` | `false` | Show divider above section |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Section size |
| `collapsible` | `boolean` | `false` | Whether section is collapsible |
| `defaultCollapsed` | `boolean` | `false` | Initial collapsed state |
| `collapsed` | `boolean` | - | Controlled collapsed state |
| `onCollapsedChange` | `(collapsed: boolean) => void` | - | Callback when collapsed state changes |

## Size Variants

### Small (`sm`)
Compact spacing for dense forms or mobile layouts.

### Medium (`md`)
Standard spacing for most use cases.

### Large (`lg`)
Generous spacing for improved readability and accessibility.

## Collapsible Behavior

### Uncontrolled
Use `defaultCollapsed` to set the initial state. The component manages its own state internally.

### Controlled
Use `collapsed` and `onCollapsedChange` for external state management.

### Accessibility
- Proper ARIA attributes for screen readers
- Keyboard navigation support
- Clear expand/collapse button labels

## Visual Design

### Dividers
Optional horizontal dividers help separate form sections visually. Useful for long forms with multiple distinct groups of fields.

### Typography
- Titles use semantic heading tags (`h3`)
- Descriptions provide context without overwhelming the interface
- Size variants maintain consistent typography scale

## Layout Patterns

### Single Column
Stack sections vertically for simple forms.

### Grid Layouts
Combine with CSS Grid for complex multi-column layouts.

### Responsive Design
Sections adapt to different screen sizes, with collapsible sections particularly useful on mobile devices.

## Integration

Works seamlessly with:
- `FormField` components for consistent field styling
- Form validation libraries
- State management solutions
- Responsive design systems