import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    showStrength: {
      control: { type: 'boolean' },
    },
    showCount: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    id: 'password',
  },
};

export const WithStrengthIndicator: Story = {
  args: {
    label: 'Create Password',
    placeholder: 'Enter a strong password',
    showStrength: true,
    helperText: 'Password should contain uppercase, lowercase, numbers, and symbols',
    id: 'strength',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    showCount: true,
    maxLength: 20,
    helperText: 'Maximum 20 characters',
    id: 'count',
  },
};

export const WithBothFeatures: Story = {
  args: {
    label: 'New Password',
    placeholder: 'Create a secure password',
    showStrength: true,
    showCount: true,
    maxLength: 50,
    id: 'full-featured',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters long',
    id: 'error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Password',
    placeholder: 'Cannot type here',
    disabled: true,
    defaultValue: 'disabled',
    id: 'disabled',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Password Input',
    placeholder: 'Small size',
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Password Input',
    placeholder: 'Large size',
    id: 'large',
  },
};

export const CustomStrengthValidation: Story = {
  args: {
    label: 'Custom Validation',
    placeholder: 'Try different passwords',
    showStrength: true,
    validateStrength: (password: string) => {
      // Custom validation: only checks length
      if (password.length < 6) return { score: 0, feedback: 'Too short' };
      if (password.length < 10) return { score: 2, feedback: 'Medium' };
      return { score: 4, feedback: 'Perfect length' };
    },
    helperText: 'This example only validates password length',
    id: 'custom',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errors, setErrors] = React.useState<{ password?: string; confirm?: string }>({});

    const validatePasswords = () => {
      const newErrors: { password?: string; confirm?: string } = {};
      
      if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (confirmPassword && password !== confirmPassword) {
        newErrors.confirm = 'Passwords do not match';
      }
      
      setErrors(newErrors);
    };

    React.useEffect(() => {
      validatePasswords();
    }, [password, confirmPassword]);

    return (
      <div className="space-y-4">
        <PasswordInput
          label="New Password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showStrength
          showCount
          maxLength={50}
          error={errors.password}
          id="new-password"
        />
        
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirm}
          id="confirm-password"
        />
        
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold text-gray-900 mb-2">Validation Status</h3>
          <div className="space-y-1 text-sm">
            <p className={password.length >= 8 ? 'text-green-600' : 'text-red-600'}>
               At least 8 characters: {password.length >= 8 ? 'Yes' : 'No'}
            </p>
            <p className={password === confirmPassword && password ? 'text-green-600' : 'text-red-600'}>
               Passwords match: {password === confirmPassword && password ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    );
  },
};