<template>
  <div class="container mt-5">
    <h2 class="mb-4">Register with Firebase</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="At least 6 characters"
          minlength="6"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        {{ isSubmitting ? 'Registering...' : 'Register' }}
      </button>

      <div v-if="errorMessage" class="alert alert-danger mt-3">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="alert alert-success mt-3">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'FirebaseRegisterView',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: '',
      isSubmitting: false
    }
  },
  methods: {
    async register() {
      const auth = getAuth()
      this.isSubmitting = true
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        )
        console.log('User registered:', userCredential.user)
        this.successMessage = 'Registration successful!'
        this.errorMessage = ''
        this.email = ''
        this.password = ''
      } catch (error) {
        console.error('Registration error:', error.code, error.message)
        this.errorMessage = 'Registration failed: ' + error.message
        this.successMessage = ''
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
