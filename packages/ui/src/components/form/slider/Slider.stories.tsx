import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showValue: {
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
    label: 'Volume',
    id: 'volume',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Brightness',
    showValue: true,
    id: 'brightness',
  },
};

export const CustomRange: Story = {
  args: {
    label: 'Temperature',
    min: -10,
    max: 40,
    defaultValue: 20,
    showValue: true,
    formatValue: (val) => `${val}°C`,
    id: 'temperature',
  },
};

export const WithSteps: Story = {
  args: {
    label: 'Rating',
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: 7.5,
    showValue: true,
    id: 'rating',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled slider',
    disabled: true,
    defaultValue: 30,
    showValue: true,
    id: 'disabled',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small slider',
    showValue: true,
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large slider',
    showValue: true,
    id: 'large',
  },
};

export const Percentage: Story = {
  args: {
    label: 'Progress',
    min: 0,
    max: 100,
    defaultValue: 65,
    showValue: true,
    formatValue: (val) => `${val}%`,
    id: 'percentage',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive slider',
    showValue: true,
    id: 'interactive',
  },
  render: (args) => {
    const [value, setValue] = React.useState(50);
    
    return (
      <div className="w-80 space-y-4">
        <Slider
          {...args}
          value={value}
          onChange={setValue}
        />
        <div className="text-sm text-gray-600">
          <p>Current value: {value}</p>
          <p>Double the value: {value * 2}</p>
        </div>
      </div>
    );
  },
};

export const MultipleSliders: Story = {
  render: () => {
    const [rgb, setRgb] = React.useState({ r: 255, g: 128, b: 0 });
    
    return (
      <div className="w-80 space-y-6">
        <div className="space-y-4">
          <Slider
            label="Red"
            min={0}
            max={255}
            value={rgb.r}
            onChange={(r) => setRgb(prev => ({ ...prev, r }))}
            showValue
            id="red"
          />
          <Slider
            label="Green"
            min={0}
            max={255}
            value={rgb.g}
            onChange={(g) => setRgb(prev => ({ ...prev, g }))}
            showValue
            id="green"
          />
          <Slider
            label="Blue"
            min={0}
            max={255}
            value={rgb.b}
            onChange={(b) => setRgb(prev => ({ ...prev, b }))}
            showValue
            id="blue"
          />
        </div>
        <div className="p-4 rounded border">
          <div 
            className="w-full h-16 rounded mb-2"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          />
          <p className="text-sm text-gray-600">
            RGB: ({rgb.r}, {rgb.g}, {rgb.b})
          </p>
        </div>
      </div>
    );
  },
};