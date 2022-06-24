import { createRouter, createWebHistory } from 'vue-router'
import AvailableCourses from "@/components/AvailableCourses";

const routes = [
  {
    path: '/',
    redirect: '/available-courses'
  },
  {
      path: '/available-courses',
      name: 'available-courses',
      component: AvailableCourses
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
