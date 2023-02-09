import i18next, { type InitOptions } from 'i18next'

import zh_CN from '@/assets/locales/zh_CN.json'

export const initOptions: InitOptions = {
  lng: 'zh_CN',
  resources: {
    zh_CN: {
      translation: zh_CN,
    },
  },
  returnedObjectHandler: key => i18next.t(`${key}.__t__`),
}
