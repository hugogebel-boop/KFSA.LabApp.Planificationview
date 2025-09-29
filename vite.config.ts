import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const REPO = 'labapp-planning-workspace' // <- ton nom de repo

export default defineConfig({
  plugins: [react()],
  base: `/${REPO}/`,
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
