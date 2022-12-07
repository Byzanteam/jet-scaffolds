import { URL, fileURLToPath } from 'node:url'

import ImportMetaEnvPlugin from '@import-meta-env/unplugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.PUBLIC_PATH,
    plugins: [
      vue(),
      ImportMetaEnvPlugin.vite({
        example: '.env',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
