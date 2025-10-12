import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Drawer, DrawerHeader, DrawerContent, DrawerFooter } from './Drawer';

describe('Drawer', () => {
  it('renders nothing when isOpen is false', () => {
    render(
      <Drawer isOpen={false} onClose={() => {}}>
        <div data-testid="drawer-content">Drawer Content</div>
      </Drawer>
    );

    expect(screen.queryByTestId('drawer-content')).not.toBeInTheDocument();
  });

  it('renders drawer when isOpen is true', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <div data-testid="drawer-content">Drawer Content</div>
      </Drawer>
    );

    expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();

    render(
      <Drawer isOpen={true} onClose={onClose}>
        <div>Drawer Content</div>
      </Drawer>
    );

    const closeButton = screen.getByLabelText('Close drawer');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', () => {
    const onClose = vi.fn();

    render(
      <Drawer isOpen={true} onClose={onClose}>
        <div>Drawer Content</div>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on escape when closeOnEscape is false', () => {
    const onClose = vi.fn();

    render(
      <Drawer isOpen={true} onClose={onClose} closeOnEscape={false}>
        <div>Drawer Content</div>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();

    render(
      <Drawer isOpen={true} onClose={onClose}>
        <div>Drawer Content</div>
      </Drawer>
    );

    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/50');
    fireEvent.click(backdrop!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on overlay click when closeOnOverlayClick is false', () => {
    const onClose = vi.fn();

    render(
      <Drawer isOpen={true} onClose={onClose} closeOnOverlayClick={false}>
        <div>Drawer Content</div>
      </Drawer>
    );

    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/50');
    fireEvent.click(backdrop!);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('applies side positioning correctly', () => {
    const sides = ['left', 'right', 'top', 'bottom'] as const;
    const expectedClasses = ['inset-y-0 left-0', 'inset-y-0 right-0', 'inset-x-0 top-0', 'inset-x-0 bottom-0'];

    sides.forEach((side, index) => {
      const { rerender } = render(
        <Drawer isOpen={true} onClose={() => {}} side={side}>
          <div data-testid={`drawer-${side}`}>Content</div>
        </Drawer>
      );

      const drawer = screen.getByRole('dialog');
      const classes = expectedClasses[index].split(' ');
      classes.forEach(cls => {
        expect(drawer).toHaveClass(cls);
      });

      if (side !== 'bottom') {
        rerender(<div />);
      }
    });
  });

  it('applies size classes correctly for horizontal drawers', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    const expectedWidths = ['w-64', 'w-80', 'w-96', 'w-[28rem]'];

    sizes.forEach((size, index) => {
      const { rerender } = render(
        <Drawer isOpen={true} onClose={() => {}} side="right" size={size}>
          <div data-testid={`drawer-${size}`}>Content</div>
        </Drawer>
      );

      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveClass(expectedWidths[index]);

      if (size !== 'xl') {
        rerender(<div />);
      }
    });
  });

  it('applies size classes correctly for vertical drawers', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    const expectedHeights = ['h-48', 'h-64', 'h-80', 'h-96'];

    sizes.forEach((size, index) => {
      const { rerender } = render(
        <Drawer isOpen={true} onClose={() => {}} side="top" size={size}>
          <div data-testid={`drawer-${size}`}>Content</div>
        </Drawer>
      );

      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveClass(expectedHeights[index]);

      if (size !== 'xl') {
        rerender(<div />);
      }
    });
  });

  it('hides close button when showCloseButton is false', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}} showCloseButton={false}>
        <div>Drawer Content</div>
      </Drawer>
    );

    expect(screen.queryByLabelText('Close drawer')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}} className="custom-drawer">
        <div>Drawer Content</div>
      </Drawer>
    );

    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveClass('custom-drawer');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <div>Drawer Content</div>
      </Drawer>
    );

    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveAttribute('aria-modal', 'true');
  });
});

describe('DrawerHeader', () => {
  it('renders children correctly', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <DrawerHeader>
          <h2 data-testid="header-content">Header Title</h2>
        </DrawerHeader>
      </Drawer>
    );

    expect(screen.getByTestId('header-content')).toBeInTheDocument();
    expect(screen.getByText('Header Title')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <DrawerHeader data-testid="drawer-header">
          <h2>Header</h2>
        </DrawerHeader>
      </Drawer>
    );

    const header = screen.getByTestId('drawer-header');
    expect(header).toHaveClass('px-6', 'py-4', 'border-b', 'border-gray-200', 'bg-gray-50');
  });
});

describe('DrawerContent', () => {
  it('renders children correctly', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <DrawerContent>
          <div data-testid="content">Main content</div>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <DrawerContent data-testid="drawer-content">
          <div>Content</div>
        </DrawerContent>
      </Drawer>
    );

    const content = screen.getByTestId('drawer-content');
    expect(content).toHaveClass('px-6', 'py-4', 'flex-1');
  });
});

describe('DrawerFooter', () => {
  it('renders children correctly', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <DrawerFooter>
          <div data-testid="footer-content">Footer content</div>
        </DrawerFooter>
      </Drawer>
    );

    expect(screen.getByTestId('footer-content')).toBeInTheDocument();
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <DrawerFooter data-testid="drawer-footer">
          <div>Footer</div>
        </DrawerFooter>
      </Drawer>
    );

    const footer = screen.getByTestId('drawer-footer');
    expect(footer).toHaveClass('px-6', 'py-4', 'border-t', 'border-gray-200', 'bg-gray-50');
  });
});