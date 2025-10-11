import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders with default value', () => {
    render(<Slider />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toBeDefined();
    expect(slider.getAttribute('value')).toBe('50');
  });

  it('renders with custom default value', () => {
    render(<Slider defaultValue={75} />);
    
    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('value')).toBe('75');
  });

  it('handles controlled value', () => {
    render(<Slider value={25} />);
    
    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('value')).toBe('25');
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<Slider onChange={handleChange} />);
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it('respects min and max bounds', () => {
    render(<Slider min={10} max={90} />);
    
    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('min')).toBe('10');
    expect(slider.getAttribute('max')).toBe('90');
  });

  it('respects step increment', () => {
    render(<Slider step={5} />);
    
    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('step')).toBe('5');
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Slider onChange={handleChange} disabled />);
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with label', () => {
    render(<Slider label="Volume" id="volume" />);
    
    const label = screen.getByText('Volume');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('volume');
  });

  it('shows formatted value when showValue is true', () => {
    const formatValue = (val: number) => `${val}%`;
    render(<Slider showValue formatValue={formatValue} defaultValue={75} />);
    
    expect(screen.getByText('75%')).toBeDefined();
  });

  it('applies disabled styles when disabled', () => {
    render(<Slider disabled />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });

  it('sets name and id attributes', () => {
    render(<Slider name="volume-slider" id="volume-control" />);
    
    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('name')).toBe('volume-slider');
    expect(slider.getAttribute('id')).toBe('volume-control');
  });

  it('clamps values to min/max bounds', () => {
    const handleChange = vi.fn();
    render(<Slider min={20} max={80} onChange={handleChange} />);
    
    const slider = screen.getByRole('slider');
    
    // Test value below min
    fireEvent.change(slider, { target: { value: '10' } });
    expect(handleChange).toHaveBeenCalledWith(20);
    
    // Test value above max
    fireEvent.change(slider, { target: { value: '90' } });
    expect(handleChange).toHaveBeenCalledWith(80);
  });

  it('updates when controlled value changes', () => {
    const { rerender } = render(<Slider value={30} />);
    
    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('value')).toBe('30');
    
    rerender(<Slider value={70} />);
    expect(slider.getAttribute('value')).toBe('70');
  });

  it('handles mouse interactions for dragging state', () => {
    render(<Slider />);
    
    const slider = screen.getByRole('slider');
    
    fireEvent.mouseDown(slider);
    // Note: Testing dragging state would require more complex DOM manipulation
    // This test just ensures no errors are thrown
    
    fireEvent.mouseUp(slider);
  });

  it('renders default value formatter', () => {
    render(<Slider showValue defaultValue={42} />);
    
    expect(screen.getByText('42')).toBeDefined();
  });
});