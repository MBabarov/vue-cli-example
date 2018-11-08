<template>
  <main 
    role="main" 
    class="main">
    <section class="jumbotron text-center">
      <div class="container">
        <div class="login">
          <h2>This is mock page</h2>
          <h5>Login adds token in local storage</h5>
          <button
            type="button"
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
      auth.setToken()
      this.$router.push(this.$router.history.current.query.redirect)
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
