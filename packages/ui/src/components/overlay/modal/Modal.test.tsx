import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './Modal';

describe('Modal', () => {
  it('renders nothing when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
  });

  it('renders modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on escape when closeOnEscape is false', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} closeOnEscape={false}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/50');
    fireEvent.click(backdrop!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on overlay click when closeOnOverlayClick is false', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} closeOnOverlayClick={false}>
        <div>Modal Content</div>
      </Modal>
    );

    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/50');
    fireEvent.click(backdrop!);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('applies size classes correctly', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
    const expectedClasses = ['max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-full'];

    sizes.forEach((size, index) => {
      const { rerender } = render(
        <Modal isOpen={true} onClose={() => {}} size={size}>
          <div data-testid={`modal-${size}`}>Content</div>
        </Modal>
      );

      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass(expectedClasses[index]);

      if (size !== 'full') {
        rerender(<div />);
      }
    });
  });

  it('applies position classes correctly', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}} position="center">
        <div>Centered Modal</div>
      </Modal>
    );

    let container = document.querySelector('.items-center.justify-center');
    expect(container).toBeInTheDocument();

    rerender(
      <Modal isOpen={true} onClose={() => {}} position="top">
        <div>Top Modal</div>
      </Modal>
    );

    container = document.querySelector('.items-start.justify-center.pt-16');
    expect(container).toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} showCloseButton={false}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} className="custom-modal">
        <div>Modal Content</div>
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('custom-modal');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('tabIndex', '-1');
  });
});

describe('ModalHeader', () => {
  it('renders children correctly', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalHeader>
          <h2 data-testid="header-content">Header Title</h2>
        </ModalHeader>
      </Modal>
    );

    expect(screen.getByTestId('header-content')).toBeInTheDocument();
    expect(screen.getByText('Header Title')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalHeader data-testid="modal-header">
          <h2>Header</h2>
        </ModalHeader>
      </Modal>
    );

    const header = screen.getByTestId('modal-header');
    expect(header).toHaveClass('px-6', 'py-4', 'border-b', 'border-gray-200');
  });

  it('accepts custom className', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalHeader className="custom-header" data-testid="custom-header">
          <h2>Header</h2>
        </ModalHeader>
      </Modal>
    );

    const header = screen.getByTestId('custom-header');
    expect(header).toHaveClass('custom-header');
    expect(header).toHaveClass('px-6'); // Default class should still be present
  });
});

describe('ModalContent', () => {
  it('renders children correctly', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalContent>
          <div data-testid="content">Main content</div>
        </ModalContent>
      </Modal>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalContent data-testid="modal-content">
          <div>Content</div>
        </ModalContent>
      </Modal>
    );

    const content = screen.getByTestId('modal-content');
    expect(content).toHaveClass('px-6', 'py-4', 'flex-1', 'overflow-y-auto');
  });
});

describe('ModalFooter', () => {
  it('renders children correctly', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalFooter>
          <div data-testid="footer-content">Footer content</div>
        </ModalFooter>
      </Modal>
    );

    expect(screen.getByTestId('footer-content')).toBeInTheDocument();
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('applies default styling', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalFooter data-testid="modal-footer">
          <div>Footer</div>
        </ModalFooter>
      </Modal>
    );

    const footer = screen.getByTestId('modal-footer');
    expect(footer).toHaveClass('px-6', 'py-4', 'border-t', 'border-gray-200', 'flex', 'items-center', 'justify-end', 'gap-3');
  });
});

describe('Modal Composition', () => {
  it('renders all modal components together', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalHeader data-testid="header">
          <h2>Modal Title</h2>
        </ModalHeader>
        <ModalContent data-testid="content">
          <p>Modal content goes here</p>
        </ModalContent>
        <ModalFooter data-testid="footer">
          <button>Cancel</button>
          <button>Save</button>
        </ModalFooter>
      </Modal>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal content goes here')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});