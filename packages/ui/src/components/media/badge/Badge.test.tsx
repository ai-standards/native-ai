import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Badge, BadgeGroup } from './Badge';

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>Test Badge</Badge>);
    
    expect(screen.getByText('Test Badge')).toBeTruthy();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Badge variant="success" data-testid="badge">Success</Badge>);
    let badge = screen.getByTestId('badge');
    expect(badge.className).toContain('bg-green-100');
    expect(badge.className).toContain('text-green-800');
    
    rerender(<Badge variant="error" data-testid="badge">Error</Badge>);
    badge = screen.getByTestId('badge');
    expect(badge.className).toContain('bg-red-100');
    expect(badge.className).toContain('text-red-800');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Badge size="xs" data-testid="badge">Extra Small</Badge>);
    let badge = screen.getByTestId('badge');
    expect(badge.className).toContain('px-1.5');
    expect(badge.className).toContain('py-0.5');
    expect(badge.className).toContain('text-xs');
    
    rerender(<Badge size="lg" data-testid="badge">Large</Badge>);
    badge = screen.getByTestId('badge');
    expect(badge.className).toContain('px-3');
    expect(badge.className).toContain('py-1.5');
    expect(badge.className).toContain('text-sm');
  });

  it('applies shape classes correctly', () => {
    const { rerender } = render(<Badge shape="pill" data-testid="badge">Pill</Badge>);
    let badge = screen.getByTestId('badge');
    expect(badge.className).toContain('rounded-full');
    
    rerender(<Badge shape="square" data-testid="badge">Square</Badge>);
    badge = screen.getByTestId('badge');
    expect(badge.className).toContain('rounded-none');
    
    rerender(<Badge shape="rounded" data-testid="badge">Rounded</Badge>);
    badge = screen.getByTestId('badge');
    expect(badge.className).toContain('rounded-md');
  });

  it('renders icon on the left by default', () => {
    render(
      <Badge icon={<span data-testid="test-icon">Icon</span>}>
        With Icon
      </Badge>
    );
    
    const badge = screen.getByText('With Icon').parentElement;
    const icon = screen.getByTestId('test-icon');
    const iconContainer = icon.parentElement;
    
    expect(icon).toBeTruthy();
    expect(iconContainer?.className).toContain('mr-1'); // Left margin for left icon
  });

  it('renders icon on the right when specified', () => {
    render(
      <Badge 
        icon={<span data-testid="test-icon">Icon</span>}
        iconPosition="right"
      >
        With Icon
      </Badge>
    );
    
    const icon = screen.getByTestId('test-icon');
    const iconContainer = icon.parentElement;
    
    expect(icon).toBeTruthy();
    expect(iconContainer?.className).toContain('ml-1'); // Left margin for right icon
  });

  it('renders as removable with close button', () => {
    const onRemove = vi.fn();
    render(
      <Badge removable onRemove={onRemove}>
        Removable Badge
      </Badge>
    );
    
    const removeButton = screen.getByRole('button', { name: 'Remove badge' });
    expect(removeButton).toBeTruthy();
    
    fireEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('prevents event propagation on remove button click', () => {
    const onRemove = vi.fn();
    const onBadgeClick = vi.fn();
    
    render(
      <Badge removable onRemove={onRemove} onClick={onBadgeClick}>
        Removable Badge
      </Badge>
    );
    
    const removeButton = screen.getByRole('button', { name: 'Remove badge' });
    fireEvent.click(removeButton);
    
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onBadgeClick).not.toHaveBeenCalled(); // Event should not bubble up
  });

  it('renders as dot badge', () => {
    render(
      <Badge dot variant="success" data-testid="dot-container">
        <div data-testid="badge-content">Content</div>
      </Badge>
    );
    
    const container = screen.getByTestId('dot-container');
    const content = screen.getByTestId('badge-content');
    const dots = container.querySelectorAll('[class*="rounded-full"]');
    
    expect(content).toBeTruthy();
    expect(dots.length).toBeGreaterThan(0); // Should have dot elements
    expect(container.className).toContain('relative');
  });

  it('applies dot position classes correctly', () => {
    const { rerender } = render(
      <Badge dot dotPosition="top-right" data-testid="dot-container">
        Content
      </Badge>
    );
    let container = screen.getByTestId('dot-container');
    let dotElement = container.querySelector('[class*="absolute"]');
    expect(dotElement?.className).toContain('top-0');
    expect(dotElement?.className).toContain('right-0');
    
    rerender(
      <Badge dot dotPosition="bottom-left" data-testid="dot-container">
        Content
      </Badge>
    );
    container = screen.getByTestId('dot-container');
    dotElement = container.querySelector('[class*="absolute"]');
    expect(dotElement?.className).toContain('bottom-0');
    expect(dotElement?.className).toContain('left-0');
  });

  it('applies custom className', () => {
    render(
      <Badge className="custom-class" data-testid="badge">
        Test
      </Badge>
    );
    
    const badge = screen.getByTestId('badge');
    expect(badge.className).toContain('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Badge data-custom="test-value" data-testid="badge">
        Test
      </Badge>
    );
    
    const badge = screen.getByTestId('badge');
    expect(badge.getAttribute('data-custom')).toBe('test-value');
  });
});

