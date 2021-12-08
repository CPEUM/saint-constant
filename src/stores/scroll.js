import { browser } from '$app/env';
import { readable } from 'svelte/store';

const initial = {y: 0, delta: 0, direction: null};

export const mainScroll = readable(initial, function start(set) {
	let prev = initial;
	function update() {
		const delta = document.body.scrollTop - prev.y;
		const current = {
			y: document.body.scrollTop,
			delta,
			direction: prev.delta > 0 && delta > 0 ? 'down' : 'up'
		}
		set(current)
		prev = current;
	}
	if (browser) {
		document.body.addEventListener('scroll', update);
		return function stop() {
			document.body.removeEventListener('scroll', update);
		}
	}
})