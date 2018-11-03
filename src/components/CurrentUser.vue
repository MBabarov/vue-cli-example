<template>
  <div class="current-user">
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-lg-3 "
          align="center">
          <img
            :src="currentUser.picture"
            alt="User Pic"
            class="img-circle img-responsive">
        </div>
        <div
          class=" col-md-9 col-lg-9"
          align="left">
          <h3 class="panel-title">{{ currentUser.firstName }} {{ currentUser.lastName }}</h3>
          {{ currentUser.about }}
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-3 col-lg-3 "
          align="center"/>
        <div class=" col-md-9 col-lg-9">
          <h5 align="left">Personal information</h5>
          <table class="table table-user-information">
            <tbody>
              <tr align="left">
                <td>Registered:</td>
                <td>{{ currentUser.registered }}</td>
              </tr>
              <tr align="left">
                <td>Age:</td>
                <td>{{ currentUser.age }}</td>
              </tr>
              <tr align="left">
                <td>Company:</td>
                <td>{{ currentUser.company }}</td>
              </tr>
              <tr align="left">
                <td>Email:</td>
                <td><a>{{ currentUser.email }}</a></td>
              </tr>
              <tr align="left">
                <td>Phone:</td>
                <td>{{ currentUser.phone }}</td>
              </tr>
              <tr align="left">
                <td>Address:</td>
                <td>{{ currentUser.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-3 col-lg-3 "
          align="center"/>
        <div
          class=" col-md-9 col-lg-9"
          align="left">
          <router-link
            :to="{ name: 'edit', params: { id: currentUser.id }}"
            tab="button "
            class="btn btn-primary">
            Edit user
          </router-link>
          <button
            align="left"
            class="btn btn-primary"
            @click="deleteCurrentUser">
            Delete user
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'CurrentUser',
  props: {
    id: {
      type: [String, Number],
      default: '',
      required: false
    }
  },
  data: function() {
    return {
      currentUser: null,
      loading: true
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      this.loading = true
      axios
        .get(`users/${this.id}`)
        .then(response => {
          this.currentUser = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
    deleteCurrentUser() {
      var confirm = window.confirm(`
        Are you sure want to delete ${this.currentUser.firstName} ${this.currentUser.lastName}?
      `)
      if (confirm) {
        this.loading = true
        axios
          .delete(`http://localhost:3004/users/${this.id}`)
          .then(() => {
            alert(`
              ${this.currentUser.firstName} ${this.currentUser.lastName} was deleted successfully
            `)
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => (this.loading = false))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-right: 20px;
}
</style>
