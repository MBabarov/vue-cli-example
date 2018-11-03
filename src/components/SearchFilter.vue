<template>
  <div class="search-filter">
    <h5 align="left">Enter name or surname for filtering</h5>
    <div class="form-group">
      <input
        v-model="searchFilter"
        class="form-control"
        type="text"
        placeholder="Enter name or surname for filtering"
        @input="onFilteredUsersList">
    </div>
  </div>
</template>

<script>
var compareString = function(firstString, secondString) {
  return firstString.toUpperCase().indexOf(secondString.toUpperCase()) > -1
}

export default {
  name: 'SearchFilter',
  props: {
    usersList: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      searchFilter: ''
    }
  },
  watch: {
    usersList() {
      this.onFilteredUsersList()
    }
  },
  computed: {
    filteredList() {
      return this.usersList.filter(item => {
        return (
          compareString(item.firstName, this.searchFilter) ||
          compareString(item.lastName, this.searchFilter)
        )
      })
    }
  },
  methods: {
    onFilteredUsersList() {
      this.$emit('filteredUsersList', this.filteredList)
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
