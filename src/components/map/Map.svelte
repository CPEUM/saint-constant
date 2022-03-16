<script lang="ts" context="module">
	import { derived, get, writable } from 'svelte/store';

	export const mapLoaded = writable(false);
	export let map: maplibregl.Map;
</script>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { mapDisplay, mapFocus, mapHighlight } from '$stores/map';
	import { addCityLayer, addPropositionsLayers } from '$utils/map';
	import maplibregl from 'maplibre-gl';
	import bbox from '@turf/bbox';
	import bboxPolygon from '@turf/bbox-polygon';
	import combine from '@turf/combine';
	import { featureCollection } from '@turf/helpers';
	import FigureCompass from '$components/figure/FigureCompass.svelte';

	let container: HTMLElement;
	const dispatch = createEventDispatcher<{ load: null; error: null }>();
	let bearing = 0;
	let layerIds: string[] = [];
	let fallbackBounds: maplibregl.LngLatBoundsLike = [-73.6, 45.29, -73.58, 45.4];
	const displayFull = derived(mapDisplay, (mapDisplay) => mapDisplay.full);

	/**
	 * Focusing the map dynamically
	 */
	$: if ($mapLoaded && !$displayFull) {
		if (!$mapFocus) {
			map.fitBounds(fallbackBounds, { padding: 100 });
		} else if ($mapFocus.bounds) {
			map.fitBounds($mapFocus.bounds);
		} else if ($mapFocus.center) {
			map.flyTo({
				center: $mapFocus.center.point,
				zoom: $mapFocus.center.zoom
			});
		} else if ($mapFocus.filter) {
			// https://maplibre.org/maplibre-gl-js-docs/example/zoomto-linestring/
			const filtered: maplibregl.GeoJSONFeature[] = map.querySourceFeatures('propositions', {
				sourceLayer: 'propositions',
				filter: $mapFocus.filter
			});
			// let bounds: maplibregl.LngLatBounds;
			// for (const feature of filtered) {
			// 	let coords = feature.geometry.coordinates;
			// 	console.log(coords);
			// 	if (!Array.isArray(coords[0])) {
			// 		coords = [coords];
			// 	}
			// 	for (const pt of coords) {
			// 		if (!bounds) {
			// 			bounds = new maplibregl.LngLatBounds(pt, pt);
			// 		}
			// 		else {
			// 			bounds.extend(pt);
			// 		}
			// 	}
			// }
			const bounds = new maplibregl.LngLatBounds(
				bbox(featureCollection(filtered.map((feature) => bboxPolygon(bbox(feature)))))
			);
			map.fitBounds(bounds, { padding: 200, duration: 1000, maxZoom: 14.5 });
		}
	}

	/**
	 * Temporarily reset view when opening full view map
	 */
	$: if ($mapLoaded && $displayFull) {
		map.fitBounds(fallbackBounds);
	}

	/**
	 * Highlighting features
	 */
	function setHighlight(featureIds: (string|number)[], value: boolean) {
		for (const id of featureIds) {
			map.setFeatureState(
				{ source: 'propositions', id },
				{ highlight: value }
			)
		}
	}
	let highlightIds: (string|number)[];
	$: if ($mapLoaded) {
		if ($mapHighlight) {
			if (highlightIds) {
				setHighlight(highlightIds, false);
			}
			const filter = ['all', ...Object.entries($mapHighlight).map(([k, v]) => (['==', k, v]))];
			highlightIds = map.querySourceFeatures('propositions', {
				sourceLayer: 'propositions',
				filter
			}).map(feature => feature.id);
			setHighlight(highlightIds, true);
		}
		else if (highlightIds) {
			setHighlight(highlightIds, false);
		}
	}

	onMount(() => {
		map = new maplibregl.Map({
			container,
			style: 'https://api.maptiler.com/maps/856b4e05-cd2c-42db-9453-9cd7e156a083/style.json?key=dtV5LH1SmQB4VOb80qqI',
			bounds: fallbackBounds,
			fitBoundsOptions: {
				padding: 100
			},
			bearing,
			pitch: 20,
			zoom: 14, // starting zoom
			minZoom: 10,
			maxZoom: 20
		});

		map.on('error', (e) => {
			dispatch('error');
		});

		map.once('load', () => {
			layerIds.push(addCityLayer(map));
			layerIds.push(...addPropositionsLayers(map));
			mapLoaded.set(true);
			dispatch('load');
		});

		map.on('rotate', (e) => {
			bearing = map.getBearing();
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@2.1.7/dist/maplibre-gl.css" />
</svelte:head>

<figure class:full={$mapDisplay.full} class={$mapDisplay.class}>
	<div id="container" bind:this={container} />
	<div id="info">
		<!-- Short description of current view (remove when user moves map) -->
		<!-- Scale line -->
		<FigureCompass on:click={() => map.flyTo({ bearing: 0 })} {bearing} />
		<slot />
	</div>
</figure>

<style lang="postcss">
	figure {
		--ease: cubic-bezier(0.3, 0, 0, 1);
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
		transition: all 0.4s var(--ease);

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
			transition: all 0.6s ease-in-out;
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
			box-shadow: 0px 40px 80px -25px rgba(0, 0, 25, 0.1);
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
