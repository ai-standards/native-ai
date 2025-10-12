import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Image, ImageGallery } from './Image';

describe('Image', () => {
  it('renders with basic props', () => {
    render(<Image src="/test-image.jpg" alt="Test image" />);
    
    const image = screen.getByRole('img', { name: 'Test image' });
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('/test-image.jpg');
    expect(image.getAttribute('alt')).toBe('Test image');
  });

  it('shows loading placeholder initially', () => {
    render(<Image src="/test-image.jpg" alt="Test image" data-testid="image-container" />);
    
    // Should show default loading state
    const container = screen.getByTestId('image-container');
    const loadingIcon = container.querySelector('svg');
    expect(loadingIcon).toBeTruthy();
  });

  it('shows custom placeholder when provided', () => {
    render(
      <Image 
        src="/test-image.jpg" 
        alt="Test image" 
        placeholder={<div>Loading...</div>}
      />
    );
    
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('handles image load successfully', async () => {
    const onLoad = vi.fn();
    render(
      <Image 
        src="/test-image.jpg" 
        alt="Test image" 
        onLoad={onLoad}
        data-testid="image-container"
      />
    );
    
    const image = screen.getByRole('img');
    fireEvent.load(image);
    
    await waitFor(() => {
      expect(onLoad).toHaveBeenCalled();
      // Image should become visible
      expect(image.className).toContain('opacity-100');
    });
  });

  it('handles image error with fallback', async () => {
    const onError = vi.fn();
    render(
      <Image 
        src="/broken-image.jpg" 
        alt="Test image" 
        onError={onError}
        fallback={<div>Error loading image</div>}
      />
    );
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
      expect(screen.getByText('Error loading image')).toBeTruthy();
    });
  });

  it('shows default error state when no fallback provided', async () => {
    render(
      <Image 
        src="/broken-image.jpg" 
        alt="Test image"
        data-testid="image-container"
      />
    );
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    await waitFor(() => {
      const container = screen.getByTestId('image-container');
      const errorIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
      expect(errorIcon).toBeTruthy();
    });
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Image src="/test.jpg" alt="Test" size="xs" data-testid="image-container" />
    );
    let container = screen.getByTestId('image-container');
    expect(container.className).toContain('w-16');
    expect(container.className).toContain('h-16');
    
    rerender(<Image src="/test.jpg" alt="Test" size="lg" data-testid="image-container" />);
    container = screen.getByTestId('image-container');
    expect(container.className).toContain('w-48');
    expect(container.className).toContain('h-48');
  });

  it('applies aspect ratio classes correctly', () => {
    const { rerender } = render(
      <Image src="/test.jpg" alt="Test" aspectRatio="square" data-testid="image-container" />
    );
    let container = screen.getByTestId('image-container');
    expect(container.className).toContain('aspect-square');
    
    rerender(
      <Image src="/test.jpg" alt="Test" aspectRatio="video" data-testid="image-container" />
    );
    container = screen.getByTestId('image-container');
    expect(container.className).toContain('aspect-video');
  });

  it('applies rounded classes correctly', () => {
    const { rerender } = render(
      <Image src="/test.jpg" alt="Test" rounded="none" data-testid="image-container" />
    );
    let container = screen.getByTestId('image-container');
    expect(container.className).not.toContain('rounded');
    
    rerender(
      <Image src="/test.jpg" alt="Test" rounded="full" data-testid="image-container" />
    );
    container = screen.getByTestId('image-container');
    expect(container.className).toContain('rounded-full');
  });

  it('applies object fit classes correctly', () => {
    const { rerender } = render(
      <Image src="/test.jpg" alt="Test" objectFit="contain" />
    );
    let image = screen.getByRole('img');
    expect(image.className).toContain('object-contain');
    
    rerender(
      <Image src="/test.jpg" alt="Test" objectFit="cover" />
    );
    image = screen.getByRole('img');
    expect(image.className).toContain('object-cover');
  });

  it('renders overlay when provided', () => {
    render(
      <Image 
        src="/test.jpg" 
        alt="Test" 
        overlay={<div>Overlay content</div>}
      />
    );
    
    expect(screen.getByText('Overlay content')).toBeTruthy();
  });

  it('shows hover overlay on mouse enter', () => {
    render(
      <Image 
        src="/test.jpg" 
        alt="Test" 
        hoverOverlay={<div>Hover content</div>}
        data-testid="image-container"
      />
    );
    
    const container = screen.getByTestId('image-container');
    const hoverOverlay = screen.getByText('Hover content').parentElement;
    
    // Initially should be hidden
    expect(hoverOverlay?.className).toContain('opacity-0');
    
    // Should show on hover
    fireEvent.mouseEnter(container);
    expect(hoverOverlay?.className).toContain('opacity-100');
    
    // Should hide on mouse leave
    fireEvent.mouseLeave(container);
    expect(hoverOverlay?.className).toContain('opacity-0');
  });

  it('applies custom className', () => {
    render(
      <Image 
        src="/test.jpg" 
        alt="Test" 
        className="custom-class" 
        data-testid="image-container"
      />
    );
    
    const container = screen.getByTestId('image-container');
    expect(container.className).toContain('custom-class');
  });

  it('passes through additional props to img element', () => {
    render(
      <Image 
        src="/test.jpg" 
        alt="Test" 
        loading="eager"
        imgProps={{ crossOrigin: "anonymous" }}
      />
    );
    
    const image = screen.getByRole('img');
    expect(image.getAttribute('loading')).toBe('eager');
    expect(image.getAttribute('crossOrigin')).toBe('anonymous');
  });
});

