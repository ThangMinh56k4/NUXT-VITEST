<script setup lang="ts">
import { defineEmits, ref } from 'vue'
const $emit = defineEmits(['counter-incremented'])

const counter = ref(0)

function incrementCounter() {
  counter.value++
  $emit('counter-incremented', counter.value)
}
</script>

<template>
  <div>
    <button @click="incrementCounter">Increment</button>
  </div>
</template>
