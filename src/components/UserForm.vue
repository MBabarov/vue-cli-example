<template>
  <div class="user-form">
    <div class="panel panel-info">
      <div class="panel-body">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="row">
            <div
              class="col-md-3 col-lg-3 "
              align="center">
              <img
                :src="user.picture"
                class="img-circle img-responsive"
                alt="User Pic">
            </div>
            <div
              class="col-md-9 col-lg-9"
              align="left">
              <div
                :class="{'has-error': errors.has('firstName')}"
                class="form-group">
                <label
                  class="control-label"
                  for="firstName">
                  First name
                </label>
                <input
                  v-validate="'required'"
                  v-model="user.firstName"
                  name="firstName"
                  data-rules="required|min:3"
                  class="form-control"
                  type="text"
                  placeholder="First Name">
                <p
                  v-if="errors.has('firstName')"
                  class="text-danger">
                  {{ errors.first('firstName') }}
                </p>
              </div>
              <div
                :class="{'has-error': errors.has('lastName')}"
                class="form-group">
                <label
                  class="control-label"
                  for="lastName">
                  Last name
                </label>
                <input
                  v-validate="'required'"
                  v-model="user.lastName"
                  name="lastName"
                  data-rules="required|alpha|min:3"
                  class="form-control"
                  type="text"
                  placeholder="Last Name">
                <p
                  v-if="errors.has('lastName')"
                  class="text-danger">
                  {{ errors.first('lastName') }}
                </p>
              </div>
              <div
                :class="{'has-error': errors.has('about') }"
                class="form-group"
              >
                <label
                  class="control-label"
                  for="about">
                  About
                </label>
                <textarea
                  v-validate="'required'"
                  v-model="user.about"
                  name="about"
                  data-rules="required|min:3"
                  class="form-control"
                  type="text"
                  placeholder="About"/>
                <p
                  v-if="errors.has('about')"
                  class="text-danger"
                >
                  {{ errors.first('about') }}
                </p>
              </div>
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
                    <td>{{ user.registered }}</td>
                  </tr>
                  <tr align="left">
                    <td>
                      <label
                        class="control-label"
                        for="age">
                        Age
                      </label>
                    </td>
                    <td>
                      <div 
                        :class="{'has-error': errors.has('age') }" 
                        class="form-group">
                        <input 
                          v-validate.initial="'required'" 
                          v-model="user.age" 
                          name="age" 
                          data-rules="required|number" 
                          class="form-control" 
                          type="number"
                          placeholder="Age">
                        <p 
                          v-if="errors.has('age')" 
                          class="text-danger">{{ errors.first('age') }}</p>
                      </div>
                    </td>
                  </tr>
                  <tr align="left">
                    <td>
                      <label 
                        class="control-label" 
                        for="company">Company</label>
                    </td>
                    <td>
                      <div 
                        :class="{'has-error': errors.has('company') }" 
                        class="form-group" >
                        <input 
                          v-validate.initial="'required'" 
                          v-model="user.company" 
                          name="company" 
                          data-rules="required" 
                          class="form-control" 
                          type="text" 
                          placeholder="Company">
                        <p 
                          v-if="errors.has('company')" 
                          class="text-danger">{{ errors.first('company') }}</p>
                      </div>
                    </td>
                  </tr>
                  <tr align="left">
                    <td>
                      <label 
                        class="control-label" 
                        for="email">Email</label>
                    </td>
                    <td>
                      <div 
                        :class="{'has-error': errors.has('email') }" 
                        class="form-group" >
                        <input 
                          v-validate.initial="'required'" 
                          v-model="user.email" 
                          name="email" 
                          data-rules="required|email" 
                          class="form-control" 
                          type="email" 
                          placeholder="Email">
                        <p 
                          v-if="errors.has('email')" 
                          class="text-danger">{{ errors.first('email') }}</p>
                      </div>
                    </td>
                  </tr>
                  <tr align="left">
                    <td>
                      <label 
                        class="control-label" 
                        for="phone">Phone</label>
                    </td>
                    <td>
                      <div 
                        :class="{'has-error': errors.has('phone') }" 
                        class="form-group">
                        <input 
                          v-validate.initial="'required'" 
                          v-model="user.phone" 
                          name="phone" 
                          data-rules="required|phone" 
                          class="form-control" 
                          type="number"
                          placeholder="Phone">
                        <p 
                          v-if="errors.has('phone')" 
                          class="text-danger">{{ errors.first('phone') }}</p>
                      </div>
                    </td>
                  </tr>
                  <tr align="left">
                    <td>
                      <label 
                        class="control-label" 
                        for="address">Address</label>
                    </td>
                    <td>
                      <div 
                        :class="{'has-error': errors.has('address') }" 
                        class="form-group">
                        <input 
                          v-validate.initial="'required'" 
                          v-model="user.address" 
                          name="address" 
                          data-rules="required|address" 
                          class="form-control" 
                          type="text" 
                          placeholder="Address">
                        <p 
                          v-if="errors.has('address')" 
                          class="text-danger">{{ errors.first('address') }}</p>
                      </div>
                    </td>
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
              class="col-md-9 col-lg-9 action-group" 
              align="left">
              <button 
                class="btn btn-primary btn-block" 
                type="submit">{{ titleFormButton }}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'EditUser',
  props: {
    id: {
      type: [String, Number],
      default: '',
      required: false
    }
  },
  data: function() {
    return {
      user: null,
      formSubmitted: false,
      loading: true
    }
  },
  computed: {
    titleFormButton: function() {
      return this.$route.name == 'new-user' ? 'Create new user profile' : 'Update user profile'
    }
  },
  mounted() {
    this.$route.name == 'new-user' ? this.prepareNewUser() : this.loadUser()
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
      axios
        .get(`users/${this.id}`)
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
      axios
        .post('users/', {
          ...this.user
        })
        .then(() => {
          this.$router.back()
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
    editUser() {
      var confirm = window.confirm('Are you sure want to update user data?')
      if (!confirm) {
        return
      }

      this.loading = true
      axios
        .patch(`users/${this.user.id}`, {
          ...this.user
        })
        .then(() => {
          this.$router.back()
        })
        .catch(error => {
          console.log(error)
          alert(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
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
