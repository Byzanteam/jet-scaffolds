import {
  getStorageInfoSync,
  getSystemInfoSync,
  getStorageSync,
  setStorage,
} from '@tarojs/taro'

const HOME_INDICATOR_HEIGHT = 'homeIndicatorHeight'

export function getHomeIndicatorHeight(): number {
  const { keys } = getStorageInfoSync()

  if (keys.includes(HOME_INDICATOR_HEIGHT)) {
    return getStorageSync(HOME_INDICATOR_HEIGHT)
  }

  const { safeArea, screenHeight } = getSystemInfoSync()

  // 屏幕高度减去安全区域的底部坐标为底部 Home Indicator 的高度
  const homeIndicatorHeight = safeArea ? screenHeight - safeArea.bottom : 0

  setStorage({
    key: HOME_INDICATOR_HEIGHT,
    data: homeIndicatorHeight,
  })

  return homeIndicatorHeight
}
