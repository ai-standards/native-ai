import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders trigger and hides content by default', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <button data-testid="trigger">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Tooltip content</div>
        </TooltipContent>
      </Tooltip>
    );

    expect(screen.getByTestId('trigger')).toBeInTheDocument();
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('shows content after delay on mouse enter', () => {
    render(
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <button data-testid="trigger">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Tooltip content</div>
        </TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    const wrapper = trigger.closest('.relative');
    
    act(() => {
      fireEvent.mouseEnter(wrapper!);
    });

    // Before delay
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    // After delay
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('hides content immediately on mouse leave', () => {
    render(
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <button data-testid="trigger">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Tooltip content</div>
        </TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    const wrapper = trigger.closest('.relative');
    
    // Show tooltip
    act(() => {
      fireEvent.mouseEnter(wrapper!);
      vi.advanceTimersByTime(100);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    // Hide tooltip
    act(() => {
      fireEvent.mouseLeave(wrapper!);
    });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('cancels show timeout when mouse leaves before delay', () => {
    render(
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <button data-testid="trigger">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Tooltip content</div>
        </TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    
    // Start hover
    fireEvent.mouseEnter(trigger);
    
    // Leave before delay completes
    fireEvent.mouseLeave(trigger);
    
    // Complete the delay
    vi.advanceTimersByTime(100);
    
    // Tooltip should not show
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('starts open with defaultOpen prop', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Content</div>
        </TooltipContent>
      </Tooltip>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('respects controlled open state', () => {
    const { rerender } = render(
      <Tooltip open={false}>
        <TooltipTrigger>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Content</div>
        </TooltipContent>
      </Tooltip>
    );

    expect(screen.queryByTestId('content')).not.toBeInTheDocument();

    rerender(
      <Tooltip open={true}>
        <TooltipTrigger>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <div data-testid="content">Content</div>
        </TooltipContent>
      </Tooltip>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', () => {
    const onOpenChange = vi.fn();

    render(
      <Tooltip onOpenChange={onOpenChange} delayDuration={0}>
        <TooltipTrigger>
          <button data-testid="trigger">Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <div>Content</div>
        </TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    const wrapper = trigger.closest('.relative');
    
    act(() => {
      fireEvent.mouseEnter(wrapper!);
      vi.advanceTimersByTime(0); // Advance even 0ms timeout
    });
    expect(onOpenChange).toHaveBeenCalledWith(true);

    act(() => {
      fireEvent.mouseLeave(wrapper!);
    });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

describe('TooltipTrigger', () => {
  it('renders children as span by default', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="trigger">Hover me</TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger.tagName).toBe('SPAN');
  });

  it('clones child element when asChild is true', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button data-testid="trigger">Custom button</button>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger.tagName).toBe('BUTTON');
    expect(trigger).toHaveAttribute('aria-describedby', 'tooltip-content');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="trigger">Hover me</TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger).toHaveAttribute('aria-describedby', 'tooltip-content');
  });
});

describe('TooltipContent', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('applies side positioning classes correctly', () => {
    const sides = ['top', 'bottom', 'left', 'right'] as const;
    const expectedClasses = ['bottom-full mb-2', 'top-full mt-2', 'right-full mr-2', 'left-full ml-2'];

    sides.forEach((side, index) => {
      const { rerender } = render(
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent side={side} data-testid={`content-${side}`}>
            Content
          </TooltipContent>
        </Tooltip>
      );

      const content = screen.getByTestId(`content-${side}`);
      const classes = expectedClasses[index].split(' ');
      classes.forEach(cls => {
        expect(content).toHaveClass(cls);
      });

      if (side !== 'right') {
        rerender(<div />);
      }
    });
  });

  it('applies align positioning classes correctly', () => {
    const aligns = ['start', 'center', 'end'] as const;

    aligns.forEach((align) => {
      const { rerender } = render(
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent align={align} data-testid={`content-${align}`}>
            Content
          </TooltipContent>
        </Tooltip>
      );

      const content = screen.getByTestId(`content-${align}`);
      expect(content).toBeInTheDocument();

      if (align !== 'end') {
        rerender(<div />);
      }
    });
  });

  it('applies sideOffset correctly', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent side="top" sideOffset={10} data-testid="content">
          Content
        </TooltipContent>
      </Tooltip>
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveStyle({ marginBottom: '10px' });
  });

  it('has proper accessibility attributes', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent data-testid="content">Content</TooltipContent>
      </Tooltip>
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveAttribute('id', 'tooltip-content');
    expect(content).toHaveAttribute('role', 'tooltip');
  });

  it('applies custom className', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent className="custom-tooltip" data-testid="content">
          Content
        </TooltipContent>
      </Tooltip>
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveClass('custom-tooltip');
  });
});