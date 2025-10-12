import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Surface/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible spacing component that creates consistent whitespace between elements. Can be used for fixed spacing or flexible space distribution.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      description: 'The size of the spacer',
    },
    axis: {
      control: 'select',
      options: ['horizontal', 'vertical', 'both'],
      description: 'Which axis/axes to apply spacing to',
    },
    flex: {
      control: 'boolean',
      description: 'Whether the spacer should grow to fill available space',
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo containers
const DemoBox = ({ children, direction = 'row' }: { children: React.ReactNode; direction?: 'row' | 'column' }) => (
  <div 
    className={`flex ${direction === 'column' ? 'flex-col' : 'flex-row'} items-center p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded`}
  >
    {children}
  </div>
);

const DemoItem = ({ children }: { children: React.ReactNode }) => (
  <div className="px-3 py-2 bg-gray-200 border border-gray-400 rounded text-sm font-medium">
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <DemoBox>
      <DemoItem>Item 1</DemoItem>
      <Spacer />
      <DemoItem>Item 2</DemoItem>
    </DemoBox>
  ),
};

export const FixedSizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map((size) => (
        <div key={size} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Size: {size}</h4>
          <DemoBox>
            <DemoItem>Left</DemoItem>
            <Spacer size={size} axis="horizontal" />
            <DemoItem>Right</DemoItem>
          </DemoBox>
        </div>
      ))}
    </div>
  ),
};

export const VerticalSpacing: Story = {
  render: () => (
    <DemoBox direction="column">
      <DemoItem>Top Item</DemoItem>
      <Spacer size="lg" axis="vertical" />
      <DemoItem>Bottom Item</DemoItem>
    </DemoBox>
  ),
};

export const HorizontalSpacing: Story = {
  render: () => (
    <DemoBox>
      <DemoItem>Left Item</DemoItem>
      <Spacer size="xl" axis="horizontal" />
      <DemoItem>Right Item</DemoItem>
    </DemoBox>
  ),
};

export const FlexSpacer: Story = {
  render: () => (
    <DemoBox>
      <DemoItem>Left</DemoItem>
      <Spacer flex />
      <DemoItem>Right</DemoItem>
    </DemoBox>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flex prop to create a spacer that grows to fill all available space, pushing items to opposite ends.',
      },
    },
  },
};

export const NavigationLayout: Story = {
  render: () => (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold">
          L
        </div>
        <Spacer size="sm" axis="horizontal" />
        <span className="font-semibold text-gray-900">Brand Name</span>
        <Spacer flex />
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          Menu
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a navigation bar - fixed spacing after logo, flexible spacing before menu.',
      },
    },
  },
};

export const FormLayout: Story = {
  render: () => (
    <div className="w-80 p-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <Spacer size="xs" axis="vertical" />
        <input 
          type="text" 
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter name"
        />
        
        <Spacer size="lg" axis="vertical" />
        
        <label className="text-sm font-medium text-gray-700">Email</label>
        <Spacer size="xs" axis="vertical" />
        <input 
          type="email" 
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
        />
        
        <Spacer size="xl" axis="vertical" />
        
        <div className="flex">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Cancel
          </button>
          <Spacer size="sm" axis="horizontal" />
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a form for consistent vertical and horizontal spacing.',
      },
    },
  },
};

export const CardActions: Story = {
  render: () => (
    <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">Product Card</h3>
        <Spacer size="xs" axis="vertical" />
        <p className="text-sm text-gray-600">Description of the product goes here.</p>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-600">$29.99</span>
          <Spacer flex />
          <div className="flex">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Details
            </button>
            <Spacer size="sm" axis="horizontal" />
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a card layout for price/actions alignment.',
      },
    },
  },
};

export const ResponsiveToolbar: Story = {
  render: () => (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg p-3">
      <div className="flex items-center">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm"></span>
          </button>
          <Spacer size="xs" axis="horizontal" />
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm"></span>
          </button>
          <Spacer size="xs" axis="horizontal" />
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm">️</span>
          </button>
        </div>
        
        <Spacer size="md" axis="horizontal" />
        
        <div className="flex-1 flex items-center justify-center">
          <span className="text-sm text-gray-600">document.txt</span>
        </div>
        
        <Spacer size="md" axis="horizontal" />
        
        <div className="flex items-center">
          <span className="text-xs text-gray-500">100%</span>
          <Spacer size="sm" axis="horizontal" />
          <button className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
            Settings
          </button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a toolbar layout with grouped actions and flexible center content.',
      },
    },
  },
};

export const AxisComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Horizontal Axis (width only)</h4>
        <DemoBox>
          <DemoItem>A</DemoItem>
          <Spacer size="lg" axis="horizontal" />
          <DemoItem>B</DemoItem>
        </DemoBox>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Vertical Axis (height only)</h4>
        <DemoBox direction="column">
          <DemoItem>A</DemoItem>
          <Spacer size="lg" axis="vertical" />
          <DemoItem>B</DemoItem>
        </DemoBox>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Both Axes (width and height)</h4>
        <div className="flex items-start space-x-4">
          <DemoItem>Before</DemoItem>
          <Spacer size="lg" axis="both" className="bg-yellow-100 border border-yellow-300 rounded" />
          <DemoItem>After</DemoItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different axis options showing how spacing is applied.',
      },
    },
  },
};