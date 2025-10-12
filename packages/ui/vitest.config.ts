import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    testTimeout: 3000,   // 3 seconds timeout for individual tests
    hookTimeout: 2000,   // 2 seconds timeout for hooks
    pool: 'forks',       // Use forks instead of threads for better isolation
    poolOptions: {
      forks: {
        singleFork: true // Run tests sequentially to avoid resource conflicts
      }
    },
    maxConcurrency: 1,   // Run tests one at a time
    isolate: true,       // Isolate each test file
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json'],
      exclude: [
        'coverage/**',
        'dist/**',
        '**/node_modules/**',
        '**/[.]**',
        'packages/*/test?(s)/**',
        '**/*.d.ts',
        '**/virtual:*',
        '**/__x00__*',
        '**/\x00*',
        'cypress/**',
        'test?(s)/**',
        'test?(-*).?(c|m)[jt]s?(x)',
        '**/*{.,-}test.?(c|m)[jt]s?(x)',
        '**/*{.,-}spec.?(c|m)[jt]s?(x)',
        '**/__tests__/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
        // Exclude Storybook stories
        '**/*.stories.@(js|jsx|ts|tsx)',
        // Exclude JavaScript files
        '**/*.js',
        // Exclude other development/build files
        '**/src/test-setup.ts',
        '**/src/types.ts',
        '**/src/**/index.ts'
      ],
      include: [
        'src/**/*.{ts,tsx}',
      ],
      all: true,
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
});