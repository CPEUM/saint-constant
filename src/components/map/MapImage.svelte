<script lang="ts">
	import { onDestroy } from 'svelte';
	import { map, mapLoaded } from './Map.svelte';

	export let id: string;
	export let url: string;
	export let coordinates: maplibregl.ImageSource['coordinates'];
	export let opacity = 1;

	const LAYER_ID = id + '-layer';

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
					'raster-opacity': opacity,
					'raster-fade-duration': 0.75
				}
			});
		}
	}

	onDestroy(() => {
		if (map) {
			map.removeSource(id);
			map.removeLayer(LAYER_ID);
		}
	});
</script>
