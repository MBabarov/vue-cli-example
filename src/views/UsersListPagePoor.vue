<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list poor</h1>
          <Loading v-show="usersLoading" />
          <UsersList
            v-show="!usersLoading"
            @loading="onLoadUsers" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UsersListPagePoor',
  components: {
    Loading: () => import('@/components/Loading'),
    UsersList: () => import('@/components/UsersList')
  },
  data() {
    return {
      usersLoading: true
    }
  },
  methods: {
    onLoadUsers(loading) {
      this.usersLoading = loading
    }
  }
}
</script>
<style scoped>
.main {
  margin-top: 100px;
}
.jumbotron {
  margin-bottom: 0;
}
</style>
