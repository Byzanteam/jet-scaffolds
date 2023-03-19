# 小程序项目

使用 Taro 跨平台的小程序项目，务必注意 node 的版本必须小于 18，否则 taro-cli 不能正确安装

## 目录结构

```
├── babel.config.js             # Babel 配置
├── .eslintrc.js                # ESLint 配置
├── config                      # 编译配置目录
│   ├── dev.js                  # 开发模式配置
│   ├── index.js                # 默认配置
│   └── prod.js                 # 生产模式配置
├── package.json                # Node.js manifest
├── dist                        # 打包目录
├── project.config.json         # 小程序项目配置（wx，其他平台的配置文件按其平台要求定义）
├── src # 源码目录
│   ├── app.config.js           # 全局配置(小程序项目的配置)
│   ├── app.css                 # 全局 CSS
│   ├── app.js                  # 入口组件
│   ├── index.html              # H5 入口 HTML
│   └── pages                   # 页面组件
│       └── index
│           ├── index.config.js # 页面配置
│           ├── index.css       # 页面 CSS
│           └── index.vue       # 页面组件
```

## Quick start

```sh
pnpm install

# 本地如需覆盖 `.env` 文件，需新建 `.env.local` 文件
# 环境变量设置参考 https://vitejs.dev/guide/env-and-mode.html#env-files
pnpm dev:weapp

# 打包生产环境代码
pnpm build
```
