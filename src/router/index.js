import { createRouter, createWebHistory } from 'vue-router'
import AvailableCourses from "@/pages/AvailableCourses";
import MyCourses from "@/pages/MyCourses";
import InProgress from "@/pages/InProgress";

const routes = [
    {
        path: '/',
        redirect: '/available-courses.js'
    },
    {
        path: '/available-courses',
        name: 'available-courses',
        component: AvailableCourses
    },
    {
        path: '/my-courses',
        name: 'my-courses',
        component: MyCourses,
    },
    {
        path: '/:pathMatch(.*)*',
        component: InProgress
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
