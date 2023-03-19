<template>
  <Layout title="TabbarA">
    <view class="overflow-auto grow">
      <view class="bg-gray-200 h-[1400px] flex flex-col items-center">
        <view class="py-2 mt-10">{{ counterStore.count }}</view>
        <view
          class="px-4 py-2 mt-4 text-white bg-blue-500 rounded-sm"
          @tap.stop="increment"
        >
          Increment
        </view>

        <view
          class="px-4 py-2 mt-4 text-white bg-blue-500 rounded-sm"
          @tap.stop="navigateToPageC"
        >
          PageC
        </view>
      </view>
    </view>
    <Tabbar class="flex-shrink-0" />
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'TabbarA',
}
</script>

<script setup lang="ts">
import { navigateTo } from '@tarojs/taro'

import { Layout, Tabbar } from '@/components'
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()

function increment() {
  counterStore.increment()
}

function navigateToPageC() {
  navigateTo({
    url: '/pages/page-c',
  })
}
</script>
