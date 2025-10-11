import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders with message', () => {
    render(<ErrorMessage message="This field is required" />);
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('does not render when no message', () => {
    const { container } = render(<ErrorMessage />);
    
    expect(container.firstChild).toBeNull();
  });

  it('shows icon by default', () => {
    const { container } = render(<ErrorMessage message="Error" />);
    
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    const { container } = render(<ErrorMessage message="Error" showIcon={false} />);
    
    const icon = container.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });

  it('uses custom icon when provided', () => {
    const customIcon = <span data-testid="custom-icon">!</span>;
    render(<ErrorMessage message="Error" icon={customIcon} />);
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    render(<ErrorMessage message="Error" size="lg" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveClass('text-base');
  });

  it('sets correct id when fieldId provided', () => {
    render(<ErrorMessage message="Error" fieldId="test-field" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveAttribute('id', 'test-field-error');
  });

  it('applies custom className', () => {
    render(<ErrorMessage message="Error" className="custom-class" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveClass('custom-class');
  });

  it('applies fade animation classes', () => {
    render(<ErrorMessage message="Error" animation="fade" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveClass('transition-opacity');
  });

  it('applies slide animation classes', () => {
    render(<ErrorMessage message="Error" animation="slide" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveClass('transition-all', 'transform');
  });

  it('applies no animation classes when animation is none', () => {
    render(<ErrorMessage message="Error" animation="none" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).not.toHaveClass('transition-opacity');
    expect(errorElement).not.toHaveClass('transition-all');
  });

  it('has proper accessibility attributes', () => {
    render(<ErrorMessage message="Error message" />);
    
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveAttribute('role', 'alert');
  });

  it('icon has aria-hidden attribute', () => {
    const { container } = render(<ErrorMessage message="Error" />);
    
    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});