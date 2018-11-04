import Vue from 'vue'
import Router from 'vue-router'
import * as auth from '@/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'users-list',
      component: () => import('./views/UsersListPage'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/phone-mode',
      name: 'phone-mode',
      component: () => import('./views/UsersListPhoneModePage'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginPage'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/users-list-poor',
      name: 'users-list-poor',
      component: () => import('./views/UsersListPagePoor'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/without-paginator',
      name: 'users-list-p',
      component: () => import('./views/UsersListPageWithoutPaginator'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/without-search',
      name: 'users-list-s',
      component: () => import('./views/UsersListPageWithoutSearch'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/new-user',
      name: 'new-user',
      component: () => import('./views/NewUserPage'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      props: true,
      component: () => import('./views/UserPage'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id/edit',
      name: 'edit',
      props: true,
      component: () => import('./views/EditUserPage'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.getToken()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
