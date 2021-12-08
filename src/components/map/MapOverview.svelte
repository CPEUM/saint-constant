<script>
	import { onMount } from 'svelte';
	import { Map as M } from 'maplibre-gl';
	import { isMapOverview } from '$stores/map';

	let map;
	let container;

	async function getData(filepath) {
		const res = await fetch(filepath);
		const data = await res.json();
		console.log(data);
	}

	onMount(async () => {
		getData('/data/test.json');

		map = new M({
			container,
			style: 'https://demotiles.maplibre.org/style.json', // style URL
			center: [0, 0], // starting position [lng, lat]
			zoom: 1 // starting zoom
		})
	});
</script>


<div class:overview={$isMapOverview}>
	<figure bind:this={container}></figure>
</div>


<style lang="postcss">
	div {
		position: fixed;
		margin: 0;
		top: 0;
		right: 0;
		bottom: 0;
		left: 100%;
		overflow: hidden;
		transition: all .5s;

		&.overview {
			left: 0%;
		}

		&.proposition {

		}
	}

	figure {
		position: absolute;
		right: 0;
		padding: 0;
		margin: 0;
		width: 100vw;
		height: 100vh;
	}
</style>