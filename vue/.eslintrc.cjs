module.exports = {
  root: true,
  // @if auto-import
  extends: [
    '@byzanteam/eslint-config-vue-ts',
    '.typings/.eslintrc-auto-import.json',
  ],
  // @endif
  // @if !auto-import
  extends: ['@byzanteam/eslint-config-vue-ts'],
  // @endif
  settings: {
    // @if router
    'import/core-modules': ['envs', '~pages'],
    // @endif
    // @if !router
    'import/core-modules': ['envs'],
    // @endif
  },
}
