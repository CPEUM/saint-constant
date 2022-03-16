import type { ExerciceRoute } from '$utils/routes';
import maplibregl from 'maplibre-gl';
import { writable } from 'svelte/store';

interface MapFocusOptions {
	filter?: maplibregl.FilterSpecification;
	center?: {
		point: maplibregl.LngLat | maplibregl.LngLatLike;
		zoom: number;
	};
	bounds?: maplibregl.LngLatBounds | maplibregl.LngLatBoundsLike;
}
/**
 * Store to manage the maps's current viewport focus in terms of zoom and position.
 */
export const mapFocus = writable<MapFocusOptions>(null);


interface MapHighlightOptions {
	exercice?: ExerciceRoute['key'];
	key?: string | number;
	// Add other keys if needed.
}
/**
 * Store to manage the map's current feature highlight triggered by intersection events.
 * Highlights resulting from mouseover should be handled directly on the map.
 */
export const mapHighlight = (function() {
	const { subscribe, update } = writable<MapHighlightOptions>(null);
	let previous;
	return {
		subscribe,
		set: (val: MapHighlightOptions) => {
			update((prev) => {
				previous = prev;
				return val;
			});
		},
		getPrevious: () => previous
	}
})();


interface MapDisplay {
	full: boolean;
	class: string;
}
/**
 * Store with style indications set by intersection-observed elements or interactions.
 * Display styling are applied to the map's container element where `full` has precedence over `class`
 */
export const mapDisplay = (function () {
	const { subscribe, set, update } = writable<MapDisplay>({
		full: false,
		class: ''
	});
	return {
		subscribe,
		set,
		toggle: () => {
			update((state) => {
				return { ...state, full: !state.full };
			});
		},
		setFull: (val: boolean) => {
			update((state) => {
				return { ...state, full: val };
			});
		},
		setClass: (className: string) => {
			update((state) => {
				return { ...state, class: className };
			});
		},
		clearClass: () => {
			update((state) => {
				return { ...state, class: '' };
			});
		}
	};
})();