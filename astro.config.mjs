import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // Importa el adaptador de Vercel

export default defineConfig({
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
    }
  },
  // Añade el adaptador de Vercel
  adapter: vercel(),
});
