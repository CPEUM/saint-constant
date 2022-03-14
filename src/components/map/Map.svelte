<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const getMap = () => map;
	export const mapLoaded = writable(false);
	export let map: maplibregl.Map;
</script>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { mapState } from '$stores/map';
	import { addCityLayer, addPropositionsLayers } from '$utils/map';
	import { Map as MaplibreMap } from 'maplibre-gl';
	import FigureCompass from '$components/figure/FigureCompass.svelte';
	
	let container: HTMLElement;
	const dispatch = createEventDispatcher<{load: null, error: null}>();
	let bearing = 0;

	onMount(() => {
		map = new MaplibreMap({
				container,
				style: 'https://api.maptiler.com/maps/856b4e05-cd2c-42db-9453-9cd7e156a083/style.json?key=dtV5LH1SmQB4VOb80qqI',
				center: [-73.5700, 45.3699], // starting position [lng, lat]
				bearing,
				pitch: 30,
				zoom: 14, // starting zoom
				minZoom: 10,
				maxZoom: 20
			});

		map.on('error', (e) => {
			dispatch('error');
		})

		map.once('load', () => {
			dispatch('load');
			mapLoaded.set(true);
			addCityLayer(map);
			addPropositionsLayers(map);
		});

		map.on('rotate', (e) => {
			bearing = map.getBearing();
		});
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/maplibre-gl@2.1.7/dist/maplibre-gl.css"
	/>
</svelte:head>

<figure
	class:full={$mapState.isfull}
	class={$mapState.class}
	class:mask={$mapState.mask.top}
	style:top={$mapState.mask.top}
	style:right={$mapState.mask.right}
	style:bottom={$mapState.mask.bottom}
	style:left={$mapState.mask.left}
>
	<div id="container" bind:this={container}></div>
	<div id="info">
	<!-- Short description of current view (remove when user moves map) -->
	<!-- Scale line -->
	<FigureCompass on:click={() => map.flyTo({bearing: 0})} {bearing} />
	<slot />
	</div>
</figure>

<style lang="postcss">
	figure {
		--ease: cubic-bezier(.3, 0, 0, 1);
		pointer-events: auto;
		position: fixed;
		z-index: -20;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 40%;
		bottom: 40%;
		left: 40%;
		right: 40%;
		opacity: 0;
		border-radius: 500px;
		width: auto;
		height: auto;
		padding: 0;
		margin: 0;
		overflow: hidden;
		transition: all .4s var(--ease);

		&.full {
			opacity: 1 !important;
			z-index: 1 !important;
			top: 0 !important;
			bottom: 0 !important;
			left: 0 !important;
			right: 0 !important;
			border-radius: 0 !important;
		}

		&.mask:not(.full) {
			opacity: 1;
			border-radius: 0;
			transition: all .6s ease-in-out;
		}

		&:global(.figure) {
			opacity: 1;
			top: 0rem;
			right: 0rem;
			bottom: 0rem;
			left: 0rem;
			border-radius: 0;
		}

		&:global(.half) {
			--offset-inside: 50%;
			--offset-outside: 0;
			opacity: 1;
			border-radius: 0;
			top: 0;
			bottom: 0;
		}

		&:global(.medium) {
			--offset-inside: max(0px, calc(50vw - var(--width-lg) / 4));
			--offset-outside: max(0px, calc(50vw - var(--width-lg) / 2));
			opacity: 1;
			border-radius: 2rem;
			top: max(120px, calc(50vh - 500px));
			bottom: max(120px, calc(50vh - 500px));
			box-shadow: 0px 40px 80px -25px rgba(0,0,25, .1);
		}

		&:global(.left) {
			right: var(--offset-inside);
			left: var(--offset-outside);
		}

		&:global(.right) {
			right: var(--offset-outside);
			left: var(--offset-inside);
		}

		&:global(.proposition) {
			top: 0;
			left: 50%;
			right: 0;
			bottom: 0;
			opacity: 1;
			border-radius: 0;
		}
	}

	#container {
		position: absolute;
		padding: 0;
		margin: 0;
		width: 100vw;
		height: 100vh;
	}

	#info {
		position: absolute;
		bottom: 2rem;
		width: 100%;
		max-width: var(--width-md);
		padding: 0 1rem;
		height: 2rem;
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>