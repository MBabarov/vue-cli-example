<template>
  <div class="home">
    <main 
      role="main" 
      class="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 align="canter">Users list (phone mode)</h1>
          <Loading v-show="isLoading" />
          <div
            v-show="!isLoading"
            @loading="onLoadUsersList">
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
              @currentUsersAmount="onCurrentUsersAmount">
              <template slot="header-phone-mode">
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
              </template>
              <template
                slot="body-phone-mode"
                slot-scope="{ user }">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.phone }}</td>
              </template>
            </UsersList>
            <Paginator
              :show-at-once="currentRange"
              :amount="currentUsersAmount"
              @currentStep="onCurrentStep" />
          </div>
        </div>
      </section>
    </main>
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
  data() {
    return {
      isLoading: true,
      currentUsersAmount: 0,
      currentRange: 0,
      currentStep: 1,
      usersList: [],
      filteredUsersListBySearch: [],
      currentUsersListByRange: [],
      searchFilter: ''
    }
  },
  methods: {
    onLoadUsersList(loading) {
      this.isLoading = loading
    },
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
    onFilteredUsersListBySearch(filteredUsersListBySearch) {
      this.filteredUsersListBySearch = filteredUsersListBySearch
    },
    onCurrentUsersListByRange(currentUsersListByRange) {
      this.currentUsersListByRange = currentUsersListByRange
    }
  }
}
</script>
<style scoped>
.main {
  margin-top: 100px;
}
.jumbotron {
  margin-bottom: 0;
}
</style>
