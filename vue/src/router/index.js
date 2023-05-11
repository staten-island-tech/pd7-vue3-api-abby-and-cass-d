import { createRouter, createWebHistory } from 'vue-router'
import BarChartView from '../views/BarChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'barchart',
      component: BarChartView
    },
    {
      path: '/doughnutchart',
      name: 'doughnutchart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DoughnutChartView.vue')
    },
    {
      path: '/piechart',
      name: 'piechart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PieChartView.vue')
    },
  ]
})

export default router
