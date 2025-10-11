import { render, screen } from '@testing-library/react';
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

  it('applies centering when center prop is true', () => {
    render(
      <Container center data-testid="centered-container">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('centered-container');
    expect(container).toHaveClass('mx-auto');
  });

  it('does not apply centering when center prop is false', () => {
    render(
      <Container center={false} data-testid="non-centered-container">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('non-centered-container');
    expect(container).not.toHaveClass('mx-auto');
  });

  it('forwards additional props to the div element', () => {
    render(
      <Container
        data-testid="container-with-props"
        id="custom-id"
        role="region"
        aria-label="Custom container"
      >
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('container-with-props');
    expect(container).toHaveAttribute('id', 'custom-id');
    expect(container).toHaveAttribute('role', 'region');
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
        className="custom-bg"
        data-testid="combined-container"
      >
        <div>Content</div>
      </Container>
    );

    const container = screen.getByTestId('combined-container');
    expect(container).toHaveClass('max-w-lg'); // size
    expect(container).toHaveClass('p-8'); // padding
    expect(container).toHaveClass('mx-auto'); // center
    expect(container).toHaveClass('custom-bg'); // custom class
    expect(container).toHaveClass('w-full'); // base class
  });
});