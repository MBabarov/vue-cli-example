<template>
  <div class="home">
    <main role="main" class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-lg-3 " align="center"></div>
            <div class=" col-md-9 col-lg-9" align="left">
              <div class="row">
                <div class=" col-md-6 col-lg-6" align="center">
                  <h1>Users list</h1>
                </div>
                <div class="col-md-3 col-lg-3 " align="center">

                </div>
              </div>
            </div>
          </div>
          <UsersList />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Users-List',
  components: {
    UsersList
  }
}
</script>
<style>
.main {
  margin-top: 100px;
}
</style>
