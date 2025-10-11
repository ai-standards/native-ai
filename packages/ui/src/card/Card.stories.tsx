import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Button } from '../button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with multiple variants, padding options, and composable sub-components. Built with Tailwind CSS for consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'flat'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: 'select', 
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The internal padding of the card',
    },
    children: {
      control: false,
      description: 'The content to display inside the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card stories
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a basic card with default styling.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">This card has a thicker border and no shadow.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">This card has a prominent shadow for depth.</p>
      </div>
    ),
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Flat Card</h3>
        <p className="text-gray-600">This card has no shadow or border for a minimal look.</p>
      </div>
    ),
  },
};

// Padding variations
export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Small Padding</h3>
        <p className="text-gray-600">This card has reduced internal padding.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Large Padding</h3>
        <p className="text-gray-600">This card has increased internal padding for more breathing room.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <img 
        src="https://picsum.photos/200/300" 
        alt="Placeholder" 
        className="w-full h-48 object-cover"
      />
    ),
  },
};

// Composed card with header, content, and footer
export const ComposedCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Product Card</h2>
          <p className="text-sm text-gray-500">Featured item</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            This is an example of a composed card using CardHeader, CardContent, and CardFooter components.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Price:</span>
              <span>$29.99</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Status:</span>
              <span className="text-green-600">In Stock</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Learn More</Button>
          <Button size="sm">Add to Cart</Button>
        </CardFooter>
      </>
    ),
  },
};

export const ImageCard: Story = {
  args: {
    padding: 'none',
    children: (
      <>
        <img 
          src="https://picsum.photos/200/300" 
          alt="Card image" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <CardHeader className="p-0 border-0 mb-4">
            <h3 className="text-lg font-semibold">Image Card</h3>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-600">
              A card with an image header and content below.
            </p>
          </CardContent>
        </div>
      </>
    ),
  },
};

export const ActionCard: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <CardContent>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Create New Item</h3>
            <p className="text-gray-600 mb-4">
              Click the button below to create a new item in your workspace.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Create Item</Button>
        </CardFooter>
      </>
    ),
  },
};