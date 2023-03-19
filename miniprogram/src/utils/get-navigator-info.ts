import {
  getStorageInfoSync,
  getStorageSync,
  getSystemInfoSync,
  getMenuButtonBoundingClientRect,
  setStorage,
} from '@tarojs/taro'

const STATUS_BAR_HEIGHT = 'statusBarHeight'
const TITLE_BAR_HEIGHT = 'titleBarHeight'

export function getNavigatorInfo(): {
  statusBarHeight: number
  titleBarHeight: number
} {
  const { keys } = getStorageInfoSync()

  if (keys.includes(STATUS_BAR_HEIGHT) && keys.includes(TITLE_BAR_HEIGHT)) {
    return {
      statusBarHeight: getStorageSync(STATUS_BAR_HEIGHT),
      titleBarHeight: getStorageSync(TITLE_BAR_HEIGHT),
    }
  }

  const statusBarHeight = getSystemInfoSync().statusBarHeight || 0

  // getMenuButtonBoundingClientRect 获取右上角胶囊按钮的布局位置信息
  const { top, height } = getMenuButtonBoundingClientRect()
  const titleBarSpacing = (top - statusBarHeight) * 2
  // 导航栏高度 = 胶囊按钮高度 + 状态栏到胶囊按钮间距 * 2 + 状态栏高度
  // 状态栏到胶囊按钮间距 = 胶囊定位 top - 状态栏的高度
  const titleBarHeight = titleBarSpacing + height

  setStorage({
    key: STATUS_BAR_HEIGHT,
    data: statusBarHeight,
  })

  setStorage({
    key: TITLE_BAR_HEIGHT,
    data: titleBarHeight,
  })

  return {
    statusBarHeight,
    titleBarHeight,
  }
}
