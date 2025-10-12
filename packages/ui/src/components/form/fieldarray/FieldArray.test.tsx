import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FieldArray, FieldArrayItem, FieldArrayHelpers } from './FieldArray';

describe('FieldArray', () => {
  const mockRenderItem = (item: FieldArrayItem, index: number, helpers: FieldArrayHelpers) => (
    <div>
      <input 
        data-testid={`item-${index}`}
        defaultValue={item.name || ''}
      />
      <span>Item {index + 1}</span>
    </div>
  );

  it('renders empty state when no items', () => {
    render(
      <FieldArray>
        {mockRenderItem}
      </FieldArray>
    );

    expect(screen.getByText('No items added yet.')).toBeInTheDocument();
  });

  it('renders initial items', () => {
    const initialItems = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' }
    ];

    render(
      <FieldArray value={initialItems}>
        {mockRenderItem}
      </FieldArray>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('adds new item when add button clicked', () => {
    const handleChange = vi.fn();
    
    render(
      <FieldArray onChange={handleChange}>
        {mockRenderItem}
      </FieldArray>
    );

    const addButton = screen.getByRole('button', { name: /add item/i });
    fireEvent.click(addButton);

    expect(handleChange).toHaveBeenCalledWith([
      expect.objectContaining({ id: expect.any(String) })
    ]);
  });

  it('removes item when remove button clicked', () => {
    const handleChange = vi.fn();
    const initialItems = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' }
    ];

    render(
      <FieldArray value={initialItems} onChange={handleChange}>
        {mockRenderItem}
      </FieldArray>
    );

    const removeButtons = screen.getAllByRole('button', { name: /remove item/i });
    fireEvent.click(removeButtons[0]);

    expect(handleChange).toHaveBeenCalledWith([
      { id: '2', name: 'Item 2' }
    ]);
  });

  it('respects minimum items constraint', () => {
    const initialItems = [{ id: '1', name: 'Item 1' }];

    render(
      <FieldArray value={initialItems} min={1}>
        {mockRenderItem}
      </FieldArray>
    );

    const removeButton = screen.queryByRole('button', { name: /remove item/i });
    expect(removeButton).not.toBeInTheDocument();
  });

  it('respects maximum items constraint', () => {
    const initialItems = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' }
    ];

    render(
      <FieldArray value={initialItems} max={2}>
        {mockRenderItem}
      </FieldArray>
    );

    const addButton = screen.queryByRole('button', { name: /add item/i });
    expect(addButton).not.toBeInTheDocument();
  });

  it('creates minimum items on initialization', () => {
    const handleChange = vi.fn();
    
    render(
      <FieldArray min={2} onChange={handleChange}>
        {mockRenderItem}
      </FieldArray>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('hides add button when showAddButton is false', () => {
    render(
      <FieldArray showAddButton={false}>
        {mockRenderItem}
      </FieldArray>
    );

    const addButton = screen.queryByRole('button', { name: /add item/i });
    expect(addButton).not.toBeInTheDocument();
  });

  it('hides remove buttons when showRemoveButtons is false', () => {
    const initialItems = [{ id: '1', name: 'Item 1' }];

    render(
      <FieldArray value={initialItems} showRemoveButtons={false}>
        {mockRenderItem}
      </FieldArray>
    );

    const removeButton = screen.queryByRole('button', { name: /remove item/i });
    expect(removeButton).not.toBeInTheDocument();
  });

  it('disables interactions when disabled', () => {
    const initialItems = [{ id: '1', name: 'Item 1' }];

    render(
      <FieldArray value={initialItems} disabled>
        {mockRenderItem}
      </FieldArray>
    );

    const addButton = screen.queryByRole('button', { name: /add item/i });
    const removeButton = screen.queryByRole('button', { name: /remove item/i });
    
    expect(addButton).not.toBeInTheDocument();
    expect(removeButton).not.toBeInTheDocument();
  });

  it('displays validation error', () => {
    const validate = (items: FieldArrayItem[]) => 
      items.length < 2 ? 'At least 2 items required' : undefined;

    render(
      <FieldArray validate={validate}>
        {mockRenderItem}
      </FieldArray>
    );

    expect(screen.getByText('At least 2 items required')).toBeInTheDocument();
  });

  it('displays external error', () => {
    render(
      <FieldArray error="External error message">
        {mockRenderItem}
      </FieldArray>
    );

    expect(screen.getByText('External error message')).toBeInTheDocument();
  });

  it('uses custom createItem function', () => {
    const handleChange = vi.fn();
    const createItem = () => ({ name: 'Default Name', type: 'custom' });

    render(
      <FieldArray createItem={createItem} onChange={handleChange}>
        {mockRenderItem}
      </FieldArray>
    );

    const addButton = screen.getByRole('button', { name: /add item/i });
    fireEvent.click(addButton);

    expect(handleChange).toHaveBeenCalledWith([
      expect.objectContaining({ 
        name: 'Default Name', 
        type: 'custom',
        id: expect.any(String)
      })
    ]);
  });

  it('shows drag handle when sortable', () => {
    const initialItems = [{ id: '1', name: 'Item 1' }];

    const { container } = render(
      <FieldArray value={initialItems} sortable>
        {mockRenderItem}
      </FieldArray>
    );

    const dragHandle = container.querySelector('svg');
    expect(dragHandle).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <FieldArray className="custom-class">
        {mockRenderItem}
      </FieldArray>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});