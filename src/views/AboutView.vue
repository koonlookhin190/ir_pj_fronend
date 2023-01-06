<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import AuthService from '@/service/AuthService.js'
export default {
  inject: ['GStore'],
  methods: {
    logout() {
      AuthService.logout()
      this.$router.go()
    }
  }
}
</script>
