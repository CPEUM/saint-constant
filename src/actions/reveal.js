import { onMount } from 'svelte';

/**
 * Function to split the text content of an element
 * into spans for staggered transitions
 * @param {HTMLElement} element
 * @return {HTMLElement[]}
 */
function split(element) {
	let charspans = [];
	Array.from(element.childNodes).forEach((node) => {
		let nodeElement;
		if (node.tagName) {
			nodeElement = document.createElement(node.tagName);
			element.appendChild(nodeElement);
		} else {
			nodeElement = element;
		}
		node.textContent.split(/\b/).forEach((w) => {
			const wordspan = document.createElement('span');
			nodeElement.appendChild(wordspan);
			w.split('').forEach((c) => {
				const charspan = document.createElement('span');
				charspan.textContent = c;
				wordspan.appendChild(charspan);
				charspans.push(charspan);
			});
		});
		node.remove();
	});
	return charspans;
}

// /**
//  * Function to wrap span elements into span containers to crop content
//  * during translate animations
//  * @param {HTMLSpanElement[]} spans
//  */
// function wrap(spans) {
// 	let contentspans = [];
// 	spans.forEach((span) => {
// 		const contentspan = span.cloneNode(true);
// 		span.replaceChildren(contentspan);
// 		span.style.overflow = 'hidden';
// 		span.style.display = 'inline-block'
// 		contentspans.push(contentspan)
// 	});
// 	return contentspans;
// }

const defaultOptions = { duration: 350, y: 20, opacity: 0, scale: .9, stagger: false }

/**
 * Svelte action to add reveal transitions to elements
 * @param {HTMLElement} element
 * @param {*} otions
 *
 */
export function reveal(
	element,
	options = defaultOptions
) {
	const { duration, y, opacity, scale, stagger } = {...defaultOptions, ...options};
	const els = stagger ? split(element) : [element];

	const style = getComputedStyle(els[0]);
	const iOpacity = style.opacity;
	const iTransition = style.transition;
	const iTransitionDelay = style.transitionDelay;
	const iTransform = style.transform;

	const staggerDelay = 40;

	/**
	 * @param {HTMLElement} el 
	 */
	function hide(el, index) {
		el.style.opacity = opacity + '';
		el.style.top = y + 'px'
		el.style.transform = `scale(${scale})`;
	}

	function unhide(el, index) {
		const delay = staggerDelay * index;
		el.style.transitionDuration = duration + 'ms';
		el.style.transitionTimingFunction = 'cubic-bezier(0.2, 0, 0.4, 1)'
		el.style.transitionProperty = 'opacity, top, transform'
		el.style.transitionDelay = delay + 'ms'
		el.style.opacity = iOpacity;
		el
		el.style.transform = iTransform;
		el.style.transition = iTransition;
		setTimeout(() => {
			el.style.transitionDelay = iTransitionDelay;
		}, staggerDelay * index + duration)
	}

	els.forEach((el, i) => {
		hide(el, i);
	})

	let observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				els.forEach(unhide);
				observer.unobserve(element);
			}
			else {
				els.forEach(hide);
			}
		});
	});

	setTimeout(() => {
		observer.observe(element)
	}, 250);

	return {
		destroy() {
			observer = null;
		}
	};
}
