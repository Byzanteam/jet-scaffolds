import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

import { initOptions } from './init-options'

import type { App } from 'vue'

export default function install(app: App): void {
  i18next.init(initOptions)

  app.use(I18NextVue, { i18next })
}
