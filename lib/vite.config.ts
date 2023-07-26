import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// @if vueLib
import vue from '@vitejs/plugin-vue'
// @endif

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    outDir: path.join(__dirname, '/dist'),
    emptyOutDir: true,
    lib: {
      entry: path.join(__dirname, '/src/index.ts'),
      fileName: 'index',
      // name: '', 如果打包结果有 umd iife ，设置该选项为该包的全局变量名
      formats: ['es'], // 只打包出es模块的包
    },
    // @if vueLib
    rollupOptions: {
      external: [/^(@{0,1})vue/],
    }
    // @endif
  },
  plugins: [
    dts({
      exclude: ['**/*.(test|spec).[jt]s?(x)'],
    }),
    // @if vueLib
    vue(),
    // @endif
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
