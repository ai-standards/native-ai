# Drawer Component

A sliding panel component that appears from screen edges. Perfect for navigation menus, filters, settings panels, and mobile-friendly interfaces.

## Features

- **Edge Positioning**: Slides from top, right, bottom, or left edges
- **Size Variants**: Multiple width/height options for different content needs
- **Backdrop Control**: Optional backdrop with click-outside-to-close
- **Focus Management**: Automatic focus trapping and restoration
- **Keyboard Support**: Escape key closes drawer, proper tab navigation
- **Accessibility**: Complete ARIA implementation and screen reader support
- **Animation**: Smooth slide-in/slide-out transitions
- **Scroll Handling**: Body scroll lock when drawer is open
- **TypeScript Support**: Full type definitions and IntelliSense
- **Responsive**: Mobile-optimized with touch-friendly interactions

## Usage

```tsx
import { Drawer } from '@/Surface/drawer';

// Basic drawer from right side
const [isOpen, setIsOpen] = useState(false);

<Drawer open={isOpen} onOpenChange={setIsOpen}>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Navigation Menu</Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
      <nav className="space-y-2">
        <a href="/" className="block p-2 hover:bg-gray-100 rounded">Home</a>
        <a href="/about" className="block p-2 hover:bg-gray-100 rounded">About</a>
        <a href="/contact" className="block p-2 hover:bg-gray-100 rounded">Contact</a>
      </nav>
    </Drawer.Body>
  </Drawer.Content>
</Drawer>

// Left side drawer with custom size
<Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} side="left" size="sm">
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Filters</Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select className="w-full border rounded px-3 py-2">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <input type="range" className="w-full" />
        </div>
      </div>
    </Drawer.Body>
    <Drawer.Footer>
      <button className="w-full bg-blue-600 text-white py-2 rounded">
        Apply Filters
      </button>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>

// Bottom drawer (mobile-style)
<Drawer open={isBottomOpen} onOpenChange={setIsBottomOpen} side="bottom">
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Share Options</Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
      <div className="grid grid-cols-3 gap-4 text-center">
        <button className="p-4 hover:bg-gray-100 rounded">
          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
          <span className="text-sm">Twitter</span>
        </button>
        <button className="p-4 hover:bg-gray-100 rounded">
          <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2"></div>
          <span className="text-sm">Facebook</span>
        </button>
        <button className="p-4 hover:bg-gray-100 rounded">
          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
          <span className="text-sm">WhatsApp</span>
        </button>
      </div>
    </Drawer.Body>
  </Drawer.Content>
</Drawer>
```

## Components

### Drawer (Root)

The main drawer container that provides context and manages the overlay.

#### Props
| Prop                 | Type                           | Default   | Description                              |
|----------------------|--------------------------------|-----------|------------------------------------------|
| open                 | `boolean`                      | `false`   | Whether the drawer is visible            |
| onOpenChange         | `(open: boolean) => void`      | -         | Called when drawer open state changes    |
| side                 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Edge from which drawer slides |
| closeOnBackdropClick | `boolean`                      | `true`    | Close drawer when clicking backdrop      |
| closeOnEscape        | `boolean`                      | `true`    | Close drawer when pressing Escape       |
| children             | `React.ReactNode`              | -         | Drawer content components                |

### Drawer.Content

The drawer panel container with positioning and sizing.

#### Props
| Prop      | Type                                | Default | Description                    |
|-----------|-------------------------------------|---------|--------------------------------|
| size      | `'sm' \| 'md' \| 'lg' \| 'xl'`      | `'md'`  | Drawer panel size              |
| className | `string`                            | -       | Additional CSS classes         |
| children  | `React.ReactNode`                   | -       | Drawer sections and content    |

### Drawer.Header

The drawer header section containing title and optional close button.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Header content         |

### Drawer.Title

The main drawer title with proper ARIA labeling.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Title text             |

### Drawer.Body

The main content area of the drawer with scroll handling.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Body content           |

### Drawer.Footer

The footer section typically containing action buttons.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Footer content         |

## Examples

### Mobile Navigation Menu
```tsx
const MobileNav = ({ isOpen, onClose }) => (
  <Drawer open={isOpen} onOpenChange={onClose} side="left" size="sm">
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Menu</Drawer.Title>
      </Drawer.Header>
      
      <Drawer.Body>
        <nav className="space-y-1">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Home
          </a>
          <a href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Products
          </a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Contact
          </a>
        </nav>
        
        <hr className="my-4" />
        
        <div className="space-y-1">
          <a href="/login" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">
            Sign In
          </a>
          <a href="/signup" className="block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded text-center">
            Sign Up
          </a>
        </div>
      </Drawer.Body>
    </Drawer.Content>
  </Drawer>
);
```

### Shopping Cart Drawer
```tsx
const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Drawer open={isOpen} onOpenChange={onClose} side="right" size="md">
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Shopping Cart ({cartItems.length})</Drawer.Title>
        </Drawer.Header>
        
        <Drawer.Body>
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Drawer.Body>
        
        {cartItems.length > 0 && (
          <Drawer.Footer>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </Drawer.Footer>
        )}
      </Drawer.Content>
    </Drawer>
  );
};
```

