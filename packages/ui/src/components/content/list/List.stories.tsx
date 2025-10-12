import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';

const meta = {
  title: 'Content/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Semantic list components with support for ordered, unordered, and custom marker styles.',
      },
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnorderedList: Story = {
  args: { children: null },
  render: () => (
    <div className="max-w-md">
      <List>
        <ListItem>First list item with some content</ListItem>
        <ListItem>Second list item with more text</ListItem>
        <ListItem>Third list item to demonstrate spacing</ListItem>
        <ListItem>Fourth item showing consistent styling</ListItem>
      </List>
    </div>
  ),
};

export const OrderedList: Story = {
  args: { children: null },
  render: () => (
    <div className="max-w-md">
      <List variant="ordered">
        <ListItem>Install the required dependencies</ListItem>
        <ListItem>Configure your development environment</ListItem>
        <ListItem>Run the build process</ListItem>
        <ListItem>Deploy to your hosting platform</ListItem>
      </List>
    </div>
  ),
};

export const MarkerVariants: Story = {
  args: { children: null },
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">Disc (default)</h3>
        <List marker="disc">
          <ListItem>Default disc marker</ListItem>
          <ListItem>Standard bullet point</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Circle</h3>
        <List marker="circle">
          <ListItem>Circle marker style</ListItem>
          <ListItem>Hollow bullet point</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Square</h3>
        <List marker="square">
          <ListItem>Square marker style</ListItem>
          <ListItem>Box-shaped bullet</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Roman Numerals</h3>
        <List variant="ordered" marker="lower-roman">
          <ListItem>First item in roman numerals</ListItem>
          <ListItem>Second item in roman numerals</ListItem>
          <ListItem>Third item in roman numerals</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const SpacingOptions: Story = {
  args: { children: null },
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">No Spacing</h3>
        <List spacing="none">
          <ListItem>Tightly packed item</ListItem>
          <ListItem>No space between items</ListItem>
          <ListItem>Compact layout</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Small Spacing</h3>
        <List spacing="sm">
          <ListItem>Small spacing item</ListItem>
          <ListItem>Minimal gaps</ListItem>
          <ListItem>Subtle separation</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Spacing</h3>
        <List spacing="lg">
          <ListItem>Large spacing item</ListItem>
          <ListItem>Generous gaps</ListItem>
          <ListItem>Clear separation</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const NestedLists: Story = {
  args: { children: null },
  render: () => (
    <div className="max-w-md">
      <List>
        <ListItem>Main topic one</ListItem>
        <ListItem>
          Main topic two
          <List nested spacing="sm">
            <ListItem>Subtopic A</ListItem>
            <ListItem>Subtopic B</ListItem>
            <ListItem>
              Subtopic C
              <List nested spacing="sm">
                <ListItem>Sub-subtopic 1</ListItem>
                <ListItem>Sub-subtopic 2</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>Main topic three</ListItem>
      </List>
    </div>
  ),
};

export const CustomMarkers: Story = {
  args: { children: null },
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">Emoji Markers</h3>
        <List marker="none">
          <ListItem marker="">Goal-oriented task</ListItem>
          <ListItem marker="">High priority item</ListItem>
          <ListItem marker="">Creative idea</ListItem>
          <ListItem marker="">Technical requirement</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Icon Markers</h3>
        <List marker="none">
          <ListItem marker={<span className="text-green-500"></span>}>Completed task</ListItem>
          <ListItem marker={<span className="text-yellow-500">⏳</span>}>In progress task</ListItem>
          <ListItem marker={<span className="text-red-500"></span>}>Failed task</ListItem>
          <ListItem marker={<span className="text-blue-500">→</span>}>Next action</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Status Indicators</h3>
        <List marker="none">
          <ListItem marker={<span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>}>
            System operational
          </ListItem>
          <ListItem marker={<span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>}>
            System degraded
          </ListItem>
          <ListItem marker={<span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>}>
            System down
          </ListItem>
        </List>
      </div>
    </div>
  ),
};

export const MixedContent: Story = {
  args: { children: null },
  render: () => (
    <div className="max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Project Requirements</h2>
      
      <List variant="ordered" spacing="md">
        <ListItem>
          <strong>Setup Phase</strong>
          <List nested spacing="sm">
            <ListItem>Install dependencies</ListItem>
            <ListItem>Configure environment variables</ListItem>
            <ListItem>Setup database connections</ListItem>
          </List>
        </ListItem>
        
        <ListItem>
          <strong>Development Phase</strong>
          <List nested spacing="sm">
            <ListItem>Implement core features</ListItem>
            <ListItem>Write comprehensive tests</ListItem>
            <ListItem>
              Code review process
              <List nested marker="none" spacing="sm">
                <ListItem marker="">Peer review</ListItem>
                <ListItem marker="">Automated testing</ListItem>
                <ListItem marker="">Security audit</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        
        <ListItem>
          <strong>Deployment Phase</strong>
          <List nested spacing="sm">
            <ListItem>Staging deployment</ListItem>
            <ListItem>Performance testing</ListItem>
            <ListItem>Production release</ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  ),
};