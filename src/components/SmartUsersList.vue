<template>
  <div class="smart-users-list">
    <SelectOfQuantity
      :range="[5,10,15]"
      :users-list="filteredUsersListBySearch"
      :current-step="currentStep"
      @currentRange="onCurrentRange"
      @currentUsersListByRange="onCurrentUsersListByRange" />
    <SearchFilter
      :users-list="usersList"
      @filteredUsersListBySearch="onFilteredUsersListBySearch" />
    <UsersList
      :current-users-list-by-range="currentUsersListByRange"
      :filtered-users-list-by-search="filteredUsersListBySearch"
      @loading="onLoadUsersList"
      @usersList="onUsersList"
      @currentUsersAmount="onCurrentUsersAmount" />
    <Paginator
      v-show="!smartUserLoading"
      :current-range="currentRange"
      :amount="currentUsersAmount"
      @loading="onLoadPaginator"
      @currentStep="onCurrentStep" />
  </div>
</template>

<script>
export default {
  name: 'UsersListPage',
  components: {
    UsersList: () => import('@/components/UsersList'),
    SearchFilter: () => import('@/components/SearchFilter'),
    SelectOfQuantity: () => import('@/components/SelectOfQuantity'),
    Paginator: () => import('@/components/Paginator')
  },
  data: function() {
    return {
      currentUsersAmount: 0,
      currentRange: 0,
      currentStep: 1,
      usersList: [],
      filteredUsersListBySearch: [],
      currentUsersListByRange: [],
      searchFilter: '',
      loadingUsersList: true
    }
  },
  computed: {
    smartUserLoading() {
      this.$emit('loading', this.loadingUsersList)
      return this.loadingUsersList
    }
  },
  methods: {
    onCurrentStep(step) {
      this.currentStep = step
    },
    onLoadPaginator(loading) {
      this.loadingPaginator = loading
    },
    onCurrentRange(range) {
      this.currentRange = Number(range)
    },
    onLoadUsersList(loading) {
      this.loadingUsersList = loading
    },
    onUsersList(usersList) {
      this.usersList = usersList
    },
    onCurrentUsersAmount(currentUsersAmount) {
      this.currentUsersAmount = currentUsersAmount
    },
    onFilteredUsersListBySearch(filteredUsersListBySearch) {
      this.filteredUsersListBySearch = filteredUsersListBySearch
    },
    onCurrentUsersListByRange(currentUsersListByRange) {
      this.currentUsersListByRange = currentUsersListByRange
    }
  }
}
</script>
<style>
.smart-users-list {
  margin-top: 0px;
}
</style>
