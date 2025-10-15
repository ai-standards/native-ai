import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Test files
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.git', '.cache'],
    
    // Environment
    environment: 'node',
    
    // Global test utilities
    globals: true,
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/*.test.*',
        '**/*.spec.*'
      ]
    },
    
    // TypeScript support
    typecheck: {
      tsconfig: './tsconfig.json'
    }
  }
});