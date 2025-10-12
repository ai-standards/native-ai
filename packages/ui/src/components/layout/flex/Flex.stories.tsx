import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Components/Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible container component that provides a clean API for CSS Flexbox properties. Simplifies common flexbox patterns with semantic props.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'col', 'col-reverse'],
      description: 'Sets the flex-direction property',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Sets the flex-wrap property',
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
      description: 'Sets the justify-content property',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
      description: 'Sets the align-items property',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Sets the gap between flex items',
    },
    grow: {
      control: 'boolean',
      description: 'Whether the container should grow to fill available space',
    },
    shrink: {
      control: 'boolean',
      description: 'Whether the container should shrink when space is limited',
    },
    inline: {
      control: 'boolean',
      description: 'Renders as inline-flex instead of flex',
    },
    children: {
      control: false,
      description: 'The content to display inside the flex container',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo items
const FlexItem = ({ children, color = 'bg-blue-100' }: { children: React.ReactNode; color?: string }) => (
  <div className={`${color} border border-blue-300 rounded px-3 py-2 text-sm font-medium text-blue-800`}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'col',
    gap: 'md',
    children: (
      <>
        <FlexItem>First Item</FlexItem>
        <FlexItem>Second Item</FlexItem>
        <FlexItem>Third Item</FlexItem>
      </>
    ),
  },
};

export const CenterContent: Story = {
  args: {
    justify: 'center',
    align: 'center',
    gap: 'lg',
    className: 'h-64 border-2 border-dashed border-gray-300',
    children: (
      <>
        <FlexItem>Centered</FlexItem>
        <FlexItem>Content</FlexItem>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: 'between',
    align: 'center',
    className: 'w-full p-4 border border-gray-200 rounded',
    children: (
      <>
        <FlexItem>Left</FlexItem>
        <FlexItem>Center</FlexItem>
        <FlexItem>Right</FlexItem>
      </>
    ),
  },
};

export const WithWrap: Story = {
  args: {
    wrap: 'wrap',
    gap: 'sm',
    className: 'w-64 p-4 border border-gray-200 rounded',
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
        <FlexItem>Item 4</FlexItem>
        <FlexItem>Item 5</FlexItem>
        <FlexItem>Item 6</FlexItem>
      </>
    ),
  },
};

export const ResponsiveGaps: Story = {
  render: () => (
    <div className="space-y-6">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((gap) => (
        <div key={gap} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Gap: {gap}</h4>
          <Flex gap={gap} className="p-3 border border-gray-200 rounded">
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-6">
      {(['start', 'end', 'center', 'baseline', 'stretch'] as const).map((align) => (
        <div key={align} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Align: {align}</h4>
          <Flex align={align} gap="md" className="h-20 p-3 border border-gray-200 rounded">
            <FlexItem>Item 1</FlexItem>
            <div className="bg-red-100 border border-red-300 rounded px-3 py-1 text-xs font-medium text-red-800">
              Tall Item
            </div>
            <FlexItem>Item 3</FlexItem>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

export const NavigationExample: Story = {
  render: () => (
    <Flex justify="between" align="center" className="w-full p-4 bg-white border-b border-gray-200">
      <Flex align="center" gap="md">
        <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold">
          L
        </div>
        <span className="font-semibold text-gray-900">Logo</span>
      </Flex>
      
      <Flex gap="sm">
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded">
          Home
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded">
          About
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded">
          Contact
        </button>
      </Flex>
      
      <Flex gap="sm">
        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
          Sign In
        </button>
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </button>
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using Flex for a navigation bar layout with logo, menu items, and action buttons.',
      },
    },
  },
};

export const CardLayout: Story = {
  render: () => (
    <Flex direction="col" gap="md" className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <Flex justify="between" align="start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Product Card</h3>
          <p className="text-sm text-gray-500">Premium subscription</p>
        </div>
        <span className="text-xl font-bold text-green-600">$29/mo</span>
      </Flex>
      
      <div className="text-sm text-gray-700">
        Get access to all premium features including advanced analytics, priority support, and custom integrations.
      </div>
      
      <Flex gap="sm" className="pt-4 border-t border-gray-100">
        <button className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
          Learn More
        </button>
        <button className="flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Subscribe
        </button>
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using Flex for a card layout with header, content, and actions.',
      },
    },
  },
};