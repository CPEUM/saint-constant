import { writable } from 'svelte/store';


export const isMapOverview = (function() {
	const {subscribe, set, update} = writable(false);
	return {
			subscribe,
			set,
			toggle: () => update(state => !state)
	}
})();

// export const mapOverview = writable(null);

// function manageMapnavFocus() {
//     const store = writable(null);
//     let debounceTimer;
//     return {
//         subscribe: store.subscribe,
//         set: data => {
//             clearTimeout(debounceTimer);
//             store.set(data);
//         },
//         unset: () => {
//             debounceTimer = setTimeout(() => {
//                 store.set(null)
//             }, 250);
//         },
//     }
// }
// export const mapnavFocus = manageMapnavFocus();