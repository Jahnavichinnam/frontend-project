import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/hello-world-app/',
  plugins: [react()],
})
