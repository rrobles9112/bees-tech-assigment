/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('@/routes/views/Home');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
