# Popover Component

A floating overlay component that displays contextual content relative to a trigger element. Perfect for menus, tooltips, and additional information without leaving the current context.

## Features

- **Smart Positioning**: Automatic placement with collision detection and repositioning
- **Trigger Modes**: Click, hover, focus, and manual control options
- **Arrow Indicator**: Optional arrow pointing to the trigger element
- **Dismissible**: Click-outside, escape key, and focus-out dismissal options
- **Accessibility**: Complete ARIA implementation with proper focus management
- **Animation**: Smooth fade-in/fade-out and scale transitions
- **Portal Rendering**: Renders outside component tree to avoid z-index issues
- **TypeScript Support**: Full type definitions and IntelliSense
- **Responsive**: Mobile-friendly with touch interaction support

## Usage

```tsx
import { Popover } from '@/Surface/popover';

// Basic click-triggered popover
<Popover>
  <Popover.Trigger>
    <button>Show Menu</button>
  </Popover.Trigger>
  <Popover.Content>
    <div className="p-3">
      <p>This is the popover content</p>
    </div>
  </Popover.Content>
</Popover>

// Hover-triggered popover with arrow
<Popover trigger="hover" showArrow>
  <Popover.Trigger>
    <span className="text-blue-600 underline">Hover me</span>
  </Popover.Trigger>
  <Popover.Content>
    <div className="p-3 text-sm">
      Additional information appears on hover
    </div>
  </Popover.Content>
</Popover>

// Controlled popover with custom positioning
const [isOpen, setIsOpen] = useState(false);
<Popover 
  open={isOpen} 
  onOpenChange={setIsOpen}
  placement="bottom-start"
  offset={10}
>
  <Popover.Trigger>
    <button>Controlled Popover</button>
  </Popover.Trigger>
  <Popover.Content>
    <div className="p-4">
      <h3 className="font-medium mb-2">Custom Content</h3>
      <p className="text-sm text-gray-600">
        This popover is controlled externally
      </p>
    </div>
  </Popover.Content>
</Popover>

// Menu-style popover
<Popover trigger="click" closeOnItemClick>
  <Popover.Trigger>
    <button className="px-4 py-2 bg-blue-600 text-white rounded">
      Actions ▼
    </button>
  </Popover.Trigger>
  <Popover.Content className="min-w-[150px]">
    <div className="py-1">
      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">
        Edit
      </button>
      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">
        Duplicate
      </button>
      <hr className="my-1" />
      <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50">
        Delete
      </button>
    </div>
  </Popover.Content>
</Popover>
```

## Components

### Popover (Root)

The main popover container that manages state and positioning.

#### Props
| Prop              | Type                                        | Default     | Description                                |
|-------------------|---------------------------------------------|-------------|--------------------------------------------|
| open              | `boolean`                                   | -           | Controlled open state                      |
| defaultOpen       | `boolean`                                   | `false`     | Initial open state (uncontrolled)         |
| onOpenChange      | `(open: boolean) => void`                   | -           | Called when open state changes             |
| trigger           | `'click' \| 'hover' \| 'focus' \| 'manual'` | `'click'`   | How popover is triggered                   |
| placement         | `Placement`                                 | `'bottom'`  | Preferred popover placement                |
| offset            | `number`                                    | `4`         | Distance from trigger element              |
| showArrow         | `boolean`                                   | `false`     | Show arrow pointing to trigger             |
| closeOnClickAway  | `boolean`                                   | `true`      | Close when clicking outside                |
| closeOnEscape     | `boolean`                                   | `true`      | Close when pressing Escape                 |
| closeOnItemClick  | `boolean`                                   | `false`     | Close when clicking popover items          |
| disabled          | `boolean`                                   | `false`     | Disable popover triggering                 |
| children          | `React.ReactNode`                           | -           | Trigger and content components             |

#### Placement Options
- `'top'`, `'top-start'`, `'top-end'`
- `'right'`, `'right-start'`, `'right-end'`
- `'bottom'`, `'bottom-start'`, `'bottom-end'`
- `'left'`, `'left-start'`, `'left-end'`

### Popover.Trigger

The element that triggers the popover display.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| asChild   | `boolean`         | `false` | Render as child element |
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Trigger content        |

### Popover.Content

The floating content container with automatic positioning.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Popover content        |

## Examples

### Context Menu
```tsx
const ContextMenu = ({ items, onItemClick }) => (
  <Popover trigger="click" placement="bottom-start" closeOnItemClick>
    <Popover.Trigger>
      <button className="p-2 hover:bg-gray-100 rounded">
        <DotsVerticalIcon className="w-4 h-4" />
      </button>
    </Popover.Trigger>
    <Popover.Content className="min-w-[160px]">
      <div className="py-1">
        {items.map((item, index) => (
          <div key={index}>
            {item.type === 'divider' ? (
              <hr className="my-1" />
            ) : (
              <button
                onClick={() => onItemClick(item)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                  item.danger ? 'text-red-600 hover:bg-red-50' : ''
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </Popover.Content>
  </Popover>
);

// Usage
const menuItems = [
  { label: 'Edit', icon: PencilIcon, action: 'edit' },
  { label: 'Duplicate', icon: DuplicateIcon, action: 'duplicate' },
  { label: 'Share', icon: ShareIcon, action: 'share' },
  { type: 'divider' },
  { label: 'Delete', icon: TrashIcon, action: 'delete', danger: true }
];
```

