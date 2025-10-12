import React from 'react';
import { ErrorMessage } from '../errormessage/ErrorMessage';

export interface FieldArrayItem {
  id: string;
  [key: string]: any;
}

export interface FieldArrayProps {
  /** Field name for form integration */
  name?: string;
  /** Array of items to render */
  value?: FieldArrayItem[];
  /** Callback when array changes */
  onChange?: (value: FieldArrayItem[]) => void;
  /** Render function for each item */
  children: (item: FieldArrayItem, index: number, helpers: FieldArrayHelpers) => React.ReactNode;
  /** Minimum number of items */
  min?: number;
  /** Maximum number of items */
  max?: number;
  /** Add button text */
  addButtonText?: string;
  /** Remove button text */
  removeButtonText?: string;
  /** Show add button */
  showAddButton?: boolean;
  /** Show remove buttons */
  showRemoveButtons?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Factory function for new items */
  createItem?: () => Partial<FieldArrayItem>;
  /** Validation function */
  validate?: (items: FieldArrayItem[]) => string | undefined;
  /** Error message */
  error?: string;
  /** Array is disabled */
  disabled?: boolean;
  /** Enable drag and drop reordering */
  sortable?: boolean;
}

export interface FieldArrayHelpers {
  /** Add a new item */
  add: () => void;
  /** Remove item at index */
  remove: (index: number) => void;
  /** Move item from one index to another */
  move: (fromIndex: number, toIndex: number) => void;
  /** Insert item at specific index */
  insert: (index: number, item?: Partial<FieldArrayItem>) => void;
  /** Replace item at index */
  replace: (index: number, item: FieldArrayItem) => void;
}

let nextId = 1;

export const FieldArray = React.forwardRef<HTMLDivElement, FieldArrayProps>(
  (
    {
      name,
      value = [],
      onChange,
      children,
      min = 0,
      max = Infinity,
      addButtonText = 'Add Item',
      removeButtonText = 'Remove',
      showAddButton = true,
      showRemoveButtons = true,
      className = '',
      createItem = () => ({}),
      validate,
      error: externalError,
      disabled = false,
      sortable = false,
      ...props
    },
    ref
  ) => {
    const [items, setItems] = React.useState<FieldArrayItem[]>(() => 
      value.length > 0 ? value : min > 0 ? 
        Array.from({ length: min }, () => ({ id: `item-${nextId++}`, ...createItem() })) : []
    );

    const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null);
    const [internalError, setInternalError] = React.useState<string>();

    const currentItems = value.length > 0 ? value : items;
    const error = externalError || internalError;

    const validateItems = React.useCallback((newItems: FieldArrayItem[]) => {
      if (validate) {
        const validationError = validate(newItems);
        setInternalError(validationError);
        return validationError;
      }
      return undefined;
    }, [validate]);

    const updateItems = React.useCallback((newItems: FieldArrayItem[]) => {
      const validationError = validateItems(newItems);
      if (!validationError) {
        setItems(newItems);
        onChange?.(newItems);
      }
    }, [onChange, validateItems]);

    const helpers: FieldArrayHelpers = React.useMemo(() => ({
      add: () => {
        if (currentItems.length >= max || disabled) return;
        const newItem: FieldArrayItem = { id: `item-${nextId++}`, ...createItem() };
        updateItems([...currentItems, newItem]);
      },
      remove: (index: number) => {
        if (currentItems.length <= min || disabled) return;
        const newItems = currentItems.filter((_, i) => i !== index);
        updateItems(newItems);
      },
      move: (fromIndex: number, toIndex: number) => {
        if (disabled) return;
        const newItems = [...currentItems];
        const [movedItem] = newItems.splice(fromIndex, 1);
        newItems.splice(toIndex, 0, movedItem);
        updateItems(newItems);
      },
      insert: (index: number, item?: Partial<FieldArrayItem>) => {
        if (currentItems.length >= max || disabled) return;
        const newItem: FieldArrayItem = { id: `item-${nextId++}`, ...createItem(), ...item };
        const newItems = [...currentItems];
        newItems.splice(index, 0, newItem);
        updateItems(newItems);
      },
      replace: (index: number, item: FieldArrayItem) => {
        if (disabled) return;
        const newItems = [...currentItems];
        newItems[index] = item;
        updateItems(newItems);
      },
    }), [currentItems, max, min, disabled, createItem, updateItems]);

    const handleDragStart = React.useCallback((e: React.DragEvent, index: number) => {
      if (!sortable || disabled) return;
      setDraggedIndex(index);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
    }, [sortable, disabled]);

    const handleDragOver = React.useCallback((e: React.DragEvent) => {
      if (!sortable || disabled) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }, [sortable, disabled]);

    const handleDrop = React.useCallback((e: React.DragEvent, dropIndex: number) => {
      if (!sortable || disabled || draggedIndex === null) return;
      e.preventDefault();
      helpers.move(draggedIndex, dropIndex);
      setDraggedIndex(null);
    }, [sortable, disabled, draggedIndex, helpers]);

    React.useEffect(() => {
      if (value !== currentItems) {
        validateItems(currentItems);
      }
    }, [currentItems, validateItems, value]);

    const canAdd = currentItems.length < max && !disabled;
    const canRemove = (index: number) => currentItems.length > min && !disabled;

    return (
      <div ref={ref} className={`space-y-3 ${className}`} {...props}>
        {currentItems.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800
              ${sortable && !disabled ? 'cursor-move' : ''}
              ${draggedIndex === index ? 'opacity-50' : ''}
            `}
            draggable={sortable && !disabled}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {sortable && !disabled && (
              <div className="absolute top-2 left-2 text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </div>
            )}
            
            <div className={sortable && !disabled ? 'ml-6' : ''}>
              {children(item, index, helpers)}
            </div>
            
            {showRemoveButtons && canRemove(index) && (
              <button
                type="button"
                onClick={() => helpers.remove(index)}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
                aria-label={`${removeButtonText} item ${index + 1}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
        
        <ErrorMessage message={error} />
        
        {showAddButton && canAdd && (
          <button
            type="button"
            onClick={helpers.add}
            className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {addButtonText}
          </button>
        )}
        
        {currentItems.length === 0 && min === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p>No items added yet.</p>
            {showAddButton && canAdd && (
              <p className="text-sm mt-1">Click "Add Item" to get started.</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

FieldArray.displayName = 'FieldArray';