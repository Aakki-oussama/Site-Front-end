import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Optimize chunk splitting to reduce number of small files
        manualChunks(id) {
          // Group React core dependencies
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          // Group icon library (lucide-react)
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
          // Group utility libraries
          if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge') || id.includes('node_modules/class-variance-authority')) {
            return 'utils'
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
})
