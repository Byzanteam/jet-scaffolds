### 使用模版

你需要预先安装 degit 工具来复制模版

```bash
pnpm add -g degit

# OR
yarn global add degit

# OR
npm install -g degit
```

根据项目需求选择模版（比如 `vue-template`)

```bash
degit https://github.com/Byzanteam/jet-scaffolds/vue-template your-project-folder

# OR

mkdir your-project-folder
cd your-project-folder
degit https://github.com/Byzanteam/jet-scaffolds/vue-template
```

之后需要根据项目实际需要调整 `package.json` 中的 `setup` 指令（默认会下载 deploy，.husky，.github/workflows 模版)
然后执行
```bash
pnpm setup

pnpm install
```

> **Note**
> 项目使用 pnpm 作为包管理工具，如果你需要使用其他的包管理工具，需要修改项目中使用 pnpm-lock.yaml 文件的地方。
