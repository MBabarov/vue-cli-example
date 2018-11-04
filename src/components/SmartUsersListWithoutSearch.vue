<template>
  <div class="smart-users-list">
    <SelectOfQuantity
      :range="[5,10,15]"
      :users-list="usersList"
      :current-step="currentStep"
      @currentRange="onCurrentRange"
      @currentUsersListByRange="onCurrentUsersListByRange" />
    <UsersList
      :current-users-list-by-range="currentUsersListByRange"
      @usersList="onUsersList"
      @loading="onLoadUsersList"
      @currentUsersAmount="onCurrentUsersAmount" />
    <Paginator
      :show-at-once="currentRange"
      :amount="currentUsersAmount"
      @currentStep="onCurrentStep" />
  </div>
</template>

<script>
export default {
  name: 'SmartUserList',
  components: {
    UsersList: () => import('@/components/UsersList'),
    SelectOfQuantity: () => import('@/components/SelectOfQuantity'),
    Paginator: () => import('@/components/Paginator')
  },
  data() {
    return {
      currentUsersAmount: 0,
      currentRange: 0,
      currentStep: 1,
      usersList: [],
      currentUsersListByRange: [],
      loadingUsersList: true
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
    onCurrentUsersListByRange(currentUsersListByRange) {
      this.currentUsersListByRange = currentUsersListByRange
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
