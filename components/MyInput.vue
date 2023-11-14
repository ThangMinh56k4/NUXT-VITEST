<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const KEY_DOWN = 40
const KEY_UP = 38
const DELETE = 8
const ENTER = 13
const SPACE = 32

const emit = defineEmits<{
  input: [value: number | null]
}>()

const quantity = ref(0)
const keyCode = ref<number | null>(null)

function increment() {
  quantity.value += 1
}

function decrement() {
  quantity.value -= 1
}

function clear() {
  quantity.value = 0
}

function onKeydown(e: KeyboardEvent) {
  if (e.keyCode === DELETE) {
    clear()
  }
  if (e.keyCode === KEY_DOWN) {
    decrement()
  }
  if (e.keyCode === KEY_UP) {
    increment()
  }
  if (e.keyCode === ENTER) {
    quantity.value = 13
  }
  if (e.keyCode === SPACE) {
    quantity.value += 13
  }

  keyCode.value = e.keyCode
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})

watch(keyCode, () => {
  emit('input', keyCode.value)
})
</script>

<template>
  <input
    v-model="quantity"
    type="text"
    class="p-2 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-2xl font-500 w-20 text-center"
    @keydown.prevent="onKeydown"
  />
</template>
