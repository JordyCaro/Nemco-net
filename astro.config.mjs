import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://nemco-net.com',
  integrations: [tailwind(), react()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    minify: true,
    format: 'file',
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-components': ['@headlessui/react']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@headlessui/react']
    },
    optimizeDeps: {
      include: ['react', 'react-dom', '@headlessui/react']
    }
  },
  experimental: {
    contentCollectionCache: true
  }
});
