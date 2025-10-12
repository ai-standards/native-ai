# Modal Component

A flexible modal dialog component with backdrop, focus management, and multiple size options. Perfect for confirmations, forms, and detailed content display.

## Features

- **Overlay Dialog**: Modal backdrop with click-outside-to-close
- **Focus Management**: Automatic focus trapping and restoration
- **Size Variants**: Small, medium, large, and extra-large options
- **Keyboard Support**: Escape key closes modal, proper tab navigation
- **Accessibility**: Full ARIA implementation and screen reader support
- **Animation**: Smooth fade-in/fade-out transitions
- **Scroll Handling**: Body scroll lock when modal is open
- **TypeScript Support**: Complete type definitions and IntelliSense
- **Customizable**: Extensive styling and behavior options

## Usage

```tsx
import { Modal } from '@/Surface/modal';

// Basic modal
const [isOpen, setIsOpen] = useState(false);

<Modal open={isOpen} onOpenChange={setIsOpen}>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Confirm Action</Modal.Title>
      <Modal.Description>
        Are you sure you want to proceed with this action?
      </Modal.Description>
    </Modal.Header>
    <Modal.Footer>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </Modal.Footer>
  </Modal.Content>
</Modal>

// Form modal with validation
<Modal open={isFormOpen} onOpenChange={setIsFormOpen} size="lg">
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Create New Item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input type="text" placeholder="Name" required />
          <textarea placeholder="Description" rows={4} />
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <button type="button" onClick={() => setIsFormOpen(false)}>
        Cancel
      </button>
      <button type="submit">Create</button>
    </Modal.Footer>
  </Modal.Content>
</Modal>

// Prevent backdrop close
<Modal 
  open={isProcessing} 
  onOpenChange={setIsProcessing}
  closeOnBackdropClick={false}
  closeOnEscape={false}
>
  <Modal.Content size="sm">
    <Modal.Body className="text-center">
      <div className="spinner" />
      <p>Processing...</p>
    </Modal.Body>
  </Modal.Content>
</Modal>
```

## Components

### Modal (Root)

The main modal container that provides context and manages the overlay.

#### Props
| Prop                 | Type                      | Default | Description                              |
|----------------------|---------------------------|---------|------------------------------------------|
| open                 | `boolean`                 | `false` | Whether the modal is visible             |
| onOpenChange         | `(open: boolean) => void` | -       | Called when modal open state changes     |
| closeOnBackdropClick | `boolean`                 | `true`  | Close modal when clicking backdrop       |
| closeOnEscape        | `boolean`                 | `true`  | Close modal when pressing Escape        |
| children             | `React.ReactNode`         | -       | Modal content components                 |

### Modal.Content

The modal dialog container with backdrop and positioning.

#### Props
| Prop      | Type                                | Default | Description                    |
|-----------|-------------------------------------|---------|--------------------------------|
| size      | `'sm' \| 'md' \| 'lg' \| 'xl'`      | `'md'`  | Modal dialog size              |
| className | `string`                            | -       | Additional CSS classes         |
| children  | `React.ReactNode`                   | -       | Modal sections and content     |

### Modal.Header

The modal header section containing title and description.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Header content         |

### Modal.Title

The main modal title with proper ARIA labeling.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Title text             |

### Modal.Description

Optional modal description text with ARIA support.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Description text       |

### Modal.Body

The main content area of the modal.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Body content           |

### Modal.Footer

The footer section typically containing action buttons.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Footer content         |

## Examples

### Confirmation Dialog
```tsx
const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => (
  <Modal open={isOpen} onOpenChange={onClose}>
    <Modal.Content size="sm">
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Description>{message}</Modal.Description>
      </Modal.Header>
      <Modal.Footer>
        <div className="flex space-x-2 justify-end">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            type="button" 
            onClick={() => { onConfirm(); onClose(); }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
);
```

### User Profile Form
```tsx
const ProfileModal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState(user);

  return (
    <Modal open={isOpen} onOpenChange={onClose} size="lg">
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
          <Modal.Description>
            Update your profile information below.
          </Modal.Description>
        </Modal.Header>
        
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea 
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer>
          <div className="flex space-x-2 justify-end">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="button" 
              onClick={() => { saveProfile(formData); onClose(); }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
```

### Image Gallery Modal
```tsx
const ImageModal = ({ isOpen, onClose, image, images, currentIndex }) => {
  const [index, setIndex] = useState(currentIndex);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Modal open={isOpen} onOpenChange={onClose} size="xl">
      <Modal.Content className="bg-black">
        <Modal.Body className="p-0">
          <div className="relative">
            <img 
              src={images[index]?.url} 
              alt={images[index]?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              →
            </button>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
              {index + 1} / {images.length}
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
```

## Accessibility

- **Focus Management**: Automatic focus trapping within modal, focus restoration on close
- **ARIA Attributes**: Complete implementation with `role="dialog"`, `aria-labelledby`, `aria-describedby`
- **Keyboard Navigation**: 
  - Escape key closes modal (when enabled)
  - Tab navigation cycles through modal content only
  - Focus visible indicators for all interactive elements
- **Screen Reader Support**: Proper semantic structure and state announcements
- **Color Contrast**: Meets WCAG guidelines for all text and interactive elements

## Keyboard Navigation

| Key      | Action                              |
|----------|-------------------------------------|
| `Escape` | Close modal (when enabled)          |
| `Tab`    | Navigate to next focusable element  |
| `Shift + Tab` | Navigate to previous focusable element |

## Styling

### Size Variants
- **Small (`sm`)**: `max-w-sm` - Best for simple confirmations
- **Medium (`md`)**: `max-w-md` - Default size for most content
- **Large (`lg`)**: `max-w-2xl` - Good for forms and detailed content
- **Extra Large (`xl`)**: `max-w-4xl` - For complex layouts and media

### CSS Classes
The modal uses these Tailwind CSS classes:
- Backdrop: `fixed inset-0 bg-black bg-opacity-50`
- Container: `fixed inset-0 flex items-center justify-center p-4`
- Content: `bg-white rounded-lg shadow-xl w-full`
- Header: `px-6 py-4 border-b border-gray-200`
- Body: `px-6 py-4`
- Footer: `px-6 py-4 border-t border-gray-200`

### Animation
Modals include smooth transitions:
- Backdrop fade-in/fade-out
- Content scale and fade effects
- Duration: 200ms with ease-in-out timing

## Best Practices

### When to Use Modal
- **Confirmations** for destructive actions
- **Forms** that require focused attention  
- **Detailed views** of items from lists
- **Media display** like images or videos
- **Multi-step processes** that need isolation

### Design Guidelines
- Keep modal content focused and concise
- Always provide a clear way to close the modal
- Use appropriate sizes for content complexity
- Consider mobile responsiveness and touch interactions

### Performance Tips
- Use conditional rendering to avoid mounting heavy modals
- Consider lazy loading complex modal content
- Minimize re-renders by memoizing modal components
- Use portals for complex z-index management

### Accessibility Best Practices
- Always provide meaningful titles and descriptions
- Ensure keyboard navigation works properly
- Test with screen readers regularly
- Consider users who prefer reduced motion

## Related Components

- **Drawer** - Sliding panels from screen edges for mobile-friendly interactions
- **Popover** - Smaller contextual overlays for additional information
- **Tooltip** - Simple hover information displays
- **Panel** - Collapsible content sections within page layouts