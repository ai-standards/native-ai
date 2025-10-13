import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

const meta = {
  title: 'Surface/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible CSS Grid component with comprehensive layout options, responsive behavior, and grid item positioning. Built with Tailwind CSS for consistent grid layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12, 'auto', 'subgrid'],
      description: 'Number of columns in the grid',
    },
    rows: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 'auto', 'subgrid'],
      description: 'Number of rows in the grid',
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between grid items',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive grid behavior',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Vertical alignment of grid items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Horizontal alignment of grid items',
    },
    children: {
      control: false,
      description: 'Grid items to display',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo items
const DemoItem = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center ${className}`}>
    {children}
  </div>
);

// Basic grid story
export const Default: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: [
      <DemoItem key="1">Item 1</DemoItem>,
      <DemoItem key="2">Item 2</DemoItem>,
      <DemoItem key="3">Item 3</DemoItem>,
      <DemoItem key="4">Item 4</DemoItem>,
      <DemoItem key="5">Item 5</DemoItem>,
      <DemoItem key="6">Item 6</DemoItem>,
    ],
  },
};

// Different column configurations
export const ColumnVariations: Story = {
  render: () => (
    <div className="space-y-8">
      {([1, 2, 3, 4, 6] as const).map((cols) => (
        <div key={cols}>
          <h3 className="text-lg font-semibold mb-4">{cols} Columns</h3>
          <Grid cols={cols} gap="md">
            {Array.from({ length: cols * 2 }, (_, i) => (
              <DemoItem key={i}>Item {i + 1}</DemoItem>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

// Different gap sizes
export const GapSizes: Story = {
  render: () => (
    <div className="space-y-8">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
        <div key={gap}>
          <h3 className="text-lg font-semibold mb-4">Gap: {gap}</h3>
          <Grid cols={3} gap={gap}>
            <DemoItem>Item 1</DemoItem>
            <DemoItem>Item 2</DemoItem>
            <DemoItem>Item 3</DemoItem>
          </Grid>
        </div>
      ))}
    </div>
  ),
};

// Responsive grid
export const Responsive: Story = {
  args: {
    responsive: true,
    gap: 'lg',
    children: Array.from({ length: 8 }, (_, i) => (
      <DemoItem key={i}>
        <div className="text-sm font-medium">Item {i + 1}</div>
        <div className="text-xs text-gray-600 mt-1">Responsive</div>
      </DemoItem>
    )),
  },
};

// Grid with custom positioning using GridItem
export const WithGridItems: Story = {
  render: () => (
    <Grid cols={4} rows={3} gap="md" className="h-96">
      <GridItem colSpan={2} rowSpan={2}>
        <DemoItem className="h-full bg-green-100 border-green-300">
          <div>Large Item</div>
          <div className="text-sm mt-1">2x2</div>
        </DemoItem>
      </GridItem>
      <GridItem>
        <DemoItem className="bg-yellow-100 border-yellow-300">Item 2</DemoItem>
      </GridItem>
      <GridItem>
        <DemoItem className="bg-purple-100 border-purple-300">Item 3</DemoItem>
      </GridItem>
      <GridItem colStart={3} colEnd={5}>
        <DemoItem className="bg-red-100 border-red-300">
          <div>Wide Item</div>
          <div className="text-sm mt-1">Spans 2 cols</div>
        </DemoItem>
      </GridItem>
      <GridItem colSpan="full">
        <DemoItem className="bg-indigo-100 border-indigo-300">
          <div>Full Width</div>
          <div className="text-sm mt-1">Spans all columns</div>
        </DemoItem>
      </GridItem>
    </Grid>
  ),
};

// Alignment and justification
export const Alignment: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Center Aligned</h3>
        <Grid cols={3} gap="md" align="center" className="h-32">
          <DemoItem className="h-16">Item 1</DemoItem>
          <DemoItem className="h-20">Item 2</DemoItem>
          <DemoItem className="h-12">Item 3</DemoItem>
        </Grid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Space Between</h3>
        <Grid cols={3} gap="none" justify="between">
          <DemoItem>Item 1</DemoItem>
          <DemoItem>Item 2</DemoItem>
          <DemoItem>Item 3</DemoItem>
        </Grid>
      </div>
    </div>
  ),
};

// Real-world dashboard layout
export const DashboardLayout: Story = {
  render: () => (
    <Grid cols={6} rows={4} gap="lg" className="h-96">
      {/* Header spanning full width */}
      <GridItem colSpan="full">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold">Dashboard Header</h2>
        </div>
      </GridItem>

      {/* Sidebar */}
      <GridItem rowSpan={2}>
        <div className="bg-gray-100 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>
      </GridItem>

      {/* Main content area */}
      <GridItem colSpan={3}>
        <div className="bg-blue-50 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-2">Main Content</h3>
          <p className="text-sm text-gray-600">Primary dashboard content goes here</p>
        </div>
      </GridItem>

      {/* Stats panel */}
      <GridItem colSpan={2}>
        <div className="bg-green-50 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-2">Statistics</h3>
          <div className="text-2xl font-bold text-green-600">$12,345</div>
        </div>
      </GridItem>

      {/* Secondary content */}
      <GridItem colSpan={5}>
        <div className="bg-yellow-50 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <p className="text-sm text-gray-600">Activity feed and notifications</p>
        </div>
      </GridItem>
    </Grid>
  ),
};

// Card layout example
export const CardLayout: Story = {
  render: () => (
    <Grid cols={3} gap="lg" responsive>
      {[
        { title: 'Product A', price: '$99', color: 'bg-blue-50 border-blue-200' },
        { title: 'Product B', price: '$149', color: 'bg-green-50 border-green-200' },
        { title: 'Product C', price: '$79', color: 'bg-purple-50 border-purple-200' },
        { title: 'Product D', price: '$199', color: 'bg-red-50 border-red-200' },
        { title: 'Product E', price: '$129', color: 'bg-yellow-50 border-yellow-200' },
        { title: 'Product F', price: '$89', color: 'bg-indigo-50 border-indigo-200' },
      ].map((product, i) => (
        <div
          key={i}
          className={`${product.color} border-2 rounded-lg p-6 text-center`}
        >
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-2xl font-bold mb-4">{product.price}</p>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Add to Cart
          </button>
        </div>
      ))}
    </Grid>
  ),
};