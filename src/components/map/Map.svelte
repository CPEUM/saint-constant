<script lang="ts" context="module">
	import { derived, get, writable } from 'svelte/store';

	export const mapLoaded = writable(false);
	export let map: maplibregl.Map;
</script>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { mapDisplay, mapFeatures, mapFocus, mapHighlight, mapTooltip } from '$stores/map';
	import { bounds } from '$utils/map';
	import maplibregl, { LngLat, type LngLatLike } from 'maplibre-gl';
	import bbox from '@turf/bbox';
	import bboxPolygon from '@turf/bbox-polygon';
	import combine from '@turf/combine';
	import { featureCollection } from '@turf/helpers';
	import FigureCompass from '$components/figure/FigureCompass.svelte';
	import MapTooltip from './MapTooltip.svelte';

	const dispatch = createEventDispatcher<{ load: null; error: null }>();
	let container: HTMLElement;

	/* Saving user-navigated view. */
	let bearing = 0;
	let pitch = 20;
	let zoom = 14;
	let center;

	function goToFallback() {
		map.flyTo({
			center,
			pitch,
			zoom,
			bearing
		});
	}

	function resetBearing() {
		bearing = 0;
		map.flyTo({ bearing: 0 });
	}

	const displayFull = derived(mapDisplay, ($mapDisplay) => $mapDisplay.full);

	/* Focusing the map dynamically */
	$: if ($mapLoaded && !$displayFull) {
		if (!$mapFocus) {
			goToFallback();
		} else if ($mapFocus.bounds) {
			map.fitBounds($mapFocus.bounds, { bearing: 0, pitch: 20 });
		} else if ($mapFocus.center) {
			map.flyTo({
				center: $mapFocus.center.point,
				zoom: $mapFocus.center.zoom,
				bearing: 0,
				pitch: 20
			});
		} else if ($mapFocus.filter) {
			const filters = Object.entries($mapFocus.filter);
			const filtered = get(mapFeatures).filter((f) => {
				return filters.every(([k, v]) => f.properties[k] === v);
			});
			const bounds = new maplibregl.LngLatBounds(
				bbox(featureCollection(filtered.map((feature) => bboxPolygon(bbox(feature)))))
			);
			map.fitBounds(bounds, { padding: 200, maxZoom: 15 });
		}
	}

	/* Temporarily reset view when opening full view map */
	$: if ($mapLoaded && $displayFull) {
		goToFallback();
	}

	/* Highlighting features */
	function setHighlight(featureIds: (string | number)[], value: boolean) {
		for (const id of featureIds) {
			map.setFeatureState({ source: 'propositions', id }, { highlight: value });
		}
	}
	let highlightIds: (string | number)[];
	$: if ($mapLoaded) {
		if ($mapHighlight) {
			if (highlightIds) {
				setHighlight(highlightIds, false);
			}
			const filters = Object.entries($mapHighlight);
			highlightIds = get(mapFeatures)
				.filter((f) => {
					return filters.every(([k, v]) => f.properties[k] === v);
				})
				.map((f) => f.id);
			console.log(highlightIds);
			setHighlight(highlightIds, true);
		} else if (highlightIds) {
			setHighlight(highlightIds, false);
		}
	}

	onMount(() => {
		map = new maplibregl.Map({
			container,
			style: 'https://api.maptiler.com/maps/856b4e05-cd2c-42db-9453-9cd7e156a083/style.json?key=dtV5LH1SmQB4VOb80qqI',
			bounds: bounds.fallback,
			fitBoundsOptions: {
				padding: 100
			},
			bearing,
			pitch,
			zoom,
			minZoom: 10,
			maxZoom: 20
		});

		map.on('error', (e) => {
			dispatch('error');
		});

		map.once('load', () => {
			// addCityLayer(map);
			// addPropositionsLayers(map);
			mapLoaded.set(true);
			dispatch('load');
			bearing = map.getBearing();
			pitch = map.getPitch();
			zoom = map.getZoom();
			center = map.getCenter();
		});

		map.on('rotate', (e) => {
			if (e.originalEvent) {
				bearing = map.getBearing();
			}
		});

		map.on('pitchend', (e) => {
			if (e.originalEvent) {
				pitch = map.getPitch();
			}
		});

		map.on('zoomend', (e) => {
			if (e.originalEvent) {
				zoom = map.getZoom();
				center = map.getCenter();
			}
		});

		map.on('dragend', (e) => {
			center = map.getCenter();
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@2.1.7/dist/maplibre-gl.css" />
</svelte:head>

<figure class:full={$mapDisplay.full} class={$mapDisplay.class}>
	{#if $mapTooltip}
		{#key $mapTooltip}
			<MapTooltip {map} text={$mapTooltip.text} coords={$mapTooltip.coords} />
		{/key}
	{/if}
	<div id="container" bind:this={container} />
	<div id="info">
		<!-- Short description of current view (remove when user moves map) -->
		<!-- Scale line -->
		<FigureCompass on:click={resetBearing} {bearing} />
		<slot />
	</div>
</figure>

<style lang="postcss">
	figure {
		--ease: cubic-bezier(0.4, 0, 0, 1);
		pointer-events: auto;
		position: fixed;
		z-index: -20;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		left: 100%;
		top: 0%;
		bottom: 0%;
		opacity: 1;
		/* border-radius: 200px; */
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
			box-shadow: none;
			transition: all 0.4s var(--ease), z-index 0s;
		}

		&:global(.figure) {
			opacity: 1;
			top: 3.6rem;
			right: 4rem;
			bottom: 3.6rem;
			left: 4rem;
			border-radius: 1.5rem;
			box-shadow: 0 2rem 5rem -3rem rgba(0, 0, 40, 0.2);
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
			--offset-inside: 50vw;
			--offset-outside: 0;
			top: 0;
			bottom: 0;
			opacity: 1;
			border-radius: 0;
			transition: all 0.5s var(--ease), z-index 0s;
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
