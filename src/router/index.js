import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originPush.call(this, location).catch(error => error);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home/Home')
      }, {
        path: '/mall',
        name: 'mall',
        component: () => import('@/views/Mall/Mall')
      }, {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User/User')
      }, {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/other/pageOne')
      }, {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/other/pageTwo')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
