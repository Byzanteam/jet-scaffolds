declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
    [key: string]: any
  }
}

declare const defineAppConfig: (
  config: Record<string, unknown>,
) => Record<string, unknown>

declare const definePageConfig: (
  config: Record<string, unknown>,
) => Record<string, unknown>

declare module '@tarojs/components' {
  export * from '@tarojs/components/types/index.vue3'
}
