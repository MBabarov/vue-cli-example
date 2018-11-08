import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentUsersAmount: 0,
    usersList: [],
    loading: true
  },
  mutations: {
    changeLoadingState: (state, payload) => {
      state.loading = payload
    },
    setUsers: (state, payload) => {
      state.usersList = payload
    }
  },
  getters: {
    currentUsersAmount: state => state.usersList.length
  },
  actions: {
    updateLoadingStatus(context, data) {
      context.commit('changeLoadingState', data)
    },
    loadUsers(context) {
      context.commit('changeLoadingState', true)
      axios
        .get('users')
        .then(response => {
          context.commit('setUsers', response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => context.commit('changeLoadingState', false))
    },
    loadUser(context, id) {
      context.commit('changeLoadingState', true)
      return new Promise((resolve, reject) =>
        axios
          .get(`users/${id}`)
          .then(
            response => {
              resolve(response)
            },
            error => {
              reject(error)
            }
          )
          .finally(() => context.commit('changeLoadingState', false))
      )
    },
    updateUser(context, user) {
      context.commit('changeLoadingState', true)
      return new Promise((resolve, reject) =>
        axios
          .patch(`users/${user.id}`, {
            ...user
          })
          .then(
            () => {
              resolve()
            },
            error => {
              reject(error)
            }
          )
          .finally(() => context.commit('changeLoadingState', false))
      )
    },
    deleteUser(context, id) {
      context.commit('changeLoadingState', true)
      return new Promise((resolve, reject) =>
        axios
          .delete(`users/${id}`)
          .then(
            () => {
              resolve()
            },
            error => {
              reject(error)
            }
          )
          .finally(() => context.commit('changeLoadingState', false))
      )
    },
    createUser(context, user) {
      context.commit('changeLoadingState', true)
      return new Promise((resolve, reject) =>
        axios
          .post('users/', {
            ...user
          })
          .then(
            () => {
              resolve()
            },
            error => {
              reject(error)
            }
          )
          .finally(() => context.commit('changeLoadingState', true))
      )
    }
  }
})

export default store
