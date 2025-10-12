import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta = {
  title: 'Surface/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Responsive aspect ratio containers for maintaining consistent proportions.',
      },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VideoRatio: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio="16/9" className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-4xl mb-2">▶️</div>
            <div className="text-sm">16:9 Video Player</div>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const SquareImage: Story = {
  render: () => (
    <div className="w-60">
      <AspectRatio ratio="square" className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg">
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-3xl mb-2">🖼️</div>
            <div className="text-sm font-medium">Square Image</div>
            <div className="text-xs opacity-80">1:1 Ratio</div>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const CommonRatios: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">16:9 (Widescreen)</h3>
          <AspectRatio ratio="16/9" className="bg-blue-100 border-2 border-blue-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-blue-700 text-xs">
              16:9
            </div>
          </AspectRatio>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">4:3 (Traditional)</h3>
          <AspectRatio ratio="4/3" className="bg-green-100 border-2 border-green-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-green-700 text-xs">
              4:3
            </div>
          </AspectRatio>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">3:2 (Classic)</h3>
          <AspectRatio ratio="3/2" className="bg-purple-100 border-2 border-purple-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-purple-700 text-xs">
              3:2
            </div>
          </AspectRatio>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">1:1 (Square)</h3>
          <AspectRatio ratio="1/1" className="bg-red-100 border-2 border-red-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-red-700 text-xs">
              1:1
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
};

export const CustomRatio: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Custom Numeric Ratio (2.5:1)</h3>
        <AspectRatio ratio={2.5} className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-2xl mb-1">📐</div>
              <div className="text-sm font-medium">Custom 2.5:1</div>
            </div>
          </div>
        </AspectRatio>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Width/Height (800x300)</h3>
        <AspectRatio width={800} height={300} className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-2xl mb-1">📏</div>
              <div className="text-sm font-medium">800×300</div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <div className="w-96">
      <h2 className="text-lg font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <AspectRatio key={i} ratio="4/3" className="bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-2xl mb-1">📷</div>
                <div className="text-xs">Photo {i + 1}</div>
              </div>
            </div>
          </AspectRatio>
        ))}
      </div>
    </div>
  ),
};

export const ProductCards: Story = {
  render: () => (
    <div className="w-96">
      <h2 className="text-lg font-bold mb-4">Product Showcase</h2>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="bg-white border rounded-lg overflow-hidden">
            <AspectRatio ratio="square">
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
            </AspectRatio>
            <div className="p-2">
              <h3 className="text-xs font-medium">Product {i + 1}</h3>
              <p className="text-xs text-gray-500">$99.99</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ResponsiveVideo: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Responsive Video Player</h2>
      <AspectRatio ratio="16/9" className="bg-black rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">▶️</div>
            <h3 className="text-xl font-bold mb-2">Video Title</h3>
            <p className="text-gray-300">Click to play • 1080p HD</p>
          </div>
        </div>
      </AspectRatio>
      <div className="mt-4 text-sm text-gray-600">
        This video player maintains perfect 16:9 aspect ratio across all screen sizes.
      </div>
    </div>
  ),
};

export const MobileFirst: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Mobile-First Design</h2>
      
      {/* Portrait on mobile, landscape on desktop */}
      <div>
        <h3 className="text-sm font-medium mb-2">Adaptive Hero Image</h3>
        <div className="block sm:hidden">
          <AspectRatio ratio="9/16" className="bg-gradient-to-b from-purple-500 to-pink-600 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-sm">Mobile Portrait</div>
                <div className="text-xs opacity-80">9:16</div>
              </div>
            </div>
          </AspectRatio>
        </div>
        
        <div className="hidden sm:block">
          <AspectRatio ratio="21/9" className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">🖥️</div>
                <div className="text-lg">Desktop Ultrawide</div>
                <div className="text-sm opacity-80">21:9</div>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
};