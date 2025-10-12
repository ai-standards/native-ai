# Tooltip Component

A lightweight tooltip component that displays helpful text on hover or focus. Perfect for providing contextual information, explanations, and UI guidance without cluttering the interface.

## Features

- **Multiple Triggers**: Hover, focus, and manual control modes
- **Smart Positioning**: Automatic placement with collision detection
- **Delay Control**: Configurable show and hide delays
- **Arrow Indicator**: Optional arrow pointing to the trigger element
- **Accessibility**: Complete ARIA implementation and keyboard support
- **Lightweight**: Minimal bundle size with essential functionality
- **Animation**: Smooth fade-in/fade-out transitions
- **Portal Rendering**: Avoids z-index issues with proper layering
- **TypeScript Support**: Full type definitions and IntelliSense
- **Mobile Friendly**: Touch-optimized behavior

## Usage

```tsx
import { Tooltip } from '@/Surface/tooltip';

// Basic tooltip
<Tooltip content="This is a helpful tooltip">
  <button>Hover me</button>
</Tooltip>

// Custom positioning and delay
<Tooltip 
  content="Custom positioned tooltip" 
  placement="top"
  delay={500}
  showArrow
>
  <span className="text-blue-600 underline">Help text</span>
</Tooltip>

// Rich content tooltip
<Tooltip
  content={
    <div>
      <strong>Advanced Feature</strong>
      <p className="text-sm mt-1">
        This feature requires a premium subscription.
      </p>
    </div>
  }
  placement="bottom-start"
  maxWidth={250}
>
  <button className="px-3 py-2 bg-gray-200 rounded">
    Premium Feature ⭐
  </button>
</Tooltip>

// Controlled tooltip
const [showTooltip, setShowTooltip] = useState(false);
<Tooltip 
  content="Controlled tooltip content"
  open={showTooltip}
  onOpenChange={setShowTooltip}
  trigger="manual"
>
  <button onClick={() => setShowTooltip(!showTooltip)}>
    Toggle Tooltip
  </button>
</Tooltip>

// Disabled state
<Tooltip content="This feature is currently disabled" disabled>
  <button disabled>Disabled Button</button>
</Tooltip>
```

## Props

| Prop         | Type                                        | Default     | Description                                |
|--------------|---------------------------------------------|-------------|--------------------------------------------|
| content      | `React.ReactNode`                           | -           | Tooltip content to display                 |
| open         | `boolean`                                   | -           | Controlled open state                      |
| defaultOpen  | `boolean`                                   | `false`     | Initial open state (uncontrolled)         |
| onOpenChange | `(open: boolean) => void`                   | -           | Called when open state changes             |
| trigger      | `'hover' \| 'focus' \| 'manual'`            | `'hover'`   | How tooltip is triggered                   |
| placement    | `Placement`                                 | `'top'`     | Preferred tooltip placement                |
| offset       | `number`                                    | `4`         | Distance from trigger element              |
| delay        | `number`                                    | `200`       | Show delay in milliseconds                 |
| hideDelay    | `number`                                    | `0`         | Hide delay in milliseconds                 |
| showArrow    | `boolean`                                   | `true`      | Show arrow pointing to trigger             |
| maxWidth     | `number`                                    | `200`       | Maximum width in pixels                    |
| disabled     | `boolean`                                   | `false`     | Disable tooltip display                    |
| className    | `string`                                    | -           | Additional CSS classes for tooltip content |
| children     | `React.ReactNode`                           | -           | Trigger element                            |

### Placement Options
- `'top'`, `'top-start'`, `'top-end'`
- `'right'`, `'right-start'`, `'right-end'`
- `'bottom'`, `'bottom-start'`, `'bottom-end'`
- `'left'`, `'left-start'`, `'left-end'`

## Examples

### Form Field Help
```tsx
const FormField = ({ label, name, help, required, children }) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
      {help && (
        <Tooltip content={help} placement="top" maxWidth={300}>
          <button
            type="button"
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <QuestionMarkCircleIcon className="w-4 h-4" />
          </button>
        </Tooltip>
      )}
    </label>
    {children}
  </div>
);

// Usage
<FormField
  label="Password"
  name="password"
  help="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
  required
>
  <input
    type="password"
    id="password"
    className="w-full border border-gray-300 rounded px-3 py-2"
  />
</FormField>
```

### Icon Tooltips
```tsx
const IconWithTooltip = ({ icon: Icon, tooltip, ...props }) => (
  <Tooltip content={tooltip} delay={300}>
    <button 
      className="p-2 text-gray-400 hover:text-gray-600 rounded transition-colors"
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  </Tooltip>
);

// Usage in toolbar
<div className="flex space-x-1 border border-gray-200 rounded p-1">
  <IconWithTooltip 
    icon={BoldIcon} 
    tooltip="Bold (Ctrl+B)" 
    onClick={() => editor.toggleBold()}
  />
  <IconWithTooltip 
    icon={ItalicIcon} 
    tooltip="Italic (Ctrl+I)" 
    onClick={() => editor.toggleItalic()}
  />
  <IconWithTooltip 
    icon={UnderlineIcon} 
    tooltip="Underline (Ctrl+U)" 
    onClick={() => editor.toggleUnderline()}
  />
  <div className="w-px bg-gray-200 mx-1" />
  <IconWithTooltip 
    icon={LinkIcon} 
    tooltip="Insert Link (Ctrl+K)" 
    onClick={() => editor.insertLink()}
  />
  <IconWithTooltip 
    icon={ImageIcon} 
    tooltip="Insert Image" 
    onClick={() => editor.insertImage()}
  />
</div>
```

