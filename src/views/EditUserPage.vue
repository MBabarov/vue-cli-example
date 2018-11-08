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
                  <h1>Edit user profile</h1>
                </div>
                <div 
                  class="col-md-3 col-lg-3 " 
                  align="center">
                  <router-link 
                    :to="{ name: 'user', params: { id: id }}" 
                    tab="button" 
                    class="btn btn-primary">
                    Come back without updates
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <Loading v-show="loading" />
          <UserForm
            v-show="!loading"
            :id="id" />
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditUserPage',
  components: {
    Loading: () => import('@/components/Loading'),
    UserForm: () => import('@/components/UserForm')
  },
  props: {
    id: {
      type: Number,
      required: true
    }
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
