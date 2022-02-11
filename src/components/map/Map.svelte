<script>
	import { onMount } from 'svelte';
	import { Map as M } from 'maplibre-gl';
	import { isMapFull, mapViewMode } from '$stores/map';

	let map;
	let container;

	async function getData(filepath) {
		const res = await fetch(filepath);
		if (res.ok) {
			return await res.json();
		}
		else {
			throw new Error('Couldn\'t get data fetched from map component');
		}
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

	// ajouter une règle du genre:
	// $: if (browser) document.body.classList.toggle('noscroll', toggle);
	// pour cacher la scrollbar lorsque la carte est ouverte
</script>


<figure
	class:full={$isMapFull}
	class={$mapViewMode ? $mapViewMode : ''}
>
	<div bind:this={container}></div>
</figure>


<style lang="postcss">
	figure {
		pointer-events: auto;
		position: fixed;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		width: 0%;
		padding: 0;
		margin: 0;
		height: 100%;
		overflow: hidden;
		transition: all .5s cubic-bezier(.8, 0, .2, 1);

		&.full {
			height: 100% !important;
			width: 100vw !important;
		}

		&.proposition {

		}
	}

	div {
		position: absolute;
		padding: 0;
		margin: 0;
		width: 100vw;
		height: 100vh;
	}
</style>