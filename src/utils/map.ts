import { LngLat, LngLatBounds, type LngLatBoundsLike, type LngLatLike, type Source } from 'maplibre-gl';
import colors from '$styles/colors.json'
import { base } from '$app/paths';
import type { ExerciceRoute } from './routes';

interface MapView {
	center?: LngLat | LngLatLike;
	bounds?: LngLatBounds | LngLatBoundsLike;
}
/**
 * Library of map views
 */
export const mapViews: Record<string, MapView> = {};

export function addCityLayer(map: maplibregl.Map) {
	map.addSource('city', {
		type: 'geojson',
		data: base + '/data/geo/saint-constant.geojson'
	});
	map.addLayer({
		id: 'city',
		type: 'line',
		source: 'city',
		paint: {
			'line-color': colors['accent3'],
			'line-width': 5,
			'line-opacity': 1,
			'line-dasharray': [0, 1.5]
		},
		layout: {
			'line-cap': 'round',
			'line-join': 'round'
		}
	});
}

export function addPropositionsLayers(map: maplibregl.Map) {
	/**
	 * Adding the geojson source
	 */
	map.addSource('propositions', {
		type: 'geojson',
		data: base + '/data/geo/propositions.geojson'
	});
	/**
	 * Lines
	 */
	map.addLayer({
		id: 'propositions-lines',
		type: 'line',
		source: 'propositions',
		filter: [
			'any',
			['==', ['geometry-type'], 'LineString'],
			['==', ['geometry-type'], 'MultiLineString']
		],
		paint: {
			'line-width': 12,
			'line-color': ['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]],
			'line-opacity': .5,
			// 'line-gap-width': 2,
		},
		layout: {
			'line-cap': 'round',
			'line-join': 'round'
		}
	});
	// map.on('mousemove', hihglight line)
	/**
	 * Points
	 */
	map.addLayer({
		id: 'propositions-points',
		type: 'circle',
		filter: [
			'any',
			['==', ['geometry-type'], 'Point'],
			['==', ['geometry-type'], 'MultiPoint']
		],
		source: 'propositions',
		paint: {
			'circle-radius': [
				'interpolate',
				['exponential', 2],
				['zoom'],
				10, ['/', ['get', 'radius'], 58.554],
				20, ['/', ['get', 'radius'], 0.014]
			],
			'circle-color': ['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]],
			'circle-opacity': .5,
			'circle-stroke-color': ['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]],
			'circle-stroke-width': 0,
			'circle-stroke-opacity': 1,
			'circle-pitch-alignment': 'map',
			'circle-pitch-scale': 'map'
		}
	});
	// map.on('mousemove', ...highlight point)
}

export function highlight(map: maplibregl.Map, exercice: ExerciceRoute['key'], key?: string | number) {
	// https://maplibre.org/maplibre-gl-js-docs/example/hover-styles/
}

export function focus(map: maplibregl.Map) {
	
}