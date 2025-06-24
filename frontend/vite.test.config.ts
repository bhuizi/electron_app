import { defineConfig } from 'vitest/config';
import path from 'path';
export default defineConfig({
  test: {
    environment: 'node', // Pure utility functions don't need DOM
    globals: true, // Access describe, it, expect without imports
    include: ['src/renderer/*.test.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
