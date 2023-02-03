# Vue 3 + Typescript + Vite

- [Vue 3](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev)

## Css

// @if tailwindcss
### Tailwindcss
[配置颜色主题](https://tailwindcss.com/docs/customizing-colors)，间距使用默认定义的，未定义的使用任意值(以[宽度的任意值](https://tailwindcss.com/docs/width#arbitrary-values)为例)

// @endif
// @if router
## Router
routes 通过 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 动态生成，routes 也可手动修改

```ts
import routes from '~pages'

const finalRoutes = enhanceRoutes(routes)
createRouter({ routes: finalRoutes })
```
enhanceRoutes 内你可以根据业务注入一些 meta 数据，由此可以让路由有更多的能力

// @endif
## Recommended IDE
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Quick start
```sh
pnpm install

# 本地如需覆盖 `.env` 文件，需新建 `.env.local` 文件
# 环境变量设置参考 https://vitejs.dev/guide/env-and-mode.html#env-files

pnpm dev

# 打包生产环境代码
pnpm build

# 生产环境预览
pnpm build
pnpm preview
```
