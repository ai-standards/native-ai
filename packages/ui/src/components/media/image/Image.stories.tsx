import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageGallery } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Media/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['square', 'video', 'photo', 'auto'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Beautiful landscape',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Image
        size="xs"
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        alt="Extra small"
      />
      <Image
        size="sm"
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        alt="Small"
      />
      <Image
        size="md"
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        alt="Medium"
      />
      <Image
        size="lg"
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        alt="Large"
      />
    </div>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-96">
      <div>
        <h3 className="text-sm font-semibold mb-2">Square</h3>
        <Image
          size="full"
          aspectRatio="square"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
          alt="Square image"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Video (16:9)</h3>
        <Image
          size="full"
          aspectRatio="video"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
          alt="Video aspect ratio"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Photo (4:3)</h3>
        <Image
          size="full"
          aspectRatio="photo"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Photo aspect ratio"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Auto</h3>
        <Image
          size="full"
          aspectRatio="auto"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Auto aspect ratio"
          className="h-32"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const RoundedCorners: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="text-center">
        <Image
          size="md"
          rounded="none"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
          alt="No rounding"
        />
        <p className="text-sm mt-2">None</p>
      </div>
      <div className="text-center">
        <Image
          size="md"
          rounded="sm"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
          alt="Small rounding"
        />
        <p className="text-sm mt-2">Small</p>
      </div>
      <div className="text-center">
        <Image
          size="md"
          rounded="md"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
          alt="Medium rounding"
        />
        <p className="text-sm mt-2">Medium</p>
      </div>
      <div className="text-center">
        <Image
          size="md"
          rounded="lg"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
          alt="Large rounding"
        />
        <p className="text-sm mt-2">Large</p>
      </div>
      <div className="text-center">
        <Image
          size="md"
          rounded="full"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
          alt="Full rounding"
        />
        <p className="text-sm mt-2">Full</p>
      </div>
    </div>
  ),
};

export const ObjectFit: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-96">
      <div>
        <h3 className="text-sm font-semibold mb-2">Cover (default)</h3>
        <Image
          size="full"
          aspectRatio="square"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
          alt="Object fit cover"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Contain</h3>
        <Image
          size="full"
          aspectRatio="square"
          objectFit="contain"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
          alt="Object fit contain"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Fill</h3>
        <Image
          size="full"
          aspectRatio="square"
          objectFit="fill"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
          alt="Object fit fill"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Scale Down</h3>
        <Image
          size="full"
          aspectRatio="square"
          objectFit="scale-down"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop"
          alt="Object fit scale down"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const WithPlaceholder: Story = {
  args: {
    src: '', // Empty to show placeholder
    alt: 'Loading image',
    size: 'lg',
    placeholder: (
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
    ),
  },
};

export const WithFallback: Story = {
  args: {
    src: '/broken-image-url.jpg',
    alt: 'Broken image',
    size: 'lg',
    fallback: (
      <div className="flex flex-col items-center gap-2 text-gray-400">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Failed to load</span>
      </div>
    ),
  },
};

export const WithOverlay: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Image with overlay',
    size: 'lg',
    overlay: (
      <div className="bg-black bg-opacity-50 text-white p-4 rounded">
        <h3 className="font-semibold">Beautiful Landscape</h3>
        <p className="text-sm">A stunning mountain view</p>
      </div>
    ),
  },
};

export const WithHoverOverlay: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Image with hover overlay',
    size: 'lg',
    hoverOverlay: (
      <div className="bg-black bg-opacity-75 text-white p-4 rounded">
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100">
          View Details
        </button>
      </div>
    ),
  },
};

// Image Gallery Stories
export const ImageGalleryStory: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Gallery (3 columns)</h3>
        <ImageGallery
          images={[
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&rotation=90',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&brightness=80',
          ]}
          altPrefix="Nature"
          className="w-full max-w-2xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">4 Columns with Large Gap</h3>
        <ImageGallery
          images={[
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop',
          ]}
          columns={4}
          gap="lg"
          aspectRatio="square"
          rounded="lg"
          altPrefix="Landscape"
          className="w-full max-w-3xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Video Aspect Ratio (2 columns)</h3>
        <ImageGallery
          images={[
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=225&fit=crop',
            'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=225&fit=crop',
          ]}
          columns={2}
          aspectRatio="video"
          rounded="md"
          altPrefix="Wide"
          className="w-full max-w-2xl"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const InteractiveGallery: Story = {
  render: () => {
    const handleImageClick = (src: string, index: number) => {
      alert(`Clicked image ${index + 1}: ${src}`);
    };

    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Clickable Gallery</h3>
        <ImageGallery
          images={[
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop',
          ]}
          columns={2}
          gap="md"
          aspectRatio="square"
          onImageClick={handleImageClick}
          className="w-full max-w-lg"
        />
        <p className="text-sm text-gray-600 mt-2">Click on any image to see an alert</p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};