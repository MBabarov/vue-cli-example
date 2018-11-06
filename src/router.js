import Vue from 'vue'
import Router from 'vue-router'
import * as auth from '@/auth'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users-list',
      component: () => import('@/views/UsersListPage'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/phone-mode',
      name: 'phone-mode',
      component: () => import('@/views/UsersListPhoneModePage'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage'),
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/new-user',
      name: 'new-user',
      component: () => import('@/views/NewUserPage'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      props: true,
      component: () => import('@/views/UserPage'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id/edit',
      name: 'edit',
      props: true,
      component: () => import('@/views/EditUserPage'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})
export default router
