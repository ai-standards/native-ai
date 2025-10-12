import { describe, it, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const basicItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current', isActive: true },
  ];

  it('renders with default props', () => {
    render(<Breadcrumb items={basicItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeTruthy();
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb');
  });

  it('renders all items', () => {
    render(<Breadcrumb items={basicItems} />);
    
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Products')).toBeTruthy();
    expect(screen.getByText('Current')).toBeTruthy();
  });

  it('renders links correctly', () => {
    render(<Breadcrumb items={basicItems} />);
    
    const homeLink = screen.getByText('Home');
    expect(homeLink.tagName).toBe('A');
    expect(homeLink.getAttribute('href')).toBe('/');
    
    const productsLink = screen.getByText('Products');
    expect(productsLink.getAttribute('href')).toBe('/products');
  });

  it('marks active item correctly', () => {
    render(<Breadcrumb items={basicItems} />);
    
    const currentItem = screen.getByText('Current');
    expect(currentItem.getAttribute('aria-current')).toBe('page');
  });

  it('handles click handlers', () => {
    let clicked = false;
    const items = [
      { label: 'Dashboard', onClick: () => { clicked = true; } },
      { label: 'Current', isActive: true },
    ];
    
    render(<Breadcrumb items={items} />);
    
    const dashboardButton = screen.getByText('Dashboard');
    expect(dashboardButton.tagName).toBe('BUTTON');
    
    fireEvent.click(dashboardButton);
    expect(clicked).toBe(true);
  });

  it('renders custom separator', () => {
    render(<Breadcrumb items={basicItems} separator={<span>/</span>} />);
    
    // Should find custom separator
    const separators = screen.getAllByText('/');
    expect(separators).toHaveLength(2); // Between 3 items = 2 separators
  });

  test('truncates items when maxItems is set', () => {
    const longItems = [
      { label: 'Item 1', href: '/1' },
      { label: 'Item 2', href: '/2' },
      { label: 'Item 3', href: '/3' },
      { label: 'Item 4', href: '/4' },
      { label: 'Item 5', href: '/5' },
      { label: 'Current', isActive: true },
    ];
    
    render(<Breadcrumb items={longItems} maxItems={4} />);
    
    // Should show ellipsis
    expect(screen.getByText('...')).toBeTruthy();
    
    // Should show first item
    expect(screen.getByText('Item 1')).toBeTruthy();
    
    // Should show last item
    expect(screen.getByText('Current')).toBeTruthy();
    
    // Should not show middle items
    expect(screen.queryByText('Item 3')).toBeNull();
  });

  test('respects itemsBeforeCollapse and itemsAfterCollapse', () => {
    const longItems = [
      { label: 'Item 1', href: '/1' },
      { label: 'Item 2', href: '/2' },
      { label: 'Item 3', href: '/3' },
      { label: 'Item 4', href: '/4' },
      { label: 'Item 5', href: '/5' },
      { label: 'Current', isActive: true },
    ];
    
    render(
      <Breadcrumb 
        items={longItems} 
        maxItems={5}
        itemsBeforeCollapse={2}
        itemsAfterCollapse={2}
      />
    );
    
    // Should show first 2 items
    expect(screen.getByText('Item 1')).toBeTruthy();
    expect(screen.getByText('Item 2')).toBeTruthy();
    
    // Should show ellipsis
    expect(screen.getByText('...')).toBeTruthy();
    
    // Should show last 2 items
    expect(screen.getByText('Item 5')).toBeTruthy();
    expect(screen.getByText('Current')).toBeTruthy();
    
    // Should not show middle items
    expect(screen.queryByText('Item 3')).toBeNull();
    expect(screen.queryByText('Item 4')).toBeNull();
  });

  test('does not truncate when items length is within maxItems', () => {
    const shortItems = [
      { label: 'Home', href: '/' },
      { label: 'Current', isActive: true },
    ];
    
    render(<Breadcrumb items={shortItems} maxItems={5} />);
    
    expect(screen.queryByText('...')).toBeNull();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Current')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(<Breadcrumb items={basicItems} className="custom-class" />);
    
    const nav = container.firstChild as Element;
    expect(nav.classList.contains('custom-class')).toBe(true);
  });

  it('forwards additional props', () => {
    render(<Breadcrumb items={basicItems} data-testid="breadcrumb" id="test-breadcrumb" />);
    
    const nav = screen.getByTestId('breadcrumb');
    expect(nav.getAttribute('id')).toBe('test-breadcrumb');
  });

  test('handles single item', () => {
    const singleItem = [{ label: 'Only Item', isActive: true }];
    
    render(<Breadcrumb items={singleItem} />);
    
    expect(screen.getByText('Only Item')).toBeTruthy();
    expect(screen.queryByText('...')).toBeNull();
  });

  test('handles empty items array', () => {
    render(<Breadcrumb items={[]} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeTruthy();
    expect(nav.textContent).toBe('');
  });
});