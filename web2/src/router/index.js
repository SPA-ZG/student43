import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WatchesView from '../views/WatchesView.vue'
import ConverterView from '../views/ConverterView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/watches',
      name: 'watches',
      component: WatchesView
    },
    {
      path: '/converter',
      name: 'converter',
      component: ConverterView
    },
    { path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    }
    ]
})

export default router
