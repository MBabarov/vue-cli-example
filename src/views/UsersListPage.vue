<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list</h1>
          <Loading v-show="smartUserLoading" />
          <SmartUsersList
            v-show="!smartUserLoading"
            @loading="onLoadSmartUser" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UsersListPage',
  components: {
    Loading: () => import('@/components/Loading'),
    SmartUsersList: () => import('@/components/SmartUsersList')
  },
  data: function() {
    return {
      smartUserLoading: true
    }
  },
  methods: {
    onLoadSmartUser(loading) {
      this.smartUserLoading = loading
    }
  }
}
</script>
<style>
.main {
  margin-top: 100px;
}
.jumbotron {
  margin-bottom: 0;
}
</style>
