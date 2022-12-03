import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/pages/Login";

const routes = [
  {
    path: '/',
    component: () => import('@/pages/layout/MainLayout'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/pages/layout/Dashboard')
      }
    ]
  },
  /**
  * Login
  * NotFOund
  */
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import { TokenService } from '@/store/storage.service'

router.beforeResolve((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken()
  if(!loggedIn && !isPublic && to.name !== 'login') {
    return next({
          path: '/login',
        }
    )
  }
  if(loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  next()
})

export default router
