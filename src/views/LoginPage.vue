<template>
  <main 
    role="main" 
    class="main">
    <section class="jumbotron text-center">
      <div class="container">
        <div class="login">
          <button
            class="btn btn-primary"
            @click="login"
          >Login</button>
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import * as auth from '@/auth'
export default {
  name: 'LoginPage',
  methods: {
    login() {
      auth.loggedIn()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 100px;
}
.login {
  min-height: 500px;
}
.jumbotron {
  margin-bottom: 0;
}
</style>
