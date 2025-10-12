import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible textarea component with labels, validation, and multiple variants. Built with accessibility in mind and supports different resize behaviors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when textarea is empty',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the textarea',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the textarea',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'The visual style variant of the textarea',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'How the textarea can be resized by the user',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default textarea
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Describe your project...',
    helperText: 'Provide a detailed description of your project goals and requirements.',
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Add your comments...',
    error: 'This field is required.',
    defaultValue: '',
  },
};

// Filled variant
export const FilledVariant: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    variant: 'filled',
  },
};

// Different sizes
export const SmallSize: Story = {
  args: {
    label: 'Quick Note',
    placeholder: 'Add a quick note...',
    rows: 2,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Detailed Description',
    placeholder: 'Provide detailed information...',
    rows: 6,
  },
};

// Resize options
export const NoResize: Story = {
  args: {
    label: 'Fixed Size',
    placeholder: 'This textarea cannot be resized...',
    resize: 'none',
    rows: 4,
  },
};

export const HorizontalResize: Story = {
  args: {
    label: 'Horizontal Resize',
    placeholder: 'This textarea can be resized horizontally...',
    resize: 'horizontal',
    rows: 3,
  },
};

export const BothResize: Story = {
  args: {
    label: 'Full Resize',
    placeholder: 'This textarea can be resized in both directions...',
    resize: 'both',
    rows: 4,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This textarea is disabled...',
    disabled: true,
    defaultValue: 'Some existing content that cannot be edited',
  },
};

// Long content example
export const WithLongContent: Story = {
  args: {
    label: 'Article Content',
    defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    rows: 8,
  },
};

// Filled with error
export const FilledWithError: Story = {
  args: {
    label: 'Feedback',
    variant: 'filled',
    placeholder: 'Share your feedback...',
    error: 'Feedback must be at least 10 characters long.',
    defaultValue: 'Too short',
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  args: {
    label: 'Project Requirements',
    placeholder: 'List all your project requirements...',
    helperText: 'Be as specific as possible. Include technical requirements, timeline, and budget constraints.',
    rows: 5,
    resize: 'vertical',
  },
};