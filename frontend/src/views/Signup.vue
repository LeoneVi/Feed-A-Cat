<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const submit = () => {
  emit('submit', {email: email.value, password: password.value, confirmPassword: confirmPassword.value})
}
</script>

<template>
  <div id="container">
    <h1>Signup page</h1>
    <form @submit.prevent="submit">
      <div id="form">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input v-model="confirmPassword" type="password" placeholder="Confirm password" />
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
#container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 600px;
}
</style>