### User Profile Card
```tsx
const UserProfilePopover = ({ user }) => (
  <Popover trigger="hover" placement="top" showArrow offset={8}>
    <Popover.Trigger>
      <img
        src={user.avatar}
        alt={user.name}
        className="w-8 h-8 rounded-full cursor-pointer"
      />
    </Popover.Trigger>
    <Popover.Content className="max-w-xs">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-600">@{user.username}</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mb-3">{user.bio}</p>
        
        <div className="flex space-x-4 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-900">{user.followers}</span>
            <span className="ml-1">followers</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">{user.following}</span>
            <span className="ml-1">following</span>
          </div>
        </div>
      </div>
    </Popover.Content>
  </Popover>
);
```

### Filter Dropdown
```tsx
const FilterPopover = ({ filters, onFiltersChange }) => {
  const [tempFilters, setTempFilters] = useState(filters);

  return (
    <Popover placement="bottom-end">
      <Popover.Trigger>
        <button className="px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center space-x-2">
          <FilterIcon className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </Popover.Trigger>
      <Popover.Content className="min-w-[250px]">
        <div className="p-4">
          <h3 className="font-medium mb-3">Filter Options</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={tempFilters.status}
                onChange={(e) => setTempFilters({...tempFilters, status: e.target.value})}
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={tempFilters.category}
                onChange={(e) => setTempFilters({...tempFilters, category: e.target.value})}
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="">All Categories</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={tempFilters.featured}
                  onChange={(e) => setTempFilters({...tempFilters, featured: e.target.checked})}
                />
                <span>Featured only</span>
              </label>
            </div>
          </div>
          
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => setTempFilters({})}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
            >
              Clear
            </button>
            <button
              onClick={() => onFiltersChange(tempFilters)}
              className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
};
```

### Rich Tooltip
```tsx
const RichTooltip = ({ title, description, children }) => (
  <Popover trigger="hover" placement="top" showArrow>
    <Popover.Trigger>
      {children}
    </Popover.Trigger>
    <Popover.Content className="max-w-sm">
      <div className="p-3">
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Popover.Content>
  </Popover>
);

// Usage
<RichTooltip
  title="Advanced Search"
  description="Use operators like AND, OR, NOT to create complex search queries. Supports regex patterns and field-specific searches."
>
  <button className="p-1 text-gray-400 hover:text-gray-600">
    <QuestionMarkCircleIcon className="w-4 h-4" />
  </button>
</RichTooltip>
```

## Accessibility

- **Keyboard Navigation**:
  - Enter and Space activate trigger when focused
  - Escape closes popover
  - Tab moves focus within popover content
- **ARIA Attributes**: Complete implementation with `aria-haspopup`, `aria-expanded`, `aria-controls`
- **Focus Management**: 
  - Focus moves to popover content when opened (if focusable)
  - Focus returns to trigger when closed
  - Focus trapping within popover when needed
- **Screen Reader Support**: Proper semantic structure and state announcements

## Keyboard Navigation

| Key           | Action                                      |
|---------------|---------------------------------------------|
| `Enter/Space` | Activate trigger (when trigger is focused) |
| `Escape`      | Close popover                               |
| `Tab`         | Navigate through popover content            |
| `Shift + Tab` | Navigate backward through content           |

## Styling

### CSS Classes
The popover uses these Tailwind CSS classes:
- Content: `bg-white border border-gray-200 rounded-md shadow-lg`
- Arrow: `absolute w-2 h-2 bg-white border transform rotate-45`
- Animation: `transition-opacity duration-200 ease-in-out`

### Positioning
The popover automatically calculates the best position based on:
- Available space in viewport
- Preferred placement prop
- Collision detection with viewport edges
- Offset distance from trigger

### Animation
Includes smooth transitions:
- Opacity fade-in/fade-out
- Scale effect for entrance/exit
- Duration: 200ms with ease-in-out timing

## Best Practices

### When to Use Popover
- **Context Menus** for additional actions
- **Rich Tooltips** with formatted content
- **Filter Dropdowns** and selection interfaces
- **Quick Forms** for simple data entry
- **User Previews** and profile cards

### Design Guidelines
- Keep content concise and focused
- Use appropriate trigger methods for context
- Ensure popover doesn't cover important interface elements
- Provide clear visual connection with arrow when needed

### Performance Tips
- Use `trigger="manual"` for complex controlled scenarios
- Avoid heavy content in hover-triggered popovers
- Consider lazy loading for complex popover content
- Use appropriate offset values to prevent flickering

### Accessibility Best Practices
- Ensure trigger elements are keyboard accessible
- Use semantic HTML within popover content
- Test with screen readers and keyboard-only navigation
- Consider users who prefer reduced motion

## Related Components

- **Tooltip** - Simple text overlays for basic information
- **Modal** - Full-screen overlays for complex interactions
- **Drawer** - Sliding panels for more extensive content
- **Dropdown** - Selection interfaces with predefined options