import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders children correctly', () => {
    render(
      <Flex>
        <div data-testid="child">Test content</div>
      </Flex>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(
      <Flex data-testid="flex">
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveClass('flex'); // base flex
    expect(flex).toHaveClass('flex-row'); // default direction
    expect(flex).toHaveClass('flex-nowrap'); // default wrap
    expect(flex).toHaveClass('justify-start'); // default justify
    expect(flex).toHaveClass('items-stretch'); // default align
    expect(flex).toHaveClass('gap-0'); // default gap
  });

  it('applies direction variants correctly', () => {
    const directions = ['row', 'row-reverse', 'col', 'col-reverse'] as const;
    const expectedClasses = ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'];

    directions.forEach((direction, index) => {
      const { rerender } = render(
        <Flex direction={direction} data-testid={`flex-${direction}`}>
          <div>Content</div>
        </Flex>
      );

      const flex = screen.getByTestId(`flex-${direction}`);
      expect(flex).toHaveClass(expectedClasses[index]);

      if (direction !== 'col-reverse') {
        rerender(<div />);
      }
    });
  });

  it('applies wrap variants correctly', () => {
    const wraps = ['nowrap', 'wrap', 'wrap-reverse'] as const;
    const expectedClasses = ['flex-nowrap', 'flex-wrap', 'flex-wrap-reverse'];

    wraps.forEach((wrap, index) => {
      const { rerender } = render(
        <Flex wrap={wrap} data-testid={`flex-${wrap}`}>
          <div>Content</div>
        </Flex>
      );

      const flex = screen.getByTestId(`flex-${wrap}`);
      expect(flex).toHaveClass(expectedClasses[index]);

      if (wrap !== 'wrap-reverse') {
        rerender(<div />);
      }
    });
  });

  it('applies justify variants correctly', () => {
    const justifies = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const;
    const expectedClasses = ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly'];

    justifies.forEach((justify, index) => {
      const { rerender } = render(
        <Flex justify={justify} data-testid={`flex-${justify}`}>
          <div>Content</div>
        </Flex>
      );

      const flex = screen.getByTestId(`flex-${justify}`);
      expect(flex).toHaveClass(expectedClasses[index]);

      if (justify !== 'evenly') {
        rerender(<div />);
      }
    });
  });

  it('applies align variants correctly', () => {
    const aligns = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
    const expectedClasses = ['items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch'];

    aligns.forEach((align, index) => {
      const { rerender } = render(
        <Flex align={align} data-testid={`flex-${align}`}>
          <div>Content</div>
        </Flex>
      );

      const flex = screen.getByTestId(`flex-${align}`);
      expect(flex).toHaveClass(expectedClasses[index]);

      if (align !== 'stretch') {
        rerender(<div />);
      }
    });
  });

  it('applies gap variants correctly', () => {
    const gaps = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
    const expectedClasses = ['gap-0', 'gap-1', 'gap-2', 'gap-4', 'gap-6', 'gap-8', 'gap-12'];

    gaps.forEach((gap, index) => {
      const { rerender } = render(
        <Flex gap={gap} data-testid={`flex-${gap}`}>
          <div>Content</div>
        </Flex>
      );

      const flex = screen.getByTestId(`flex-${gap}`);
      expect(flex).toHaveClass(expectedClasses[index]);

      if (gap !== '2xl') {
        rerender(<div />);
      }
    });
  });

  it('applies grow and shrink props correctly', () => {
    render(
      <Flex grow shrink={false} data-testid="flex-grow-no-shrink">
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('flex-grow-no-shrink');
    expect(flex).toHaveClass('flex-grow');
    expect(flex).toHaveClass('flex-shrink-0');
  });

  it('applies shrink by default', () => {
    render(
      <Flex data-testid="flex-default-shrink">
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('flex-default-shrink');
    expect(flex).toHaveClass('flex-shrink');
  });

  it('renders as inline-flex when inline prop is true', () => {
    render(
      <Flex inline data-testid="inline-flex">
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('inline-flex');
    expect(flex).toHaveClass('inline-flex');
    expect(flex).not.toHaveClass('flex');
  });

  it('forwards additional props to the div element', () => {
    render(
      <Flex
        data-testid="flex-with-props"
        id="custom-id"
        role="group"
        aria-label="Custom flex container"
      >
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('flex-with-props');
    expect(flex).toHaveAttribute('id', 'custom-id');
    expect(flex).toHaveAttribute('role', 'group');
    expect(flex).toHaveAttribute('aria-label', 'Custom flex container');
  });

  it('applies custom className alongside default classes', () => {
    render(
      <Flex className="custom-class" data-testid="flex-with-custom-class">
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('flex-with-custom-class');
    expect(flex).toHaveClass('custom-class');
    expect(flex).toHaveClass('flex'); // Base class should still be present
  });

  it('combines multiple props correctly', () => {
    render(
      <Flex
        direction="col"
        justify="center"
        align="center"
        gap="lg"
        grow
        inline
        className="bg-gray-100"
        data-testid="combined-flex"
      >
        <div>Content</div>
      </Flex>
    );

    const flex = screen.getByTestId('combined-flex');
    expect(flex).toHaveClass('inline-flex'); // inline
    expect(flex).toHaveClass('flex-col'); // direction
    expect(flex).toHaveClass('justify-center'); // justify
    expect(flex).toHaveClass('items-center'); // align
    expect(flex).toHaveClass('gap-6'); // gap lg
    expect(flex).toHaveClass('flex-grow'); // grow
    expect(flex).toHaveClass('bg-gray-100'); // custom className
  });

  it('renders multiple children correctly', () => {
    render(
      <Flex data-testid="multi-child-flex">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <span data-testid="child-3">Child 3</span>
      </Flex>
    );

    const flex = screen.getByTestId('multi-child-flex');
    expect(flex).toBeInTheDocument();
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });
});