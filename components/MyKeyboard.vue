<script setup lang="ts">
const keyboards = [
  {
    label: 'Up',
    key: 38,
  },
  {
    label: 'Down',
    key: 40,
  },
  {
    label: 'Enter',
    key: 13,
  },
  {
    label: 'Space',
    key: 32,
  },
  {
    label: 'Delete',
    key: 8,
  },
]

defineProps<{
  keyboard: number | null
}>()
</script>

<template>
  <div class="flex gap-2 mt-20">
    <div
      v-for="{ label, key } in keyboards"
      :key="key"
      class="w-20 h-20 border-2 flex items-center justify-center rounded-lg shadow-inner text-xl font-500"
      :class="[
        key === keyboard
          ? 'border-cyan-400 bg-cyan-400 text-white'
          : 'border-white bg-white text-cyan-400',
      ]"
    >
      {{ label }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
