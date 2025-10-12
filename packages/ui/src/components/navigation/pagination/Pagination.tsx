import React from 'react';
import { cn } from '@/utils/cn';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of page buttons to show around current page */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Show previous/next buttons */
  showPrevNext?: boolean;
  /** Custom previous button content */
  previousLabel?: React.ReactNode;
  /** Custom next button content */
  nextLabel?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

const defaultPreviousIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const defaultNextIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ELLIPSIS = '...';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  previousLabel = defaultPreviousIcon,
  nextLabel = defaultNextIcon,
  disabled = false,
  className,
  ...props
}) => {
  const generatePageNumbers = () => {
    // If total pages <= 7, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, ELLIPSIS, totalPages];
    }

    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [1, ELLIPSIS, ...rightRange];
    }

    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [1, ELLIPSIS, ...middleRange, ELLIPSIS, totalPages];
    }

    return [];
  };

  const pages = generatePageNumbers();
  const canGoPrevious = currentPage > 1 && !disabled;
  const canGoNext = currentPage < totalPages && !disabled;

  const handlePageChange = (page: number) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };

  const buttonClass = (isActive = false, isDisabled = false) =>
    cn(
      'px-3 py-2 text-sm font-medium transition-colors duration-200',
      'border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
      {
        'bg-blue-600 text-white border-blue-600 hover:bg-blue-700': isActive,
        'text-gray-900 bg-white': !isActive && !isDisabled,
        'text-gray-400 bg-gray-100 cursor-not-allowed': isDisabled,
      }
    );

  const navButtonClass = (isDisabled = false) =>
    cn(
      'px-3 py-2 text-sm font-medium transition-colors duration-200',
      'border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
      'flex items-center justify-center',
      {
        'text-gray-900 bg-white hover:bg-gray-50': !isDisabled,
        'text-gray-400 bg-gray-100 cursor-not-allowed': isDisabled,
      }
    );

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={cn('flex items-center justify-center space-x-0', className)}
      aria-label="Pagination"
      {...props}
    >
      <div className="flex -space-x-px rounded-md shadow-sm">
        {showFirstLast && (
          <button
            className={cn(navButtonClass(currentPage === 1 || disabled), 'rounded-l-md')}
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1 || disabled}
            aria-label="Go to first page"
          >
            First
          </button>
        )}

        {showPrevNext && (
          <button
            className={cn(navButtonClass(!canGoPrevious), showFirstLast ? '' : 'rounded-l-md')}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!canGoPrevious}
            aria-label="Go to previous page"
          >
            {previousLabel}
          </button>
        )}

        {pages.map((page, index) => {
          if (page === ELLIPSIS) {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              className={buttonClass(isActive, disabled)}
              onClick={() => handlePageChange(pageNumber)}
              disabled={disabled}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Go to page ${pageNumber}`}
            >
              {pageNumber}
            </button>
          );
        })}

        {showPrevNext && (
          <button
            className={cn(navButtonClass(!canGoNext), showFirstLast ? '' : 'rounded-r-md')}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!canGoNext}
            aria-label="Go to next page"
          >
            {nextLabel}
          </button>
        )}

        {showFirstLast && (
          <button
            className={cn(navButtonClass(currentPage === totalPages || disabled), 'rounded-r-md')}
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages || disabled}
            aria-label="Go to last page"
          >
            Last
          </button>
        )}
      </div>
    </nav>
  );
};