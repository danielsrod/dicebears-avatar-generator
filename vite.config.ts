import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// server option with you are running on WSL
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
