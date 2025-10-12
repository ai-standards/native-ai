# Panel Component

A collapsible content panel with title, variants, and state management. Perfect for organizing content sections, settings panels, and collapsible information displays.

## Features

- **Collapsible Content**: Toggle visibility with smooth animations
- **Multiple Variants**: Default, outlined, and filled styles  
- **Size Options**: Small, medium, and large text sizing
- **State Management**: Controlled and uncontrolled modes
- **Keyboard Navigation**: Enter and Space key support
- **Accessibility**: Proper ARIA attributes and focus management
- **TypeScript Support**: Full type definitions and IntelliSense
- **Customizable**: Extensive styling and behavior options

## Usage

```tsx
import { Panel } from '@/Surface/panel';

// Basic collapsible panel
<Panel title="Settings">
  <div>Panel content goes here...</div>
</Panel>

// Controlled state
const [collapsed, setCollapsed] = useState(false);
<Panel 
  title="Controlled Panel" 
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
>
  <div>Controlled content</div>
</Panel>

// Different variants
<Panel title="Outlined Panel" variant="outlined">
  <div>Content with outlined styling</div>
</Panel>

// Non-collapsible content panel
<Panel collapsible={false}>
  <div>Always visible content</div>
</Panel>
```

## Props

| Prop              | Type                                      | Default     | Description                                    |
|-------------------|-------------------------------------------|-------------|------------------------------------------------|
| title             | `React.ReactNode`                         | -           | Panel header title                             |
| defaultCollapsed  | `boolean`                                 | `false`     | Initial collapsed state (uncontrolled)        |
| collapsed         | `boolean`                                 | -           | Collapsed state (controlled)                   |
| onCollapsedChange | `(collapsed: boolean) => void`            | -           | Called when collapse state changes             |
| collapsible       | `boolean`                                 | `true`      | Whether the panel can be collapsed             |
| variant           | `'default' \| 'outlined' \| 'filled'`     | `'default'` | Visual style variant                           |
| size              | `'sm' \| 'md' \| 'lg'`                    | `'md'`      | Text size variant                              |
| className         | `string`                                  | -           | Additional CSS classes                         |
| children          | `React.ReactNode`                         | -           | Panel content                                  |

## Examples

### Settings Form
```tsx
<div className="space-y-4">
  <Panel title="Personal Information" variant="outlined">
    <div className="space-y-3">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
    </div>
  </Panel>

  <Panel title="Preferences" variant="outlined" defaultCollapsed>
    <div className="space-y-3">
      <label><input type="checkbox" /> Newsletter</label>
      <label><input type="checkbox" /> Notifications</label>
    </div>
  </Panel>
</div>
```

### Dashboard Widgets
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Panel title="Recent Activity" variant="filled">
    <ul className="space-y-2">
      <li>User logged in</li>
      <li>File uploaded</li>
      <li>Settings updated</li>
    </ul>
  </Panel>

  <Panel title="Quick Stats" variant="filled">
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold">1,234</div>
        <div className="text-sm text-gray-600">Users</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">567</div>
        <div className="text-sm text-gray-600">Orders</div>
      </div>
    </div>
  </Panel>
</div>
```

## Accessibility

- **Keyboard Navigation**: Enter and Space keys toggle collapse state
- **ARIA Attributes**: Proper `aria-expanded` and `aria-controls` attributes
- **Focus Management**: Focusable header when collapsible
- **Screen Reader Support**: Semantic structure and labels
- **Color Contrast**: Meets WCAG guidelines for text and backgrounds

## Styling

### CSS Classes
The panel uses these Tailwind CSS classes:
- Base: `rounded-lg overflow-hidden`
- Variants: `bg-white border-gray-200`, `bg-transparent border-gray-300`, `bg-gray-50`
- Sizes: `text-sm`, `text-base`, `text-lg`
- Interactive: `cursor-pointer hover:bg-gray-50`

### Customization
```tsx
// Custom styling
<Panel 
  className="shadow-lg border-2 border-blue-200" 
  title="Custom Styled Panel"
>
  <div>Custom content</div>
</Panel>

// Size variations
<Panel title="Small Panel" size="sm">Small text size</Panel>
<Panel title="Large Panel" size="lg">Large text size</Panel>
```

## Animation

The panel includes smooth collapse/expand animations:
- Content height transitions with `transition-all duration-200 ease-in-out`
- Chevron icon rotates to indicate state
- Overflow handling prevents content clipping during animation

## Best Practices

### When to Use Panel
- **Settings sections** that can be collapsed for better organization
- **Dashboard widgets** with optional detailed views
- **Form sections** to group related fields
- **Content organization** where space is limited

### Accessibility Best Practices
- Provide meaningful titles for screen readers
- Use keyboard navigation consistently
- Maintain logical tab order
- Consider reduced motion preferences

### Performance Tips
- Use `defaultCollapsed` for uncontrolled components when possible
- Avoid heavy content in collapsed panels to improve initial render
- Consider lazy loading for complex panel content

## Related Components

- **Accordion** - Multiple collapsible sections with selection management
- **Modal** - Overlay dialogs for focused content
- **Drawer** - Sliding panels from screen edges
- **Card** - Static content containers with variants