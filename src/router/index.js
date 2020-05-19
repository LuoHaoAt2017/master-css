
import VueRouter from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/grid-layout'
	},
	{
		path: '/sticky',
		name: 'Sticky',
		component: () => import('@/pages/chapter03/index.vue'),
		children: [
			{
				path: '',
				redirect: 'js'
			},
			{
				path: 'js',
				name: 'Javascript',
				component: () => import('@/pages/chapter03/js.vue'),
			},
			{
				path: 'css',
				name: 'CSS',
				component: () => import('@/pages/chapter03/css.vue'),
			},
			{
				path: 'html',
				name: 'Html',
				component: () => import('@/pages/chapter03/html.vue'),
			}
		]
	},
	{
		path: '/grid-layout',
		name: 'GridLayout',
		component: () => import('@/pages/chapter04/index.vue'),
		children: [
			{
				path: '',
				redirect: 'container'
			},
			{
				path: 'container',
				name: 'Container',
				component: () => import('@/pages/chapter04/container.vue'),
			},
			{
				path: 'cell',
				name: 'Cell',
				component: () => import('@/pages/chapter04/cell.vue'),
			},
			{
				path: 'complex',
				name: 'Complex',
				component: () => import('@/pages/chapter04/complex.vue'),
			}
		]
	}
];

const store = new VueRouter({
	routes: routes
});

export default store;
