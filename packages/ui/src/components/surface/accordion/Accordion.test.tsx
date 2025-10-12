import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

describe('Accordion', () => {
  it('renders children correctly', () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies default variant and type correctly', () => {
    render(
      <Accordion data-testid="accordion">
        <AccordionItem value="test">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByTestId('accordion');
    expect(accordion).toHaveClass('border', 'border-gray-200', 'rounded-lg');
  });

  it('toggles accordion item when trigger is clicked', () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Click me</AccordionTrigger>
          <AccordionContent>
            <div data-testid="content">Hidden content</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByRole('button');
    const item = screen.getByTestId('content').closest('[data-state]');

    // Initially closed
    expect(item).toHaveAttribute('data-state', 'closed');

    // Click to open
    fireEvent.click(trigger);
    expect(item).toHaveAttribute('data-state', 'open');

    // Click to close
    fireEvent.click(trigger);
    expect(item).toHaveAttribute('data-state', 'closed');
  });

  it('supports multiple type - multiple items can be open', () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>
            <div data-testid="content-1">First content</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>
            <div data-testid="content-2">Second content</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const firstTrigger = screen.getByText('First');
    const secondTrigger = screen.getByText('Second');
    const firstItem = screen.getByTestId('content-1').closest('[data-state]');
    const secondItem = screen.getByTestId('content-2').closest('[data-state]');

    // Open first item
    fireEvent.click(firstTrigger);
    expect(firstItem).toHaveAttribute('data-state', 'open');

    // Open second item (first should still be open)
    fireEvent.click(secondTrigger);
    expect(firstItem).toHaveAttribute('data-state', 'open');
    expect(secondItem).toHaveAttribute('data-state', 'open');
  });

  it('supports single type - only one item can be open', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>
            <div data-testid="content-1">First content</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>
            <div data-testid="content-2">Second content</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const firstTrigger = screen.getByText('First');
    const secondTrigger = screen.getByText('Second');
    const firstItem = screen.getByTestId('content-1').closest('[data-state]');
    const secondItem = screen.getByTestId('content-2').closest('[data-state]');

    // Open first item
    fireEvent.click(firstTrigger);
    expect(firstItem).toHaveAttribute('data-state', 'open');

    // Open second item (first should close)
    fireEvent.click(secondTrigger);
    expect(firstItem).toHaveAttribute('data-state', 'closed');
    expect(secondItem).toHaveAttribute('data-state', 'open');
  });

  it('calls onValueChange when items are toggled', () => {
    const onValueChange = vi.fn();

    render(
      <Accordion onValueChange={onValueChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    expect(onValueChange).toHaveBeenCalledWith('item-1');
  });

  it('respects defaultValue prop', () => {
    render(
      <Accordion defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>
            <div data-testid="content">Content</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const item = screen.getByTestId('content').closest('[data-state]');
    expect(item).toHaveAttribute('data-state', 'open');
  });

  it('handles disabled accordion items', () => {
    render(
      <Accordion>
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>Disabled</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const item = screen.getByText('Content').closest('[data-disabled]');
    expect(item).toHaveAttribute('data-disabled', 'true');
    expect(item).toHaveClass('opacity-50', 'pointer-events-none');
  });

  it('applies variant styles correctly', () => {
    const { rerender } = render(
      <Accordion variant="outlined" data-testid="accordion-outlined">
        <AccordionItem value="test">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByTestId('accordion-outlined');
    expect(accordion).toHaveClass('border-2', 'border-gray-300');

    rerender(
      <Accordion variant="separated" data-testid="accordion-separated">
        <AccordionItem value="test">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const separatedAccordion = screen.getByTestId('accordion-separated');
    expect(separatedAccordion).toHaveClass('space-y-2');
  });

  it('throws error when accordion components are used outside Accordion', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(
        <AccordionItem value="test">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      );
    }).toThrow('useAccordion must be used within an Accordion component');

    consoleSpy.mockRestore();
  });

  it('forwards additional props correctly', () => {
    render(
      <Accordion data-testid="accordion-with-props" id="custom-accordion">
        <AccordionItem value="item-1" data-testid="item-with-props">
          <AccordionTrigger data-testid="trigger-with-props">Test</AccordionTrigger>
          <AccordionContent data-testid="content-with-props">Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByTestId('accordion-with-props')).toHaveAttribute('id', 'custom-accordion');
    expect(screen.getByTestId('item-with-props')).toBeInTheDocument();
    expect(screen.getByTestId('trigger-with-props')).toBeInTheDocument();
    expect(screen.getByTestId('content-with-props')).toBeInTheDocument();
  });
});