import React, { useState, useRef, useCallback, forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { ErrorMessage } from '../errormessage/ErrorMessage';
import { HelperText } from '../helpertext/HelperText';

export interface ColorPickerProps {
  /** Selected color value */
  value?: string;
  /** Default color value */
  defaultValue?: string;
  /** Called when color changes */
  onChange?: (color: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Color format */
  format?: 'hex' | 'rgb' | 'hsl';
  /** Show alpha channel */
  showAlpha?: boolean;
  /** Preset colors */
  presets?: string[];
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Additional CSS classes */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

interface HSV {
  h: number;
  s: number;
  v: number;
  a?: number;
}

interface RGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}

const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value,
      defaultValue = '#3b82f6',
      onChange,
      disabled = false,
      format = 'hex',
      showAlpha = false,
      presets = [
        '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
        '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
        '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
      ],
      size = 'md',
      label,
      error = false,
      errorMessage,
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const [selectedColor, setSelectedColor] = useState(value || defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [hsv, setHSV] = useState<HSV>(hexToHSV(value || defaultValue));
    const containerRef = useRef<HTMLDivElement>(null);
    const hueRef = useRef<HTMLDivElement>(null);
    const saturationRef = useRef<HTMLDivElement>(null);
    const alphaRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedColor(value);
        setHSV(hexToHSV(value));
      }
    }, [value]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    // Color conversion utilities
    function hexToHSV(hex: string): HSV {
      const rgb = hexToRGB(hex);
      return rgbToHSV(rgb);
    }

    function hexToRGB(hex: string): RGB {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    }

    function rgbToHSV(rgb: RGB): HSV {
      const r = rgb.r / 255;
      const g = rgb.g / 255;
      const b = rgb.b / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const diff = max - min;

      let h = 0;
      if (diff !== 0) {
        if (max === r) h = ((g - b) / diff) % 6;
        else if (max === g) h = (b - r) / diff + 2;
        else h = (r - g) / diff + 4;
      }
      h = Math.round(h * 60);
      if (h < 0) h += 360;

      const s = max === 0 ? 0 : diff / max;
      const v = max;

      return { h, s: s * 100, v: v * 100, a: rgb.a };
    }

    function hsvToRGB(hsv: HSV): RGB {
      const h = hsv.h / 360;
      const s = hsv.s / 100;
      const v = hsv.v / 100;

      const i = Math.floor(h * 6);
      const f = h * 6 - i;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);

      let r: number, g: number, b: number;

      switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
        default: r = 0; g = 0; b = 0;
      }

      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
        a: hsv.a
      };
    }

    function rgbToHex(rgb: RGB): string {
      const toHex = (n: number) => {
        const hex = n.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
    }

    const formatColor = (hsv: HSV): string => {
      const rgb = hsvToRGB(hsv);
      switch (format) {
        case 'rgb':
          return showAlpha 
            ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${(hsv.a || 1).toFixed(2)})`
            : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        case 'hsl':
          const hsl = rgbToHSL(rgb);
          return showAlpha
            ? `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${(hsv.a || 1).toFixed(2)})`
            : `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
        case 'hex':
        default:
          return rgbToHex(rgb);
      }
    };

    function rgbToHSL(rgb: RGB) {
      const r = rgb.r / 255;
      const g = rgb.g / 255;
      const b = rgb.b / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const diff = max - min;

      let h = 0;
      if (diff !== 0) {
        if (max === r) h = ((g - b) / diff) % 6;
        else if (max === g) h = (b - r) / diff + 2;
        else h = (r - g) / diff + 4;
      }
      h = Math.round(h * 60);
      if (h < 0) h += 360;

      const l = (max + min) / 2;
      const s = diff === 0 ? 0 : diff / (1 - Math.abs(2 * l - 1));

      return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    const handleColorChange = (newHSV: HSV) => {
      setHSV(newHSV);
      const colorString = formatColor(newHSV);
      setSelectedColor(colorString);
      onChange?.(colorString);
    };

    const handlePresetClick = (color: string) => {
      const newHSV = hexToHSV(color);
      handleColorChange(newHSV);
    };

    const handleSaturationMouseDown = useCallback((e: React.MouseEvent) => {
      if (disabled) return;
      
      const rect = saturationRef.current?.getBoundingClientRect();
      if (!rect) return;

      const updateSaturationBrightness = (clientX: number, clientY: number) => {
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        
        handleColorChange({
          ...hsv,
          s: x * 100,
          v: (1 - y) * 100
        });
      };

      updateSaturationBrightness(e.clientX, e.clientY);

      const handleMouseMove = (e: MouseEvent) => {
        updateSaturationBrightness(e.clientX, e.clientY);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }, [disabled, hsv, handleColorChange]);

    const handleHueMouseDown = useCallback((e: React.MouseEvent) => {
      if (disabled) return;
      
      const rect = hueRef.current?.getBoundingClientRect();
      if (!rect) return;

      const updateHue = (clientX: number) => {
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        handleColorChange({ ...hsv, h: x * 360 });
      };

      updateHue(e.clientX);

      const handleMouseMove = (e: MouseEvent) => {
        updateHue(e.clientX);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }, [disabled, hsv, handleColorChange]);

    const sizeStyles = {
      sm: {
        preview: 'w-8 h-8',
        picker: 'w-64',
        saturation: 'h-32'
      },
      md: {
        preview: 'w-10 h-10',
        picker: 'w-80',
        saturation: 'h-40'
      },
      lg: {
        preview: 'w-12 h-12',
        picker: 'w-96',
        saturation: 'h-48'
      }
    };

    const colorPreview = (
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            'border-2 border-gray-300 rounded cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            sizeStyles[size].preview,
            error && 'border-red-500',
            disabled && 'cursor-not-allowed opacity-50'
          )}
          style={{ backgroundColor: selectedColor }}
        />

        {isOpen && !disabled && (
          <div className={cn(
            'absolute top-full left-0 z-50 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4',
            sizeStyles[size].picker
          )}>
            {/* Saturation/Brightness area */}
            <div
              ref={saturationRef}
              onMouseDown={handleSaturationMouseDown}
              className={cn(
                'relative w-full cursor-crosshair rounded mb-3',
                sizeStyles[size].saturation
              )}
              style={{
                background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${hsv.h}, 100%, 50%))`
              }}
            >
              <div
                className="absolute w-3 h-3 border-2 border-white rounded-full shadow-sm transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${hsv.s}%`,
                  top: `${100 - hsv.v}%`
                }}
              />
            </div>

            {/* Hue slider */}
            <div
              ref={hueRef}
              onMouseDown={handleHueMouseDown}
              className="relative w-full h-4 cursor-pointer rounded mb-3"
              style={{
                background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
              }}
            >
              <div
                className="absolute w-3 h-6 bg-white border border-gray-300 rounded shadow-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2"
                style={{ left: `${(hsv.h / 360) * 100}%` }}
              />
            </div>

            {/* Presets */}
            {presets.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Presets</p>
                <div className="grid grid-cols-8 gap-1">
                  {presets.map((preset, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handlePresetClick(preset)}
                      className="w-6 h-6 rounded border border-gray-300 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: preset }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Color value display */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <input
                type="text"
                value={selectedColor}
                readOnly
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-50"
              />
            </div>
          </div>
        )}
      </div>
    );

    if (label) {
      return (
        <div className={cn('space-y-2', className)} ref={ref} {...props}>
          <label
            htmlFor={id}
            className={cn(
              'block text-sm font-medium',
              error ? 'text-red-700' : 'text-gray-700',
              disabled && 'text-gray-400'
            )}
          >
            {label}
          </label>
          {colorPreview}
          <ErrorMessage message={error && errorMessage ? errorMessage : undefined} fieldId={id} />
          <input type="hidden" name={name} value={selectedColor} />
        </div>
      );
    }

    return (
      <div className={className} ref={ref} {...props}>
        {colorPreview}
        <div className="mt-1">
          <ErrorMessage message={error && errorMessage ? errorMessage : undefined} fieldId={id} />
        </div>
        <input type="hidden" name={name} value={selectedColor} />
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };