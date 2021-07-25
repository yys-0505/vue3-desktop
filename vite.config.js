import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "api": path.resolve(__dirname, "src/api"),
      "pages": path.resolve(__dirname, "src/pages"),
      "components": path.resolve(__dirname, "src/components"),
      "composables": path.resolve(__dirname, "src/composables"),
      "common": path.resolve(__dirname, "src/common"),
      "store": path.resolve(__dirname, "src/store"),
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  envDir: 'environments',
  server: {
    proxy: {
      '/dev/api': {
        target: 'http://proxy.target.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/dev\/api/, '')
      }
    }
  }
})