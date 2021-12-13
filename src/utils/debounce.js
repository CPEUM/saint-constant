/**
 * Function to debounce a passed function's execution rate
 */
 export function debounce(f, delay = 250) {
	let timer = null;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			f(...args);
		}, delay);
	}
}