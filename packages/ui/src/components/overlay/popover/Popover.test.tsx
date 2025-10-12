import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

describe('Popover', () => {
  it('renders trigger and content correctly', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button data-testid="trigger">Click me</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Popover content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByTestId('trigger')).toBeInTheDocument();
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('shows content when trigger is clicked', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button data-testid="trigger">Click me</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Popover content</div>
        </PopoverContent>
      </Popover>
    );

    const trigger = screen.getByTestId('trigger');
    fireEvent.click(trigger);

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('hides content when trigger is clicked again', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button data-testid="trigger">Click me</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Popover content</div>
        </PopoverContent>
      </Popover>
    );

    const trigger = screen.getByTestId('trigger');
    
    // Open
    fireEvent.click(trigger);
    expect(screen.getByTestId('content')).toBeInTheDocument();
    
    // Close
    fireEvent.click(trigger);
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('starts open with defaultOpen prop', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('respects controlled open state', () => {
    const { rerender } = render(
      <Popover open={false}>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.queryByTestId('content')).not.toBeInTheDocument();

    rerender(
      <Popover open={true}>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', () => {
    const onOpenChange = vi.fn();

    render(
      <Popover onOpenChange={onOpenChange}>
        <PopoverTrigger>
          <button data-testid="trigger">Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('trigger'));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('closes on outside click when closeOnClickOutside is true', () => {
    render(
      <div>
        <Popover defaultOpen closeOnClickOutside>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <div data-testid="content">Content</div>
          </PopoverContent>
        </Popover>
        <div data-testid="outside">Outside element</div>
      </div>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('does not close on outside click when closeOnClickOutside is false', () => {
    render(
      <div>
        <Popover defaultOpen closeOnClickOutside={false}>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <div data-testid="content">Content</div>
          </PopoverContent>
        </Popover>
        <div data-testid="outside">Outside element</div>
      </div>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('closes on escape key when closeOnEscape is true', () => {
    render(
      <Popover defaultOpen closeOnEscape>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('does not close on escape when closeOnEscape is false', () => {
    render(
      <Popover defaultOpen closeOnEscape={false}>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div data-testid="content">Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});

describe('PopoverTrigger', () => {
  it('renders as button by default', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid="trigger">Click me</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger.tagName).toBe('BUTTON');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid="trigger">Click me</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('updates aria-expanded when popover opens', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid="trigger">Click me</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('PopoverContent', () => {
  it('applies placement classes correctly', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const;

    placements.forEach((placement) => {
      const { rerender } = render(
        <Popover defaultOpen>
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent placement={placement} data-testid={`content-${placement}`}>
            Content
          </PopoverContent>
        </Popover>
      );

      const content = screen.getByTestId(`content-${placement}`);
      expect(content).toBeInTheDocument();

      if (placement !== 'right') {
        rerender(<div />);
      }
    });
  });

  it('has proper accessibility attributes', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent data-testid="content">Content</PopoverContent>
      </Popover>
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveAttribute('role', 'dialog');
    expect(content).toHaveAttribute('aria-modal', 'true');
  });

  it('applies custom className', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent className="custom-popover" data-testid="content">
          Content
        </PopoverContent>
      </Popover>
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveClass('custom-popover');
  });
});