import colors from '$styles/colors.json'
import { base } from '$app/paths';
import maplibregl from 'maplibre-gl';

export const bounds = {
	// city: new maplibregl.LngLatBounds(),
	agroparc: new maplibregl.LngLatBounds([-73.577405, 45.354136], [-73.552339, 45.369695]),
	promenades: new maplibregl.LngLatBounds([-73.616978, 45.35106], [-73.545042, 45.399776]),
	poles: new maplibregl.LngLatBounds([-73.615091, 45.355221], [-73.548476, 45.401041])
}

export function addCityLayer(map: maplibregl.Map) {
	map.addSource('city', {
		type: 'geojson',
		data: base + '/data/geo/saint-constant.geojson'
	});
	const id = 'city';
	map.addLayer({
		id,
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
	return id;
}

let hoverId = null;

export function addPropositionsLayers(map: maplibregl.Map) {
	/**
	 * Adding the geojson source
	 */
	map.addSource('propositions', {
		type: 'geojson',
		data: base + '/data/geo/propositions.geojson',
		generateId: true
	});
	/* Lines */
	const ids = ['propositions-lines', 'propositions-points'];
	map.addLayer({
		id: ids[0],
		type: 'line',
		source: 'propositions',
		filter: [
			'any',
			['==', ['geometry-type'], 'LineString'],
			['==', ['geometry-type'], 'MultiLineString']
		],
		paint: {
			'line-width': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 20,
				['boolean', ['feature-state', 'highlight'], false], 15,
				10
			],
			'line-color': [
				'get',
				['concat',
					['get', 'exercice'],
					['case',
						['boolean', ['feature-state', 'hover'], false], '3',
						['boolean', ['feature-state', 'highlight'], false], '3',
						'2'
					]
				],
				['literal', colors]
			],
			'line-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], .9,
				['boolean', ['feature-state', 'highlight'], false], .75,
				.5
			]
			// 'line-gap-width': 2,
		},
		layout: {
			'line-cap': 'round',
			'line-join': 'round'
		},
	});
	map.on('mousemove', 'propositions-lines', function(e: maplibregl.MapLayerMouseEvent) {
		if (e.features.length > 0) {
			if (hoverId !== null) {
				map.setFeatureState(
					{ source: 'propositions', id: hoverId },
					{ hover: false }
				)
			}
			hoverId = e.features[0].id
			map.setFeatureState(
				{ source: 'propositions', id: hoverId },
				{ hover: true }
			)
		}
	});
	map.on('mouseleave', 'propositions-lines', function() {
		if (hoverId !== null) {
			map.setFeatureState(
				{ source: 'propositions', id: hoverId },
				{ hover: false }
			)
			hoverId = null;
		}
		hoverId = null;
	});
	/* Points */
	map.addLayer({
		id:ids[1],
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
			'circle-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], .9,
				['boolean', ['feature-state', 'highlight'], false], .75,
				.5
			],
			'circle-stroke-color': ['get', ['concat', ['get', 'exercice'], '3'], ['literal', colors]],
			'circle-stroke-width': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 10,
				['boolean', ['feature-state', 'highlight'], false], 5,
				0
			],
			'circle-stroke-opacity': .8,
			'circle-pitch-alignment': 'map',
			'circle-pitch-scale': 'map'
		}
	});
	map.on('mousemove', 'propositions-points', function(e: maplibregl.MapLayerMouseEvent) {
		if (e.features.length > 0) {
			if (hoverId !== null) {
				map.setFeatureState(
					{ source: 'propositions', id: hoverId },
					{ hover: false }
				)
			}
			hoverId = e.features[0].id
			map.setFeatureState(
				{ source: 'propositions', id: hoverId },
				{ hover: true }
			)
		}
	});
	map.on('mouseleave', 'propositions-points', function() {
		if (hoverId !== null) {
			map.setFeatureState(
				{ source: 'propositions', id: hoverId },
				{ hover: false }
			)
			hoverId = null;
		}
	});
	return ids;
}