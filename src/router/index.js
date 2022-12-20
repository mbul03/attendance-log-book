import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
    {
        path: '/',
        component: LoginView
    },
    {
        path: '/after-submit/:name',
        component: () => import('../views/AttendanceView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
