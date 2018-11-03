<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list without paginator</h1>
          <SmartUsersListWithoutPaginator />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UsersListPageWitoutPaginator',
  components: {
    SmartUsersListWithoutPaginator: () => import('@/components/SmartUsersListWithoutPaginator')
  }
}
</script>
<style>
.main {
  margin-top: 100px;
}
</style>
