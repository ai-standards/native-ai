import { render, screen } from '@testing-library/react';
import { Grid, GridItem } from './Grid';

describe('Grid', () => {
  it('renders children correctly', () => {
    render(
      <Grid>
        <div data-testid="child">Test content</div>
      </Grid>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(
      <Grid data-testid="grid">
        <div>Content</div>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('grid'); // base class
    expect(grid).toHaveClass('grid-cols-auto'); // default cols
    expect(grid).toHaveClass('gap-4'); // default gap (md)
  });

  it('applies column configurations correctly', () => {
    const cols = [1, 2, 3, 4, 5, 6, 12] as const;
    const expectedClasses = [
      'grid-cols-1',
      'grid-cols-2', 
      'grid-cols-3',
      'grid-cols-4',
      'grid-cols-5',
      'grid-cols-6',
      'grid-cols-12'
    ];

    cols.forEach((colCount, index) => {
      const { rerender } = render(
        <Grid cols={colCount} data-testid={`grid-${colCount}`}>
          <div>Content</div>
        </Grid>
      );

      const grid = screen.getByTestId(`grid-${colCount}`);
      expect(grid).toHaveClass(expectedClasses[index]);

      if (colCount !== 12) {
        rerender(<div />);
      }
    });
  });

  it('applies row configurations correctly', () => {
    const rows = [1, 2, 3, 4, 5, 6] as const;
    const expectedClasses = [
      'grid-rows-1',
      'grid-rows-2',
      'grid-rows-3', 
      'grid-rows-4',
      'grid-rows-5',
      'grid-rows-6'
    ];

    rows.forEach((rowCount, index) => {
      const { rerender } = render(
        <Grid rows={rowCount} data-testid={`grid-${rowCount}-rows`}>
          <div>Content</div>
        </Grid>
      );

      const grid = screen.getByTestId(`grid-${rowCount}-rows`);
      expect(grid).toHaveClass(expectedClasses[index]);

      if (rowCount !== 6) {
        rerender(<div />);
      }
    });
  });

  it('applies gap sizes correctly', () => {
    const gaps = ['none', 'sm', 'md', 'lg', 'xl'] as const;
    const expectedClasses = ['gap-0', 'gap-2', 'gap-4', 'gap-6', 'gap-8'];

    gaps.forEach((gap, index) => {
      const { rerender } = render(
        <Grid gap={gap} data-testid={`grid-${gap}`}>
          <div>Content</div>
        </Grid>
      );

      const grid = screen.getByTestId(`grid-${gap}`);
      expect(grid).toHaveClass(expectedClasses[index]);

      if (gap !== 'xl') {
        rerender(<div />);
      }
    });
  });

  it('applies responsive behavior when responsive prop is true', () => {
    render(
      <Grid responsive data-testid="responsive-grid">
        <div>Content</div>
      </Grid>
    );

    const grid = screen.getByTestId('responsive-grid');
    expect(grid).toHaveClass('sm:grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
    expect(grid).toHaveClass('xl:grid-cols-4');
  });

  it('applies alignment styles correctly', () => {
    const alignments = ['start', 'center', 'end', 'stretch'] as const;
    const expectedClasses = ['items-start', 'items-center', 'items-end', 'items-stretch'];

    alignments.forEach((align, index) => {
      const { rerender } = render(
        <Grid align={align} data-testid={`grid-${align}`}>
          <div>Content</div>
        </Grid>
      );

      const grid = screen.getByTestId(`grid-${align}`);
      expect(grid).toHaveClass(expectedClasses[index]);

      if (align !== 'stretch') {
        rerender(<div />);
      }
    });
  });

  it('applies justify styles correctly', () => {
    const justifications = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
    const expectedClasses = [
      'justify-start',
      'justify-center', 
      'justify-end',
      'justify-between',
      'justify-around',
      'justify-evenly'
    ];

    justifications.forEach((justify, index) => {
      const { rerender } = render(
        <Grid justify={justify} data-testid={`grid-${justify}`}>
          <div>Content</div>
        </Grid>
      );

      const grid = screen.getByTestId(`grid-${justify}`);
      expect(grid).toHaveClass(expectedClasses[index]);

      if (justify !== 'evenly') {
        rerender(<div />);
      }
    });
  });

  it('forwards additional props to the div element', () => {
    render(
      <Grid
        data-testid="grid-with-props"
        id="custom-id"
        role="grid"
        aria-label="Custom grid"
      >
        <div>Content</div>
      </Grid>
    );

    const grid = screen.getByTestId('grid-with-props');
    expect(grid).toHaveAttribute('id', 'custom-id');
    expect(grid).toHaveAttribute('role', 'grid');
    expect(grid).toHaveAttribute('aria-label', 'Custom grid');
  });

  it('applies custom className alongside default classes', () => {
    render(
      <Grid className="custom-class" data-testid="grid-with-custom-class">
        <div>Content</div>
      </Grid>
    );

    const grid = screen.getByTestId('grid-with-custom-class');
    expect(grid).toHaveClass('custom-class');
    expect(grid).toHaveClass('grid'); // Base class should still be present
  });
});

describe('GridItem', () => {
  it('renders children correctly', () => {
    render(
      <GridItem>
        <div data-testid="item-child">Grid item content</div>
      </GridItem>
    );

    expect(screen.getByTestId('item-child')).toBeInTheDocument();
    expect(screen.getByText('Grid item content')).toBeInTheDocument();
  });

  it('applies column span correctly', () => {
    const colSpans = [1, 2, 3, 4, 5, 6, 12, 'full', 'auto'] as const;
    const expectedClasses = [
      'col-span-1',
      'col-span-2',
      'col-span-3',
      'col-span-4', 
      'col-span-5',
      'col-span-6',
      'col-span-12',
      'col-span-full',
      'col-auto'
    ];

    colSpans.forEach((colSpan, index) => {
      const { rerender } = render(
        <GridItem colSpan={colSpan} data-testid={`item-${colSpan}`}>
          <div>Content</div>
        </GridItem>
      );

      const item = screen.getByTestId(`item-${colSpan}`);
      expect(item).toHaveClass(expectedClasses[index]);

      if (colSpan !== 'auto') {
        rerender(<div />);
      }
    });
  });

  it('applies row span correctly', () => {
    const rowSpans = [1, 2, 3, 4, 5, 6, 'full', 'auto'] as const;
    const expectedClasses = [
      'row-span-1',
      'row-span-2',
      'row-span-3',
      'row-span-4',
      'row-span-5', 
      'row-span-6',
      'row-span-full',
      'row-auto'
    ];

    rowSpans.forEach((rowSpan, index) => {
      const { rerender } = render(
        <GridItem rowSpan={rowSpan} data-testid={`item-row-${rowSpan}`}>
          <div>Content</div>
        </GridItem>
      );

      const item = screen.getByTestId(`item-row-${rowSpan}`);
      expect(item).toHaveClass(expectedClasses[index]);

      if (rowSpan !== 'auto') {
        rerender(<div />);
      }
    });
  });

  it('applies column positioning correctly', () => {
    render(
      <GridItem colStart={2} colEnd={4} data-testid="positioned-item">
        <div>Content</div>
      </GridItem>
    );

    const item = screen.getByTestId('positioned-item');
    expect(item).toHaveClass('col-start-2');
    expect(item).toHaveClass('col-end-4');
  });

  it('applies row positioning correctly', () => {
    render(
      <GridItem rowStart={1} rowEnd={3} data-testid="row-positioned-item">
        <div>Content</div>
      </GridItem>
    );

    const item = screen.getByTestId('row-positioned-item');
    expect(item).toHaveClass('row-start-1');
    expect(item).toHaveClass('row-end-3');
  });

  it('combines multiple positioning props correctly', () => {
    render(
      <GridItem
        colSpan={2}
        rowSpan={1}
        colStart={3}
        rowStart={2}
        className="custom-item"
        data-testid="complex-item"
      >
        <div>Content</div>
      </GridItem>
    );

    const item = screen.getByTestId('complex-item');
    expect(item).toHaveClass('col-span-2');
    expect(item).toHaveClass('row-span-1');
    expect(item).toHaveClass('col-start-3');
    expect(item).toHaveClass('row-start-2');
    expect(item).toHaveClass('custom-item');
  });

  it('forwards additional props to the div element', () => {
    render(
      <GridItem
        data-testid="item-with-props"
        id="grid-item-id"
        role="gridcell"
        aria-label="Custom grid item"
      >
        <div>Content</div>
      </GridItem>
    );

    const item = screen.getByTestId('item-with-props');
    expect(item).toHaveAttribute('id', 'grid-item-id');
    expect(item).toHaveAttribute('role', 'gridcell');
    expect(item).toHaveAttribute('aria-label', 'Custom grid item');
  });
});