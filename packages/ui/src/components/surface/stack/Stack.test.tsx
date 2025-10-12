import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children correctly', () => {
    render(
      <Stack>
        <div data-testid="child">Test content</div>
      </Stack>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(
      <Stack data-testid="stack">
        <div>Content</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex'); // base flex
    expect(stack).toHaveClass('flex-col'); // default vertical direction
    expect(stack).toHaveClass('gap-4'); // default md spacing
    expect(stack).toHaveClass('items-stretch'); // default align
    expect(stack).toHaveClass('justify-start'); // default justify
  });

  it('applies direction variants correctly', () => {
    const { rerender } = render(
      <Stack direction="vertical" data-testid="vertical-stack">
        <div>Content</div>
      </Stack>
    );

    const verticalStack = screen.getByTestId('vertical-stack');
    expect(verticalStack).toHaveClass('flex-col');

    rerender(
      <Stack direction="horizontal" data-testid="horizontal-stack">
        <div>Content</div>
      </Stack>
    );

    const horizontalStack = screen.getByTestId('horizontal-stack');
    expect(horizontalStack).toHaveClass('flex-row');
  });

  it('applies spacing variants correctly', () => {
    const spacings = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
    const expectedClasses = ['gap-0', 'gap-1', 'gap-2', 'gap-4', 'gap-6', 'gap-8', 'gap-12'];

    spacings.forEach((spacing, index) => {
      const { rerender } = render(
        <Stack spacing={spacing} data-testid={`stack-${spacing}`}>
          <div>Content</div>
        </Stack>
      );

      const stack = screen.getByTestId(`stack-${spacing}`);
      expect(stack).toHaveClass(expectedClasses[index]);

      if (spacing !== '2xl') {
        rerender(<div />);
      }
    });
  });

  it('applies align variants correctly', () => {
    const aligns = ['start', 'center', 'end', 'stretch'] as const;
    const expectedClasses = ['items-start', 'items-center', 'items-end', 'items-stretch'];

    aligns.forEach((align, index) => {
      const { rerender } = render(
        <Stack align={align} data-testid={`stack-${align}`}>
          <div>Content</div>
        </Stack>
      );

      const stack = screen.getByTestId(`stack-${align}`);
      expect(stack).toHaveClass(expectedClasses[index]);

      if (align !== 'stretch') {
        rerender(<div />);
      }
    });
  });

  it('applies justify variants correctly', () => {
    const justifies = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
    const expectedClasses = ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'];

    justifies.forEach((justify, index) => {
      const { rerender } = render(
        <Stack justify={justify} data-testid={`stack-${justify}`}>
          <div>Content</div>
        </Stack>
      );

      const stack = screen.getByTestId(`stack-${justify}`);
      expect(stack).toHaveClass(expectedClasses[index]);

      if (justify !== 'evenly') {
        rerender(<div />);
      }
    });
  });

  it('applies wrap when wrap prop is true', () => {
    render(
      <Stack wrap data-testid="wrap-stack">
        <div>Content</div>
      </Stack>
    );

    const stack = screen.getByTestId('wrap-stack');
    expect(stack).toHaveClass('flex-wrap');
  });

  it('does not apply wrap when wrap prop is false', () => {
    render(
      <Stack wrap={false} data-testid="no-wrap-stack">
        <div>Content</div>
      </Stack>
    );

    const stack = screen.getByTestId('no-wrap-stack');
    expect(stack).not.toHaveClass('flex-wrap');
  });

  it('renders children without divider by default', () => {
    render(
      <Stack data-testid="stack-no-divider">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </Stack>
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.queryByText('|')).not.toBeInTheDocument();
  });

  it('renders children with divider when provided', () => {
    render(
      <Stack divider={<span data-testid="divider">|</span>} data-testid="stack-with-divider">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Stack>
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
    
    // Should have 2 dividers for 3 children
    const dividers = screen.getAllByTestId('divider');
    expect(dividers).toHaveLength(2);
  });

  it('applies correct divider positioning', () => {
    render(
      <Stack divider={<hr data-testid="hr-divider" />}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const divider = screen.getByTestId('hr-divider');
    expect(divider.parentElement).toHaveClass('flex-shrink-0');
  });

  it('forwards additional props to the div element', () => {
    render(
      <Stack
        data-testid="stack-with-props"
        id="custom-id"
        role="group"
        aria-label="Custom stack container"
      >
        <div>Content</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack-with-props');
    expect(stack).toHaveAttribute('id', 'custom-id');
    expect(stack).toHaveAttribute('role', 'group');
    expect(stack).toHaveAttribute('aria-label', 'Custom stack container');
  });

  it('applies custom className alongside default classes', () => {
    render(
      <Stack className="custom-class" data-testid="stack-with-custom-class">
        <div>Content</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack-with-custom-class');
    expect(stack).toHaveClass('custom-class');
    expect(stack).toHaveClass('flex'); // Base class should still be present
  });

  it('combines multiple props correctly', () => {
    render(
      <Stack
        direction="horizontal"
        spacing="lg"
        align="center"
        justify="between"
        wrap
        className="bg-gray-100"
        data-testid="combined-stack"
      >
        <div>Content</div>
      </Stack>
    );

    const stack = screen.getByTestId('combined-stack');
    expect(stack).toHaveClass('flex'); // base
    expect(stack).toHaveClass('flex-row'); // direction horizontal
    expect(stack).toHaveClass('gap-6'); // spacing lg
    expect(stack).toHaveClass('items-center'); // align center
    expect(stack).toHaveClass('justify-between'); // justify between
    expect(stack).toHaveClass('flex-wrap'); // wrap
    expect(stack).toHaveClass('bg-gray-100'); // custom className
  });

  it('handles empty children gracefully', () => {
    render(
      <Stack data-testid="empty-stack">
        {null}
      </Stack>
    );

    const stack = screen.getByTestId('empty-stack');
    expect(stack).toBeInTheDocument();
    expect(stack).toBeEmptyDOMElement();
  });
});