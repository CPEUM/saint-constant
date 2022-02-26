interface ParallaxOptions {
	scrollParent?: HTMLElement;
	factor?: number;
}

/**
 * Svelte action to add parallax effect using a translateY transformation
 */
export function parallax(element: HTMLElement, {
	scrollParent = document.body,
	factor = .8
}: ParallaxOptions = {}) {

	let TY = 0;

	function updateTransform() {
		const rect = element.getBoundingClientRect();
		const boundedTop = Math.min(window.innerHeight, Math.max(-rect.height, rect.top - TY));
		TY = (boundedTop + rect.height / 2 - window.innerHeight / 2) * (factor - 1);
		element.style.transform = `translateY(${TY}px)`;
	}

	updateTransform();
	scrollParent.addEventListener('scroll', updateTransform);
	// window.getComputedStyle(element);
	
	return {
		destroy() {
			// observer.unobserve(element);
			scrollParent.removeEventListener('scroll', updateTransform);
			// window.removeEventListener('resize', handleResize);
		}
	};
}