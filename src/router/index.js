import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('components/layout/home.vue')
const Home1 = () => import('pages/home1.vue')
const Home2 = () => import('pages/home2.vue')
const Home31 = () => import('pages/home31.vue')
const Home32 = () => import('pages/home32.vue')

const Menu2 = () => import('pages/menu2.vue')
const Menu3 = () => import('pages/menu3.vue')

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: { name: 'home1' },
    children: [
      { path: 'home1', name: 'home1', component: Home1 },
      { path: 'home2', name: 'home2', component: Home2 },
      { path: 'home31', name: 'home31', component: Home31 },
      { path: 'home32', name: 'home32', component: Home32 },

      { path: 'menu2', name: 'menu2', component: Menu2 },
      { path: 'menu3', name: 'menu3', component: Menu3 },
    ]
  },
  
  { path: '/:catchAll(.*)', redirect: { name: 'home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  return true
})

export default router