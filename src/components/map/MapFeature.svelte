<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte';
	import { map, mapLoaded } from '$components/map/Map.svelte';
	import type { DataDrivenPropertyValueSpecification, Feature } from 'maplibre-gl';
	import type { FeatureCollection } from '@turf/helpers';
	import { mapFeatures } from '$stores/map';

	export let data: FeatureCollection | Feature;
	export let fillColor: string | DataDrivenPropertyValueSpecification<string> = 'none';
	export let fillColorHover: string | DataDrivenPropertyValueSpecification<string> = fillColor;
	export let fillColorHighlight: string | DataDrivenPropertyValueSpecification<string> = fillColor;
	export let fillOpacity: number = 1;
	export let fillOpacityHover: number = fillOpacity;
	export let fillOpacityHighlight: number = fillOpacity;
	// export let fillPattern: string;
	export let strokeWidth: number = 6;
	export let strokeWidthHover: number = 12;
	export let strokeWidthHighlight: number = 10;
	export let strokeColor: string | DataDrivenPropertyValueSpecification<string> = 'none';
	export let strokeColorHover: string | DataDrivenPropertyValueSpecification<string> = strokeColor;
	export let strokeColorHighlight: string | DataDrivenPropertyValueSpecification<string> = strokeColor;
	export let strokeOpacity: number = 1;
	export let strokeOpacityHover: number = strokeOpacity;
	export let strokeOpacityHighlight: number = strokeOpacity;
	export let strokeDashArray: number[] = [1, 0];
	export let radius: number = 10;
	export let id: string;

	const figureCtx = getContext('figuremap') as any;
	const currentKey = getContext('currentKey') as any;
	const figureActive = figureCtx ? (figureCtx.active as Writable<boolean>) : null;
	const LAYER_IDS = {
		LINES: id + '-lines',
		CIRCLES: id + '-circles',
		FILLS: id + '-fills'
	};
	let featureHoverId = null;
	const dispatch = createEventDispatcher();

	$: if (figureActive && $mapLoaded) {
		const vis = $figureActive ? 'visible' : 'none';
		for (const layerId of Object.values(LAYER_IDS)) {
			map.setLayoutProperty(layerId, 'visibility', vis);
		}
	}

	function handleMouseEnter(e: maplibregl.MapLayerMouseEvent) {}

	function handleMouseMove(e: maplibregl.MapLayerMouseEvent) {
		if (e.features.length > 0) {
			if (featureHoverId !== e.features[0].id) {
				dispatch('hover', e);
				if (featureHoverId !== null) {
					map.setFeatureState({ source: id, id: featureHoverId }, { hover: false });
				}
			}
			featureHoverId = e.features[0].id;
			map.setFeatureState({ source: id, id: featureHoverId }, { hover: true });
		}
	}

	function handleMouseLeave(e: maplibregl.MapLayerMouseEvent) {
		if (featureHoverId !== null) {
			map.setFeatureState({ source: id, id: featureHoverId }, { hover: false });
			featureHoverId = null;
		}
		featureHoverId = null;
		dispatch('leave', e);
	}

	/* Generating id if not present */
	if ((data as any).features) {
		(data as FeatureCollection).features.forEach((f, i) => {
			if (!f.id) {
				f.id = Math.floor((i + Math.random()) * 1000);
			}
		});
		mapFeatures.add(...(data as FeatureCollection).features);
	} else {
		if (!data['id']) {
			data['id'] = Math.floor(Math.random() * 1000);
		}
		mapFeatures.add(data);
	}

	$: if ($mapLoaded && !map.getSource(id)) {
		map.addSource(id, {
			type: 'geojson',
			data
		});
		/* Lines layer */
		map.addLayer({
			id: LAYER_IDS.LINES,
			type: 'line',
			source: id,
			filter: ['any', ['==', ['geometry-type'], 'LineString'], ['==', ['geometry-type'], 'MultiLineString'], ['==', ['geometry-type'], 'Polygon'], ['==', ['geometry-type'], 'MultiPolygon']],
			paint: {
				'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], strokeWidthHover, ['boolean', ['feature-state', 'highlight'], false], strokeWidthHighlight, strokeWidth],
				'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], strokeColorHover, ['boolean', ['feature-state', 'highlight'], false], strokeColorHighlight, strokeColor],
				'line-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], strokeOpacityHover, ['boolean', ['feature-state', 'highlight'], false], strokeOpacityHighlight, strokeOpacity],
				'line-dasharray': strokeDashArray
			},
			layout: {
				'visibility': 'visible',
				'line-cap': 'round',
				'line-join': 'round'
			}
		});
		map.on('mouseenter', LAYER_IDS.LINES, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseEnter(e);
		});
		map.on('mousemove', LAYER_IDS.LINES, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseMove(e);
		});
		map.on('mouseleave', LAYER_IDS.LINES, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseLeave(e);
		});
		/* Points layer */
		map.addLayer({
			id: LAYER_IDS.CIRCLES,
			type: 'circle',
			source: id,
			filter: ['any', ['==', ['geometry-type'], 'Point'], ['==', ['geometry-type'], 'MultiPoint']],
			paint: {
				'circle-pitch-alignment': 'map',
				'circle-pitch-scale': 'map',
				'circle-radius': ['interpolate', ['exponential', 2], ['zoom'], 10, ['/', ['coalesce', ['get', 'radius'], radius], 58.554], 20, ['/', ['coalesce', ['get', 'radius'], radius], 0.014]],
				'circle-color': ['case', ['boolean', ['feature-state', 'hover'], false], fillColorHover, ['boolean', ['feature-state', 'highlight'], false], fillColorHighlight, fillColor],
				'circle-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], fillOpacityHover, ['boolean', ['feature-state', 'highlight'], false], fillOpacityHighlight, fillOpacity],
				'circle-stroke-width': [
					'case',
					['boolean', ['feature-state', 'hover'], false],
					strokeWidthHover,
					['boolean', ['feature-state', 'highlight'], false],
					strokeWidthHighlight,
					strokeWidth
				],
				'circle-stroke-color': [
					'case',
					['boolean', ['feature-state', 'hover'], false],
					strokeColorHover,
					['boolean', ['feature-state', 'highlight'], false],
					strokeColorHighlight,
					strokeColor
				],
				'circle-stroke-opacity': [
					'case',
					['boolean', ['feature-state', 'hover'], false],
					strokeOpacityHover,
					['boolean', ['feature-state', 'highlight'], false],
					strokeOpacityHighlight,
					strokeOpacity
				]
			},
			layout: {
				visibility: 'visible'
			}
		});
		map.on('mouseenter', LAYER_IDS.CIRCLES, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseEnter(e);
		});
		map.on('mousemove', LAYER_IDS.CIRCLES, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseMove(e);
		});
		map.on('mouseleave', LAYER_IDS.CIRCLES, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseLeave(e);
		});
		/* Fill layer */
		map.addLayer({
			id: LAYER_IDS.FILLS,
			type: 'fill',
			source: id,
			filter: ['any', ['==', ['geometry-type'], 'Polygon'], ['==', ['geometry-type'], 'MultiPolygon']],
			paint: {
				'fill-color': ['case', ['boolean', ['feature-state', 'hover'], false], fillColorHover, ['boolean', ['feature-state', 'highlight'], false], fillColorHighlight, fillColor],
				'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], fillOpacityHover, ['boolean', ['feature-state', 'highlight'], false], fillOpacityHighlight, fillOpacity],
				'fill-antialias': true
			},
			layout: {
				visibility: 'visible'
			}
		});
		map.on('mouseenter', LAYER_IDS.FILLS, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseEnter(e);
		});
		map.on('mousemove', LAYER_IDS.FILLS, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseMove(e);
		});
		map.on('mouseleave', LAYER_IDS.FILLS, function (e: maplibregl.MapLayerMouseEvent) {
			handleMouseLeave(e);
		});
	}

	onDestroy(() => {
		if (map.getSource(id)) {
			map.removeSource(id);
		}
		for (const layerId of Object.values(LAYER_IDS)) {
			if (map.getLayer(layerId)) {
				map.removeLayer(layerId);
			}
		}
		if ((data as any).features) {
			(data as FeatureCollection).features.forEach((f) => mapFeatures.removeById(f.id));
		} else {
			mapFeatures.removeById((data as any).id);
		}
	});
</script>
