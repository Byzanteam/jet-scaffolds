import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
// @if router
import AutoRoutesPlugin from 'vite-plugin-pages'
// @endif

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL,
    plugins: [
      vue(),
      // @if router
      AutoRoutesPlugin({
        routeStyle: 'nuxt',
        dirs: ['src/views'],
      }),
      // @endif
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
