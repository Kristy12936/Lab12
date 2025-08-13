<template>
  <div class="container mt-5">
    <h2 class="mb-4">Login with Firebase</h2>
    <form @submit.prevent="signin">
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
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" class="btn btn-success" :disabled="isSubmitting">
        {{ isSubmitting ? 'Logging in...' : 'Login' }}
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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'FirebaseSigninView',
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
    async signin() {
      const auth = getAuth()
      this.isSubmitting = true
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        )
        const user = userCredential.user
        this.successMessage = 'Login successful!'
        this.errorMessage = ''

        //  角色识别逻辑（本地静态判断，真实系统应结合数据库或 Firebase Claims）
        const email = user.email
        let role = 'user'
        if (email === 'admin@age.com') {
          role = 'admin'
        } else if (email === 'manager@age.com') {
          role = 'manager'
        }

        // 保存到 localStorage，方便登出页或其他页面使用
        localStorage.setItem('userRole', role)
        localStorage.setItem('userEmail', email)

        //  控制台输出当前用户和角色
        console.log('User signed in:', email)
        console.log('Assigned role:', role)

      } catch (error) {
        console.error('Login error:', error.code, error.message)
        this.errorMessage = 'Login failed: ' + error.message
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
