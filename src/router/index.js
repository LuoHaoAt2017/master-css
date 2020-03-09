import VueRouter from 'vue-router';
import BoxShadow from '@/components/BoxShadow.vue';
import FlexProp from '@/components/FlexProp.vue';
import TextCss from '@/components/TextCss.vue';
import FlexBasis from '@/components/FlexBasis.vue'

const routes = [
  {
    path: '/',
    redirect: '/flex-basis'
  }, {
    path: '/box-shadow',
    component: BoxShadow
  }, {
    path: '/flex-basic-grow-shrink',
    component: FlexProp
  }, {
    path: '/text-css',
    component: TextCss
  }, {
    path: '/flex-basis',
    component: FlexBasis
  }
];

const store = new VueRouter({
  routes: routes
});


export default store;
