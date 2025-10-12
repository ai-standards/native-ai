import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    name: 'default-radio',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: basicOptions,
    name: 'default-value-radio',
    defaultValue: 'option2',
  },
};

export const Horizontal: Story = {
  args: {
    options: basicOptions,
    name: 'horizontal-radio',
    orientation: 'horizontal',
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    name: 'disabled-radio',
    disabled: true,
    defaultValue: 'option1',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { label: 'Available Option', value: 'available' },
      { label: 'Disabled Option', value: 'disabled', disabled: true },
      { label: 'Another Available', value: 'available2' },
    ],
    name: 'mixed-disabled-radio',
  },
};

export const Small: Story = {
  args: {
    options: basicOptions,
    name: 'small-radio',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    options: basicOptions,
    name: 'large-radio',
    size: 'lg',
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Purple', value: 'purple' },
      { label: 'Orange', value: 'orange' },
    ],
    name: 'many-options-radio',
    orientation: 'horizontal',
  },
};

export const LongLabels: Story = {
  args: {
    options: [
      { label: 'This is a very long option label that might wrap to multiple lines', value: 'long1' },
      { label: 'Another lengthy option with detailed description', value: 'long2' },
      { label: 'Short', value: 'short' },
    ],
    name: 'long-labels-radio',
  },
};