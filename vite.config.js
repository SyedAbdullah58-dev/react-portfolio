import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },

})
