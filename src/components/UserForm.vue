<template>
  <div class="user-form">
    <div class="panel panel-info">
      <div class="panel-body">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="row">
            <div class="col-md-3 col-lg-3 " align="center">
              <img alt="User Pic" :src="user.picture" class="img-circle img-responsive">
            </div>
            <div class=" col-md-9 col-lg-9" align="left">
              <div class="form-group" :class="{'has-error': errors.has('firstName') }">
                <label class="control-label" for="firstName">First name</label>
                <input v-model="user.firstName" name="firstName" v-validate="'required'" data-rules="required|min:3" class="form-control" type="text" placeholder="First Name">
                <p class="text-danger" v-if="errors.has('firstName')">{{ errors.first('firstName') }}</p>
              </div>
              <div class="form-group" :class="{'has-error': errors.has('lastName') }">
                <label class="control-label" for="lastName">Last name</label>
                <input v-model="user.lastName" name="lastName" v-validate="'required'" data-rules="required|alpha|min:3" class="form-control" type="text" placeholder="Last Name">
                <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
              </div>
              <div class="form-group" :class="{'has-error': errors.has('about') }">
                <label class="control-label" for="about">About</label>
                <textarea v-model="user.about" name="about" v-validate="'required'" data-rules="required|min:3" class="form-control" type="text" placeholder="About" />
                <p class="text-danger" v-if="errors.has('about')">{{ errors.first('about') }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-lg-3 " align="center"></div>
            <div class=" col-md-9 col-lg-9">
              <h5 align="left">Personal information</h5>
              <table class="table table-user-information">
                <tbody>
                <tr align="left">
                  <td>Registered:</td>
                  <td>{{user.registered}}</td>
                </tr>
                <tr align="left">
                  <td>
                    <label class="control-label" for="age">Age</label>
                  </td>
                  <td>
                    <div class="form-group" :class="{'has-error': errors.has('age') }">
                      <input v-model="user.age" name="age" v-validate.initial="'required'" data-rules="required|number" class="form-control" type="text" placeholder="Age">
                      <p class="text-danger" v-if="errors.has('age')">{{ errors.first('age') }}</p>
                    </div>
                  </td>
                </tr>
                <tr align="left">
                  <td>
                    <label class="control-label" for="company">Company</label>
                  </td>
                  <td>
                    <div class="form-group" :class="{'has-error': errors.has('company') }" >
                      <input v-model="user.company" name="company"  v-validate.initial="'required'" data-rules="required" class="form-control" type="text" placeholder="Company">
                      <p class="text-danger" v-if="errors.has('company')">{{ errors.first('company') }}</p>
                    </div>
                  </td>
                </tr>
                <tr align="left">
                  <td>
                    <label class="control-label" for="email">Email</label>
                  </td>
                  <td>
                    <div class="form-group" :class="{'has-error': errors.has('email') }" >
                      <input v-model="user.email" name="email" v-validate.initial="'required'" data-rules="required|email" class="form-control" type="email" placeholder="Email">
                      <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                    </div>
                  </td>
                </tr>
                <tr align="left">
                  <td>
                    <label class="control-label" for="phone">Phone</label>
                  </td>
                  <td>
                    <div class="form-group" :class="{'has-error': errors.has('phone') }">
                      <input v-model="user.phone" name="phone" v-validate.initial="'required'" data-rules="required|phone" class="form-control" type="text" placeholder="Phone">
                      <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                    </div>
                  </td>
                </tr>
                <tr align="left">
                  <td>
                    <label class="control-label" for="address">Address</label>
                  </td>
                  <td>
                    <div class="form-group" :class="{'has-error': errors.has('address') }">
                      <input v-model="user.address" name="address" v-validate.initial="'required'" data-rules="required|address" class="form-control" type="text" placeholder="Address">
                      <p class="text-danger" v-if="errors.has('address')">{{ errors.first('address') }}</p>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-lg-3 " align="center"></div>
            <div class="col-md-9 col-lg-9 action-group" align="left">
              <button class="btn btn-primary btn-block" type="submit">Update user</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  props: {
    id: Number
  },
  data: function() {
    return {
      user: null,
      formSubmitted: false,
      loading: true
    }
  },
  methods: {
    prepareNewUser() {
      this.user = {
        about: '',
        firstName: '',
        lastName: '',
        age: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        picture: 'http://placehold.it/128x128'
      }
    },
    loadUser() {
      this.loading = true
      this.$axios
        .get(`http://localhost:3004/users/${this.id}`)
        .then(response => {
          this.user = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
    createUser() {
      this.loading = true
      this.$axios
        .post('http://localhost:3004/users/', {
          ...this.user
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
          alert(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
    editUser() {
      var confirm = window.confirm('Are you sure want to update user data?')
      if (confirm) {
        this.loading = true
        this.$axios
          .patch(`http://localhost:3004/users/${this.user.id}`, {
            ...this.user
          })
          .then(() => {
            this.$router.push(`/user/${this.user.id}`)
          })
          .catch(error => {
            console.log(error)
            alert(error)
            this.errored = true
          })
          .finally(() => (this.loading = false))
      }
    },
    validateBeforeSubmit() {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.submitForm()
      }
    },
    submitForm() {
      this.$route.name == 'new-user' ? this.createUser() : this.editUser()
    }
  },
  mounted() {
    this.$route.name == 'new-user' ? this.prepareNewUser() : this.loadUser()
  }
}
</script>
<style scoped>
.form-group {
  padding-bottom: 20px;
  position: relative;
}
.text-danger {
  position: absolute;
}
.action-group {
  padding: 0 1.75rem;
}
textarea.form-control {
  min-height: 100px;
}
</style>
