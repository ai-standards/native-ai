import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Video, VideoGallery } from './Video';

const meta: Meta<typeof Video> = {
  title: 'Media/Video',
  component: Video,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['video', 'square', 'photo', 'wide', 'auto'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    controls: true,
  },
};

export const WithCaption: Story = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    caption: 'Big Buck Bunny - Open source animated movie',
    controls: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extra Small</h3>
        <Video
          size="xs"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Small</h3>
        <Video
          size="sm"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium</h3>
        <Video
          size="md"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AspectRatios: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <div>
        <h3 className="text-sm font-semibold mb-2">Video (16:9)</h3>
        <Video
          aspectRatio="video"
          size="full"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Square</h3>
        <Video
          aspectRatio="square"
          size="full"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Photo (4:3)</h3>
        <Video
          aspectRatio="photo"
          size="full"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Wide (21:9)</h3>
        <Video
          aspectRatio="wide"
          size="full"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
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
    <div className="flex gap-4 flex-wrap">
      <div className="text-center">
        <Video
          size="sm"
          rounded="none"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
        <p className="text-sm mt-2">None</p>
      </div>
      
      <div className="text-center">
        <Video
          size="sm"
          rounded="sm"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
        <p className="text-sm mt-2">Small</p>
      </div>
      
      <div className="text-center">
        <Video
          size="sm"
          rounded="md"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
        <p className="text-sm mt-2">Medium</p>
      </div>
      
      <div className="text-center">
        <Video
          size="sm"
          rounded="lg"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          controls
        />
        <p className="text-sm mt-2">Large</p>
      </div>
    </div>
  ),
};

export const WithPlaceholder: Story = {
  args: {
    src: '', // No source to show placeholder
    placeholder: (
      <div className="flex flex-col items-center gap-2 text-white">
        <div className="animate-pulse">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-sm">Loading video...</span>
      </div>
    ),
  },
};

export const WithFallback: Story = {
  args: {
    src: '/broken-video-url.mp4',
    fallback: (
      <div className="flex flex-col items-center gap-2 text-gray-400">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Video failed to load</span>
      </div>
    ),
  },
};

export const AutoPlay: Story = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    autoPlay: true,
    muted: true,
    loop: true,
    controls: true,
  },
};

export const MultipleSources: Story = {
  args: {
    src: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm',
    ],
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    controls: true,
  },
};

// Video Gallery Stories
export const VideoGalleryStory: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Gallery (2 columns)</h3>
        <VideoGallery
          videos={[
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
              caption: 'Big Buck Bunny',
            },
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              caption: 'Elephants Dream',
            },
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
              caption: 'Sintel',
            },
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
              caption: 'Tears of Steel',
            },
          ]}
          className="max-w-4xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">3 Columns with Large Gap</h3>
        <VideoGallery
          videos={[
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
              caption: 'Big Buck Bunny',
            },
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              caption: 'Elephants Dream',
            },
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
              caption: 'Sintel',
            },
          ]}
          columns={3}
          gap="lg"
          aspectRatio="square"
          rounded="lg"
          className="max-w-4xl"
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
    const handleVideoClick = (video: any, index: number) => {
      alert(`Clicked video ${index + 1}: ${video.caption || 'Untitled'}`);
    };

    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Clickable Video Gallery</h3>
        <VideoGallery
          videos={[
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
              caption: 'Big Buck Bunny',
            },
            {
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              caption: 'Elephants Dream',
            },
          ]}
          onVideoClick={handleVideoClick}
          className="max-w-2xl"
        />
        <p className="text-sm text-gray-600 mt-2">Click on any video to see an alert</p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};