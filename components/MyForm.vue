<template>
  <form @submit.prevent="handleSubmit({ name, email })">
    <input v-model="name" name="name" />
    <br />
    <input v-model="email" name="email" />
    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')

function handleSubmit(value: { name: string; email: string }) {
  console.log(`Name: ${value.name}`)
  console.log(`Email: ${value.email}`)
}
</script>
