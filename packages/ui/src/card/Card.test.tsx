import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';

describe('Card Component', () => {
  it('renders with children', () => {
    render(
      <Card>
        <div>Card content</div>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    render(<Card variant="elevated" data-testid="card">Elevated card</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-lg', 'border-0');
  });

  it('applies correct padding classes', () => {
    render(<Card padding="lg" data-testid="card">Large padding</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('p-8');
  });

  it('accepts custom className', () => {
    render(<Card className="custom-class" data-testid="card">Custom card</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
  });

  it('passes through HTML attributes', () => {
    render(<Card data-testid="card" role="region">Card with attributes</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('role', 'region');
  });

  describe('variants', () => {
    it('renders default variant correctly', () => {
      render(<Card data-testid="card">Default card</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white', 'border', 'border-gray-200', 'shadow-sm');
    });

    it('renders outlined variant correctly', () => {
      render(<Card variant="outlined" data-testid="card">Outlined card</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white', 'border-2', 'border-gray-300');
    });

    it('renders flat variant correctly', () => {
      render(<Card variant="flat" data-testid="card">Flat card</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-gray-50', 'border-0', 'shadow-none');
    });
  });

  describe('padding options', () => {
    it('renders with no padding', () => {
      render(<Card padding="none" data-testid="card">No padding</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('p-0');
    });

    it('renders with small padding', () => {
      render(<Card padding="sm" data-testid="card">Small padding</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('p-4');
    });
  });
});

describe('CardHeader Component', () => {
  it('renders with children', () => {
    render(
      <CardHeader>
        <h2>Header title</h2>
      </CardHeader>
    );
    expect(screen.getByText('Header title')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(<CardHeader data-testid="header">Header content</CardHeader>);
    const header = screen.getByTestId('header');
    expect(header).toHaveClass('border-b', 'border-gray-200', 'pb-4', 'mb-4');
  });

  it('accepts custom className', () => {
    render(<CardHeader className="custom-header" data-testid="header">Header</CardHeader>);
    const header = screen.getByTestId('header');
    expect(header).toHaveClass('custom-header');
  });
});

describe('CardContent Component', () => {
  it('renders with children', () => {
    render(
      <CardContent>
        <p>Content text</p>
      </CardContent>
    );
    expect(screen.getByText('Content text')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(<CardContent data-testid="content">Content</CardContent>);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('text-gray-700');
  });

  it('accepts custom className', () => {
    render(<CardContent className="custom-content" data-testid="content">Content</CardContent>);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('custom-content');
  });
});

describe('CardFooter Component', () => {
  it('renders with children', () => {
    render(
      <CardFooter>
        <button>Action</button>
      </CardFooter>
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(<CardFooter data-testid="footer">Footer content</CardFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass(
      'border-t', 
      'border-gray-200', 
      'pt-4', 
      'mt-4', 
      'flex', 
      'items-center', 
      'justify-between'
    );
  });

  it('accepts custom className', () => {
    render(<CardFooter className="custom-footer" data-testid="footer">Footer</CardFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('custom-footer');
  });
});

describe('Composed Card', () => {
  it('renders all card components together', () => {
    render(
      <Card data-testid="card">
        <CardHeader data-testid="header">
          <h2>Card Title</h2>
        </CardHeader>
        <CardContent data-testid="content">
          <p>Card content goes here</p>
        </CardContent>
        <CardFooter data-testid="footer">
          <button>Cancel</button>
          <button>Save</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card content goes here')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});