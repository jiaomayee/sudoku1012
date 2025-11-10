import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base路径配置 - 使用GitHub仓库名作为子目录
  // 由于仓库名为sudoku1012，GitHub Pages会在/sudoku1012/下部署
  // 即使使用了自定义域名CNAME，gh-pages库仍会发布到/sudoku1012/
  base: '/sudoku1012/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@services': resolve(__dirname, 'src/services')
    }
  },
  server: {
    host: '127.0.0.1', // 使用127.0.0.1以兼容Qoder预览
    port: 3001, // 更换端口以重置预览状态
    proxy: {
      // 配置API代理，确保只有API路径被代理
      '^/sudoku/.*': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path
      }
    },
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'axios': ['axios'],
          'utils': ['localforage']
        }
      }
    }
  }
})