import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Audio, AudioPlaylist } from './Audio';

const meta: Meta<typeof Audio> = {
  title: 'Media/Audio',
  component: Audio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    controls: true,
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Bell Sound',
    description: 'A pleasant bell ringing sound effect',
    controls: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Extra Small</h3>
        <Audio
          size="xs"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="XS Audio"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Small</h3>
        <Audio
          size="sm"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="Small Audio"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Medium</h3>
        <Audio
          size="md"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="Medium Audio"
          controls
        />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Large</h3>
        <Audio
          size="lg"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="Large Audio"
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
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold mb-2">None</p>
        <Audio
          rounded="none"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="No Border Radius"
          controls
        />
      </div>
      
      <div>
        <p className="text-sm font-semibold mb-2">Small</p>
        <Audio
          rounded="sm"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="Small Border Radius"
          controls
        />
      </div>
      
      <div>
        <p className="text-sm font-semibold mb-2">Medium</p>
        <Audio
          rounded="md"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="Medium Border Radius"
          controls
        />
      </div>
      
      <div>
        <p className="text-sm font-semibold mb-2">Large</p>
        <Audio
          rounded="lg"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
          title="Large Border Radius"
          controls
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
    src: '', // No source to show placeholder
    placeholder: (
      <div className="flex items-center gap-2 text-gray-500">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
        <span className="text-sm">Loading audio...</span>
      </div>
    ),
  },
};

export const WithFallback: Story = {
  args: {
    src: '/broken-audio-url.wav',
    title: 'Broken Audio File',
    fallback: (
      <div className="flex items-center gap-2 text-red-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-xs">Failed to load audio</span>
      </div>
    ),
  },
};

export const MultipleSources: Story = {
  args: {
    src: [
      'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3',
    ],
    title: 'Multi-format Audio',
    description: 'Audio with multiple source formats for compatibility',
    controls: true,
  },
};

export const AutoPlay: Story = {
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Autoplay Audio',
    description: 'This audio will start playing automatically (muted)',
    autoPlay: true,
    muted: true,
    controls: true,
  },
};

export const WithoutControls: Story = {
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Background Audio',
    description: 'Audio without visible controls',
    controls: false,
  },
};

// Audio Playlist Stories
export const AudioPlaylistStory: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Playlist</h3>
        <AudioPlaylist
          tracks={[
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Bell Sound 1',
              artist: 'Sound Effects',
              duration: '0:03',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Bell Sound 2',
              artist: 'Sound Effects',
              duration: '0:03',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Bell Sound 3',
              artist: 'Sound Effects',
              duration: '0:03',
            },
          ]}
          className="max-w-md"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Auto-next Playlist</h3>
        <AudioPlaylist
          tracks={[
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Track 1',
              description: 'First track in auto-play sequence',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Track 2',
              description: 'Second track will auto-play after first',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Track 3',
              description: 'Final track in the sequence',
            },
          ]}
          autoNext={true}
          className="max-w-md"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Size Playlist</h3>
        <AudioPlaylist
          tracks={[
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Podcast Episode 1',
              artist: 'Tech Talk',
              duration: '45:30',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Podcast Episode 2',
              artist: 'Tech Talk',
              duration: '52:15',
            },
          ]}
          size="lg"
          className="max-w-lg"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const InteractivePlaylist: Story = {
  render: () => {
    const [currentTrack, setCurrentTrack] = React.useState(0);

    const handleTrackSelect = (track: any, index: number) => {
      setCurrentTrack(index);
      console.log(`Selected track ${index + 1}: ${track.title}`);
    };

    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Playlist</h3>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Current track: <strong>{currentTrack + 1}</strong>
          </p>
        </div>
        <AudioPlaylist
          tracks={[
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Morning Meditation',
              artist: 'Calm Sounds',
              duration: '10:00',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Focus Music',
              artist: 'Productivity',
              duration: '25:00',
            },
            {
              src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
              title: 'Nature Sounds',
              artist: 'Relaxation',
              duration: '30:00',
            },
          ]}
          currentTrack={currentTrack}
          onTrackSelect={handleTrackSelect}
          className="max-w-md"
        />
        <p className="text-sm text-gray-600 mt-4">
          Click on any track to select it. Check the console for events.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};