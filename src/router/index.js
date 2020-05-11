
import VueRouter from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/sticky'
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
	}
];

const store = new VueRouter({
	routes: routes
});

export default store;
