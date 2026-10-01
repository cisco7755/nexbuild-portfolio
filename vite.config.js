import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { quoxovaSeo } from './scripts/seo-plugin.js'

export default defineConfig({
  plugins: [react(), quoxovaSeo()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
