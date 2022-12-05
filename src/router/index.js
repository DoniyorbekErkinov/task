import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent} from "vue";
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
      },
      {
        name: 'Users',
        path: '/users',
        component: () => import('@/pages/Users/List')
      },
      {
        name: 'Students',
        path: '/students',
        component: () => import('@/pages/students/List')
      },
      {
        name: 'Quizzes',
        path: '/quizzes',
        component: {
          render() {
            return h(resolveComponent("router-view"));
          },
        },
        children: [
          {
            path: "",
            name: "QuizzesList",
            component: () => import('@/pages/Quiz/List'),
          },
          {
            path: "/add-update-quiz",
            name: "AddUpdateQuiz",
            component: () => import('@/pages/Quiz/AddUpdateQuiz')
          },
          {
            path: "/add-update-quiz/:id",
            name: "AddUpdateQuizById",
            component: () => import('@/pages/Quiz/AddUpdateQuiz')
          }
        ]
      },
      {
        path: 'candidate-quiz',
        name: 'CandidateQuiz',
        component: () => import('@/pages/SolveQuiz/List')
      }
    ]
  },
  /**
  * Login
  * NotFound
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
