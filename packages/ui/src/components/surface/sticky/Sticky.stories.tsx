import type { Meta, StoryObj } from '@storybook/react';
import { Sticky } from './Sticky';

const meta = {
  title: 'Surface/Sticky',
  component: Sticky,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sticky positioning wrapper for creating elements that stick to viewport edges.',
      },
    },
  },
} satisfies Meta<typeof Sticky>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StickyHeader: Story = {
  render: () => (
    <div>
      <Sticky position="top" showShadow className="bg-white border-b">
        <div className="px-6 py-4">
          <h1 className="text-xl font-bold">Sticky Header</h1>
          <p className="text-sm text-gray-600">This header sticks to the top when scrolling</p>
        </div>
      </Sticky>
      
      <div className="p-6 space-y-6">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <h3 className="font-semibold">Section {i + 1}</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scroll down to see the sticky header in action.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const StickyNavigation: Story = {
  render: () => (
    <div className="flex h-screen">
      <Sticky position="left" className="w-64 bg-gray-50 border-r">
        <nav className="p-4">
          <h2 className="font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio'].map((item) => (
              <li key={item}>
                <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Sticky>
      
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Main Content Area</h1>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="mb-6 p-4 border rounded-lg">
            <h3 className="font-semibold">Content Section {i + 1}</h3>
            <p className="text-gray-600 mt-2">
              This is the main content area. The navigation sidebar remains sticky on the left.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </main>
    </div>
  ),
};

export const StickyFooter: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Page Header</h1>
      </header>
      
      <main className="flex-1 p-6">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">Content Block {i + 1}</h3>
            <p className="text-gray-600">Main page content goes here...</p>
          </div>
        ))}
      </main>
      
      <Sticky position="bottom" showShadow className="bg-gray-100 border-t">
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600">Sticky Footer - Always visible at bottom</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Action 1
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Action 2
            </button>
          </div>
        </div>
      </Sticky>
    </div>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <div>
      <div className="h-16 bg-red-500 text-white flex items-center px-6">
        <span>Fixed Top Bar (64px height)</span>
      </div>
      
      <Sticky position="top" offset="64px" showShadow className="bg-white border-b">
        <div className="px-6 py-4">
          <h2 className="font-bold">Sticky with Offset</h2>
          <p className="text-sm text-gray-600">Sticks 64px from top to avoid the fixed bar</p>
        </div>
      </Sticky>
      
      <div className="p-6 space-y-4">
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <h3 className="font-semibold">Content {i + 1}</h3>
            <p className="text-gray-600">
              This content demonstrates sticky positioning with an offset.
              The sticky element starts sticking 64px from the top.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const StickyCards: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Sticky Cards Demo</h1>
      
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="space-y-4">
          <Sticky 
            position="top" 
            offset={20}
            showShadow
            onStickyChange={(isSticky) => console.log(`Card ${i + 1} sticky:`, isSticky)}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Sticky Card {i + 1}</h2>
              <p className="text-blue-100">This card becomes sticky when scrolled</p>
            </div>
          </Sticky>
          
          <div className="space-y-4">
            {Array.from({ length: 5 }, (_, j) => (
              <div key={j} className="p-4 border rounded-lg bg-white">
                <h3 className="font-semibold">Content Block {j + 1}</h3>
                <p className="text-gray-600">
                  Regular content that scrolls normally under the sticky card.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const StickyToolbar: Story = {
  render: () => (
    <div>
      <div className="p-6 mb-4">
        <h1 className="text-2xl font-bold">Document Editor</h1>
        <p className="text-gray-600">Scroll down to see the toolbar become sticky</p>
      </div>
      
      <Sticky position="top" offset={0} showShadow className="bg-white border-y">
        <div className="px-6 py-3 flex items-center gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Bold</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Italic</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Underline</button>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Link</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Image</button>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Save</button>
        </div>
      </Sticky>
      
      <div className="p-6 space-y-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="p-4">
            <p className="text-gray-700 leading-relaxed">
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};