import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const appRoutes = [
  {
    path: '/',
    redirect: '/dashboard'
  }
];

const routes = [...appRoutes];

export default new Router({
  mode: 'history',
  routes
});
