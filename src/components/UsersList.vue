<template>
  <div class="hello">
    <div v-if="loading">Loading...</div>
    <div v-else class="users">
      <div class="form-group">
        <input class="form-control" type="text" v-model="searchFilter" placeholder="Enter name or surname for filtering" />
      </div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Company</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredList"  :key="user.id">
            <td scope="row">{{index+1}}</td>
            <td>
              <router-link class="nav-item" :to="{ name: 'user', params: { id: user.id }}">
                {{user.firstName}}
              </router-link>
            </td>
            <td>{{user.lastName}}</td>
            <td>{{user.company}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <td>
              <router-link class="nav-item" :to="{ name: 'user', params: { id: user.id }}">
                Profile
              </router-link>
              <router-link class="nav-item" :to="{ name: 'edit', params: { id: user.id }}">
                Edit
              </router-link>
              <a class="action-link" @click="deleteUser(user)">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
var compareString = function(firstString, secondString) {
  return firstString.toUpperCase().indexOf(secondString.toUpperCase()) > -1
}
export default {
  name: 'UsersList',
  props: {
    msg: String
  },
  data: function() {
    return {
      searchFilter: '',
      usersList: [],
      loading: true
    }
  },
  mounted() {
    this.loadUsersList()
  },
  methods: {
    loadUsersList() {
      return this.$axios
        .get('http://localhost:3004/users')
        .then(response => {
          this.usersList = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
    deleteUser(user) {
      var confirm = window.confirm(`
        Are you sure want to delete ${user.firstName} ${user.lastName}?
      `)
      if (confirm) {
        this.loading = true
        this.$axios
          .delete(`http://localhost:3004/users/${user.id}`)
          .then(() => {
            alert(`${user.firstName} ${user.lastName} was deleted successfully`)
            this.loadUsersList()
          })
          .catch(error => {
            console.log(error)
            alert(error)
            this.errored = true
          })
          .finally(() => (this.loading = false))
      }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a:hover {
  color: #42b983;
}
.action-link:not([href]):not([tabindex]) {
  color: #42b983;
}
.action-link:hover:not([href]):not([tabindex]) {
  text-decoration: underline;
  cursor: pointer;
}
</style>
