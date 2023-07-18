require('@rushstack/eslint-patch/modern-module-resolution')

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
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    // @if router
    'import/core-modules': ['envs', '~pages'],
    // @endif
    // @if !router
    'import/core-modules': ['envs'],
    // @endif
  },
  // @if tailwindcss
  rules: {
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: false,
      },
    ],
    'vue/no-restricted-block': [
      'error',
      {
        element: 'style',
        message:
          'this project use tailwind, do not use <style> block in this project',
      },
    ],
  }
  // @endif
}
