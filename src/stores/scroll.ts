import OverlayScrollbars from 'overlayscrollbars';
import { derived, readable } from 'svelte/store';
import { onMount } from 'svelte';
import { browser } from '$app/env';

interface MainScroll {
	y: number;
	delta: number;
	direction: 'up' | 'down';
}

const initial = {y: 0, delta: 0, direction: null};

export const mainScroll = readable(initial, function start(set) {

	let prev = initial;

	function update(e) {
		const delta = e.target.scrollTop - prev.y;
		const current = {
			y: e.target.scrollTop,
			delta,
			direction: prev.delta > 0 && delta > 0 ? 'down' : 'up'
		}
		set(current)
		prev = current;
	}

	if (browser) {
		const rootEl = document.body;
		rootEl.addEventListener('scroll', update);
		return function stop() {
			rootEl.removeEventListener('scroll', update);
		}
	}

	// onMount(() => {
	// 	OverlayScrollbars(document.body, {
	// 		scrollbars: {
	// 			autoHide: 'move',
	// 			autoHideDelay: 1000,
	// 			clickScrolling: true,
				
	// 		},
	// 		overflowBehavior: {
	// 			x: 'hidden'
	// 		},
	// 		nativeScrollbarsOverlaid: {
	// 			initialize: false
	// 		},
	// 		callbacks: {
	// 			onScroll: update,
	// 		}
	// 	});
	// })
});

/* Get the page's progress as a float between 0 and 1 inclusively */
// export const progress = derived(
// 	mainScroll
// )