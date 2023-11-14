<script setup lang="ts">
import { defineProps } from 'vue'

type Props = {
  message: string
}

const { message } = defineProps<Props>()
</script>

<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