describe('ImageGallery', () => {
  const mockImages = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
  ];

  it('renders all images', () => {
    render(
      <ImageGallery 
        images={mockImages}
        altPrefix="Gallery"
      />
    );
    
    mockImages.forEach((_, index) => {
      const image = screen.getByRole('img', { name: `Gallery ${index + 1}` });
      expect(image).toBeTruthy();
    });
  });

  it('applies column classes correctly', () => {
    const { rerender } = render(
      <ImageGallery 
        images={mockImages}
        columns={2}
        data-testid="gallery"
      />
    );
    let gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('grid-cols-2');
    
    rerender(
      <ImageGallery 
        images={mockImages}
        columns={4}
        data-testid="gallery"
      />
    );
    gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('grid-cols-4');
  });

  it('applies gap classes correctly', () => {
    const { rerender } = render(
      <ImageGallery 
        images={mockImages}
        gap="xs"
        data-testid="gallery"
      />
    );
    let gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('gap-1');
    
    rerender(
      <ImageGallery 
        images={mockImages}
        gap="xl"
        data-testid="gallery"
      />
    );
    gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('gap-8');
  });

  it('handles image click events', () => {
    const onImageClick = vi.fn();
    render(
      <ImageGallery 
        images={mockImages.slice(0, 2)}
        onImageClick={onImageClick}
      />
    );
    
    const firstImage = screen.getByRole('img', { name: 'Image 1' });
    fireEvent.click(firstImage);
    
    expect(onImageClick).toHaveBeenCalledWith('/image1.jpg', 0);
  });

  it('applies aspect ratio to all images', () => {
    render(
      <ImageGallery 
        images={mockImages.slice(0, 2)}
        aspectRatio="square"
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    const imageContainers = gallery.querySelectorAll('[class*="aspect-square"]');
    expect(imageContainers).toHaveLength(2);
  });

  it('applies rounded corners to all images', () => {
    render(
      <ImageGallery 
        images={mockImages.slice(0, 2)}
        rounded="lg"
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    // Look for image container divs specifically (not img elements)
    const imageContainers = gallery.querySelectorAll('div.relative[class*="rounded-lg"]');
    expect(imageContainers).toHaveLength(2);
  });

  it('applies custom className', () => {
    render(
      <ImageGallery 
        images={mockImages}
        className="custom-gallery"
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('custom-gallery');
  });

  it('handles empty images array gracefully', () => {
    render(
      <ImageGallery 
        images={[]}
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    expect(gallery.children).toHaveLength(0);
  });

  it('uses correct alt text prefix', () => {
    render(
      <ImageGallery 
        images={mockImages.slice(0, 2)}
        altPrefix="Photo"
      />
    );
    
    expect(screen.getByRole('img', { name: 'Photo 1' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Photo 2' })).toBeTruthy();
  });

  it('applies hover styles when onImageClick is provided', () => {
    const onImageClick = vi.fn();
    render(
      <ImageGallery 
        images={mockImages.slice(0, 1)}
        onImageClick={onImageClick}
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    const imageContainer = gallery.querySelector('[class*="cursor-pointer"]');
    expect(imageContainer).toBeTruthy();
    expect(imageContainer?.className).toContain('hover:opacity-80');
  });
});