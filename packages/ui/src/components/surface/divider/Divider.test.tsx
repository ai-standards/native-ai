import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    render(<Divider data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('role', 'separator');
  });

  it('renders vertical divider', () => {
    render(<Divider orientation="vertical" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('h-full');
  });

  it('applies variant styles', () => {
    render(<Divider variant="dashed" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('border-dashed');
  });

  it('applies size styles', () => {
    render(<Divider size="lg" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('border-t-4');
  });

  it('applies color styles', () => {
    render(<Divider color="accent" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('border-blue-300');
  });

  it('renders with label', () => {
    render(<Divider label="Section Break" />);
    expect(screen.getByText('Section Break')).toBeInTheDocument();
  });

  it('positions label correctly', () => {
    render(<Divider label="Left Label" labelPosition="left" />);
    expect(screen.getByText('Left Label')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Divider className="custom-class" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Divider data-custom="value" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveAttribute('data-custom', 'value');
  });
});