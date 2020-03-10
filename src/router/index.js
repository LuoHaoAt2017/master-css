import VueRouter from 'vue-router';
import FlexProp from '@/components/FlexProp.vue';
import BoxShadow from '@/components/BoxShadow.vue';
import FlexBasis from '@/components/FlexBasis.vue';
import TwoScrolls from '@/components/TwoScrolls.vue';
import BlockNesting from '@/components/BlockNesting.vue';
import TextLimitLines from '@/components/TextLimitLines.vue';

const routes = [
  {
    path: '/',
    redirect: '/block-nesting'
  }, {
    path: '/box-shadow',
    component: BoxShadow
  }, {
    path: '/flex-basic-grow-shrink',
    component: FlexProp
  }, {
    path: '/text-line-limit',
    component: TextLimitLines
  }, {
    path: '/flex-basis',
    component: FlexBasis
  }, {
    path: '/two-scroll',
    component: TwoScrolls
  }, {
    path: '/block-nesting',
    component: BlockNesting
  }
];

const store = new VueRouter({
  routes: routes
});

export default store;
