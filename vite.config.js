import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replit runs apps best on port 3000
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
})
