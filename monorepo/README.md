## Jet Monorepo Template

base on pnpm

### Define sub repos

you should set `pnpm-workspace.yaml` to declare workspaces. by default, the sub folders of packages has been set

### FAQ

1. Q: vetur 插件不识别子项目的 module
   A: 可以通过设置 `vetur.config.js` 来声明子项目，详情见 https://vuejs.github.io/vetur/guide/setup.html#advanced
2. Q: 子项目的依赖如何管理
   A: 子项目的依赖在子项目的 package.json 中自行维护，以便该项目独立也能运行。pnpm install 的时候会管理整个项目的依赖。
3. Q: 子项目的 linter 是否和 root 共用？
   A: eslint 的配置文件查找规则决定这么操作是可以的，root 提供通用的 lint 规则，各项目可补充各自不同的 lint 规则。
