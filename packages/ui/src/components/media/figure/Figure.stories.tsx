import type { Meta, StoryObj } from '@storybook/react';
import { Figure, FigureGallery } from './Figure';

const meta: Meta<typeof Figure> = {
  title: 'Media/Figure',
  component: Figure,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A semantic figure component for displaying media content with captions.',
      },
    },
  },
  argTypes: {
    captionPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'overlay-top', 'overlay-bottom'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    overlayBackground: {
      control: { type: 'select' },
      options: ['dark', 'light', 'blur'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Figure
export const Basic: Story = {
  args: {
    caption: 'A beautiful sunset over the mountains',
    children: (
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        alt="Mountain sunset"
        className="w-full h-48 object-cover"
      />
    ),
  },
};

// Caption Positions
export const CaptionPositions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 max-w-4xl">
      <Figure
        caption="Top caption"
        captionPosition="top"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure
        caption="Bottom caption"
        captionPosition="bottom"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure
        caption="Overlay top caption"
        captionPosition="overlay-top"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure
        caption="Overlay bottom caption"
        captionPosition="overlay-bottom"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <Figure caption="Extra small figure" size="xs">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure caption="Small figure" size="sm">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure caption="Medium figure" size="md">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>
    </div>
  ),
};

// Overlay Backgrounds
export const OverlayBackgrounds: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <Figure
        caption="Dark overlay"
        captionPosition="overlay-bottom"
        overlayBackground="dark"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure
        caption="Light overlay"
        captionPosition="overlay-bottom"
        overlayBackground="light"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>

      <Figure
        caption="Blur overlay"
        captionPosition="overlay-bottom"
        overlayBackground="blur"
        size="sm"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Mountain"
          className="w-full h-32 object-cover"
        />
      </Figure>
    </div>
  ),
};

// Figure with Video
export const WithVideo: Story = {
  render: () => (
    <Figure
      caption="A sample video with figure caption"
      captionPosition="overlay-bottom"
      size="md"
    >
      <video
        className="w-full h-48"
        controls
        poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Figure>
  ),
};

// Figure Gallery
export const Gallery: Story = {
  render: () => {
    const figures = [
      {
        id: '1',
        content: (
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 1"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Mountain Landscape 1',
      },
      {
        id: '2',
        content: (
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 2"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Mountain Landscape 2',
      },
      {
        id: '3',
        content: (
          <img
            src="https://images.unsplash.com/photo-1464822759844-d150fff8c2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 3"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Mountain Landscape 3',
      },
      {
        id: '4',
        content: (
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 4"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Mountain Landscape 4',
      },
    ];

    return (
      <div className="max-w-4xl">
        <FigureGallery
          figures={figures}
          columns={2}
          gap="md"
          captionPosition="bottom"
        />
      </div>
    );
  },
};

// Interactive Gallery
export const InteractiveGallery: Story = {
  render: () => {
    const figures = [
      {
        id: '1',
        content: (
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 1"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Clickable Figure 1',
      },
      {
        id: '2',
        content: (
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 2"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Clickable Figure 2',
      },
      {
        id: '3',
        content: (
          <img
            src="https://images.unsplash.com/photo-1464822759844-d150fff8c2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mountain 3"
            className="w-full h-32 object-cover"
          />
        ),
        caption: 'Clickable Figure 3',
      },
    ];

    return (
      <div className="max-w-3xl">
        <FigureGallery
          figures={figures}
          columns={3}
          gap="sm"
          captionPosition="overlay-bottom"
          onFigureClick={(figure, index) => {
            alert(`Clicked figure ${index + 1}: ${figure.caption}`);
          }}
        />
      </div>
    );
  },
};