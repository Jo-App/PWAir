import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
        },
        {
            path: '/main',
            name: 'main222',
            component: MainPage,
        },
    ]
})