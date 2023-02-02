module.exports = {
  root: true,
  extends: ['@byzanteam/eslint-config-vue-ts'],
  settings: {
    // @if router
    'import/core-modules': ['envs', '~pages'],
    // @endif
    // @if !router
    'import/core-modules': ['envs'],
    // @endif
  },
}
