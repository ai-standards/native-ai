# FieldArray

Dynamic form arrays for repeatable fields with add/remove functionality, validation, and optional drag-and-drop sorting.

## Features

- **Dynamic Arrays** - Add and remove form field groups dynamically
- **Validation** - Built-in validation with custom validation functions
- **Drag & Drop** - Optional sortable functionality for reordering items
- **Constraints** - Minimum and maximum item limits
- **Accessibility** - Full ARIA support and keyboard navigation
- **Flexible Rendering** - Custom render functions for each array item
- **Helper Functions** - Rich API for array manipulation

## Usage

```tsx
import { FieldArray, FormField } from '@/components/form';

// Basic usage
<FieldArray>
  {(item, index, helpers) => (
    <FormField label={`Item ${index + 1}`}>
      <input type="text" defaultValue={item.name} />
    </FormField>
  )}
</FieldArray>

// With initial data
<FieldArray 
  value={contacts} 
  onChange={setContacts}
>
  {(item, index, helpers) => (
    <div className="grid grid-cols-2 gap-4">
      <FormField label="Name">
        <input type="text" defaultValue={item.name} />
      </FormField>
      <FormField label="Email">
        <input type="email" defaultValue={item.email} />
      </FormField>
    </div>
  )}
</FieldArray>

// With validation and constraints
<FieldArray
  min={1}
  max={5}
  validate={(items) => items.length === 0 ? 'At least one item required' : undefined}
>
  {(item, index, helpers) => (
    <FormField label="Skill">
      <input type="text" />
    </FormField>
  )}
</FieldArray>

// Sortable array
<FieldArray sortable>
  {(item, index, helpers) => (
    <FormField label={`Task ${index + 1}`}>
      <input type="text" defaultValue={item.task} />
    </FormField>
  )}
</FieldArray>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name for form integration |
| `value` | `FieldArrayItem[]` | `[]` | Array of items to render |
| `onChange` | `(value: FieldArrayItem[]) => void` | - | Callback when array changes |
| `children` | `(item, index, helpers) => ReactNode` | - | Render function for each item |
| `min` | `number` | `0` | Minimum number of items |
| `max` | `number` | `Infinity` | Maximum number of items |
| `addButtonText` | `string` | `'Add Item'` | Add button text |
| `removeButtonText` | `string` | `'Remove'` | Remove button text |
| `showAddButton` | `boolean` | `true` | Show add button |
| `showRemoveButtons` | `boolean` | `true` | Show remove buttons |
| `className` | `string` | `''` | Additional CSS class names |
| `createItem` | `() => Partial<FieldArrayItem>` | `() => ({})` | Factory function for new items |
| `validate` | `(items: FieldArrayItem[]) => string \| undefined` | - | Validation function |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Array is disabled |
| `sortable` | `boolean` | `false` | Enable drag and drop reordering |

## Render Function

The children render function receives three parameters:

### item: FieldArrayItem
The current array item with `id` and any custom properties.

### index: number
Zero-based index of the current item in the array.

### helpers: FieldArrayHelpers
Object containing helper functions:
- `add()` - Add a new item to the end
- `remove(index)` - Remove item at index
- `move(fromIndex, toIndex)` - Move item between positions
- `insert(index, item?)` - Insert item at specific position
- `replace(index, item)` - Replace item at index

## Data Structure

### FieldArrayItem
Each array item must have an `id` property:

```typescript
interface FieldArrayItem {
  id: string;
  [key: string]: any; // Custom properties
}
```

The component automatically generates unique IDs for new items.

## Validation

### Built-in Validation
- Min/max constraints are automatically enforced
- Error states are visually indicated

### Custom Validation
Provide a `validate` function that receives the current array and returns an error message or `undefined`:

```tsx
const validate = (items: FieldArrayItem[]) => {
  if (items.length === 0) return 'At least one item required';
  if (items.some(item => !item.name)) return 'All items must have names';
  return undefined;
};
```

## Sortable Arrays

Enable `sortable` to allow drag-and-drop reordering:
- Drag handle appears on the left of each item
- Items can be dragged to new positions
- Accessibility support with keyboard navigation
- Disabled when `disabled` prop is true

## Accessibility

- Proper ARIA labels for add/remove buttons
- Screen reader announcements for item count changes
- Keyboard navigation for sortable items
- Focus management after add/remove operations
- Error announcements for validation failures

## Styling

### Layout
Items are rendered with consistent spacing and borders. The container uses CSS Grid or Flexbox as needed.

### Visual States
- Hover effects on interactive elements
- Drag state indication for sortable items
- Error styling for validation failures
- Disabled state styling

### Responsive Design
The component adapts to different screen sizes, with mobile-friendly touch targets for drag operations.

## Integration

### Form Libraries
Works with form libraries that support array fields:
- React Hook Form
- Formik
- Final Form

### State Management
Compatible with any state management solution:
- useState for local state
- Redux for global state
- Context API for shared state

### Custom Components
Render function supports any React components:
- Form fields from this library
- Third-party components
- Custom input components