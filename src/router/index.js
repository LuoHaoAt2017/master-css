import VueRouter from 'vue-router';
import BoxShadow from '@/components/BoxShadow.vue';
import FlexProp from '@/components/FlexProp.vue';
import TextCss from '@/components/TextCss.vue';

const routes = [
  {
    path: '/',
    redirect: '/flex-css'
  }, {
    path: '/box-shadow',
    component: BoxShadow
  }, {
    path: '/flex-css',
    component: FlexProp
  }, {
    path: '/text-css',
    component: TextCss
  }
];

const store = new VueRouter({
  routes: routes
});


export default store;
