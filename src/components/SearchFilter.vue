<template>
  <div class="search-filter">
    <h5 align="left">Enter name or surname for filtering</h5>
    <div class="form-group">
      <input
        v-model="searchFilter"
        class="form-control"
        type="text"
        placeholder="Enter name or surname for filtering"
        @input="onFilteredUsersListBySearch">
    </div>
  </div>
</template>

<script>
import * as utils from '@/utils'

export default {
  name: 'SearchFilter',
  props: {
    usersList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchFilter: ''
    }
  },
  computed: {
    filteredList() {
      return this.usersList.filter(item => {
        return (
          utils.compareString(item.firstName, this.searchFilter) ||
          utils.compareString(item.lastName, this.searchFilter)
        )
      })
    }
  },
  watch: {
    usersList: 'onFilteredUsersListBySearch'
  },
  methods: {
    onFilteredUsersListBySearch() {
      this.$emit('filteredUsersListBySearch', this.filteredList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-filter {
  margin-bottom: 20px;
}
</style>
