<template>
  <Layout title="TabbarB" bottom-bar-class="bg-gray-200">
    <view class="overflow-auto grow"> TabbarB </view>
    <Tabbar class="flex-shrink-0 bg-gray-200" />
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'TabbarB',
}
</script>

<script setup lang="ts">
import { Layout, Tabbar } from '@/components'
</script>
