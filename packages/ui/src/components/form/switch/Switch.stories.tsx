import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    labelPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
    id: 'notifications',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
    id: 'darkmode',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled switch',
    id: 'disabled',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled checked',
    id: 'disabled-checked',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small switch',
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large switch',
    id: 'large',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Toggle me',
    id: 'interactive',
  },
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    
    return (
      <div className="space-y-4">
        <Switch
          {...args}
          checked={checked}
          onChange={setChecked}
        />
        <p className="text-sm text-gray-600">
          Switch is {checked ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Email notifications" id="email" />
      <Switch label="Push notifications" id="push" defaultChecked />
      <Switch label="SMS notifications" id="sms" />
      <Switch label="Marketing emails" id="marketing" disabled />
    </div>
  ),
};