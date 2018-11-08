<template>
  <main 
    role="main" 
    class="main">
    <section class="jumbotron text-center">
      <div class="container">
        <div class="user">
          <div class="row">
            <div 
              class="col-md-3 col-lg-3 " 
              align="center"/>
            <div 
              class=" col-md-9 col-lg-9" 
              align="left">
              <h1>Create new user profile</h1>
            </div>
          </div>
          <Loading v-show="loading" />
          <UserForm
            v-show="!loading" />
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NewUserPage',
  components: {
    Loading: () => import('@/components/Loading'),
    UserForm: () => import('@/components/UserForm')
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
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
