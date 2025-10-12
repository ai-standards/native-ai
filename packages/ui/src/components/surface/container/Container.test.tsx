import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <div data-testid="child">Test content</div>
      </Container>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(
      <Container data-testid="container">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('container');
    expect(container.tagName).toBe('DIV');
    expect(container).toHaveClass('w-full'); // base style
    expect(container).toHaveClass('max-w-full'); // default size
    expect(container).toHaveClass('p-4'); // default padding
    expect(container).not.toHaveClass('mx-auto'); // center is false by default
  });

  it('applies size variants correctly', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
    const expectedClasses = ['max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-full'];

    sizes.forEach((size, index) => {
      const { rerender } = render(
        <Container size={size} data-testid={`container-${size}`}>
          <div>Content</div>
        </Container>
      );

      const container = screen.getByTestId(`container-${size}`);
      expect(container).toHaveClass(expectedClasses[index]);

      if (size !== 'full') {
        rerender(<div />); // Clean up for next iteration
      }
    });
  });

  it('applies padding variants correctly', () => {
    const paddings = ['none', 'sm', 'md', 'lg', 'xl'] as const;
    const expectedClasses = ['p-0', 'p-2', 'p-4', 'p-6', 'p-8'];

    paddings.forEach((padding, index) => {
      const { rerender } = render(
        <Container padding={padding} data-testid={`container-${padding}`}>
          <div>Content</div>
        </Container>
      );

      const container = screen.getByTestId(`container-${padding}`);
      expect(container).toHaveClass(expectedClasses[index]);

      if (padding !== 'xl') {
        rerender(<div />); // Clean up for next iteration
      }
    });
  });

  it('applies center alignment when center prop is true', () => {
    render(
      <Container center data-testid="centered-container">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('centered-container');
    expect(container).toHaveClass('mx-auto');
  });

  it('does not apply center alignment when center prop is false', () => {
    render(
      <Container center={false} data-testid="left-aligned-container">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('left-aligned-container');
    expect(container).not.toHaveClass('mx-auto');
  });

  it('forwards additional props to the div element', () => {
    render(
      <Container
        data-testid="container-with-props"
        id="custom-id"
        role="main"
        aria-label="Custom container"
      >
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('container-with-props');
    expect(container).toHaveAttribute('id', 'custom-id');
    expect(container).toHaveAttribute('role', 'main');
    expect(container).toHaveAttribute('aria-label', 'Custom container');
  });

  it('applies custom className alongside default classes', () => {
    render(
      <Container className="custom-class" data-testid="container-with-custom-class">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('container-with-custom-class');
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveClass('w-full'); // Base class should still be present
    expect(container).toHaveClass('max-w-full'); // Default size class
    expect(container).toHaveClass('p-4'); // Default padding class
  });

  it('combines multiple props correctly', () => {
    render(
      <Container
        size="lg"
        padding="xl"
        center
        className="bg-gray-100"
        data-testid="combined-container"
      >
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('combined-container');
    expect(container).toHaveClass('w-full'); // base
    expect(container).toHaveClass('max-w-lg'); // size
    expect(container).toHaveClass('p-8'); // padding
    expect(container).toHaveClass('mx-auto'); // center
    expect(container).toHaveClass('bg-gray-100'); // custom className
  });

  it('handles empty children gracefully', () => {
    render(
      <Container data-testid="empty-container">
        {null}
      </Container>
    );

    const container = screen.getByTestId('empty-container');
    expect(container).toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });

  it('renders multiple children correctly', () => {
    render(
      <Container data-testid="multi-child-container">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <span data-testid="child-3">Child 3</span>
      </Container>
    );

    const container = screen.getByTestId('multi-child-container');
    expect(container).toBeInTheDocument();
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('maintains accessibility when used as a landmark', () => {
    render(
      <Container role="region" aria-labelledby="section-title" data-testid="accessible-container">
        <h2 id="section-title">Section Title</h2>
        <p>Section content</p>
      </Container>
    );

    const container = screen.getByTestId('accessible-container');
    expect(container).toHaveAttribute('role', 'region');
    expect(container).toHaveAttribute('aria-labelledby', 'section-title');
  });

  // Edge cases and prop validation
  describe('prop validation', () => {
    it('handles undefined props gracefully', () => {
      render(
        <Container
          size={undefined}
          padding={undefined}
          center={undefined}
          data-testid="undefined-props-container"
        >
          <div>Content</div>
        </Container>
      );

      const container = screen.getByTestId('undefined-props-container');
      expect(container).toHaveClass('max-w-full'); // default size
      expect(container).toHaveClass('p-4'); // default padding
      expect(container).not.toHaveClass('mx-auto'); // default center
    });

    it('overrides default props when explicitly provided', () => {
      render(
        <Container
          size="sm"
          padding="none"
          center={true}
          data-testid="override-container"
        >
          <div>Content</div>
        </Container>
      );

      const container = screen.getByTestId('override-container');
      expect(container).toHaveClass('max-w-sm');
      expect(container).toHaveClass('p-0');
      expect(container).toHaveClass('mx-auto');
      // Should not have default classes
      expect(container).not.toHaveClass('max-w-full');
      expect(container).not.toHaveClass('p-4');
    });
  });
});