<template>
  <div id="app">
    <header>
      <nav id="nav" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <img class="logo" alt="Vue logo" src="./assets/logo.png">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" class="nav-item" to="/">
              <a class="nav-link" :class="{ active: isUsersListActive }">Users List</a>
            </router-link>
            <router-link tag="li" to="/new-user" class="nav-item" :class="{ active: isNewUserActive }">
              <a class="nav-link">New user</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isUsersListActive: true,
      isNewUserActive: false
    }
  },
  watch: {
    $route() {
      switch (this.$route.path) {
        case '/': {
          this.isUsersListActive = true
          this.isNewUserActive = false
          break
        }
        case '/new-user': {
          this.isUsersListActive = false
          this.isNewUserActive = true
          break
        }
        default: {
          this.isUsersListActive = false
          this.isNewUserActive = false
          break
        }
      }
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
  width: 20px;
}
</style>