describe('BadgeGroup', () => {
  const mockBadges = [
    <Badge key="1">Badge 1</Badge>,
    <Badge key="2">Badge 2</Badge>,
    <Badge key="3">Badge 3</Badge>,
  ];

  it('renders all badges', () => {
    render(<BadgeGroup>{mockBadges}</BadgeGroup>);
    
    expect(screen.getByText('Badge 1')).toBeTruthy();
    expect(screen.getByText('Badge 2')).toBeTruthy();
    expect(screen.getByText('Badge 3')).toBeTruthy();
  });

  it('applies direction classes correctly', () => {
    const { rerender } = render(
      <BadgeGroup direction="row" data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    let group = screen.getByTestId('badge-group');
    expect(group.className).toContain('flex-row');
    
    rerender(
      <BadgeGroup direction="column" data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    group = screen.getByTestId('badge-group');
    expect(group.className).toContain('flex-col');
  });

  it('applies spacing classes correctly', () => {
    const { rerender } = render(
      <BadgeGroup spacing="xs" data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    let group = screen.getByTestId('badge-group');
    expect(group.className).toContain('gap-1');
    
    rerender(
      <BadgeGroup spacing="lg" data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    group = screen.getByTestId('badge-group');
    expect(group.className).toContain('gap-4');
  });

  it('applies wrap classes correctly', () => {
    const { rerender } = render(
      <BadgeGroup wrap={true} data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    let group = screen.getByTestId('badge-group');
    expect(group.className).toContain('flex-wrap');
    
    rerender(
      <BadgeGroup wrap={false} data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    group = screen.getByTestId('badge-group');
    expect(group.className).not.toContain('flex-wrap');
  });

  it('does not apply wrap to column direction', () => {
    render(
      <BadgeGroup direction="column" wrap={true} data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    
    const group = screen.getByTestId('badge-group');
    expect(group.className).not.toContain('flex-wrap');
  });

  it('applies custom className', () => {
    render(
      <BadgeGroup className="custom-group" data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    
    const group = screen.getByTestId('badge-group');
    expect(group.className).toContain('custom-group');
  });

  it('passes through additional props', () => {
    render(
      <BadgeGroup data-custom="test-value" data-testid="badge-group">
        {mockBadges}
      </BadgeGroup>
    );
    
    const group = screen.getByTestId('badge-group');
    expect(group.getAttribute('data-custom')).toBe('test-value');
  });

  it('handles empty children gracefully', () => {
    render(
      <BadgeGroup data-testid="badge-group">
        {null}
      </BadgeGroup>
    );
    
    const group = screen.getByTestId('badge-group');
    expect(group).toBeTruthy();
    expect(group.children).toHaveLength(0);
  });

  it('maintains flex layout with single child', () => {
    render(
      <BadgeGroup data-testid="badge-group">
        <Badge>Single Badge</Badge>
      </BadgeGroup>
    );
    
    const group = screen.getByTestId('badge-group');
    expect(group.className).toContain('flex');
    expect(screen.getByText('Single Badge')).toBeTruthy();
  });
});