import { describe, it, expect } from 'vitest';
import { WebSecureAdapter } from './web-secure-adapter';

describe('WebSecureAdapter', () => {
  it('should be instantiable', () => {
    const adapter = new WebSecureAdapter();
    expect(adapter).toBeInstanceOf(WebSecureAdapter);
  });

  it('should have all required methods', () => {
    const adapter = new WebSecureAdapter();
    expect(typeof adapter.setKey).toBe('function');
    expect(typeof adapter.getKey).toBe('function');
    expect(typeof adapter.deleteKey).toBe('function');
    expect(typeof adapter.listAccounts).toBe('function');
  });

  it('should have clearAll method for security', () => {
    const adapter = new WebSecureAdapter();
    expect(typeof adapter.clearAll).toBe('function');
  });
});