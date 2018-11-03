<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list without search</h1>
          <SmartUsersListWithoutSearch />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UsersListPageWithoutSearch',
  components: {
    SmartUsersListWithoutSearch: () => import('@/components/SmartUsersListWithoutSearch')
  }
}
</script>
<style>
.main {
  margin-top: 100px;
}
</style>
