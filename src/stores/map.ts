import { writable } from 'svelte/store';

interface MapStateObject {
	isfull: boolean;
	style: string;
	class: string;
}

const defaultMapState: MapStateObject = {
	isfull: false,
	style: '',
	class: ''
};

/**
 * Store with style indications set by intersection-observed elements or interactions.
 *
 * Styles are applied to the map's container element where `isfull` has precedence over `style` and `class`
 */
export const mapState = (function () {
	const { subscribe, set, update } = writable(defaultMapState);
	return {
		subscribe,
		set,
		toggle: () =>
			update((state) => {
				return { ...state, isfull: !state.isfull };
			}),
		setFull: (val: boolean) =>
			update((state) => {
				return { ...state, isfull: val };
			}),
		setStyle: (style: string) =>
			update((state) => {
				return { ...state, style }
			}),
		setClass: (className: string) =>
			update((state) => {
				return { ...state, class: className }
			})
	};
})();


/**
 * Store to manage the maps's current focus information used to position the view and highlight shapes accordingly
 */
export const mapFocus = (function() {
	const {subscribe, set} = writable(null);
	const delay = 150;
	let debouncer;
	function debounce(fn) {
		if (debouncer) clearTimeout(debouncer)
		debouncer = setTimeout(fn, delay)
	}
	return {
		subscribe,
		set: key => debounce(() => set(key)),
		clear: () => debounce(() => set(null)),
	}
})();