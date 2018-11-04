<template>
  <div class="users">
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
        <tr
          v-for="user in currentUsersList"
          :key="user.id">
          <td scope="row">{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <router-link
              :to="{ name: 'user', params: { id: user.id }}"
              class="nav-item">
              Profile
            </router-link>
            <router-link
              :to="{ name: 'edit', params: { id: user.id }}"
              class="nav-item">
              Edit
            </router-link>
            <a
              class="action-link"
              @click="deleteUser(user)">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="total-block">Total: {{ usersList.length }} users</p>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'UsersList',
  props: {
    currentUsersListByRange: {
      type: Array,
      default: null,
      required: false
    },
    filteredUsersListBySearch: {
      type: Array,
      default: null,
      required: false
    }
  },
  data() {
    return {
      usersList: [],
      currentUsersAmount: 0,
      loading: true
    }
  },
  computed: {
    currentUsersList() {
      return this.currentUsersListByRange || this.filteredUsersListBySearch || this.usersList
    }
  },
  watch: {
    filteredUsersListBySearch(after, before) {
      if (after.length !== before.length) {
        this.onCurrentUsersAmount()
      }
    },
    loading() {
      this.onLoad()
    }
  },
  mounted() {
    this.loadUsersList()
  },
  methods: {
    onLoad() {
      this.$emit('loading', this.loading)
    },
    loadUsersList() {
      this.loading = true
      return axios
        .get('users')
        .then(response => {
          this.usersList = response.data
          this.currentUsersAmount = Object.assign([], this.usersList).length
          this.onCurrentUsersAmount()
          this.onUsersList()
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
      if (!confirm) {
        return
      }
      this.loading = true
      axios
        .delete(`users/${user.id}`)
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
    },
    onCurrentUsersAmount() {
      const amount =
        (this.filteredUsersListBySearch && this.filteredUsersListBySearch.length) ||
        this.currentUsersAmount ||
        0
      this.$emit('currentUsersAmount', amount)
    },
    onUsersList() {
      this.$emit('usersList', this.usersList)
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
.total-block {
  font-weight: 600;
  text-align: left;
}
</style>
