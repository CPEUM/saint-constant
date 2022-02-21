<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import { base } from '$app/paths';
	import { debasePath } from '$utils/path';

	export async function load({ url }: LoadInput): Promise<LoadOutput> {
		const normalizedPath = base + debasePath(url.pathname);
		let queriedExercice = exerciceRoutes.find((exercice) => exercice.path == normalizedPath);
		if (queriedExercice) {
			routes.setExercice(normalizedPath);
			return {
				props: {
					exercice: queriedExercice
				}
			};
		}
		routes.setExercice(exerciceRoutes[0].path);
		return {
			status: 308,
			redirect: debasePath(exerciceRoutes[0].path)
				// base && url.pathname.indexOf(base) === 0
				// 	? exerciceRoutes[0].path
				// 	: debasePath(exerciceRoutes[0].path)
		};
	}
</script>

<script lang="ts">
	import { exerciceRoutes, routes } from '$utils/routes';
	import Header from '$components/exercice/Header.svelte';

	export let exercice;
</script>

<Header {exercice} />
<slot />

<style lang="postcss">

</style>
