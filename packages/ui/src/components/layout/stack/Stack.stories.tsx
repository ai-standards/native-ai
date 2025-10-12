import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Components/Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A layout component for stacking elements vertically or horizontally with consistent spacing. Includes support for dividers between items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The stacking direction',
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The spacing between stack items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Cross-axis alignment of items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Main-axis distribution of items',
    },
    wrap: {
      control: 'boolean',
      description: 'Whether items should wrap to new lines',
    },
    divider: {
      control: false,
      description: 'Element to render between stack items',
    },
    children: {
      control: false,
      description: 'The items to stack',
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo items
const StackItem = ({ children, color = 'bg-purple-100' }: { children: React.ReactNode; color?: string }) => (
  <div className={`${color} border border-purple-300 rounded px-3 py-2 text-sm font-medium text-purple-800`}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <StackItem>First Item</StackItem>
        <StackItem>Second Item</StackItem>
        <StackItem>Third Item</StackItem>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    spacing: 'md',
    children: (
      <>
        <StackItem>Left</StackItem>
        <StackItem>Center</StackItem>
        <StackItem>Right</StackItem>
      </>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    direction: 'vertical',
    spacing: 'sm',
    divider: <hr className="border-gray-300" />,
    children: (
      <>
        <StackItem>Section One</StackItem>
        <StackItem>Section Two</StackItem>
        <StackItem>Section Three</StackItem>
      </>
    ),
  },
};

export const HorizontalWithDivider: Story = {
  args: {
    direction: 'horizontal',
    spacing: 'md',
    divider: <div className="w-px h-6 bg-gray-300" />,
    children: (
      <>
        <StackItem>Home</StackItem>
        <StackItem>About</StackItem>
        <StackItem>Contact</StackItem>
      </>
    ),
  },
};

export const CenteredContent: Story = {
  args: {
    align: 'center',
    justify: 'center',
    spacing: 'lg',
    className: 'h-64 border-2 border-dashed border-gray-300',
    children: (
      <>
        <StackItem>Centered</StackItem>
        <StackItem>Content</StackItem>
      </>
    ),
  },
};

export const SpacingVariations: Story = {
  render: () => (
    <div className="space-y-8">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((spacing) => (
        <div key={spacing} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Spacing: {spacing}</h4>
          <Stack spacing={spacing} className="p-4 border border-gray-200 rounded">
            <StackItem>Item A</StackItem>
            <StackItem>Item B</StackItem>
            <StackItem>Item C</StackItem>
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-8">
      {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
        <div key={align} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Align: {align}</h4>
          <Stack align={align} spacing="md" className="w-64 p-4 border border-gray-200 rounded">
            <StackItem>Short</StackItem>
            <StackItem>Medium Length Item</StackItem>
            <StackItem>Very Long Content Item</StackItem>
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Stack spacing="lg" className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Form</h2>
        <p className="text-sm text-gray-600">Fill out the form below to get in touch.</p>
      </div>
      
      <Stack spacing="md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          />
        </div>
      </Stack>
      
      <Stack direction="horizontal" spacing="sm" justify="end">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack for a form layout with consistent vertical spacing between fields.',
      },
    },
  },
};

export const NavigationMenu: Story = {
  render: () => (
    <Stack 
      direction="horizontal" 
      spacing="none"
      divider={<div className="w-px h-6 bg-gray-300" />}
      className="bg-white border border-gray-200 rounded-lg p-1"
    >
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Dashboard
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Projects
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Team
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Settings
      </button>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack with dividers for a horizontal navigation menu.',
      },
    },
  },
};

export const ArticleContent: Story = {
  render: () => (
    <Stack spacing="xl" className="w-96 p-8 bg-white">
      <Stack spacing="sm">
        <h1 className="text-2xl font-bold text-gray-900">Article Title</h1>
        <div className="text-sm text-gray-500">Published on March 15, 2024</div>
      </Stack>
      
      <div className="prose text-gray-700">
        <p>
          This is the introduction paragraph of the article. It provides an overview 
          of what the reader can expect to learn from this content.
        </p>
      </div>
      
      <Stack spacing="md" divider={<div className="h-px bg-gray-200" />}>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Section One</h2>
          <p className="text-gray-700">Content for the first section goes here.</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Section Two</h2>
          <p className="text-gray-700">Content for the second section goes here.</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-700">Final thoughts and summary of the article.</p>
        </div>
      </Stack>
      
      <Stack direction="horizontal" spacing="sm" className="pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">Tags:</span>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">React</div>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Layout</div>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Components</div>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack for article layout with sections, dividers, and metadata.',
      },
    },
  },
};