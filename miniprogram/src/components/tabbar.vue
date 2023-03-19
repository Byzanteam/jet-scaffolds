<template>
  <view
    class="flex h-auto border-0 border-solid border-t-[1px] border-gray-400"
    :class="$attrs.class"
  >
    <view
      v-for="(tab, index) in tabs"
      :key="tab.path"
      class="flex flex-col items-center justify-center flex-1 h-12"
      @tap="tabSwitch(tab)"
    >
      <view
        :class="activeTabIndex === index ? 'text-blue-500' : 'text-gray-700'"
        class="text-base"
      >
        {{ tab.title }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'CustomTabbar',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { getCurrentInstance, switchTab, useDidShow } from '@tarojs/taro'
import { ref } from 'vue'

interface Tab {
  title: string
  path: string
  icon?: string
}

const props = withDefaults(
  defineProps<{
    activeIndex?: number
  }>(),
  {
    activeIndex: 0,
  },
)

const tabs: Array<Tab> = [
  {
    title: 'TabbarA',
    path: '/pages/tabbar/a',
  },
  {
    title: 'TabbarB',
    path: '/pages/tabbar/b',
  },
]

const activeTabIndex = ref<number>(props.activeIndex)

const { path } = getCurrentInstance()!.router as { path: string }

useDidShow(() => {
  activeTabIndex.value = tabs.findIndex(page => page.path === path)
})

function tabSwitch(tab: Tab) {
  switchTab({ url: tab.path })
}
</script>
