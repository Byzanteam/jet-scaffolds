<template>
  <view class="flex flex-col items-stretch h-full" :class="$attrs.class">
    <view :class="navigatorClass" class="flex-shrink-0">
      <view :style="{ height: statusBarHeight + 'px' }" />
      <view
        :style="{ height: titleBarHeight + 'px' }"
        class="relative flex flex-row items-center"
      >
        <!-- 此处对于不同的应用可能有一定的微调 -->
        <view
          v-if="hasPreviewPage"
          class="absolute top-0 flex items-center h-full left-2"
          @tap="handleBack"
        >
          <!-- 可以使用图标 -->
          <text class="text-sm">返回</text>
        </view>
        <text class="flex-grow text-base text-center">{{ title }}</text>
      </view>
    </view>
    <view class="flex flex-col flex-grow overflow-hidden">
      <slot />
    </view>
    <view
      :class="bottomBarClass"
      :style="{ height: homeIndicatorHeight + 'px' }"
      class="flex-shrink-0"
    />
  </view>
</template>

<script lang="ts">
export default {
  name: 'SafeLayout',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { computed, useAttrs } from 'vue'

import { getNavigatorInfo, getHomeIndicatorHeight } from '@/utils'

withDefaults(
  defineProps<{
    title: string
    navigatorClass?: string
    bottomBarClass?: string
  }>(),
  {
    navigatorClass: 'bg-white',
    bottomBarClass: 'bg-white',
  },
)

const emits = defineEmits<{
  (e: 'navigateBack'): void
}>()

const attrs = useAttrs()

const { statusBarHeight, titleBarHeight } = getNavigatorInfo()
const homeIndicatorHeight = getHomeIndicatorHeight()

function handleBack() {
  if (attrs.onNavigateBack) {
    emits('navigateBack')
  } else {
    Taro.navigateBack()
  }
}

const hasPreviewPage = computed(() => {
  return Taro.getCurrentPages().length > 1
})
</script>
