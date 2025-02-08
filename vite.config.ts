import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/unit-tracking-app/', 
  plugins: [
    react(),
    tailwindcss()
  ]
})
