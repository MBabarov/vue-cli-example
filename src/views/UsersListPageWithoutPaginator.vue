<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list without paginator</h1>
          <Loading v-show="usersLoading" />
          <SmartUsersListWithoutPaginator
            v-show="!usersLoading"
            @loading="onLoadUsers" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UsersListPageWithoutPaginator',
  components: {
    Loading: () => import('@/components/Loading'),
    SmartUsersListWithoutPaginator: () => import('@/components/SmartUsersListWithoutPaginator')
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
