import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'Form/NumberInput',
  component: NumberInput,
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
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    showControls: {
      control: { type: 'boolean' },
    },
    allowDecimal: {
      control: { type: 'boolean' },
    },
    allowNegative: {
      control: { type: 'boolean' },
    },
    formatThousands: {
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
    label: 'Quantity',
    id: 'quantity',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    defaultValue: 25,
    helperText: 'Age must be between 0 and 120',
    id: 'age',
  },
};

export const WithStep: Story = {
  args: {
    label: 'Price',
    step: 0.01,
    precision: 2,
    defaultValue: 19.99,
    helperText: 'Price in dollars',
    id: 'price',
  },
};

export const IntegerOnly: Story = {
  args: {
    label: 'Items Count',
    allowDecimal: false,
    min: 0,
    defaultValue: 5,
    helperText: 'Whole numbers only',
    id: 'count',
  },
};

export const PositiveOnly: Story = {
  args: {
    label: 'Distance',
    allowNegative: false,
    min: 0,
    step: 0.1,
    defaultValue: 10.5,
    helperText: 'Distance in kilometers (positive values only)',
    id: 'distance',
  },
};

export const WithThousandsSeparator: Story = {
  args: {
    label: 'Salary',
    formatThousands: true,
    min: 0,
    step: 1000,
    defaultValue: 75000,
    helperText: 'Annual salary with thousands separator',
    id: 'salary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 100,
    id: 'disabled',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Input',
    readOnly: true,
    defaultValue: 42,
    helperText: 'This value cannot be edited',
    id: 'readonly',
  },
};

export const WithError: Story = {
  args: {
    label: 'Invalid Number',
    error: true,
    errorMessage: 'Please enter a valid number',
    id: 'error',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Number Input',
    defaultValue: 10,
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Number Input',
    defaultValue: 100,
    id: 'large',
  },
};

export const WithoutControls: Story = {
  args: {
    label: 'No Control Buttons',
    showControls: false,
    defaultValue: 50,
    helperText: 'Use arrow keys or type to change value',
    id: 'no-controls',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Number Input',
    min: 0,
    max: 100,
    step: 5,
    defaultValue: 50,
    id: 'interactive',
  },
  render: (args) => {
    const [value, setValue] = React.useState(50);
    const [isValid, setIsValid] = React.useState(true);

    const handleChange = (newValue: number | undefined) => {
      setValue(newValue || 0);
      setIsValid(newValue !== undefined && newValue >= 0 && newValue <= 100);
    };

    return (
      <div className="space-y-4">
        <NumberInput
          {...args}
          value={value}
          onChange={handleChange}
          error={!isValid}
          errorMessage={!isValid ? 'Value must be between 0 and 100' : undefined}
        />
        
        <div className="p-4 bg-gray-50 rounded">
          <p className="text-sm font-medium text-gray-700 mb-2">Current Value:</p>
          <p className="text-lg font-mono">{value}</p>
          <p className="text-sm text-gray-600 mt-2">
            Status: {isValid ? '✅ Valid' : '❌ Invalid'}
          </p>
        </div>
      </div>
    );
  },
};

export const Calculator: Story = {
  render: () => {
    const [num1, setNum1] = React.useState<number>(10);
    const [num2, setNum2] = React.useState<number>(5);
    const [operation, setOperation] = React.useState<string>('+');

    const calculate = () => {
      switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 0;
        default: return 0;
      }
    };

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Simple Calculator</h3>
        
        <div className="grid grid-cols-3 gap-4 items-end">
          <NumberInput
            label="First Number"
            value={num1}
            onChange={(val) => setNum1(val || 0)}
            allowDecimal
            id="num1"
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Operation
            </label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="+">Add (+)</option>
              <option value="-">Subtract (-)</option>
              <option value="*">Multiply (×)</option>
              <option value="/">Divide (÷)</option>
            </select>
          </div>
          
          <NumberInput
            label="Second Number"
            value={num2}
            onChange={(val) => setNum2(val || 0)}
            allowDecimal
            id="num2"
          />
        </div>
        
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-700 mb-2">Result:</p>
          <p className="text-3xl font-bold text-blue-900">
            {calculate().toLocaleString()}
          </p>
          <p className="text-sm text-blue-600 mt-2">
            {num1} {operation} {num2} = {calculate()}
          </p>
        </div>
      </div>
    );
  },
};