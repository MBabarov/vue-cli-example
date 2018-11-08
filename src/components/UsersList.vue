<template>
  <div class="users">
    <table class="table">
      <thead>
        <slot name="header-phone-mode">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Company</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </slot>
      </thead>
      <tbody>
        <tr
          v-for="user in currentUsersList"
          :key="user.id">
          <slot
            :user="user"
            name="body-phone-mode">
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
          </slot>
        </tr>
      </tbody>
    </table>
    <p class="total-block">Total: {{ filteredUsersListBySearch.length || usersList.length }} users</p>
    <Modal
      :modal-show="deleteModalShow"
      @onAgree="deleteModalAgree">
      <h5 slot="title">
        Delete user profile
      </h5>
      <p
        slot="body"
        class="modal-body">
        Are you sure want to delete {{ deleteUserData.firstName }} {{ deleteUserData.lastName }}?
      </p>
      <template 
        slot="footer" 
        slot-scope="{ onAgree }">
        <button
          type="button"
          class="btn btn-secondary"
          @click="onAgree(false)">
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="onAgree(true)">
          Delete
        </button>
      </template>
    </Modal>
    <Modal
      :modal-show="successfulDeleteModalShow"
      @onAgree="succesfulDeleteModalAgree">
      <h5 slot="title">
        Delete user profile
      </h5>
      <p
        slot="body"
        class="modal-body">
        {{ deleteUserData.firstName }} {{ deleteUserData.lastName }} was deleted successfully
      </p>
      <template 
        slot="footer" 
        slot-scope="{ onAgree }">
        <button
          type="button"
          class="btn btn-secondary"
          @click="onAgree(false)">
          Ok
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UsersList',
  components: {
    Modal: () => import('@/components/Modal')
  },
  props: {
    currentUsersListByRange: {
      type: Array,
      default: () => []
    },
    filteredUsersListBySearch: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      deleteUserData: {},
      deleteModalShow: false,
      approveUserDelete: null,
      successfulDeleteModalShow: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      usersList: state => state.usersList,
      currentUsersAmount: state => state.currentUsersAmount
    }),
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
      this.onCurrentUsersAmount()
      this.onUsersList()
      this.$emit('loading', this.loading)
    },
    loadUsersList() {
      this.$store.dispatch('loadUsers')
    },
    succesfulDeleteModalAgree() {
      this.successfulDeleteModalShow = false
      this.loadUsersList()
    },
    deleteModalAgree(approveDeleteAgree) {
      this.deleteModalShow = false
      if (!approveDeleteAgree) {
        return
      }
      this.$store.dispatch('deleteUser', this.deleteUserData.id).then(() => {
        this.successfulDeleteModalShow = true
      })
    },
    deleteUser(user) {
      this.deleteUserData = user
      this.deleteModalShow = true
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
h5 {
  margin: 0;
  padding: 0;
}
.modal-body {
  font-size: 20px;
}
</style>
