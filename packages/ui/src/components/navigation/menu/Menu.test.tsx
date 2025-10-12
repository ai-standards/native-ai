import { describe, it, test, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from './Menu';

describe('Menu', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders trigger correctly', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeTruthy();
    expect(trigger.textContent).toBe('Open Menu');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.getAttribute('aria-haspopup')).toBe('true');
  });

  it('opens menu when trigger is clicked', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByRole('menu')).toBeTruthy();
    expect(screen.getByText('Item 1')).toBeTruthy();
    expect(screen.getByText('Item 2')).toBeTruthy();
  });

  it('closes menu when trigger is clicked again', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    
    // Open menu
    fireEvent.click(trigger);
    expect(screen.getByRole('menu')).toBeTruthy();
    
    // Close menu
    fireEvent.click(trigger);
    expect(screen.queryByRole('menu')).toBeNull();
  });

  it('calls onSelect when menu item is clicked', () => {
    const onSelect = vi.fn();
    
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={onSelect} value="item1">Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    const menuItem = screen.getByText('Item 1');
    fireEvent.click(menuItem);
    
    expect(onSelect).toHaveBeenCalledWith('item1');
  });

  it('closes menu when menu item is clicked', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    expect(screen.getByRole('menu')).toBeTruthy();
    
    const menuItem = screen.getByText('Item 1');
    fireEvent.click(menuItem);
    
    expect(screen.queryByRole('menu')).toBeNull();
  });

  it('handles disabled menu items correctly', () => {
    const onSelect = vi.fn();
    
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem disabled onSelect={onSelect}>Disabled Item</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    const menuItem = screen.getByText('Disabled Item');
    expect(menuItem.getAttribute('aria-disabled')).toBe('true');
    expect(menuItem.getAttribute('tabIndex')).toBe('-1');
    
    fireEvent.click(menuItem);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('renders separator correctly', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
          <MenuSeparator />
          <MenuItem>Item 2</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    const separator = screen.getByRole('separator');
    expect(separator).toBeTruthy();
  });

  test('works as controlled component', () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Menu open={false} onOpenChange={onOpenChange}>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    expect(screen.queryByRole('menu')).toBeNull();
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    expect(onOpenChange).toHaveBeenCalledWith(true);
    
    // Simulate parent updating the open state
    rerender(
      <Menu open={true} onOpenChange={onOpenChange}>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    expect(screen.getByRole('menu')).toBeTruthy();
  });

  test('closes menu on escape key', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    expect(screen.getByRole('menu')).toBeTruthy();
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(screen.queryByRole('menu')).toBeNull();
  });

  test('applies correct placement classes', () => {
    const { rerender } = render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent placement="bottom-start">
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    let menu = screen.getByRole('menu');
    expect(menu.classList.contains('top-full')).toBe(true);
    expect(menu.classList.contains('left-0')).toBe(true);
    
    // Close menu first
    fireEvent.click(trigger);
    
    rerender(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent placement="top-end">
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    fireEvent.click(trigger);
    menu = screen.getByRole('menu');
    expect(menu.classList.contains('bottom-full')).toBe(true);
    expect(menu.classList.contains('right-0')).toBe(true);
  });

  it('forwards additional props to components', () => {
    render(
      <Menu data-testid="menu">
        <MenuTrigger data-testid="trigger">Open</MenuTrigger>
        <MenuContent data-testid="content">
          <MenuItem data-testid="item">Item</MenuItem>
        </MenuContent>
      </Menu>
    );
    
    expect(screen.getByTestId('menu')).toBeTruthy();
    expect(screen.getByTestId('trigger')).toBeTruthy();
    
    fireEvent.click(screen.getByTestId('trigger'));
    expect(screen.getByTestId('content')).toBeTruthy();
    expect(screen.getByTestId('item')).toBeTruthy();
  });
});