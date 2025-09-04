import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './',
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '5173-i5yzx4kvyf8id21i1d2rc-e55845cb.manus.computer'
    ]
  }
})

