<script context="module">
	import { base } from '$app/paths';
	import { debasePath } from '$utils/path';

	export async function load({page}) {
		const normalizedPath = base + debasePath(page.path)
		let queriedExercice = exerciceRoutes.find(exercice => exercice.path == normalizedPath);
		if (queriedExercice) {
			routes.setIdeation(normalizedPath);
			return {
				props: {
					exercice: queriedExercice
				}
			}
		}
		else {
			return {
				props: {}
			}
		}
	}
</script>


<script>
	import NavIdeation from '$components/NavIdeation.svelte';
	import { exerciceRoutes, routes } from '$utils/routes';

	export let exercice;
</script>


<NavIdeation></NavIdeation>
<header>
	Title from layout: <h2>{exercice?.title}</h2>
</header>
<article>
	<slot></slot>
</article>


<style>
</style>