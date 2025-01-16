import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split React and ReactDOM into a separate chunk
        },
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve((new URL('.', import.meta.url).pathname, 'src')),
      layout: path.resolve((new URL('.', import.meta.url).pathname, 'src/layout')),
      navbar:  path.resolve((new URL('.', import.meta.url).pathname, 'src/layout/navbar')),
    }
  },
})
