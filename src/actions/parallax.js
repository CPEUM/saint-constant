const observers = [];

const defaultOptions = {
	root: null,
	rootMargin: '0% 0px 0% 0px',
	threshold: 0,
}

/**
 * 
 * @param {HTMLElement} element
 * @param {{scrollparent: HTMLElement, factor: number}} options
 */
export function parallax(element, options = {scrollParent: null, factor: .5}) {
	

	// if (!options.scrollParent) options.scrollParent = document.body;
	// const baseStyle = window.getComputedStyle(element);
	// function handleScroll() {
	// 	const rect = element.getBoundingClientRect();
	// 	if (rect.top > 0) {
	// 		console.log(baseStyle.transform);
	// 	}
	// }
	// options.scrollParent.addEventListener('scroll', handleScroll);
	return {
		destroy() {
			// options.scrollParent.removeEventListener('scroll', handleScroll);
		}
	};
}