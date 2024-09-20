import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'goathouse',
      filename: 'remoteEntry.js',
      exposes: {
        './decision-wheel': './src/components/decision-wheel/decision-wheel.tsx',
      },
      shared: ['react'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    open: true,
  },
  preview: {
    port: 4174,
  },
});
