// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  root: true,
  extends: ['@byzanteam/eslint-config-vue-ts'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    defineAppConfig: 'readonly',
    definePageConfig: 'readonly',
  },
}
