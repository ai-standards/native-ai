# Breadcrumb Component

A hierarchical navigation component that displays the current page's location within the site structure, helping users understand their position and navigate back to parent pages.

## Features

- **Hierarchical Links** - Shows path from root to current page
- **Custom Separators** - Configurable separator elements between items  
- **Smart Truncation** - Automatically truncates long paths with ellipsis
- **Flexible Navigation** - Supports both href links and click handlers
- **Accessibility** - ARIA navigation landmarks and current page indication
- **Responsive Design** - Works across different screen sizes

## Usage

```tsx
import { Breadcrumb } from '@/components/navigation/breadcrumb';

// Basic usage
const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Laptops', isActive: true }
];

<Breadcrumb items={items} />

// With click handlers
const itemsWithHandlers = [
  { label: 'Dashboard', onClick: () => navigate('/dashboard') },
  { label: 'Settings', onClick: () => navigate('/settings') },
  { label: 'Profile', isActive: true }
];

<Breadcrumb items={itemsWithHandlers} />

// With truncation
<Breadcrumb 
  items={longItems}
  maxItems={4}
  itemsBeforeCollapse={1}
  itemsAfterCollapse={2}
/>
```

## Props

- `items` - Array of breadcrumb items with label, href/onClick, and isActive
- `separator` - Custom separator element (default: chevron icon)  
- `maxItems` - Maximum items before truncating with ellipsis
- `itemsBeforeCollapse` - Items to show before ellipsis (default: 1)
- `itemsAfterCollapse` - Items to show after ellipsis (default: 1)

## Accessibility

- Uses `nav` element with `aria-label="Breadcrumb"`
- Current/active pages marked with `aria-current="page"`
- Keyboard navigation support for interactive elements
- Semantic list structure with `ol` and `li` elements