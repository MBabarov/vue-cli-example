<template>
  <div class="current-user">
    <div
      v-if="currentUser"
      class="container">
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
          <p v-html="currentUser.about"/>
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
            type="button"
            class="btn btn-primary"
            @click="deleteCurrentUser">
            Delete user
          </button>
        </div>
      </div>
      <Modal
        :modal-show="deleteModalShow"
        @onAgree="deleteModalAgree">
        <h5 slot="title">
          Delete user profile
        </h5>
        <p
          slot="body"
          class="modal-body">
          Are you sure want to delete {{ currentUser.firstName }} {{ currentUser.lastName }}?
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
          {{ currentUser.firstName }} {{ currentUser.lastName }} was deleted successfully
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
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CurrentUser',
  components: {
    Modal: () => import('@/components/Modal')
  },
  data() {
    return {
      currentUser: null,
      deleteModalShow: false,
      successfulDeleteModalShow: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    id() {
      return Number(this.$route.params.id)
    }
  },
  watch: {
    loading: 'onLoad',
    $route: 'loadUser'
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    onLoad() {
      this.$emit('loading', this.loading)
    },
    loadUser() {
      this.$store.dispatch('loadUser', this.id).then(response => {
        this.currentUser = response.data
      })
    },
    succesfulDeleteModalAgree() {
      this.successfulDeleteModalShow = false
      this.$router.push('/')
    },
    deleteModalAgree(approveDeleteAgree) {
      this.deleteModalShow = false
      if (!approveDeleteAgree) {
        return
      }
      this.$store.dispatch('deleteUser', this.id).then(() => {
        this.successfulDeleteModalShow = true
      })
    },
    deleteCurrentUser() {
      this.deleteModalShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-right: 20px;
}
h5 {
  margin: 0;
  padding: 0;
}
.modal-body {
  font-size: 20px;
}
img {
  max-height: 130px;
  max-width: 100%;
}
</style>
