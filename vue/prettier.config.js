module.exports = {
  ...require('@byzanteam/prettier-config'),
  // @if tailwindcss
  plugins: [require('prettier-plugin-tailwindcss')],
  // @endif
}
