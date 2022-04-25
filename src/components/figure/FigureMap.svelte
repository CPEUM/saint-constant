<script context="module" lang="ts">
	export interface MapFigureContext {}
</script>

<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { mapDisplay, mapFocus, mapHighlight } from '$stores/map';
	import { LngLat, LngLatBounds, type LngLatBoundsLike, type LngLatLike } from 'maplibre-gl';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let bounds: LngLatBounds | LngLatBoundsLike = null;

	let nMarkers = 0;
	let active = writable(false);
	let currentKey = writable(null);
	let h = 0;

	$: if ($currentKey) {
		mapHighlight.set({ key: $currentKey });
		mapFocus.set({ filter: { key: $currentKey } });
	} else if (!$currentKey) {
		mapHighlight.set(null);
		mapFocus.set({ bounds });
	}

	function showMap() {
		mapDisplay.setClass('figure');
		active.set(true);

		if (bounds) {
			mapFocus.set({ bounds });
		}
	}

	function hideMap() {
		mapDisplay.setClass('');
		active.set(false);
	}

	setContext('figuremap', {
		active
	});

	setContext('currentKey', currentKey);

	setContext('markers', {
		getIndex: () => nMarkers++
	});
</script>

<div
	class="trigger"
	use:intersection={{ rootMargin: '-50% 0% -50%' }}
	on:enter={showMap}
	on:leave={hideMap}
	{...$$restProps}
>
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
		max-width: var(--width-lg);
		padding: 1rem;
		margin: 0 auto;
	}

	.content {
		position: sticky;
		top: calc(50vh - 0.5 * var(--h));
		width: 100%;
		transition: all 0.35s ease-in-out;
	}
</style>
