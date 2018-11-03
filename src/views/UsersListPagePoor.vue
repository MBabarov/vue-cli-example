<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list poor</h1>
          <UsersList />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UsersListPagePoor',
  components: {
    UsersList: () => import('@/components/UsersList')
  }
}
</script>
<style>
.main {
  margin-top: 100px;
}
</style>
