import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

// Extend Vitest's expect with jest-dom matchers
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'vitest' {
  interface Assertion<T = any> extends jest.Matchers<void>, TestingLibraryMatchers<T, void> {}
}

// Store original DOM references to restore them if corrupted
const originalDocument = global.document;
const originalWindow = global.window;

// Setup before each test
beforeEach(() => {
  // Ensure DOM is in a clean state
  if (!global.document || !global.document.body) {
    console.warn('DOM corrupted, restoring...');
    global.document = originalDocument;
    global.window = originalWindow;
  }
  
  // Ensure document.body exists and is clean
  if (global.document && global.document.body) {
    global.document.body.innerHTML = '';
  }

  // Clear any timers that might be left over
  vi.clearAllTimers();
  vi.useRealTimers();
});

// Cleanup after each test
afterEach(() => {
  try {
    cleanup();
  } catch (error) {
    console.warn('Cleanup failed:', error);
  }
  
  // Clear all timers to prevent hanging
  vi.clearAllTimers();
  vi.useRealTimers();
  
  // Ensure DOM is still intact after test
  if (!global.document || !global.document.body) {
    console.warn('DOM corrupted during test, will restore in next beforeEach');
  }
});