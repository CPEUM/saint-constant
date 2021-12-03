<script context="module">
	import { base } from '$app/paths';
	import { debasePath } from '$utils/path';

	export async function load({page}) {
		const normalizedPath = base + debasePath(page.path)
		let queriedExercice = exerciceRoutes.find(exercice => exercice.path == normalizedPath);
		if (queriedExercice) {
			routes.setExercice(normalizedPath);
			return {
				props: {
					exercice: queriedExercice
				}
			}
		}
		routes.setExercice(exerciceRoutes[0].path);
		return {
			status: 308,
			redirect: base && page.path.indexOf(base) === 0 ? exerciceRoutes[0].path : debasePath(exerciceRoutes[0].path)
		}
	}
</script>


<script>
	import { exerciceRoutes, routes } from '$utils/routes';

	export let exercice;
</script>


<header>
	Title from layout: <h2>{exercice.title}</h2>
</header>
<section>
	<slot></slot>
</section>


<style>

</style>