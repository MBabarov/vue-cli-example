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
          <UserForm :id="id" />
        </div>
      </div>
    </section>
  </main>

</template>

<script>
export default {
  name: 'EditUserPage',
  components: {
    UserForm: () => import('@/components/UserForm')
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 100px;
}
</style>
