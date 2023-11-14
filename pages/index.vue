<script setup lang="ts">
const keyboard = ref<number | null>(null)

function onInput(value: number | null) {
  keyboard.value = value
}
</script>

<template>
  <div
    class="bg-gradient-to-r from-green-400 to-blue-500 w-full h-screen flex items-center flex-col"
  >
    <h1 class="text-5xl text-white my-30">Vue Test utils Example</h1>
    <my-input @input="onInput" />
    <my-keyboard :keyboard="keyboard" />
  </div>
</template>
