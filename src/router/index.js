import VueRouter from 'vue-router';
import BoxShadow from '@/components/BoxShadow.vue';

const routes = [
  {
    path: '/',
    redirect: '/box-shadow'
  }, {
    path: '/box-shadow',
    component: BoxShadow
  }
];

const store = new VueRouter({
  routes: routes
});


export default store;
