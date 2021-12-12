<script>
	import { onMount } from 'svelte';
	import { Map as M } from 'maplibre-gl';
	import { isMapFull, mapViewMode } from '$stores/map';

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


<div
	class:full={$isMapFull}
	class={$mapViewMode ? $mapViewMode : ''}
>
		<figure bind:this={container}></figure>
</div>


<style lang="postcss">
	div {
		pointer-events: none;
		position: fixed;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		width: 0%;
		height: 100%;
		overflow: hidden;
		transition: all .5s cubic-bezier(.8, 0, .2, 1);

		&.full {
			width: 100vw;
		}

		&.proposition {

		}
	}

	figure {
		pointer-events: auto;
		position: absolute;
		padding: 0;
		margin: 0;
		width: 100vw;
		height: 100vh;
	}
</style>