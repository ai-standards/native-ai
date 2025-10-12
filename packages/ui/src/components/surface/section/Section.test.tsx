import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Section, SectionHeader, SectionContent, SectionFooter } from './Section';

describe('Section', () => {
  it('renders children correctly', () => {
    render(
      <Section>
        <div data-testid="child">Test content</div>
      </Section>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(
      <Section data-testid="section">
        <div>Content</div>
      </Section>
    );

    const section = screen.getByTestId('section');
    expect(section.tagName).toBe('SECTION');
    expect(section).toHaveClass('bg-white'); // default variant
    expect(section).toHaveClass('py-8'); // default spacing
    expect(section).not.toHaveClass('min-h-screen'); // fullHeight is false by default
  });

  it('applies variant styles correctly', () => {
    const variants = ['default', 'primary', 'secondary', 'accent', 'muted'] as const;
    const expectedClasses = ['bg-white', 'bg-blue-50', 'bg-gray-50', 'bg-purple-50', 'bg-gray-100'];

    variants.forEach((variant, index) => {
      const { rerender } = render(
        <Section variant={variant} data-testid={`section-${variant}`}>
          <div>Content</div>
        </Section>
      );

      const section = screen.getByTestId(`section-${variant}`);
      expect(section).toHaveClass(expectedClasses[index]);

      if (variant !== 'muted') {
        rerender(<div />); // Clean up for next iteration
      }
    });
  });

  it('applies spacing variants correctly', () => {
    const spacings = ['none', 'sm', 'md', 'lg', 'xl'] as const;
    const expectedClasses = ['py-0', 'py-4', 'py-8', 'py-12', 'py-16'];

    spacings.forEach((spacing, index) => {
      const { rerender } = render(
        <Section spacing={spacing} data-testid={`section-${spacing}`}>
          <div>Content</div>
        </Section>
      );

      const section = screen.getByTestId(`section-${spacing}`);
      expect(section).toHaveClass(expectedClasses[index]);

      if (spacing !== 'xl') {
        rerender(<div />); // Clean up for next iteration
      }
    });
  });

  it('applies full height when fullHeight prop is true', () => {
    render(
      <Section fullHeight data-testid="full-height-section">
        <div>Content</div>
      </Section>
    );

    const section = screen.getByTestId('full-height-section');
    expect(section).toHaveClass('min-h-screen');
  });

  it('does not apply full height when fullHeight prop is false', () => {
    render(
      <Section fullHeight={false} data-testid="normal-section">
        <div>Content</div>
      </Section>
    );

    const section = screen.getByTestId('normal-section');
    expect(section).not.toHaveClass('min-h-screen');
  });

  it('forwards additional props to the section element', () => {
    render(
      <Section
        data-testid="section-with-props"
        id="custom-id"
        role="banner"
        aria-label="Custom section"
      >
        <div>Content</div>
      </Section>
    );

    const section = screen.getByTestId('section-with-props');
    expect(section).toHaveAttribute('id', 'custom-id');
    expect(section).toHaveAttribute('role', 'banner');
    expect(section).toHaveAttribute('aria-label', 'Custom section');
  });

  it('applies custom className alongside default classes', () => {
    render(
      <Section className="custom-class" data-testid="section-with-custom-class">
        <div>Content</div>
      </Section>
    );

    const section = screen.getByTestId('section-with-custom-class');
    expect(section).toHaveClass('custom-class');
    expect(section).toHaveClass('w-full'); // Base class should still be present
    expect(section).toHaveClass('bg-white'); // Default variant class
    expect(section).toHaveClass('py-8'); // Default spacing class
  });
});

describe('SectionHeader', () => {
  it('renders children correctly', () => {
    render(
      <SectionHeader>
        <h2 data-testid="header-content">Header Title</h2>
      </SectionHeader>
    );

    expect(screen.getByTestId('header-content')).toBeInTheDocument();
    expect(screen.getByText('Header Title')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <SectionHeader data-testid="section-header">
        <h2>Header</h2>
      </SectionHeader>
    );

    const header = screen.getByTestId('section-header');
    expect(header).toHaveClass('mb-6');
    expect(header).toHaveClass('border-b');
    expect(header).toHaveClass('border-gray-200');
    expect(header).toHaveClass('pb-4');
  });

  it('accepts custom className', () => {
    render(
      <SectionHeader className="custom-header" data-testid="custom-header">
        <h2>Header</h2>
      </SectionHeader>
    );

    const header = screen.getByTestId('custom-header');
    expect(header).toHaveClass('custom-header');
    expect(header).toHaveClass('mb-6'); // Default class should still be present
  });
});

describe('SectionContent', () => {
  it('renders children correctly', () => {
    render(
      <SectionContent>
        <div data-testid="content">Main content</div>
      </SectionContent>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <SectionContent data-testid="section-content">
        <div>Content</div>
      </SectionContent>
    );

    const content = screen.getByTestId('section-content');
    expect(content).toHaveClass('flex-1');
  });
});

describe('SectionFooter', () => {
  it('renders children correctly', () => {
    render(
      <SectionFooter>
        <div data-testid="footer-content">Footer content</div>
      </SectionFooter>
    );

    expect(screen.getByTestId('footer-content')).toBeInTheDocument();
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <SectionFooter data-testid="section-footer">
        <div>Footer</div>
      </SectionFooter>
    );

    const footer = screen.getByTestId('section-footer');
    expect(footer).toHaveClass('mt-6');
    expect(footer).toHaveClass('border-t');
    expect(footer).toHaveClass('border-gray-200');
    expect(footer).toHaveClass('pt-4');
  });
});