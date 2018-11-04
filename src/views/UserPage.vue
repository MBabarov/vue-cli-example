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
              <div class="row">
                <div 
                  class=" col-md-6 col-lg-6" 
                  align="left">
                  <h1>User profile</h1>
                </div>
                <div 
                  class="col-md-3 col-lg-3 " 
                  align="center">
                  <router-link 
                    tab="button" 
                    class="btn btn-primary" 
                    to="/">
                    Come back to users list
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <Loading v-show="userDataLoading" />
          <CurrentUser
            v-show="!userDataLoading"
            @loading="onLoadUserData"/>
        </div>
      </div>
    </section>
  </main>

</template>

<script>
export default {
  name: 'UserPage',
  components: {
    Loading: () => import('@/components/Loading'),
    CurrentUser: () => import('@/components/CurrentUser')
  },
  data() {
    return {
      userDataLoading: true
    }
  },
  methods: {
    onLoadUserData(loading) {
      this.userDataLoading = loading
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
