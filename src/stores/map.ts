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

// export const isMapFull = (function() {
// 	const {subscribe, set, update} = writable(false);
// 	return {
// 		subscribe,
// 		set,
// 		toggle: () => update(prev => !prev)
// 	}
// })();

// export const mapViewMode = (function() {
// 	const {subscribe, set, update} = writable(null);
// 	const delay = 150;
// 	let debouncer;
// 	function debounce(fn) {
// 		if (debouncer) clearTimeout(debouncer)
// 		debouncer = setTimeout(fn, delay)
// 	}
// 	return {
// 		subscribe,
// 		set: mode => debounce(() => set(mode)),
// 		unset: mode => debounce(() => update(prev => prev === mode ? null : prev)),
// 		toggle: mode => debounce(update(prev => prev === mode ? null : mode)),
// 		clear: () => debounce(set(null)),
// 	}
// })();

// export const mapFocus = (function() {
// 	const {subscribe, set} = writable(null);
// 	const delay = 150;
// 	let debouncer;
// 	function debounce(fn) {
// 		if (debouncer) clearTimeout(debouncer)
// 		debouncer = setTimeout(fn, delay)
// 	}
// 	return {
// 		subscribe,
// 		set: key => debounce(() => set(key)),
// 		clear: () => debounce(() => set(null)),
// 	}
// })();

// export const mapState = (function() {
// 	const {subscribe, update} = writable(null);
// 	const stateHistory = [];
// 	return {
// 		subscribe,
// 		toggle: (mode) => update(prev => {
// 			if (prev === mode) {
// 				return stateHistory.length ? stateHistory.pop() : null;
// 			} else {
// 				if (prev) stateHistory.push(prev);
// 				return mode
// 			}
// 		}),
// 		// is: (mode) =>
// 	}
// })();
