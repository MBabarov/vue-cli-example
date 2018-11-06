<template>
  <div class="user-form">
    <div class="panel panel-info">
      <div
        v-if="user"
        class="panel-body">
        <div class="row">
          <div
            class="col-md-3 col-lg-3 "
            align="center">
            <ImageUpload v-model="user.picture" />
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
              <vue-editor
                v-validate="'required'"
                v-model="user.about"
                :editor-toolbar="customToolbarForEditor"
                class="vue-editor"
                name="about"
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
                <tr
                  align="left">
                  <td>
                    <label
                      class="control-label"
                      for="registered">
                      Registered
                    </label>
                  </td>
                  <td>
                    <div
                      :class="{'has-error': errors.has('age') }"
                      class="form-group">
                      <DatePicker
                        v-validate="'required'"
                        v-model="user.registered"
                        name="registered" />
                      <p
                        v-if="errors.has('age')"
                        class="text-danger">{{ errors.first('registered') }}</p>
                    </div>
                  </td>
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
                        v-validate="'required'"
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
                        v-validate="'required'"
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
                        v-validate="'required'"
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
                        v-validate="'required'"
                        v-model="user.phone"
                        name="phone"
                        data-rules="required|phone"
                        class="form-control"
                        type="text"
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
                        v-validate="'required'"
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
              type="button"
              class="btn btn-primary btn-block"
              @click="validateBeforeSubmit">{{ titleFormButton }}</button>
          </div>
        </div>
        <Modal
          :modal-show="updateModalShow"
          @onAgree="updateModalAgree">
          <h5 slot="title">
            Update user profile
          </h5>
          <p
            slot="body"
            class="modal-body">
            Are you sure want to update {{ user.firstName }} {{ user.lastName }} profile?
          </p>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'UserForm',
  components: {
    VueEditor,
    ImageUpload: () => import('@/components/ImageUpload'),
    DatePicker: () => import('@/components/DatePicker'),
    Modal: () => import('@/components/Modal')
  },
  data() {
    return {
      user: null,
      formSubmitted: false,
      loading: true,
      customToolbarForEditor: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ],
      updateModalShow: false
    }
  },
  computed: {
    titleFormButton() {
      return this.$route.name === 'new-user' ? 'Create new user profile' : 'Update user profile'
    },
    id() {
      return Number(this.$route.params.id)
    }
  },
  watch: {
    loading: 'onLoad',
    $route: 'loadData'
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onLoad() {
      this.$emit('loading', this.loading)
    },
    loadData() {
      if (this.$route.name == 'new-user') {
        this.prepareNewUser()
      } else {
        this.loadUser()
      }
    },
    prepareNewUser() {
      this.user = {
        about: '',
        registered: '',
        firstName: '',
        lastName: '',
        age: null,
        company: '',
        email: '',
        phone: '',
        address: '',
        picture: 'http://placehold.it/128x128'
      }
      this.loading = false
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
    updateModalAgree(approveEditAgree) {
      this.updateModalShow = false
      if (!approveEditAgree) {
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
    editUser() {
      this.updateModalShow = true
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.submitForm()
        }
      })
    },
    submitForm() {
      this.$route.name == 'new-user' ? this.createUser() : this.editUser()
    }
  }
}
</script>
<style scoped>
.vue-editor {
  background: #fff;
}
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
h5 {
  margin: 0;
  padding: 0;
}
.modal-body {
  font-size: 20px;
}
</style>
