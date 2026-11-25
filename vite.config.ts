import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { currentDocsVersion } from './src/components/layout/docsVersions.ts'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${currentDocsVersion}/` : '/',
  plugins: [react()],
}))
