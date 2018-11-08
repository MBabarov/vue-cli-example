<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list</h1>
          <Loading v-show="loading" />
          <SmartUsersList v-show="!loading" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UsersListPage',
  components: {
    Loading: () => import('@/components/Loading'),
    SmartUsersList: () => import('@/components/SmartUsersList')
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
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
