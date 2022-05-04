<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { map, mapLoaded } from './Map.svelte';

	export let id: string;
	export let url: string;
	export let coordinates: maplibregl.ImageSource['coordinates'];
	export let opacity = 1;

	const figureCtx = getContext('figuremap') as any;
	const figureActive = figureCtx ? (figureCtx.active as Writable<boolean>) : null;
	const LAYER_ID = id + '-raster-layer';

	$: if ($mapLoaded) {
		console.log('adding image overlay');
		if (!map.getSource(id)) {
			map.addSource(id, {
				type: 'image',
				url,
				coordinates
			});
		}
		if (!map.getLayer(LAYER_ID)) {
			map.addLayer({
				id: LAYER_ID,
				source: id,
				type: 'raster',
				paint: {
					// 'raster-opacity': ['case', ['boolean', ['image-state', 'active'], false], 1, 0],
					'raster-opacity': opacity,
					'raster-fade-duration': 0.75
				}
			});
		}
	}

	$: if (figureActive && $mapLoaded) {
		const vis = $figureActive ? 'visible' : 'none';
		if (map.getLayer(LAYER_ID)) {
			map.setLayoutProperty(LAYER_ID, 'visibility', vis);
		}
	}

	onDestroy(() => {
		if (map) {
			map.removeSource(id);
			map.removeLayer(LAYER_ID);
		}
	});
</script>
