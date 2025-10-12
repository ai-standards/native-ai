import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Panel } from './Panel';

describe('Panel', () => {
  it('renders children correctly', () => {
    render(
      <Panel>
        <div data-testid="child">Test content</div>
      </Panel>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(
      <Panel data-testid="panel">
        <div>Content</div>
      </Panel>
    );

    const panel = screen.getByTestId('panel');
    expect(panel).toHaveClass('bg-white'); // default variant
    expect(panel).toHaveClass('border-gray-200'); // default variant
    expect(panel).toHaveClass('text-base'); // default size
  });

  it('renders with title when provided', () => {
    render(
      <Panel title="Test Title">
        <div>Content</div>
      </Panel>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('is collapsible by default and shows chevron', () => {
    render(
      <Panel title="Collapsible Panel">
        <div data-testid="content">Content</div>
      </Panel>
    );

    const header = screen.getByRole('button');
    expect(header).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('toggles collapsed state when header is clicked', () => {
    render(
      <Panel title="Toggle Panel">
        <div data-testid="content">Content</div>
      </Panel>
    );

    const header = screen.getByRole('button');
    const content = screen.getByTestId('content');

    // Initially expanded
    expect(content).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(header);
    expect(content.closest('[id="panel-content"]')).toHaveClass('max-h-0');

    // Click to expand
    fireEvent.click(header);
    expect(content.closest('[id="panel-content"]')).toHaveClass('max-h-none');
  });

  it('handles keyboard navigation', () => {
    render(
      <Panel title="Keyboard Panel">
        <div data-testid="content">Content</div>
      </Panel>
    );

    const header = screen.getByRole('button');

    // Test Enter key
    fireEvent.keyDown(header, { key: 'Enter' });
    expect(screen.getByTestId('content').closest('[id="panel-content"]')).toHaveClass('max-h-0');

    // Test Space key
    fireEvent.keyDown(header, { key: ' ' });
    expect(screen.getByTestId('content').closest('[id="panel-content"]')).toHaveClass('max-h-none');
  });

  it('calls onCollapsedChange when toggled', () => {
    const onCollapsedChange = vi.fn();

    render(
      <Panel title="Callback Panel" onCollapsedChange={onCollapsedChange}>
        <div>Content</div>
      </Panel>
    );

    const header = screen.getByRole('button');
    fireEvent.click(header);

    expect(onCollapsedChange).toHaveBeenCalledWith(true);
  });

  it('respects controlled collapsed state', () => {
    const { rerender } = render(
      <Panel title="Controlled Panel" collapsed={false}>
        <div data-testid="content">Content</div>
      </Panel>
    );

    expect(screen.getByTestId('content').closest('[id="panel-content"]')).toHaveClass('max-h-none');

    rerender(
      <Panel title="Controlled Panel" collapsed={true}>
        <div data-testid="content">Content</div>
      </Panel>
    );

    expect(screen.getByTestId('content').closest('[id="panel-content"]')).toHaveClass('max-h-0');
  });

  it('starts collapsed when defaultCollapsed is true', () => {
    render(
      <Panel title="Default Collapsed" defaultCollapsed={true}>
        <div data-testid="content">Content</div>
      </Panel>
    );

    expect(screen.getByTestId('content').closest('[id="panel-content"]')).toHaveClass('max-h-0');
  });

  it('is not collapsible when collapsible is false', () => {
    render(
      <Panel title="Non-collapsible Panel" collapsible={false}>
        <div data-testid="content">Content</div>
      </Panel>
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    const variants = ['default', 'outlined', 'filled'] as const;
    const expectedClasses = [
      'bg-white border border-gray-200',
      'bg-transparent border-2 border-gray-300',
      'bg-gray-50 border border-gray-200'
    ];

    variants.forEach((variant, index) => {
      const { rerender } = render(
        <Panel variant={variant} data-testid={`panel-${variant}`}>
          <div>Content</div>
        </Panel>
      );

      const panel = screen.getByTestId(`panel-${variant}`);
      const expectedClassList = expectedClasses[index].split(' ');
      expectedClassList.forEach(cls => {
        expect(panel).toHaveClass(cls);
      });

      if (variant !== 'filled') {
        rerender(<div />);
      }
    });
  });

  it('applies size styles correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    const expectedClasses = ['text-sm', 'text-base', 'text-lg'];

    sizes.forEach((size, index) => {
      const { rerender } = render(
        <Panel size={size} data-testid={`panel-${size}`}>
          <div>Content</div>
        </Panel>
      );

      const panel = screen.getByTestId(`panel-${size}`);
      expect(panel).toHaveClass(expectedClasses[index]);

      if (size !== 'lg') {
        rerender(<div />);
      }
    });
  });

  it('forwards additional props to the div element', () => {
    render(
      <Panel
        data-testid="panel-with-props"
        id="custom-id"
        role="region"
        aria-label="Custom panel"
      >
        <div>Content</div>
      </Panel>
    );

    const panel = screen.getByTestId('panel-with-props');
    expect(panel).toHaveAttribute('id', 'custom-id');
    expect(panel).toHaveAttribute('role', 'region');
    expect(panel).toHaveAttribute('aria-label', 'Custom panel');
  });

  it('applies custom className alongside default classes', () => {
    render(
      <Panel className="custom-class" data-testid="panel-with-custom-class">
        <div>Content</div>
      </Panel>
    );

    const panel = screen.getByTestId('panel-with-custom-class');
    expect(panel).toHaveClass('custom-class');
    expect(panel).toHaveClass('rounded-lg'); // Base class should still be present
  });

  it('renders without header when title is not provided and not collapsible', () => {
    render(
      <Panel collapsible={false}>
        <div data-testid="content">Content only</div>
      </Panel>
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <Panel title="Accessible Panel">
        <div>Content</div>
      </Panel>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAttribute('aria-controls', 'panel-content');
    expect(button).toHaveAttribute('tabIndex', '0');
  });
});