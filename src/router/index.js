import VueRouter from 'vue-router';
import FlexProp from '@/components/FlexProp.vue';
import BoxShadow from '@/components/BoxShadow.vue';
import FlexBasis from '@/components/FlexBasis.vue';
import TwoScrolls from '@/components/TwoScrolls.vue';
import BlockNesting from '@/components/BlockNesting.vue';
import TextLimitLines from '@/components/TextLimitLines.vue';
import CaretColor from '@/components/CaretColor.vue';
import Placeholder from '@/components/Placeholder.vue';
import OutlineProp from '@/components/OutlineProp.vue';
import TransformTab from '@/components/TransformTab.vue';
import QuizExercise from '@/components/QuizExercise.vue';
import FontSize from '@/components/FontSize.vue';
import MarginTest from '@/components/MarginTest.vue';
import ImgLoad from '@/components/ImgLoad.vue';
import DisplayCase from '@/components/DisplayCase.vue';
import Interview from '@/components/Interview.vue';
import BlockElem from '@/pages/chapter01/block-elem.vue';
import InlineElem from '@/pages/chapter01/inline-elem.vue';
import ImgAutofit from '@/pages/chapter01/img-autofit.vue';
import Priority from '@/pages/chapter01/priority-test.vue';
import Replacement from '@/pages/chapter02/replace-elem.vue';
import PaddingProp from '@/pages/chapter02/padding-prop.vue';

const routes = [{
	path: '/img-autofit',
	component: ImgAutofit
}, {
	path: '/block-elem',
	component: BlockElem
}, {
	path: '/box-shadow',
	component: BoxShadow
}, {
	path: '/inline-elem',
	component: InlineElem
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
}, {
	path: '/outline',
	component: OutlineProp
}, {
	path: '/transform',
	component: TransformTab
}, {
	path: '/quiz-exercise',
	component: QuizExercise
}, {
	path: '/font-size',
	component: FontSize
}, {
	path: '/margin-test',
	component: MarginTest
}, {
	path: '/img-load',
	component: ImgLoad
}, {
	path: '/display-case',
	component: DisplayCase
}, {
	path: '/interview',
	component: Interview
}, {
	path: '/priority-test',
	component: Priority
}, {
	path: '/replace-elem',
	component: Replacement
}, {
	path: '/padding-prop',
	component: PaddingProp
}, {
	path: '/',
	redirect: '/padding-prop'
},
];

const store = new VueRouter({
	routes: routes
});

export default store;
