<script context="module">
	export async function load({page}) {
		let queriedExercice = exerciceRoutes.find(exercice => exercice.path === page.path);
		if (queriedExercice) {
			routes.setIdeation(page.path);
			return {
				props: {
					exercice: exerciceRoutes.find(ex => ex.path === page.path)
				}
			}
		}
		else {
			return {
				status: 308,
				redirect: exerciceRoutes[0].path
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
	<h2>{exercice.title}</h2>
</header>
<article>
	<slot></slot>
</article>


<style>
</style>