import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Form/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="min-h-96 w-96 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: { type: 'radio' },
      options: ['hex', 'rgb', 'hsl'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    showAlpha: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Theme Color',
    id: 'theme',
  },
};

export const HexFormat: Story = {
  args: {
    label: 'Hex Color',
    format: 'hex',
    defaultValue: '#3b82f6',
    id: 'hex',
  },
};

export const RGBFormat: Story = {
  args: {
    label: 'RGB Color',
    format: 'rgb',
    defaultValue: '#ef4444',
    id: 'rgb',
  },
};

export const HSLFormat: Story = {
  args: {
    label: 'HSL Color',
    format: 'hsl',
    defaultValue: '#10b981',
    id: 'hsl',
  },
};

export const WithAlpha: Story = {
  args: {
    label: 'Color with Alpha',
    format: 'rgb',
    showAlpha: true,
    defaultValue: '#8b5cf6',
    id: 'alpha',
  },
};

export const CustomPresets: Story = {
  args: {
    label: 'Brand Colors',
    presets: [
      '#1f2937', '#374151', '#6b7280', '#9ca3af',
      '#dc2626', '#ea580c', '#d97706', '#ca8a04',
      '#16a34a', '#059669', '#0d9488', '#0891b2',
      '#2563eb', '#4f46e5', '#7c3aed', '#c026d3'
    ],
    id: 'brand',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Color Picker',
    disabled: true,
    defaultValue: '#6366f1',
    id: 'disabled',
  },
};

export const WithError: Story = {
  args: {
    label: 'Color Selection',
    error: true,
    errorMessage: 'Please select a valid color',
    id: 'error',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Color Picker',
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Color Picker',
    id: 'large',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Color Picker',
    format: 'hex',
    id: 'interactive',
  },
  render: (args) => {
    const [color, setColor] = React.useState('#3b82f6');
    const [format, setFormat] = React.useState<'hex' | 'rgb' | 'hsl'>('hex');
    
    return (
      <div className="w-full space-y-6">
        <div className="flex gap-4 items-end">
          <ColorPicker
            {...args}
            value={color}
            onChange={setColor}
            format={format}
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Format
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as 'hex' | 'rgb' | 'hsl')}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="hex">HEX</option>
              <option value="rgb">RGB</option>
              <option value="hsl">HSL</option>
            </select>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Selected Color:</p>
          <p className="font-mono text-sm">{color}</p>
          
          <div className="mt-4 p-4 rounded border-2" style={{ backgroundColor: color }}>
            <p className="text-white text-sm font-medium" style={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              color: 'white'
            }}>
              Preview Text
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const ThemeBuilder: Story = {
  render: () => {
    const [primaryColor, setPrimaryColor] = React.useState('#3b82f6');
    const [secondaryColor, setSecondaryColor] = React.useState('#6b7280');
    const [accentColor, setAccentColor] = React.useState('#10b981');
    const [backgroundColor, setBackgroundColor] = React.useState('#f8fafc');
    
    return (
      <div className="w-full space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Theme Builder</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Primary Color"
            value={primaryColor}
            onChange={setPrimaryColor}
            id="primary"
          />
          <ColorPicker
            label="Secondary Color"
            value={secondaryColor}
            onChange={setSecondaryColor}
            id="secondary"
          />
          <ColorPicker
            label="Accent Color"
            value={accentColor}
            onChange={setAccentColor}
            id="accent"
          />
          <ColorPicker
            label="Background"
            value={backgroundColor}
            onChange={setBackgroundColor}
            id="background"
          />
        </div>
        
        <div className="p-6 rounded-lg border-2" style={{ backgroundColor }}>
          <div className="space-y-4">
            <h4 className="text-xl font-bold" style={{ color: primaryColor }}>
              Theme Preview
            </h4>
            
            <p style={{ color: secondaryColor }}>
              This is how your theme colors look together. The primary color is used for headings,
              secondary for body text, and accent for highlights.
            </p>
            
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded font-medium text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Primary Button
              </button>
              <button
                className="px-4 py-2 rounded font-medium text-white"
                style={{ backgroundColor: accentColor }}
              >
                Accent Button
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="h-16 rounded" style={{ backgroundColor: primaryColor }} />
              <div className="h-16 rounded" style={{ backgroundColor: secondaryColor }} />
              <div className="h-16 rounded" style={{ backgroundColor: accentColor }} />
              <div className="h-16 rounded border" style={{ backgroundColor }} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};