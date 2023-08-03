require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // @if vueLib
  extends: ['@byzanteam/eslint-config-vue-ts'],
  // @endif
  // @if noFrame
  extends: ['@byzanteam/eslint-config-ts'],
  // @endif
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    'import/core-modules': ['envs'],
  },
}
