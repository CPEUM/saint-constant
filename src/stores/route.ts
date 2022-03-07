import type { Readable } from 'svelte/store';
import { derived, get } from 'svelte/store';
import { page } from '$app/stores';
import { getSegments } from '$utils/path';
import type { ExerciceRoute } from '$utils/routes';
import { exerciceRoutes, routes } from '$utils/routes';

export const route = derived(page, ($page) => {
	return routes.find(
		(route) => getSegments(route.path)[0] === getSegments($page.url.pathname)[0]
	);
});

export const exercice: Readable<ExerciceRoute> = derived(page, ($page) => {
	const ex = exerciceRoutes.find((ex) => ex.path === $page.url.pathname);
	return ex || get(exercice);
}, exerciceRoutes[0]);
