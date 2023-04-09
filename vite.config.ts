import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true,
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/css/scss/index.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
