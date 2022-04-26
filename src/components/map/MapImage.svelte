<script lang="ts">
	import { onDestroy } from 'svelte';
	import { map, mapLoaded } from './Map.svelte';

	export let id: string;
	export let url: string;
	export let coordinates: maplibregl.ImageSource['coordinates'];
	export let opacity = 1;

	$: if ($mapLoaded) {
		console.log('adding iamge overlay');
		map.addSource(id, {
			type: 'image',
			url,
			coordinates
		});
		map.addLayer({
			id: id + 'layer',
			source: id,
			type: 'raster',
			paint: {
				'raster-opacity': opacity
			}
		});
	}

	onDestroy(() => {});
</script>
