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
routes 通过 [vite-plugin-pages](https://github.com/johnsoncodehk/volar) 动态生成，如需配置权限路由，需手动修改 routes

```ts
const finalRoutes = enhanceRoutes(routes)
createRouter({ routes: finalRoutes })
```

// @endif
## Recommended IDE
[Volar](https://github.com/johnsoncodehk/volar)

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
