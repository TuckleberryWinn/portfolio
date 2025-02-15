import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: DetailView,
		props: true,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '/cms',
		name: 'cms',
		component: () => import('../views/CMSView.vue'),
	},
];

if (import.meta.env.DEV) {
	routes.push({
		path: '/devtools',
		name: 'devtools',
		component: () => import('../views/DevTools.vue'),
	});
	console.log('Goats have invaded the router');
}

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
