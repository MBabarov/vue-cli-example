<template>
  <div class="smart-users-list">
    <Loading />
    <SelectOfQuantity
      :range="[5,10,15]"
      :users-list="filteredUsersList"
      :current-step="currentStep"
      @currentRange="onCurrentRange"
      @currentUsersListByRange="onCurrentUsersListByRange" />
    <SearchFilter
      :users-list="usersList"
      @filteredUsersList="onFilteredUsersList" />
    <UsersList
      :current-users-list-by-range="currentUsersListByRange"
      :filtered-users-list="filteredUsersList"
      @usersList="onUsersList"
      @currentUsersAmount="onCurrentUsersAmount" />
    <Paginator
      :show-at-once="currentRange"
      :amount="currentUsersAmount"
      @currentStep="onCurrentStep" />
  </div>
</template>

<script>
export default {
  name: 'UsersListPage',
  components: {
    Loading: () => import('@/components/Loading'),
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
      filteredUsersList: [],
      currentUsersListByRange: [],
      searchFilter: '',
      showList: true
    }
  },
  methods: {
    onCurrentStep(step) {
      this.currentStep = step
    },
    onCurrentRange(range) {
      this.currentRange = range
    },
    onUsersList(usersList) {
      this.usersList = usersList
    },
    onCurrentUsersAmount(currentUsersAmount) {
      this.currentUsersAmount = currentUsersAmount
    },
    onFilteredUsersList(filteredUsersList) {
      this.filteredUsersList = filteredUsersList
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
