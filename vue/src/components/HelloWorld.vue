<template>
  // @if !tailwindcss
  <h1>{{ msg }}</h1>
  // @endif
  // @if tailwindcss
  <h1 class="text-gray-900">{{ msg }}</h1>
  // @endif
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
