import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

// Extend Vitest's expect with jest-dom matchers
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'vitest' {
  interface Assertion<T = any> extends jest.Matchers<void>, TestingLibraryMatchers<T, void> {}
}

// Mock browser APIs that components might need
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  },
});

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  value: class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
});

// Mock CSS.supports
Object.defineProperty(globalThis, 'CSS', {
  writable: true,
  value: {
    supports: () => false,
  },
});

// Ensure clean test environment
beforeEach(() => {
  // Ensure document.body exists and is clean
  if (!document.body) {
    document.documentElement.appendChild(document.createElement('body'));
  }
  document.body.innerHTML = '';
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});