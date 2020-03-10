import VueRouter from 'vue-router';
import FlexProp from '@/components/FlexProp.vue';
import BoxShadow from '@/components/BoxShadow.vue';
import FlexBasis from '@/components/FlexBasis.vue';
import TwoScrolls from '@/components/TwoScrolls.vue';
import BlockNesting from '@/components/BlockNesting.vue';
import TextLimitLines from '@/components/TextLimitLines.vue';
import CaretColor from '@/components/CaretColor.vue';
import Placeholder from '@/components/Placeholder.vue';

const routes = [
  {
    path: '/',
    redirect: '/placeholder'
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
  }, {
    path: '/caret-color',
    component: CaretColor
  }, {
    path: '/placeholder',
    component: Placeholder
  }
];

const store = new VueRouter({
  routes: routes
});

export default store;
