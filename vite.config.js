// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio-/',
  css: {
    postcss: './postcss.config.js'
  }
})