import { derived, get } from 'svelte/store';
import { page } from '$app/stores';
import { getSegments } from '$utils/path';
import { exerciceRoutes, routes } from '$utils/routes';

export const currentRoute = derived(page, ($page) => {
	return get(routes).find(
		(route) => getSegments(route.path)[0] === getSegments($page.url.pathname)[0]
	);
});

export const currentExercice = derived(page, ($page) => {
	console.log('triggered page store!')
	return exerciceRoutes.find((ex) => ex.path === $page.url.pathname);
});