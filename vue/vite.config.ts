import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
// @if auto-import
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
// @endif
import { defineConfig, loadEnv } from 'vite'
// @if router
import AutoRoutesPlugin from 'vite-plugin-pages'
// @endif

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_PATH,
    plugins: [
      vue(),
      // @if auto-import
      AutoImport({
        // @if !router
        imports: ['vue'],
        // @endif
        // @if router
        imports: ['vue', 'vue-router'],
        // @endif
        resolvers: [ElementPlusResolver()],
        dts: '.typings/auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '.typings/.eslintrc-auto-import.json',
        },
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: '.typings/components.d.ts',
        dirs: ['src/components'],
      }),
      // @endif
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
