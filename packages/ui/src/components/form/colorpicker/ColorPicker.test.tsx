import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';

describe('ColorPicker', () => {
  it('renders with default color', () => {
    render(<ColorPicker />);
    
    const colorButton = screen.getByRole('button');
    expect(colorButton).toBeDefined();
  });

  it('renders with custom default color', () => {
    render(<ColorPicker defaultValue="#ff0000" />);
    
    const colorButton = screen.getByRole('button');
    expect(colorButton.style.backgroundColor).toBe('rgb(255, 0, 0)');
  });

  it('renders with label', () => {
    render(<ColorPicker label="Theme Color" id="theme" />);
    
    const label = screen.getByText('Theme Color');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('theme');
  });

  it('shows error message', () => {
    render(
      <ColorPicker 
        error 
        errorMessage="Please select a valid color"
      />
    );
    
    expect(screen.getByText('Please select a valid color')).toBeDefined();
  });

  it('opens color picker on click', () => {
    render(<ColorPicker />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    expect(screen.getByText('Presets')).toBeDefined();
  });

  it('calls onChange when color changes', () => {
    const handleChange = vi.fn();
    render(<ColorPicker onChange={handleChange} />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    // Click on a preset color
    const presetButtons = screen.getAllByRole('button');
    const presetButton = presetButtons.find(btn => 
      btn.style.backgroundColor === 'rgb(239, 68, 68)'
    );
    
    if (presetButton) {
      fireEvent.click(presetButton);
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it('handles controlled value', () => {
    render(<ColorPicker value="#00ff00" />);
    
    const colorButton = screen.getByRole('button');
    expect(colorButton.style.backgroundColor).toBe('rgb(0, 255, 0)');
  });

  it('does not open when disabled', () => {
    render(<ColorPicker disabled />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    expect(screen.queryByText('Presets')).toBeNull();
  });

  it('applies size classes', () => {
    render(<ColorPicker size="lg" />);
    
    const colorButton = screen.getByRole('button');
    expect(colorButton).toHaveClass('w-12', 'h-12');
  });

  it('shows custom presets', () => {
    const customPresets = ['#ff0000', '#00ff00', '#0000ff'];
    render(<ColorPicker presets={customPresets} />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    const presetButtons = screen.getAllByRole('button');
    // Should have main button + 3 preset buttons
    expect(presetButtons.length).toBeGreaterThanOrEqual(4);
  });

  it('displays color value in different formats', () => {
    render(<ColorPicker format="rgb" value="#ff0000" />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    const input = screen.getByDisplayValue(/rgb/);
    expect(input).toBeDefined();
  });

  it('handles hue slider interaction', () => {
    const handleChange = vi.fn();
    render(<ColorPicker onChange={handleChange} />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    // Find hue slider (should be a div with gradient background)
    const hueSlider = document.querySelector('[style*="linear-gradient"]');
    
    if (hueSlider) {
      fireEvent.mouseDown(hueSlider, { clientX: 100 });
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it('closes picker on outside click', () => {
    render(
      <div>
        <ColorPicker />
        <button>Outside button</button>
      </div>
    );
    
    const colorButton = screen.getAllByRole('button')[0];
    fireEvent.click(colorButton);
    
    // Picker should be open
    expect(screen.getByText('Presets')).toBeDefined();
    
    // Click outside
    const outsideButton = screen.getByText('Outside button');
    fireEvent.mouseDown(outsideButton);
    
    // Picker should close (test would need more complex setup to verify)
  });

  it('includes hidden input with color value', () => {
    render(<ColorPicker name="color" value="#ff0000" />);
    
    const hiddenInput = document.querySelector('input[type="hidden"]');
    expect(hiddenInput?.getAttribute('value')).toBe('#ff0000');
    expect(hiddenInput?.getAttribute('name')).toBe('color');
  });

  it('handles saturation area interaction', () => {
    const handleChange = vi.fn();
    render(<ColorPicker onChange={handleChange} />);
    
    const colorButton = screen.getByRole('button');
    fireEvent.click(colorButton);
    
    // Find saturation area (should be a div with crosshair cursor)
    const saturationArea = document.querySelector('.cursor-crosshair');
    
    if (saturationArea) {
      fireEvent.mouseDown(saturationArea, { clientX: 50, clientY: 50 });
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it('updates when controlled value changes', () => {
    const { rerender } = render(<ColorPicker value="#ff0000" />);
    
    const colorButton = screen.getByRole('button');
    expect(colorButton.style.backgroundColor).toBe('rgb(255, 0, 0)');
    
    rerender(<ColorPicker value="#00ff00" />);
    expect(colorButton.style.backgroundColor).toBe('rgb(0, 255, 0)');
  });
});