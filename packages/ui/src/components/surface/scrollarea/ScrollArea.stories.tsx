import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import { ScrollArea, ScrollAreaRef } from './ScrollArea';

const meta = {
  title: 'Surface/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Custom scrollable regions with enhanced styling and fade effects.',
      },
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea maxHeight="200px" className="w-64 border rounded-lg">
      <div className="p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="py-2 border-b last:border-b-0">
            Item {i + 1} - This is some content that makes the container scrollable
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const ScrollbarVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Default Scrollbar</h3>
        <ScrollArea scrollbarVariant="default" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="py-2">Default scrollbar item {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Minimal Scrollbar</h3>
        <ScrollArea scrollbarVariant="minimal" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="py-2">Minimal scrollbar item {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Hidden Scrollbar</h3>
        <ScrollArea scrollbarVariant="hidden" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="py-2">Hidden scrollbar item {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea direction="horizontal" className="w-64 border rounded-lg">
      <div className="flex p-4 gap-4" style={{ width: '600px' }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="flex-shrink-0 w-20 h-16 bg-blue-100 border rounded flex items-center justify-center text-sm">
            Card {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const BothDirections: Story = {
  render: () => (
    <ScrollArea direction="both" maxHeight="200px" className="w-64 border rounded-lg">
      <div className="p-4" style={{ width: '400px' }}>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="py-2 whitespace-nowrap">
            Long horizontal content that extends beyond container width - Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithFadeEdges: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Small Fade</h3>
        <ScrollArea fadeEdges fadeSize="sm" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="py-2">Fade edges item {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Fade</h3>
        <ScrollArea fadeEdges fadeSize="lg" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="py-2">Large fade item {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};

export const WithScrollControls: Story = {
  render: () => {
    const scrollRef = useRef<ScrollAreaRef>(null);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => scrollRef.current?.scrollToTop()}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Top
          </button>
          <button
            onClick={() => scrollRef.current?.scrollToBottom()}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Bottom
          </button>
          <button
            onClick={() => scrollRef.current?.scrollTo({ top: 300, behavior: 'smooth' })}
            className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
          >
            Middle
          </button>
        </div>
        
        <ScrollArea
          ref={scrollRef}
          fadeEdges
          maxHeight="200px"
          className="w-64 border rounded-lg"
          onScrollChange={(scrollTop) => console.log('Scroll position:', scrollTop)}
        >
          <div className="p-4">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="py-2 border-b last:border-b-0">
                Controllable scroll item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  },
};

export const CodeExample: Story = {
  render: () => (
    <ScrollArea
      maxHeight="300px"
      fadeEdges
      scrollbarVariant="minimal"
      className="w-80 border rounded-lg bg-gray-50"
    >
      <pre className="p-4 text-xs">
        <code>{`function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Generate first 20 fibonacci numbers
const numbers = [];
for (let i = 0; i < 20; i++) {
  numbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:');
console.log(numbers);

// Calculate sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Find average
const average = sum / numbers.length;
console.log('Average:', average);

// This is a long code example that demonstrates
// how the ScrollArea component works with code
// content that extends beyond the visible area.`}</code>
      </pre>
    </ScrollArea>
  ),
};