import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ValidationIndicator } from './ValidationIndicator';

const meta: Meta<typeof ValidationIndicator> = {
  title: 'Form/ValidationIndicator',
  component: ValidationIndicator,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Visual validation status indicators for form fields with icons and optional status text.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['idle', 'validating', 'valid', 'invalid', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    position: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ValidationIndicator>;

export const Default: Story = {
  args: {
    status: 'valid',
  },
};

export const WithText: Story = {
  args: {
    status: 'valid',
    showText: true,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Idle:</span>
        <ValidationIndicator status="idle" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Validating:</span>
        <ValidationIndicator status="validating" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Valid:</span>
        <ValidationIndicator status="valid" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Invalid:</span>
        <ValidationIndicator status="invalid" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Warning:</span>
        <ValidationIndicator status="warning" showText />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Small:</span>
        <ValidationIndicator status="valid" size="sm" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Medium:</span>
        <ValidationIndicator status="valid" size="md" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Large:</span>
        <ValidationIndicator status="valid" size="lg" showText />
      </div>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Start:</span>
        <ValidationIndicator status="valid" position="start" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">End:</span>
        <ValidationIndicator status="valid" position="end" showText />
      </div>
    </div>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <ValidationIndicator
        status="valid"
        showText
        icons={{
          valid: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ),
        }}
      />
      <ValidationIndicator
        status="invalid"
        showText
        icons={{
          invalid: (
            <span className="w-4 h-4 flex items-center justify-center text-red-600 font-bold text-xs bg-red-100 rounded-full">
              !
            </span>
          ),
        }}
      />
    </div>
  ),
};

export const CustomText: Story = {
  render: () => (
    <div className="space-y-4">
      <ValidationIndicator 
        status="valid" 
        statusText="Looks good!" 
        showText 
      />
      <ValidationIndicator 
        status="invalid" 
        statusText="Please check this field" 
        showText 
      />
      <ValidationIndicator 
        status="warning" 
        statusText="Consider reviewing" 
        showText 
      />
    </div>
  ),
};

export const WithFormFields: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            className="w-full px-3 py-2 pr-10 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="you@example.com"
            defaultValue="user@example.com"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status="valid" />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            className="w-full px-3 py-2 pr-10 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Enter password"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status="invalid" />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username (checking availability...)
        </label>
        <div className="relative">
          <input
            type="text"
            className="w-full px-3 py-2 pr-10 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Choose username"
            defaultValue="johndoe"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status="validating" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveValidation: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle');

    const validateEmail = (value: string) => {
      if (!value) {
        setStatus('idle');
        return;
      }

      setStatus('validating');
      
      // Simulate async validation
      setTimeout(() => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setStatus(isValid ? 'valid' : 'invalid');
      }, 1000);
    };

    return (
      <div className="max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`w-full px-3 py-2 pr-12 border rounded-md focus:ring-2 focus:border-transparent ${
              status === 'valid' ? 'border-green-300 focus:ring-green-500' :
              status === 'invalid' ? 'border-red-300 focus:ring-red-500' :
              status === 'validating' ? 'border-blue-300 focus:ring-blue-500' :
              'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="Enter your email"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status={status} />
          </div>
        </div>
        <div className="mt-1">
          <ValidationIndicator status={status} showText />
        </div>
      </div>
    );
  },
};

export const NoAnimation: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">With animation:</span>
        <ValidationIndicator status="validating" showText animate />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Without animation:</span>
        <ValidationIndicator status="validating" showText animate={false} />
      </div>
    </div>
  ),
};