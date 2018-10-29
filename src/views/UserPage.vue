<template>
  <main role="main" class="main">
    <section class="jumbotron text-center">
      <div class="container">
        <div class="user">
          <div class="row">
            <div class="col-md-3 col-lg-3 " align="center"></div>
            <div class=" col-md-9 col-lg-9" align="left">
              <div class="row">
                <div class=" col-md-6 col-lg-6" align="left">
                  <h1>User profile</h1>
                </div>
                <div class="col-md-3 col-lg-3 " align="center">
                  <router-link tab="button" class="btn btn-primary" to="/">
                    Come back to users list
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <CurrentUser :id="id" />
        </div>
      </div>
    </section>
  </main>

</template>

<script>
// @ is an alias to /src
import CurrentUser from '@/components/CurrentUser.vue'

export default {
  name: 'User',
  props: ['id'],
  components: {
    CurrentUser
  }
}
</script>

<style>
.main {
  margin-top: 100px;
}
</style>
