<script context="module" lang="ts">
	export interface MapFigureContext {}
</script>

<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { map } from '$components/map/Map.svelte';
	import { mapDisplay, mapFocus, mapHighlight } from '$stores/map';
	import { bounds as boundsPresets } from '$utils/map';
	import { LngLat, LngLatBounds, type LngLatBoundsLike, type LngLatLike } from 'maplibre-gl';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let bounds: LngLatBounds | LngLatBoundsLike = boundsPresets.fallback;
	export let pitch: number = undefined;

	let nMarkers = 0;
	let active = writable(false);
	let inview = false;
	let currentKey = writable(null);
	let currentView = writable<{ lnglat: LngLat | LngLatLike; zoom?: number }>(null);
	let h = 0;
	/**
	 * Keep in sync with layer ids generated for the propositions layers.
	 */
	const hiddenLayerIds = ['-lines', '-circles', '-fills'].map((suffix) => 'propositions' + suffix);

	$: if ($currentKey) {
		mapHighlight.set({ key: $currentKey });
		mapFocus.set({ filter: { key: $currentKey } });
	} else if (!$currentKey) {
		mapHighlight.set(null);
		mapFocus.set({ bounds, pitch });
	}

	$: if ($currentView) {
		mapFocus.set({ center: { point: $currentView.lnglat, zoom: $currentView.zoom } });
	} else if (!$currentView) {
		mapFocus.set({ bounds, pitch });
	}

	function showMap() {
		inview = true;
		mapDisplay.setClass('figure');
		active.set(true);

		if (bounds) {
			mapFocus.set({ bounds, pitch });
		}
	}

	function hideMap() {
		inview = false;
		mapDisplay.setClass('');
		mapFocus.set(null);
		active.set(false);
	}

	$: if ($mapDisplay.full && inview) {
		// map.scrollZoom.enable();
		active.set(false);
	} else if (!$mapDisplay.full && inview) {
		// map.scrollZoom.disable();
		active.set(true);
	}

	$: if ($active) {
		for (const layerId of hiddenLayerIds) {
			map.setLayoutProperty(layerId, 'visibility', 'none');
		}
	} else if (!$active) {
		for (const layerId of hiddenLayerIds) {
			map.setLayoutProperty(layerId, 'visibility', 'visible');
		}
	}

	setContext('figuremap', {
		active
	});
	setContext('currentKey', currentKey);
	setContext('currentView', currentView);
	setContext('markers', {
		getIndex: () => nMarkers++
	});
</script>

<div class="trigger" use:intersection={{ rootMargin: '-50% -50% -50% -50%' }} on:enter={showMap} on:leave={hideMap} {...$$restProps}>
	<div class="content" bind:clientHeight={h} style:--h="{h}px">
		<slot />
	</div>
</div>

<style>
	.trigger {
		position: relative;
		height: 100%;
		min-height: 150vh;
		width: 100%;
		/* max-width: var(--width-lg); */
		padding: 3rem;
		margin: 0 auto;
	}

	.content {
		position: sticky;
		top: calc(50vh - 0.5 * var(--h));
		/* left: 2rem; */
		width: 100%;
		transition: all 0.35s ease-in-out;
	}
</style>
