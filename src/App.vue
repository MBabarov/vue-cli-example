<template>
  <div id="app">
    <header>
      <nav
        id="nav"
        class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <img
          src="./assets/logo.png"
          class="logo"
          alt="Vue logo">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarCollapse"
          class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link
              tag="li"
              class="nav-item"
              to="/">
              <a
                class="nav-link"
                active-class="active">
                Users List
              </a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              to="/users-list-poor">
              <a
                class="nav-link"
                active-class="active">
                Users List Poor
              </a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              to="/without-paginator">
              <a
                class="nav-link"
                active-class="active">
                Users List without p
              </a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              to="/without-search">
              <a
                class="nav-link"
                active-class="active">
                Users List without s
              </a>
            </router-link>
            <router-link
              tag="li"
              to="/new-user"
              class="nav-item"
              active-class="active">
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
