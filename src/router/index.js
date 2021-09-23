import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/index/Home')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router