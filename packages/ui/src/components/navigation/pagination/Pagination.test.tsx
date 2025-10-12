import { describe, it, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<Pagination {...defaultProps} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeTruthy();
    expect(nav.getAttribute('aria-label')).toBe('Pagination');
  });

  it('renders page numbers correctly', () => {
    render(<Pagination {...defaultProps} currentPage={5} />);
    
    // Should show current page
    const currentPage = screen.getByText('5');
    expect(currentPage.getAttribute('aria-current')).toBe('page');
    
    // Should show adjacent pages
    expect(screen.getByText('4')).toBeTruthy();
    expect(screen.getByText('6')).toBeTruthy();
  });

  it('shows first and last buttons by default', () => {
    render(<Pagination {...defaultProps} />);
    
    expect(screen.getByText('First')).toBeTruthy();
    expect(screen.getByText('Last')).toBeTruthy();
  });

  it('shows prev/next buttons by default', () => {
    render(<Pagination {...defaultProps} />);
    
    const prevButton = screen.getByLabelText('Go to previous page');
    const nextButton = screen.getByLabelText('Go to next page');
    
    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  it('calls onPageChange when page button is clicked', () => {
    const onPageChange = vi.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when next button is clicked', () => {
    const onPageChange = vi.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
    
    const nextButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when previous button is clicked', () => {
    const onPageChange = vi.fn();
    render(<Pagination {...defaultProps} currentPage={3} onPageChange={onPageChange} />);
    
    const prevButton = screen.getByLabelText('Go to previous page');
    fireEvent.click(prevButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('disables previous button on first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    
    const prevButton = screen.getByLabelText('Go to previous page');
    expect(prevButton.hasAttribute('disabled')).toBe(true);
    
    const firstButton = screen.getByText('First');
    expect(firstButton.hasAttribute('disabled')).toBe(true);
  });

  it('disables next button on last page', () => {
    render(<Pagination {...defaultProps} currentPage={10} />);
    
    const nextButton = screen.getByLabelText('Go to next page');
    expect(nextButton.hasAttribute('disabled')).toBe(true);
    
    const lastButton = screen.getByText('Last');
    expect(lastButton.hasAttribute('disabled')).toBe(true);
  });

  test('hides first/last buttons when showFirstLast is false', () => {
    render(<Pagination {...defaultProps} showFirstLast={false} />);
    
    expect(screen.queryByText('First')).toBeNull();
    expect(screen.queryByText('Last')).toBeNull();
  });

  test('hides prev/next buttons when showPrevNext is false', () => {
    render(<Pagination {...defaultProps} showPrevNext={false} />);
    
    expect(screen.queryByLabelText('Go to previous page')).toBeNull();
    expect(screen.queryByLabelText('Go to next page')).toBeNull();
  });

  test('shows ellipsis for large page counts', () => {
    render(<Pagination {...defaultProps} currentPage={15} totalPages={30} />);
    
    const ellipses = screen.getAllByText('...');
    expect(ellipses.length).toBeGreaterThan(0);
  });

  test('shows all pages when total is small', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={vi.fn()} />);
    
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
    expect(screen.getByText('4')).toBeTruthy();
    expect(screen.getByText('5')).toBeTruthy();
    
    expect(screen.queryByText('...')).toBeNull();
  });

  test('renders custom prev/next labels', () => {
    render(
      <Pagination 
        {...defaultProps} 
        previousLabel="Prev" 
        nextLabel="Next"
      />
    );
    
    expect(screen.getByText('Prev')).toBeTruthy();
    expect(screen.getByText('Next')).toBeTruthy();
  });

  test('disables all buttons when disabled prop is true', () => {
    render(<Pagination {...defaultProps} disabled />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button.hasAttribute('disabled')).toBe(true);
    });
  });

  test('does not call onPageChange when disabled', () => {
    const onPageChange = vi.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChange} disabled />);
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test('does not render when totalPages is 1', () => {
    const { container } = render(<Pagination {...defaultProps} totalPages={1} />);
    
    expect(container.firstChild).toBeNull();
  });

  test('does not render when totalPages is 0', () => {
    const { container } = render(<Pagination {...defaultProps} totalPages={0} />);
    
    expect(container.firstChild).toBeNull();
  });

  it('applies custom className', () => {
    const { container } = render(<Pagination {...defaultProps} className="custom-class" />);
    
    const nav = container.firstChild as Element;
    expect(nav.classList.contains('custom-class')).toBe(true);
  });

  it('forwards additional props', () => {
    render(<Pagination {...defaultProps} data-testid="pagination" id="test-pagination" />);
    
    const nav = screen.getByTestId('pagination');
    expect(nav.getAttribute('id')).toBe('test-pagination');
  });
});