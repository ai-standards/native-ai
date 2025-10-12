import { describe, it, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavGroup } from './NavGroup';

describe('NavGroup', () => {
  it('renders children', () => {
    render(
      <NavGroup>
        <div>Child 1</div>
        <div>Child 2</div>
      </NavGroup>
    );
    
    expect(screen.getByText('Child 1')).toBeTruthy();
    expect(screen.getByText('Child 2')).toBeTruthy();
  });

  it('renders title when provided', () => {
    render(
      <NavGroup title="Test Group">
        <div>Child</div>
      </NavGroup>
    );
    
    expect(screen.getByText('Test Group')).toBeTruthy();
  });

  it('renders icon when provided', () => {
    const icon = <svg data-testid="group-icon" />;
    render(
      <NavGroup title="Group with Icon" icon={icon}>
        <div>Child</div>
      </NavGroup>
    );
    
    expect(screen.getByTestId('group-icon')).toBeTruthy();
  });

  it('renders action when provided', () => {
    const action = <button data-testid="group-action">Add</button>;
    render(
      <NavGroup title="Group with Action" action={action}>
        <div>Child</div>
      </NavGroup>
    );
    
    expect(screen.getByTestId('group-action')).toBeTruthy();
  });

  it('toggles collapsed state when collapsible', () => {
    render(
      <NavGroup title="Collapsible Group" collapsible>
        <div>Hidden Content</div>
      </NavGroup>
    );
    
    // Content should be visible initially
    expect(screen.getByText('Hidden Content')).toBeTruthy();
    
    // Click to collapse
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    // Content should be hidden
    expect(screen.queryByText('Hidden Content')).toBeNull();
  });

  it('starts collapsed when defaultCollapsed is true', () => {
    render(
      <NavGroup title="Initially Collapsed" collapsible defaultCollapsed>
        <div>Hidden Content</div>
      </NavGroup>
    );
    
    // Content should be hidden initially
    expect(screen.queryByText('Hidden Content')).toBeNull();
    
    // Click to expand
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    // Content should now be visible
    expect(screen.getByText('Hidden Content')).toBeTruthy();
  });

  it('works as controlled component', () => {
    const onCollapsedChange = vi.fn();
    const { rerender } = render(
      <NavGroup 
        title="Controlled Group" 
        collapsible
        collapsed={false}
        onCollapsedChange={onCollapsedChange}
      >
        <div>Content</div>
      </NavGroup>
    );
    
    // Content should be visible
    expect(screen.getByText('Content')).toBeTruthy();
    
    // Click toggle button
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    // Callback should be called
    expect(onCollapsedChange).toHaveBeenCalledWith(true);
    
    // Simulate parent updating collapsed state
    rerender(
      <NavGroup 
        title="Controlled Group" 
        collapsible
        collapsed={true}
        onCollapsedChange={onCollapsedChange}
      >
        <div>Content</div>
      </NavGroup>
    );
    
    // Content should now be hidden
    expect(screen.queryByText('Content')).toBeNull();
  });

  it('sets correct aria-expanded attribute', () => {
    render(
      <NavGroup title="Collapsible Group" collapsible>
        <div>Content</div>
      </NavGroup>
    );
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
    
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('applies variant classes correctly', () => {
    const { rerender, container } = render(
      <NavGroup variant="default">
        <div>Content</div>
      </NavGroup>
    );
    
    let group = container.firstChild as Element;
    expect(group.classList.contains('border-b')).toBe(true);
    
    rerender(
      <NavGroup variant="contained">
        <div>Content</div>
      </NavGroup>
    );
    
    group = container.firstChild as Element;
    expect(group.classList.contains('border')).toBe(true);
    expect(group.classList.contains('rounded-lg')).toBe(true);
  });

  test('applies spacing classes correctly', () => {
    const { rerender, container } = render(
      <NavGroup spacing="sm">
        <div>Child 1</div>
        <div>Child 2</div>
      </NavGroup>
    );
    
    let contentContainer = container.querySelector('[class*="space-y"]');
    expect(contentContainer?.classList.contains('space-y-1')).toBe(true);
    
    rerender(
      <NavGroup spacing="lg">
        <div>Child 1</div>
        <div>Child 2</div>
      </NavGroup>
    );
    
    contentContainer = container.querySelector('[class*="space-y"]');
    expect(contentContainer?.classList.contains('space-y-4')).toBe(true);
  });

  it('applies custom className', () => {
    const { container } = render(
      <NavGroup className="custom-group">
        <div>Content</div>
      </NavGroup>
    );
    
    const group = container.firstChild as Element;
    expect(group.classList.contains('custom-group')).toBe(true);
  });

  it('forwards additional props', () => {
    render(
      <NavGroup data-testid="nav-group" id="test-group">
        <div>Content</div>
      </NavGroup>
    );
    
    const group = screen.getByTestId('nav-group');
    expect(group.getAttribute('id')).toBe('test-group');
  });

  test('does not render header when no title, icon, action, or collapsible', () => {
    const { container } = render(
      <NavGroup>
        <div>Content</div>
      </NavGroup>
    );
    
    // Should not have a header element
    const header = container.querySelector('[class*="flex items-center justify-between"]');
    expect(header).toBeNull();
  });

  test('renders header when any header element is present', () => {
    const { rerender, container } = render(
      <NavGroup title="Title Only">
        <div>Content</div>
      </NavGroup>
    );
    
    let header = container.querySelector('[class*="flex items-center justify-between"]');
    expect(header).toBeTruthy();
    
    rerender(
      <NavGroup collapsible>
        <div>Content</div>
      </NavGroup>
    );
    
    header = container.querySelector('[class*="flex items-center justify-between"]');
    expect(header).toBeTruthy();
  });

  test('handles keyboard interaction on toggle button', () => {
    render(
      <NavGroup title="Keyboard Test" collapsible>
        <div>Content</div>
      </NavGroup>
    );
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeTruthy();
    
    // Should be focusable
    toggleButton.focus();
    expect(document.activeElement).toBe(toggleButton);
  });
});