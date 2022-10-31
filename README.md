### 使用模版

你需要预先安装 degit 工具来复制模版

```
pnpm add -g degit
```

根据项目需求选择模版（比如 vue-template)

```
# degit git@github.com:user/repo/subdirectory your-project-folder
degit git@github.com:Byzanteam/jet-scaffolds/vue-template your-project-folder
```

> **!!!** 项目推荐使用 pnpm 作为包管理工具，如果你需要使用其他的包管理工具，需要修改项目中使用 pnpm-lock.yaml 文件的地方。