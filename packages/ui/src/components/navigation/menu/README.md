# Menu Component

Dropdown and context menu components for hierarchical navigation and contextual actions with support for nested submenus and keyboard navigation.

## Features

- **Nested Submenus** - Multi-level menu hierarchies
- **Keyboard Navigation** - Full keyboard accessibility support
- **Flexible Placement** - Multiple positioning options
- **Controlled/Uncontrolled** - Both usage patterns supported
- **Disabled Items** - Individual item disable state
- **Separators** - Visual grouping of menu items
- **Click Outside** - Automatic closing on outside clicks

## Usage

```tsx
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from '@/components/navigation/menu';

// Basic usage
<Menu>
  <MenuTrigger>
    Actions
    <ChevronDownIcon />
  </MenuTrigger>
  <MenuContent>
    <MenuItem onSelect={() => console.log('Edit')}>Edit</MenuItem>
    <MenuItem onSelect={() => console.log('Copy')}>Copy</MenuItem>
    <MenuSeparator />
    <MenuItem disabled>Delete</MenuItem>
  </MenuContent>
</Menu>

// With placement
<Menu>
  <MenuTrigger>Options</MenuTrigger>
  <MenuContent placement="bottom-end">
    <MenuItem>Profile</MenuItem>
    <MenuItem>Settings</MenuItem>
  </MenuContent>
</Menu>

// Controlled
const [open, setOpen] = useState(false);

<Menu open={open} onOpenChange={setOpen}>
  <MenuTrigger>Controlled Menu</MenuTrigger>
  <MenuContent>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
  </MenuContent>
</Menu>
```

## Components

### Menu
Root container with state management

### MenuTrigger  
Button that opens/closes the menu

### MenuContent
Dropdown container with positioning

### MenuItem
Individual selectable menu option

### MenuSeparator
Visual divider between menu sections

### MenuSub
Nested submenu with trigger and content

## Accessibility

- Full keyboard navigation with arrow keys
- Escape key closes menu
- ARIA menu roles and states
- Focus management between trigger and items
- Screen reader announcements