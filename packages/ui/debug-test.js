import { JSDOM } from 'jsdom';

// Create a new JSDOM environment like vitest would
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost:3000/',
  pretendToBeVisual: true,
  resources: 'usable',
});

// Set up global DOM variables
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', {
  value: dom.window.navigator,
  writable: true
});

// Check DOM state
console.log('DOM Check:');
console.log('- window:', typeof window);
console.log('- document:', typeof document);
console.log('- document.body:', document.body);
console.log('- document.body type:', typeof document.body);
console.log('- document.body can appendChild:', typeof document.body.appendChild);

// Test React Testing Library container creation
try {
  const { render } = await import('@testing-library/react');
  const React = await import('react');
  
  console.log('\nTesting RTL render...');
  const result = render(React.createElement('div', { 'data-testid': 'test' }, 'Hello'));
  console.log('RTL render successful!');
  console.log('Container:', result.container);
} catch (error) {
  console.log('\nRTL render failed:', error.message);
  console.log('Stack:', error.stack);
}