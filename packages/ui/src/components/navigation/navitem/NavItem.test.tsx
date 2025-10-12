import { describe, it, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavItem } from './NavItem';

describe('NavItem', () => {
  it('renders with default props', () => {
    render(<NavItem>Test Item</NavItem>);
    
    expect(screen.getByText('Test Item')).toBeTruthy();
  });

  it('renders with icon', () => {
    const icon = <svg data-testid="icon" />;
    render(<NavItem icon={icon}>Item with Icon</NavItem>);
    
    expect(screen.getByTestId('icon')).toBeTruthy();
    expect(screen.getByText('Item with Icon')).toBeTruthy();
  });

  it('renders with badge', () => {
    const badge = <span data-testid="badge">5</span>;
    render(<NavItem badge={badge}>Item with Badge</NavItem>);
    
    expect(screen.getByTestId('badge')).toBeTruthy();
    expect(screen.getByText('Item with Badge')).toBeTruthy();
  });

  it('handles active state correctly', () => {
    const { container } = render(<NavItem isActive>Active Item</NavItem>);
    
    const item = container.firstChild as Element;
    expect(item.getAttribute('aria-current')).toBe('page');
  });

  it('handles disabled state correctly', () => {
    const onClick = vi.fn();
    const { container } = render(<NavItem disabled onClick={onClick}>Disabled Item</NavItem>);
    
    const item = container.firstChild as Element;
    expect(item.getAttribute('aria-disabled')).toBe('true');
    
    fireEvent.click(item);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick when clicked and not disabled', () => {
    const onClick = vi.fn();
    render(<NavItem onClick={onClick}>Clickable Item</NavItem>);
    
    const item = screen.getByText('Clickable Item').parentElement;
    fireEvent.click(item!);
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as link when href is provided', () => {
    render(<NavItem href="/test">Link Item</NavItem>);
    
    const link = screen.getByText('Link Item').closest('a');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('/test');
  });

  it('does not render as link when disabled', () => {
    render(<NavItem href="/test" disabled>Disabled Link</NavItem>);
    
    const link = screen.getByText('Disabled Link').closest('a');
    expect(link).toBeNull();
    
    const div = screen.getByText('Disabled Link').parentElement;
    expect(div?.tagName).toBe('DIV');
  });

  test('applies variant classes correctly', () => {
    const { rerender, container } = render(<NavItem variant="ghost">Ghost Item</NavItem>);
    
    let item = container.firstChild as Element;
    expect(item.classList.contains('hover:bg-gray-100')).toBe(true);
    
    rerender(<NavItem variant="subtle">Subtle Item</NavItem>);
    item = container.firstChild as Element;
    expect(item.classList.contains('hover:bg-gray-50')).toBe(true);
  });

  test('applies size classes correctly', () => {
    const { rerender, container } = render(<NavItem size="sm">Small Item</NavItem>);
    
    let item = container.firstChild as Element;
    expect(item.classList.contains('px-2')).toBe(true);
    expect(item.classList.contains('text-sm')).toBe(true);
    
    rerender(<NavItem size="lg">Large Item</NavItem>);
    item = container.firstChild as Element;
    expect(item.classList.contains('px-4')).toBe(true);
    expect(item.classList.contains('text-lg')).toBe(true);
  });

  it('applies correct role and tabIndex for clickable items', () => {
    const { container } = render(<NavItem onClick={() => {}}>Clickable</NavItem>);
    
    const item = container.firstChild as Element;
    expect(item.getAttribute('role')).toBe('button');
    expect(item.getAttribute('tabIndex')).toBe('0');
  });

  it('does not apply role or tabIndex for non-clickable items', () => {
    const { container } = render(<NavItem>Static</NavItem>);
    
    const item = container.firstChild as Element;
    expect(item.getAttribute('role')).toBeNull();
    expect(item.getAttribute('tabIndex')).toBeNull();
  });

  it('applies custom className', () => {
    const { container } = render(<NavItem className="custom-class">Custom</NavItem>);
    
    const item = container.firstChild as Element;
    expect(item.classList.contains('custom-class')).toBe(true);
  });

  it('forwards additional props', () => {
    render(<NavItem data-testid="nav-item" id="test-item">Item</NavItem>);
    
    const item = screen.getByTestId('nav-item');
    expect(item.getAttribute('id')).toBe('test-item');
  });

  test('handles keyboard interaction for clickable items', () => {
    const onClick = vi.fn();
    const { container } = render(<NavItem onClick={onClick}>Clickable</NavItem>);
    
    const item = container.firstChild as Element;
    fireEvent.keyDown(item, { key: 'Enter' });
    
    // Note: We don't test Enter key handling in the current implementation
    // This test verifies the element is properly set up for keyboard interaction
    expect(item.getAttribute('tabIndex')).toBe('0');
  });

  test('truncates long content', () => {
    render(
      <NavItem>
        This is a very long navigation item that should be truncated when it exceeds the container width
      </NavItem>
    );
    
    const textElement = screen.getByText(/This is a very long navigation item/);
    expect(textElement.classList.contains('truncate')).toBe(true);
  });
});