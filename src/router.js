import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'users-list',
      component: () => import('./views/UsersListPage')
    },
    {
      path: '/users-list-poor',
      name: 'users-list-poor',
      component: () => import('./views/UsersListPagePoor')
    },
    {
      path: '/without-paginator',
      name: 'users-list-p',
      component: () => import('./views/UsersListPageWithoutPaginator')
    },
    {
      path: '/without-search',
      name: 'users-list-s',
      component: () => import('./views/UsersListPageWithoutSearch')
    },
    {
      path: '/new-user',
      name: 'new-user',
      component: () => import('./views/NewUserPage')
    },
    {
      path: '/user/:id',
      name: 'user',
      props: true,
      component: () => import('./views/UserPage')
    },
    {
      path: '/user/:id/edit',
      name: 'edit',
      props: true,
      component: () => import('./views/EditUserPage')
    }
  ]
})
