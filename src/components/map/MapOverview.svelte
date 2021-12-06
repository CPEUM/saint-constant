<script>
	import { onMount } from 'svelte';
	import { Map as M } from 'maplibre-gl';

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


<div>
	<figure bind:this={container}>

	</figure>
</div>


<style>
	div {
		position: absolute;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: grey;
	}

	figure {
		position: relative;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>