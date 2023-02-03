/// <reference types="vite/client" />
// @if router
/// <reference types="vite-plugin-pages/client" />
// @endif

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
