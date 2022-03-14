<script lang="ts">
	import colors from '$styles/colors.json';
	import { type ThemeKey } from '$utils/themeColors';
	import { onDestroy } from 'svelte';
	import { map, mapLoaded } from './Map.svelte';

	export let id: string;
	export let src: string;
	export let key: ThemeKey = 'accent';
	export let fillColor: string = colors[key + '1'];
	export let highlightFillColor: string = fillColor;
	export let fillOpacity: number = .5;
	export let highlightFillOpacity: number = fillOpacity;
	export let lineColor: string = colors[key + '2'];
	export let highlightLineColor: string = lineColor;
	export let lineOpacity: number = 1;
	export let highlightLineOpacity: number = lineOpacity;
	export let lineWidth: number = 10;
	export let highlightLineWidth: number = lineWidth;
	export let fillLineWidth: number = 2;
	export let lineDashArray: number[] = [];

	$: if ($mapLoaded) {
		if (!map.getSource(id)) {
			/**
			 * Add source from file
			 */
			map.addSource(id, {
				type: 'geojson',
				data: src
			});
			/** 
			 * Add shape fill layer
			 */
			map.addLayer({
				id: id + '-fills',
				type: 'fill',
				filter: [
					'any',
					['==', 'geometry-type', 'Polygon'],
					['==', 'geometry-type', 'MultiPolygon'],
				],
				source: id,
				paint: {
					'fill-color': fillColor,
					'fill-opacity': fillOpacity,
				}
			});
			/**
			 * Add outlines / lines layer
			 */
			map.addLayer({
				id: id + '-lines',
				type: 'line',
				filter: [['!=', 'geometry-type', 'Point']],
				source: id,
				paint: {
					'line-color': lineColor,
					'line-width': [
						'case',
						[
							'any',
							['==', 'geometry-type', 'LineString'],
							['==', 'geometry-type', 'MultiLineString'],
						], lineWidth,
						fillLineWidth
					],
					'line-opacity': lineOpacity,
					'line-dasharray': lineDashArray
				},
				layout: {
					'line-cap': 'round',
					'line-join': 'round'
				}
			});
			/** 
			 * Points layer
			 */
			map.addLayer({
				id: id + '-points',
				type: 'circle',
				filter: ['==', '$type', 'Point'],
				source: id,
				paint: {
					'circle-radius': [
						'interpolate',
						['exponential', 2],
						['zoom'],
						10, ['/', ['get', 'radius'], 58.554],
						20, ['/', ['get', 'radius'], 0.014]
					],
					'circle-color': fillColor,
					'circle-opacity': fillOpacity,
					'circle-stroke-color': lineColor,
					'circle-stroke-width': fillLineWidth,
					'circle-stroke-opacity': lineOpacity,
					'circle-pitch-alignment': 'map',
					'circle-pitch-scale': 'map'
				}
			})
		}
		// Show layer
		// ... répéter pour autre layers
		// /* Adding lines */
		// map.addLayer({
		// 	id: id + '-line',
		// 	type: 'line',
		// 	source: id,
		// 	paint: {
		// 		'line-color': colors[theme + '3'],
		// 		'line-opacity': .5,
		// 		'line-width': 2
		// 	}
		// });
		// /* Adding points */
		// map.addLayer({
		// 	id: id + '-fill',
		// 	type: 'fill',
		// 	source: id,
		// 	paint: {
		// 		'fill-color': colors[theme + '2'],
		// 		'fill-opacity': .5
		// 	}
		// });
	}

	onDestroy(() => {
		// map?
		// Hide source
	})
</script>

<slot />