### Filter Panel
```tsx
const FilterDrawer = ({ isOpen, onClose, filters, onFiltersChange }) => (
  <Drawer open={isOpen} onOpenChange={onClose} side="left" size="sm">
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Filters</Drawer.Title>
      </Drawer.Header>
      
      <Drawer.Body>
        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {['All', 'Electronics', 'Clothing', 'Books', 'Home'].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => onFiltersChange({...filters, category: e.target.value})}
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.maxPrice}
                onChange={(e) => onFiltersChange({...filters, maxPrice: e.target.value})}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>${filters.maxPrice}</span>
              </div>
            </div>
          </div>
          
          {/* Rating Filter */}
          <div>
            <h3 className="font-medium mb-3">Minimum Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.minRating === rating}
                    onChange={(e) => onFiltersChange({...filters, minRating: parseInt(e.target.value)})}
                  />
                  <span className="text-sm">{'★'.repeat(rating)} & up</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Drawer.Body>
      
      <Drawer.Footer>
        <div className="space-y-2">
          <button 
            onClick={() => onFiltersChange({})}
            className="w-full border border-gray-300 py-2 rounded hover:bg-gray-50"
          >
            Clear All
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer>
);
```

## Accessibility

- **Focus Management**: Automatic focus trapping within drawer, focus restoration on close
- **ARIA Attributes**: Complete implementation with `role="dialog"`, `aria-labelledby`, `aria-modal`
- **Keyboard Navigation**:
  - Escape key closes drawer (when enabled)
  - Tab navigation cycles through drawer content only
  - Focus visible indicators for all interactive elements
- **Screen Reader Support**: Proper semantic structure and state announcements
- **Touch Support**: Mobile-optimized touch interactions and gestures

## Keyboard Navigation

| Key           | Action                                      |
|---------------|---------------------------------------------|
| `Escape`      | Close drawer (when enabled)                 |
| `Tab`         | Navigate to next focusable element          |
| `Shift + Tab` | Navigate to previous focusable element      |

## Styling

### Side Positioning
- **Top**: Slides down from top edge, full width
- **Right**: Slides in from right edge, configurable width (default)
- **Bottom**: Slides up from bottom edge, full width
- **Left**: Slides in from left edge, configurable width

### Size Variants
**Horizontal Drawers (left/right):**
- **Small (`sm`)**: `w-64` (16rem) - Best for navigation menus
- **Medium (`md`)**: `w-80` (20rem) - Default size for most content
- **Large (`lg`)**: `w-96` (24rem) - Good for detailed forms
- **Extra Large (`xl`)**: `w-[32rem]` - For complex layouts

**Vertical Drawers (top/bottom):**
- **Small (`sm`)**: `h-64` (16rem) - Best for quick actions
- **Medium (`md`)**: `h-80` (20rem) - Default size for most content  
- **Large (`lg`)**: `h-96` (24rem) - Good for detailed content
- **Extra Large (`xl`)**: `h-[32rem]` - For complex layouts

### CSS Classes
The drawer uses these Tailwind CSS classes:
- Backdrop: `fixed inset-0 bg-black bg-opacity-50`
- Container: `fixed inset-0 pointer-events-none`
- Content: `bg-white shadow-xl pointer-events-auto flex flex-col max-h-full`
- Header: `px-4 py-3 border-b border-gray-200`
- Body: `flex-1 px-4 py-3 overflow-y-auto`
- Footer: `px-4 py-3 border-t border-gray-200`

### Animation
Drawers include smooth slide transitions:
- Transform-based slide animations for each side
- Backdrop fade-in/fade-out
- Duration: 300ms with ease-in-out timing

## Best Practices

### When to Use Drawer
- **Mobile Navigation** menus and secondary navigation
- **Shopping Carts** and quick checkout flows
- **Filter Panels** for search and browse interfaces
- **Settings Panels** for configuration options
- **Form Panels** that need more space than modals

### Design Guidelines
- Keep drawer content focused and scannable
- Use appropriate sizes for content complexity
- Consider mobile-first responsive behavior
- Provide clear visual hierarchy in drawer content

### Performance Tips
- Use conditional rendering to avoid mounting heavy drawers
- Consider lazy loading complex drawer content
- Minimize re-renders by memoizing drawer components
- Use CSS transforms for optimal animation performance

### Mobile Considerations
- Prefer bottom drawers for mobile action sheets
- Ensure touch targets are at least 44px tall
- Consider swipe gestures for closing
- Test on various screen sizes and orientations

## Related Components

- **Modal** - Overlay dialogs for focused content that requires full attention
- **Popover** - Smaller contextual overlays positioned relative to triggers
- **Panel** - Collapsible content sections within page layouts
- **Tabs** - In-page navigation between different content sections