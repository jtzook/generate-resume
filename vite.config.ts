import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [ vue() ],
  server: {
    port: 8080
  },
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false
  }
});