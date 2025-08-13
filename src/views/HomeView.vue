<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">📖 W4. Library Registration Form</h2>
    <p class="text-center">
      This form now includes validation. Registered users are displayed in a data table below (PrimeVue).
    </p>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label>Username</label>
        <input v-model="form.username" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label>Password</label>
        <input v-model="form.password" type="password" class="form-control" required />
      </div>

      <div class="mb-3">
        <label>Confirm Password</label>
        <input v-model="form.confirmPassword" type="password" class="form-control" required />
        <small v-if="form.confirmPassword && form.confirmPassword !== form.password" class="text-danger">
          Passwords do not match.
        </small>
      </div>

      <div class="form-check mb-3">
        <input v-model="form.australianResident" type="checkbox" class="form-check-input" />
        <label class="form-check-label">Australian Resident?</label>
      </div>

      <div class="mb-3">
        <label>Gender</label>
        <select v-model="form.gender" class="form-select">
          <option disabled value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div class="mb-3">
        <label>Reason for joining</label>
        <textarea v-model="form.reason" class="form-control"></textarea>
      </div>

      <div class="mb-3">
        <label>Suburb</label>
        <input v-model="form.suburb" type="text" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="button" @click="clearForm" class="btn btn-secondary ms-2">Clear</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  australianResident: false,
  gender: '',
  reason: '',
  suburb: ''
})

function submitForm() {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match.')
    return
  }
  alert('Form submitted successfully!')
  console.log(form)
}

function clearForm() {
  Object.keys(form).forEach(key => {
    form[key] = typeof form[key] === 'boolean' ? false : ''
  })
}
</script>

<style scoped>
.text-danger {
  font-size: 0.9rem;
}
</style>
