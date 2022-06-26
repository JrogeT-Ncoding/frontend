import { createRouter, createWebHistory } from 'vue-router'
import AvailableCourses from "@/pages/AvailableCourses";
import MyCourses from "@/pages/MyCourses";
import EnrollModal from "@/components/EnrollModal";

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
        component: MyCourses
    },
    {
        path: '/test',
        name: 'test',
        component: EnrollModal
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
