# Pagination Component

A page navigation component for browsing large datasets or content collections with intelligent page number display and ellipsis truncation.

## Features

- **Smart Page Display** - Shows relevant page numbers with ellipsis for large ranges
- **Navigation Controls** - Previous/next and first/last page buttons
- **Keyboard Accessible** - Full keyboard navigation support
- **Customizable Layout** - Configurable sibling count and button visibility
- **Responsive Design** - Works across different screen sizes
- **Disabled State** - Supports disabled state for loading scenarios

## Usage

```tsx
import { Pagination } from '@/components/navigation/pagination';

// Basic usage
const [currentPage, setCurrentPage] = useState(1);

<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
/>

// Customized
<Pagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  siblingCount={2}
  showFirstLast={true}
  previousLabel="Previous"
  nextLabel="Next"
/>

// Minimal layout
<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
  showFirstLast={false}
  siblingCount={1}
/>
```

## Props

- `currentPage` - Current active page (1-indexed)
- `totalPages` - Total number of pages
- `onPageChange` - Callback when page changes  
- `siblingCount` - Number of page buttons around current page (default: 1)
- `showFirstLast` - Show first/last page buttons (default: true)
- `showPrevNext` - Show previous/next buttons (default: true)
- `previousLabel` - Custom previous button content
- `nextLabel` - Custom next button content
- `disabled` - Disabled state for all buttons

## Accessibility

- Uses `nav` element with `aria-label="Pagination"`
- Current page marked with `aria-current="page"`
- Descriptive `aria-label` attributes on navigation buttons
- Keyboard navigation support for all interactive elements
- Proper disabled state handling