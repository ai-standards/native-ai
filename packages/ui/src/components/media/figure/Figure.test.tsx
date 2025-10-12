import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Figure, FigureGallery } from './Figure';

describe('Figure', () => {
  it('renders with basic props', () => {
    render(
      <Figure caption="Test caption">
        <img src="/test.jpg" alt="Test image" />
      </Figure>
    );

    expect(screen.getByRole('figure')).toBeTruthy();
    expect(screen.getByText('Test caption')).toBeTruthy();
    expect(screen.getByAltText('Test image')).toBeTruthy();
  });

  it('renders caption in different positions', () => {
    const { rerender } = render(
      <Figure caption="Test caption" captionPosition="top">
        <img src="/test.jpg" alt="Test image" />
      </Figure>
    );

    let caption = screen.getByText('Test caption');
    let figure = screen.getByRole('figure');
    expect(figure.firstChild).toBe(caption);

    rerender(
      <Figure caption="Test caption" captionPosition="bottom">
        <img src="/test.jpg" alt="Test image" />
      </Figure>
    );

    caption = screen.getByText('Test caption');
    figure = screen.getByRole('figure');
    expect(figure.lastChild).toBe(caption);
  });

  it('renders overlay captions', () => {
    render(
      <Figure caption="Overlay caption" captionPosition="overlay-bottom">
        <img src="/test.jpg" alt="Test image" />
      </Figure>
    );

    const caption = screen.getByText('Overlay caption');
    expect(caption.className).toContain('absolute');
  });

  it('applies size classes correctly', () => {
    render(
      <Figure caption="Test" size="lg">
        <img src="/test.jpg" alt="Test" />
      </Figure>
    );

    expect(screen.getByRole('figure').className).toContain('max-w-lg');
  });

  it('applies alignment classes correctly', () => {
    render(
      <Figure caption="Test" align="right">
        <img src="/test.jpg" alt="Test" />
      </Figure>
    );

    expect(screen.getByRole('figure').className).toContain('ml-auto');
  });

  it('applies rounded classes to media container', () => {
    render(
      <Figure caption="Test" rounded="lg">
        <img src="/test.jpg" alt="Test" />
      </Figure>
    );

    const mediaContainer = screen.getByRole('figure').querySelector('div');
    expect(mediaContainer?.className).toContain('rounded-lg');
  });

  it('applies overlay background classes', () => {
    render(
      <Figure 
        caption="Test" 
        captionPosition="overlay-bottom" 
        overlayBackground="light"
      >
        <img src="/test.jpg" alt="Test" />
      </Figure>
    );

    const caption = screen.getByText('Test');
    expect(caption.className).toContain('bg-white');
    expect(caption.className).toContain('bg-opacity-90');
  });

  it('renders without caption', () => {
    render(
      <Figure>
        <img src="/test.jpg" alt="Test image" />
      </Figure>
    );

    expect(screen.getByRole('figure')).toBeTruthy();
    expect(screen.getByAltText('Test image')).toBeTruthy();
    expect(screen.queryByRole('text')).toBe(null);
  });

  it('forwards additional props to figure element', () => {
    render(
      <Figure data-testid="custom-figure" id="test-figure">
        <img src="/test.jpg" alt="Test" />
      </Figure>
    );

    const figure = screen.getByTestId('custom-figure');
    expect(figure.getAttribute('id')).toBe('test-figure');
  });

  it('supports custom className', () => {
    render(
      <Figure className="custom-class">
        <img src="/test.jpg" alt="Test" />
      </Figure>
    );

    expect(screen.getByRole('figure').className).toContain('custom-class');
  });
});

describe('FigureGallery', () => {
  const mockFigures = [
    {
      id: '1',
      content: <img src="/test1.jpg" alt="Test 1" />,
      caption: 'Caption 1',
    },
    {
      id: '2',
      content: <img src="/test2.jpg" alt="Test 2" />,
      caption: 'Caption 2',
    },
    {
      id: '3',
      content: <img src="/test3.jpg" alt="Test 3" />,
      caption: 'Caption 3',
    },
  ];

  it('renders all figures', () => {
    render(<FigureGallery figures={mockFigures} />);

    expect(screen.getAllByRole('figure')).toHaveLength(3);
    expect(screen.getByText('Caption 1')).toBeTruthy();
    expect(screen.getByText('Caption 2')).toBeTruthy();
    expect(screen.getByText('Caption 3')).toBeTruthy();
  });

  it('applies grid column classes', () => {
    render(<FigureGallery figures={mockFigures} columns={4} />);

    const gallery = screen.getAllByRole('figure')[0].parentElement;
    expect(gallery?.className).toContain('grid-cols-4');
  });

  it('applies gap classes', () => {
    render(<FigureGallery figures={mockFigures} gap="lg" />);

    const gallery = screen.getAllByRole('figure')[0].parentElement;
    expect(gallery?.className).toContain('gap-6');
  });

  it('passes props to individual figures', () => {
    render(
      <FigureGallery 
        figures={mockFigures} 
        captionPosition="overlay-top"
        size="sm"
        rounded="lg"
      />
    );

    const figures = screen.getAllByRole('figure');
    expect(figures[0].className).toContain('max-w-sm');
  });

  it('handles figure clicks when onFigureClick is provided', () => {
    const handleFigureClick = vi.fn();
    
    render(
      <FigureGallery 
        figures={mockFigures} 
        onFigureClick={handleFigureClick}
      />
    );

    const firstFigure = screen.getAllByRole('figure')[0];
    expect(firstFigure.className).toContain('cursor-pointer');
    
    fireEvent.click(firstFigure);
    expect(handleFigureClick).toHaveBeenCalledWith(mockFigures[0], 0);
  });

  it('does not add cursor pointer when no click handler', () => {
    render(<FigureGallery figures={mockFigures} />);

    const firstFigure = screen.getAllByRole('figure')[0];
    expect(firstFigure.className).not.toContain('cursor-pointer');
  });

  it('handles figures without ids', () => {
    const figuresWithoutIds = [
      {
        content: <img src="/test1.jpg" alt="Test 1" />,
        caption: 'Caption 1',
      },
      {
        content: <img src="/test2.jpg" alt="Test 2" />,
        caption: 'Caption 2',
      },
    ];

    render(<FigureGallery figures={figuresWithoutIds} />);

    expect(screen.getAllByRole('figure')).toHaveLength(2);
  });

  it('supports custom className', () => {
    render(
      <FigureGallery 
        figures={mockFigures} 
        className="custom-gallery"
      />
    );

    const gallery = screen.getAllByRole('figure')[0].parentElement;
    expect(gallery?.className).toContain('custom-gallery');
  });

  it('forwards additional props to gallery container', () => {
    render(
      <FigureGallery 
        figures={mockFigures} 
        data-testid="custom-gallery"
        id="test-gallery"
      />
    );

    const gallery = screen.getByTestId('custom-gallery');
    expect(gallery.getAttribute('id')).toBe('test-gallery');
  });
});