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
	import Image from '$components/primitives/Image.svelte';
	import { fly } from 'svelte/transition';

	export let exercice;

</script>


<header>
	<img src="/media/agroparc/3-1-6.jpg" alt="">
	<img src="/media/agroparc/3-1-8.jpg" alt="">
	{#key exercice}
		<h1 transition:fly>Title from layout: {exercice?.title}</h1>
	{/key}
</header>
<section>
	<slot></slot>
</section>


<style>
	header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		background-color: pink;
	}

	section {
		width: 100%;
	}

	h1 {
		z-index: 1;
	}

	img {
		position: absolute;
		width: 500px;
	}
</style>