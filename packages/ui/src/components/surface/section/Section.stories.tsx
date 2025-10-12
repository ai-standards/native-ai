import type { Meta, StoryObj } from '@storybook/react';
import { Section, SectionHeader, SectionContent, SectionFooter } from './Section';

const meta = {
  title: 'Surface/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A versatile section component for organizing page content with different variants, spacing options, and composable sub-components. Built with Tailwind CSS for consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'muted'],
      description: 'The visual style variant of the section',
    },
    spacing: {
      control: 'select', 
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The vertical padding of the section',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether the section should take full viewport height',
    },
    children: {
      control: false,
      description: 'The content to display inside the section',
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic section story
export const Default: Story = {
  args: {
    children: (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Section Title</h2>
        <p className="text-gray-600">
          This is a default section with standard spacing and styling.
        </p>
      </div>
    ),
  },
};

// Different variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-0">
      {(['default', 'primary', 'secondary', 'accent', 'muted'] as const).map((variant) => (
        <Section key={variant} variant={variant} spacing="md">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold mb-2">Variant: {variant}</h3>
            <p className="text-gray-600">Section with {variant} variant styling</p>
          </div>
        </Section>
      ))}
    </div>
  ),
};

// Different spacing options
export const Spacing: Story = {
  render: () => (
    <div className="space-y-0">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((spacing) => (
        <Section key={spacing} variant="secondary" spacing={spacing}>
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-semibold">Spacing: {spacing}</h3>
            <p className="text-sm text-gray-600">Section with {spacing} vertical spacing</p>
          </div>
        </Section>
      ))}
    </div>
  ),
};

// Full height section
export const FullHeight: Story = {
  args: {
    fullHeight: true,
    variant: 'primary',
    spacing: 'xl',
    children: (
      <div className="container mx-auto px-4 flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Full Height Section</h2>
          <p className="text-lg text-gray-600">
            This section takes the full viewport height
          </p>
        </div>
      </div>
    ),
  },
};

// Using composable components
export const WithComposableComponents: Story = {
  args: {
    variant: 'default',
    spacing: 'lg',
    children: (
      <div className="container mx-auto px-4">
        <SectionHeader>
          <h2 className="text-2xl font-bold">Section with Header and Footer</h2>
          <p className="text-gray-600 mt-2">This section demonstrates the composable components</p>
        </SectionHeader>
        
        <SectionContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Content Block 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Content Block 2</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </SectionContent>
        
        <SectionFooter>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Last updated: March 15, 2024</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </SectionFooter>
      </div>
    ),
  },
};

// Real-world page example
export const PageExample: Story = {
  render: () => (
    <div>
      {/* Hero Section */}
      <Section variant="primary" spacing="xl" fullHeight>
        <div className="container mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Product</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover amazing features and capabilities that will transform your workflow
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <h2 className="text-3xl font-bold text-center">Features</h2>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Everything you need to succeed, built with modern technology
            </p>
          </SectionHeader>
          
          <SectionContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl"></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                  <p className="text-gray-600">
                    Amazing functionality that helps you achieve your goals faster and more efficiently.
                  </p>
                </div>
              ))}
            </div>
          </SectionContent>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="accent" spacing="lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers today
          </p>
          <button className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700 transition-colors">
            Start Free Trial
          </button>
        </div>
      </Section>
    </div>
  ),
};