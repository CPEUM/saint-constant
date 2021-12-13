import { browser } from '$app/env';

const observer = browser ? new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// do parallax stuff
			}
		})
	},
	{
		root: null,
		rootMargin: '0% 0px 0% 0px',
		threshold: 0,
	}
) : null;

/**
 * 
 * @param {HTMLElement} element
 * @param {{scrollparent: HTMLElement, factor: number}} options
 */
export function parallax(element, options = {scrollParent: null, factor: .5}) {
	// observer.observe(element);
	if (!options.scrollParent) options.scrollParent = document.body;
	// const baseStyle = window.getComputedStyle(element);

	function handleScroll() {
		const rect = element.getBoundingClientRect();
		
	}

	function handleResize() {
		
	}

	options.scrollParent.addEventListener('scroll', handleScroll);
	window.addEventListener('resize', handleResize);
	return {
		destroy() {
			// observer.unobserve(element);
			options.scrollParent.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		}
	};
}