### Status Indicators
```tsx
const StatusBadge = ({ status, message }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'success':
        return { color: 'bg-green-100 text-green-800', icon: '✓' };
      case 'warning':
        return { color: 'bg-yellow-100 text-yellow-800', icon: '⚠' };
      case 'error':
        return { color: 'bg-red-100 text-red-800', icon: '✗' };
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: 'ℹ' };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Tooltip content={message} placement="bottom">
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <span className="mr-1">{config.icon}</span>
        {status}
      </span>
    </Tooltip>
  );
};

// Usage
<div className="space-x-2">
  <StatusBadge 
    status="success" 
    message="All systems operational. Last check: 2 minutes ago." 
  />
  <StatusBadge 
    status="warning" 
    message="High memory usage detected. Consider restarting the service." 
  />
  <StatusBadge 
    status="error" 
    message="Connection failed. Check network settings and try again." 
  />
</div>
```

### Progressive Disclosure
```tsx
const FeatureCard = ({ feature, isAdvanced }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-medium">{feature.name}</h3>
      {isAdvanced && (
        <Tooltip 
          content="This is an advanced feature that requires technical knowledge to configure properly."
          maxWidth={250}
        >
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
            Advanced
          </span>
        </Tooltip>
      )}
    </div>
    
    <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
    
    <div className="flex items-center space-x-4 text-sm text-gray-500">
      <Tooltip content={`This feature uses approximately ${feature.usage} of your quota`}>
        <span className="flex items-center">
          <ChartBarIcon className="w-4 h-4 mr-1" />
          Usage: {feature.usage}
        </span>
      </Tooltip>
      
      <Tooltip content={`Performance impact: ${feature.impact}`}>
        <span className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1" />
          Impact: {feature.impact}
        </span>
      </Tooltip>
    </div>
  </div>
);
```

### Truncated Text
```tsx
const TruncatedText = ({ text, maxLength = 50 }) => {
  const truncated = text.length > maxLength;
  const displayText = truncated ? `${text.slice(0, maxLength)}...` : text;

  return truncated ? (
    <Tooltip content={text} maxWidth={300}>
      <span className="cursor-help">{displayText}</span>
    </Tooltip>
  ) : (
    <span>{displayText}</span>
  );
};

// Usage in data tables
<table className="w-full">
  <tbody>
    {items.map((item) => (
      <tr key={item.id} className="border-b">
        <td className="py-2">
          <TruncatedText text={item.name} maxLength={30} />
        </td>
        <td className="py-2">
          <TruncatedText text={item.description} maxLength={60} />
        </td>
      </tr>
    ))}
  </tbody>
</table>
```

## Accessibility

- **Keyboard Support**:
  - Focus triggers tooltip display (when `trigger="focus"`)
  - Escape key dismisses tooltip
  - Arrow keys can navigate through multiple tooltips
- **ARIA Attributes**: Proper `role="tooltip"`, `aria-describedby` implementation
- **Screen Reader Support**: Tooltip content is announced when trigger receives focus
- **Focus Management**: Tooltip doesn't interfere with normal tab navigation
- **High Contrast**: Respects system high contrast preferences

## Keyboard Navigation

| Key      | Action                              |
|----------|-------------------------------------|
| `Tab`    | Focus trigger element               |
| `Escape` | Dismiss tooltip (when visible)      |
| `Enter`  | Activate trigger element (if button) |

## Styling

### CSS Classes
The tooltip uses these Tailwind CSS classes:
- Content: `bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg`
- Arrow: `absolute w-2 h-2 bg-gray-900 transform rotate-45`
- Animation: `transition-opacity duration-200 ease-in-out`

### Dark Mode Support
```tsx
// Automatic dark mode adaptation
<Tooltip 
  content="Dark mode tooltip" 
  className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900"
>
  <button>Dark Mode Ready</button>
</Tooltip>
```

### Custom Styling
```tsx
// Custom colored tooltip
<Tooltip 
  content="Success message" 
  className="bg-green-600 text-white"
  showArrow={false}
>
  <button>Success Action</button>
</Tooltip>

// Large tooltip with custom width
<Tooltip 
  content={<div className="space-y-2">...</div>}
  className="p-4 text-left"
  maxWidth={400}
>
  <button>Detailed Info</button>
</Tooltip>
```

## Performance

### Delay Configuration
- **Show Delay**: Prevents tooltips from appearing on quick mouse movements
- **Hide Delay**: Allows users to move cursor to tooltip content if needed
- **Optimal Values**: 200ms show delay, 0ms hide delay for most use cases

### Bundle Size
The tooltip component is optimized for minimal bundle impact:
- Core functionality: ~2KB gzipped
- No heavy dependencies
- Tree-shakable implementation

## Best Practices

### When to Use Tooltip
- **Icon Explanations** for unclear interface elements
- **Form Help** for complex input requirements
- **Feature Explanations** for advanced functionality
- **Status Information** for system states
- **Keyboard Shortcuts** for power users

### Content Guidelines
- Keep text concise (under 100 characters when possible)
- Use sentence case for natural reading
- Avoid redundant information already visible
- Consider internationalization for multi-language support

### UX Best Practices
- Don't use tooltips for critical information
- Ensure tooltip doesn't cover related interface elements
- Use consistent delay timing across your application
- Test on touch devices where hover doesn't exist

### Performance Tips
- Use appropriate delay values to prevent tooltip spam
- Consider lazy loading for tooltips with heavy content
- Avoid nesting multiple tooltip triggers
- Use semantic HTML for better accessibility

## Related Components

- **Popover** - More complex contextual content with interactive elements
- **Modal** - Full-screen overlays for detailed information
- **Alert** - Persistent notifications for important messages
- **Badge** - Inline status and category indicators