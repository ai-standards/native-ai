import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive container component with configurable sizes, padding, and centering options. Built with Tailwind CSS for consistent layout management.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'The maximum width of the container',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The internal padding of the container',
    },
    center: {
      control: 'boolean',
      description: 'Whether to center the container horizontally',
    },
    children: {
      control: false,
      description: 'The content to display inside the container',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic container story
export const Default: Story = {
  args: {
    children: (
      <div className="bg-blue-100 p-4 rounded border-2 border-dashed border-blue-300">
        <h3 className="text-lg font-semibold mb-2">Container Content</h3>
        <p>This content is inside a default container.</p>
      </div>
    ),
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
        <Container key={size} size={size} center>
          <div className="bg-purple-100 p-4 rounded border-2 border-dashed border-purple-300">
            <h4 className="font-semibold">Size: {size}</h4>
            <p>Container with {size} max-width</p>
          </div>
        </Container>
      ))}
    </div>
  ),
};

// Different padding options
export const Padding: Story = {
  render: () => (
    <div className="space-y-6">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((padding) => (
        <Container key={padding} size="md" padding={padding} center>
          <div className="bg-green-100 rounded border-2 border-dashed border-green-300">
            <h4 className="font-semibold">Padding: {padding}</h4>
            <p>Container with {padding} padding</p>
          </div>
        </Container>
      ))}
    </div>
  ),
};

// Centered vs non-centered
export const Centering: Story = {
  render: () => (
    <div className="space-y-6">
      <Container size="md" center={false}>
        <div className="bg-orange-100 p-4 rounded border-2 border-dashed border-orange-300">
          <h4 className="font-semibold">Not Centered</h4>
          <p>This container is not centered (left-aligned)</p>
        </div>
      </Container>
      <Container size="md" center>
        <div className="bg-orange-100 p-4 rounded border-2 border-dashed border-orange-300">
          <h4 className="font-semibold">Centered</h4>
          <p>This container is centered horizontally</p>
        </div>
      </Container>
    </div>
  ),
};

// Real-world example
export const ContentExample: Story = {
  args: {
    size: 'lg',
    padding: 'lg',
    center: true,
    children: (
      <div className="prose max-w-none">
        <h1>Article Title</h1>
        <p className="text-gray-600">Published on March 15, 2024</p>
        <p>
          This is an example of how you might use the Container component to wrap
          article content. The container provides consistent spacing and maximum
          width to ensure optimal reading experience across different screen sizes.
        </p>
        <p>
          The container is responsive and will adjust its behavior based on the
          size prop you choose. You can also control the internal padding and
          whether the container should be centered on the page.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          "A well-designed container component is the foundation of good layout design."
        </blockquote>
      </div>
    ),
  },
};

// Nested containers
export const Nested: Story = {
  render: () => (
    <Container size="full" padding="lg">
      <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-400">
        <h3 className="mb-4 font-semibold">Outer Container (full width)</h3>
        <Container size="lg" padding="md" center>
          <div className="bg-blue-100 p-4 rounded border-2 border-dashed border-blue-300">
            <h4 className="mb-2 font-semibold">Inner Container (lg, centered)</h4>
            <Container size="md" padding="sm">
              <div className="bg-yellow-100 p-2 rounded border-2 border-dashed border-yellow-300">
                <p className="text-sm">Deeply nested container (md)</p>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </Container>
  ),
};