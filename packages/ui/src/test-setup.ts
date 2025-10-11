import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
  // Clear all timers to prevent hanging
  vi.clearAllTimers();
  vi.useRealTimers();
});