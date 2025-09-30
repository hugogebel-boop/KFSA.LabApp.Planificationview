import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// ⚠️ remplace "TON_REPO" par le nom EXACT du repo GitHub (casse incluse)
const repo = 'TON_REPO'

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,              // ← force le bon préfixe pour GitHub Pages (Project Pages)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
