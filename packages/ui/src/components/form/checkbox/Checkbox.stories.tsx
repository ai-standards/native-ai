import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible checkbox component with labels, validation, and multiple sizes. Built with accessibility in mind.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed next to the checkbox',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the checkbox',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the checkbox',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'The visual style variant of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default checkbox
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {},
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Send me notifications',
    helperText: 'You can change this preference in your settings at any time.',
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'I agree to the terms',
    error: 'You must accept the terms to continue.',
  },
};

// Different sizes
export const SmallSize: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Medium checkbox',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large checkbox',
    size: 'lg',
  },
};

// Filled variant
export const FilledVariant: Story = {
  args: {
    label: 'Filled variant',
    variant: 'filled',
  },
};

// Checked state
export const Checked: Story = {
  args: {
    label: 'Already checked',
    defaultChecked: true,
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

// Indeterminate state
export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

// Multiple checkboxes
export const MultipleOptions: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Option 1" name="options" value="1" />
      <Checkbox label="Option 2" name="options" value="2" defaultChecked />
      <Checkbox label="Option 3" name="options" value="3" />
      <Checkbox label="Disabled option" name="options" value="4" disabled />
    </div>
  ),
};

// Form validation example
export const FormValidation: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox 
        label="I have read and agree to the Privacy Policy" 
        error="You must accept the privacy policy"
      />
      <Checkbox 
        label="Subscribe to newsletter" 
        helperText="Optional - you can unsubscribe at any time"
        defaultChecked
      />
      <Checkbox 
        label="Enable two-factor authentication" 
        helperText="Recommended for better security"
      />
    </div>
  ),
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Small size" size="sm" />
      <Checkbox label="Medium size" size="md" />
      <Checkbox label="Large size" size="lg" />
    </div>
  ),
};

// Variant comparison
export const VariantComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Default variant" variant="default" />
      <Checkbox label="Filled variant" variant="filled" />
    </div>
  ),
};

// Error state with different sizes
export const ErrorWithSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox 
        label="Small with error" 
        size="sm" 
        error="This field is required"
      />
      <Checkbox 
        label="Medium with error" 
        size="md" 
        error="This field is required"
      />
      <Checkbox 
        label="Large with error" 
        size="lg" 
        error="This field is required"
      />
    </div>
  ),
};