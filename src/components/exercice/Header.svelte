<script lang="ts">
	import Image from '$components/primitives/Image.svelte';
	import { text } from '$transitions/text';
	import { exerciceRoutes } from '$utils/routes';

	export let exercice: typeof exerciceRoutes[number];

	$:	console.log(exercice);
</script>

<header>
	<!-- <img src="/media/agroparc/3-1-6.jpg" alt="">
	<img src="/media/agroparc/3-1-8.jpg" alt=""> -->
	{#key exercice}
		<h1
			in:text={{}}
		>
			{exercice?.title}
		</h1>
	{/key}
</header>

<style>
	header {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>