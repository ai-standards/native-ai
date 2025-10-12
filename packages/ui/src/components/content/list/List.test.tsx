import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { List, ListItem } from './List';

describe('List', () => {
  it('renders unordered list by default', () => {
    render(
      <List data-testid="list">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe('UL');
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders ordered list', () => {
    render(
      <List variant="ordered" data-testid="list">
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
      </List>
    );
    const list = screen.getByTestId('list');
    expect(list.tagName).toBe('OL');
  });

  it('applies marker styles', () => {
    render(<List marker="circle" data-testid="list"><ListItem>Item</ListItem></List>);
    const list = screen.getByTestId('list');
    expect(list.style.listStyleType).toBe('circle');
  });

  it('applies spacing styles', () => {
    render(<List spacing="lg" data-testid="list"><ListItem>Item</ListItem></List>);
    const list = screen.getByTestId('list');
    expect(list).toHaveClass('space-y-3');
  });

  it('applies nested styles', () => {
    render(<List nested data-testid="list"><ListItem>Item</ListItem></List>);
    const list = screen.getByTestId('list');
    expect(list).toHaveClass('ml-6');
  });

  it('renders with custom className', () => {
    render(<List className="custom-class" data-testid="list"><ListItem>Item</ListItem></List>);
    const list = screen.getByTestId('list');
    expect(list).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<List data-custom="value" data-testid="list"><ListItem>Item</ListItem></List>);
    const list = screen.getByTestId('list');
    expect(list).toHaveAttribute('data-custom', 'value');
  });
});

describe('ListItem', () => {
  it('renders list item', () => {
    render(<ListItem data-testid="item">Item content</ListItem>);
    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();
    expect(item.tagName).toBe('LI');
    expect(screen.getByText('Item content')).toBeInTheDocument();
  });

  it('renders with custom marker', () => {
    render(<ListItem marker="→" data-testid="item">Item with arrow</ListItem>);
    expect(screen.getByText('→')).toBeInTheDocument();
    expect(screen.getByText('Item with arrow')).toBeInTheDocument();
  });

  it('applies custom marker layout', () => {
    render(<ListItem marker="" data-testid="item">Starred item</ListItem>);
    const item = screen.getByTestId('item');
    expect(item).toHaveClass('flex', 'items-start', 'gap-2', 'list-none');
  });

  it('renders with custom className', () => {
    render(<ListItem className="custom-class" data-testid="item">Item</ListItem>);
    const item = screen.getByTestId('item');
    expect(item).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<ListItem data-custom="value" data-testid="item">Item</ListItem>);
    const item = screen.getByTestId('item');
    expect(item).toHaveAttribute('data-custom', 'value');
  });
});