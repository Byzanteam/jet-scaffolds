module.exports = {
  // @if !monorepo
  extends: ['@byzanteam/commitlint-config'],
  // @endif
  // @if monorepo
  extends: ['@byzanteam/commitlint-config-monorepo'],
  // @endif
}
