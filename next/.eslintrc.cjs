require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@byzanteam/eslint-config-react-ts', 'next'],
  settings: {
    next: {},
  },
}
