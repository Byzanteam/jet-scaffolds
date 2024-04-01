const config = require('@byzanteam/prettier-config')

module.exports = {
  ...config,
  // @if tailwindcss
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
  // @endif
}
