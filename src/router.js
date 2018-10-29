import Vue from 'vue'
import Router from 'vue-router'
import UsersListPage from './views/UsersListPage.vue'
import NewUserPage from './views/NewUserPage.vue'
import EditUserPage from './views/EditUserPage.vue'
import UserPage from './views/UserPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'users-list',
      component: UsersListPage
    },
    {
      path: '/new-user',
      name: 'new-user',
      component: NewUserPage
    },
    {
      path: '/user/:id',
      name: 'user',
      props: true,
      component: UserPage
    },
    {
      path: '/user/:id/edit',
      name: 'edit',
      props: true,
      component: EditUserPage
    }
  ]
})
