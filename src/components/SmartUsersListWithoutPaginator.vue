<template>
  <div class="smart-users-list">
    <SearchFilter
      :users-list="usersList"
      @filteredUsersListBySearch="onFilteredUsersListBySearch" />
    <UsersList
      :filtered-users-list-by-search="filteredUsersListBySearch"
      @loading="onLoadUsersList"
      @usersList="onUsersList" />
  </div>
</template>

<script>
export default {
  name: 'SmartUserList',
  components: {
    UsersList: () => import('@/components/UsersList'),
    SearchFilter: () => import('@/components/SearchFilter')
  },
  data() {
    return {
      usersList: [],
      filteredUsersListBySearch: [],
      loadingUsersList: true
    }
  },
  methods: {
    onUsersList(usersList) {
      this.usersList = usersList
    },
    onFilteredUsersListBySearch(filteredUsersListBySearch) {
      this.filteredUsersListBySearch = filteredUsersListBySearch
    },
    onLoadUsersList(loading) {
      this.loadingUsersList = loading
      this.$emit('loading', loading)
    }
  }
}
</script>
<style>
.smart-users-list {
  margin-top: 0px;
}
</style>
