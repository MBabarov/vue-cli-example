<template>
  <main role="main" class="main">
    <section class="jumbotron text-center">
      <div class="container">
        <div class="user">
          <div class="row">
            <div class="col-md-3 col-lg-3 " align="center"></div>
            <div class=" col-md-9 col-lg-9" align="left">
              <h1>Create new user profile</h1>
            </div>
          </div>
          <UserForm />
        </div>
      </div>
    </section>
  </main>

</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'NewUser',
  components: {
    UserForm
  }
}
</script>

<style>
.main {
  margin-top: 100px;
}
</style>
