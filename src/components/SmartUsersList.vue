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
      @usersList="onUsersList"
      @currentUsersAmount="onCurrentUsersAmount" />
    <Paginator
      v-show="!loading"
      :current-range="currentRange"
      :amount="currentUsersAmount"
      @currentStep="onCurrentStep" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      searchFilter: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  methods: {
    onCurrentStep(step) {
      this.currentStep = step
    },
    onCurrentRange(range) {
      this.currentRange = Number(range)
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
