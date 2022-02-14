<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { Map as M } from 'maplibre-gl';
	import { mapState } from '$stores/map';

	let map: M;
	let container: HTMLElement;
	const dispatch = createEventDispatcher<{load: null}>();

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
		});

		map.once('load', () => {
			console.log('map loaded');
			dispatch('load');
		})
	});
</script>


<figure
	class:full={$mapState.isfull}
	class={$mapState.class}
	style={$mapState.style}
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
		bottom: 0;
		left: 100%;
		right: 0;
		width: auto;
		height: auto;
		padding: 0;
		margin: 0;
		overflow: hidden;
		transition: all .5s cubic-bezier(.9, 0, .1, 1);

		&.full {
			top: 0 !important;
			bottom: 0 !important;
			left: 0 !important;
			right: 0 !important;
		}

		&:global(.medium) {
			--pad: 150px;
			--offset: 33%;
			--offset-width: calc(50vw - var(--width-md) / 2);
			top: var(--pad);
			bottom: var(--pad);
			/* border-radius: var(--sm); */
			box-shadow: 0px 100px 75px -25px rgba(0,0,0, .1);
		}

		&:global(.left) {
			left: var(--offset);
			right: var(--offset-width);
		}

		&:global(.right) {
			right: var(--offset);
			left: var(--offset-width);
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