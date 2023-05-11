# Vue 3 + Typescript + Vite

- [Vue 3](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev)

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

## Build Action
`build-image.yml` 如果不是 skylark 的项目需要做出以下调整
* jet 项目中 registries 的 `${{ secrets.ALIYUN_SKYLARK_REGISTRY }}` -> `${{ secrets.ALIYUN_JET_REGISTRY }}`
* 非 jet 项目，则移除 registries 中的 `${{ secrets.ALIYUN_SKYLARK_REGISTRY }}` 这一行
