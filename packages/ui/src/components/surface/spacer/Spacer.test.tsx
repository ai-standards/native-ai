import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Spacer } from './Spacer';

describe('Spacer', () => {
  it('renders without children', () => {
    render(<Spacer data-testid="spacer" />);

    const spacer = screen.getByTestId('spacer');
    expect(spacer).toBeInTheDocument();
    expect(spacer).toBeEmptyDOMElement();
  });

  it('applies default props correctly', () => {
    render(<Spacer data-testid="spacer" />);

    const spacer = screen.getByTestId('spacer');
    expect(spacer).toHaveClass('shrink-0');
    expect(spacer).toHaveStyle({ width: '16px', height: '16px' }); // default md size both axes
  });

  it('applies size variants correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
    const expectedSizes = ['4px', '8px', '16px', '24px', '32px', '48px', '64px', '96px'];

    sizes.forEach((size, index) => {
      const { rerender } = render(
        <Spacer size={size} data-testid={`spacer-${size}`} />
      );

      const spacer = screen.getByTestId(`spacer-${size}`);
      expect(spacer).toHaveStyle({
        width: expectedSizes[index],
        height: expectedSizes[index]
      });

      if (size !== '4xl') {
        rerender(<div />);
      }
    });
  });

  it('applies horizontal axis correctly', () => {
    render(<Spacer axis="horizontal" size="lg" data-testid="horizontal-spacer" />);

    const spacer = screen.getByTestId('horizontal-spacer');
    expect(spacer).toHaveStyle({ width: '24px' });
    expect(spacer.style.height).toBe('');
  });

  it('applies vertical axis correctly', () => {
    render(<Spacer axis="vertical" size="xl" data-testid="vertical-spacer" />);

    const spacer = screen.getByTestId('vertical-spacer');
    expect(spacer).toHaveStyle({ height: '32px' });
    expect(spacer.style.width).toBe('');
  });

  it('applies both axes by default', () => {
    render(<Spacer size="sm" data-testid="both-axes-spacer" />);

    const spacer = screen.getByTestId('both-axes-spacer');
    expect(spacer).toHaveStyle({ width: '8px', height: '8px' });
  });

  it('applies flex prop correctly', () => {
    render(<Spacer flex data-testid="flex-spacer" />);

    const spacer = screen.getByTestId('flex-spacer');
    expect(spacer).toHaveClass('flex-1');
  });

  it('does not apply flex-1 when flex prop is false', () => {
    render(<Spacer flex={false} data-testid="no-flex-spacer" />);

    const spacer = screen.getByTestId('no-flex-spacer');
    expect(spacer).not.toHaveClass('flex-1');
  });

  it('forwards additional props to the div element', () => {
    render(
      <Spacer
        data-testid="spacer-with-props"
        id="custom-id"
        role="separator"
        aria-label="Custom spacer"
      />
    );

    const spacer = screen.getByTestId('spacer-with-props');
    expect(spacer).toHaveAttribute('id', 'custom-id');
    expect(spacer).toHaveAttribute('role', 'separator');
    expect(spacer).toHaveAttribute('aria-label', 'Custom spacer');
  });

  it('applies custom className alongside default classes', () => {
    render(<Spacer className="custom-class" data-testid="spacer-with-custom-class" />);

    const spacer = screen.getByTestId('spacer-with-custom-class');
    expect(spacer).toHaveClass('custom-class');
    expect(spacer).toHaveClass('shrink-0'); // Base class should still be present
  });

  it('merges custom styles with axis styles', () => {
    render(
      <Spacer
        axis="horizontal"
        size="lg"
        style={{ backgroundColor: 'red', border: '1px solid black' }}
        data-testid="custom-style-spacer"
      />
    );

    const spacer = screen.getByTestId('custom-style-spacer');
    expect(spacer).toHaveStyle({ width: '24px' });
    // Check that custom styles are applied by checking the style attribute
    expect(spacer.style.backgroundColor).toBe('red');
    expect(spacer.style.border).toBe('1px solid black');
  });

  it('combines multiple props correctly', () => {
    render(
      <Spacer
        size="2xl"
        axis="vertical"
        flex
        className="bg-gray-200"
        data-testid="combined-spacer"
      />
    );

    const spacer = screen.getByTestId('combined-spacer');
    expect(spacer).toHaveClass('shrink-0'); // base
    expect(spacer).toHaveClass('flex-1'); // flex
    expect(spacer).toHaveClass('bg-gray-200'); // custom className
    expect(spacer).toHaveStyle({ height: '48px' }); // size 2xl vertical axis
    expect(spacer.style.width).toBe(''); // no width for vertical axis
  });

  it('handles edge case combinations', () => {
    render(
      <Spacer
        size="xs"
        axis="both"
        flex={false}
        data-testid="edge-case-spacer"
      />
    );

    const spacer = screen.getByTestId('edge-case-spacer');
    expect(spacer).toHaveClass('shrink-0');
    expect(spacer).not.toHaveClass('flex-1');
    expect(spacer).toHaveStyle({ width: '4px', height: '4px' });
  });

  describe('prop validation', () => {
    it('handles undefined props gracefully', () => {
      render(
        <Spacer
          size={undefined}
          axis={undefined}
          flex={undefined}
          data-testid="undefined-props-spacer"
        />
      );

      const spacer = screen.getByTestId('undefined-props-spacer');
      expect(spacer).toHaveStyle({ width: '16px', height: '16px' }); // default size md, both axes
      expect(spacer).not.toHaveClass('flex-1'); // default flex false
    });
  });
});