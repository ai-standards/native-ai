import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Extend Vitest's expect with jest-dom matchers
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'vitest' {
  interface Assertion<T = any> extends jest.Matchers<void>, TestingLibraryMatchers<T, void> {}
}

// Cleanup after each test
afterEach(() => {
  cleanup();
  // Clear all timers to prevent hanging
  vi.clearAllTimers();
  vi.useRealTimers();
});