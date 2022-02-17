import { mergeObjects } from '$utils/mergeObjects';
import { intersection } from './intersect';

interface Options {
	duration?: number;
	staggerDelay?: number;
	start?: {
		opacity?: number;
		x?: number | string;
		y?: number | string;
		scale?: {
			x?: number;
			y?: number;
		};
		rotate?: {
			x?: number;
			y?: number;
			z?: number;
		};
	};
	transformOrigin?: string;
	perspective?: number;
	stagger?: boolean;
	hideOnLeave?: boolean;
	mask?: boolean;
	maskPadding?: string;
	easing?: string;
	granularity?: 'word' | 'letter';
	observerOptions?: IntersectionObserverInit;
}

const defaultOptions: Options = {
	duration: 550,
	staggerDelay: 25,
	start: {
		opacity: 0,
		x: 0,
		y: 0,
		scale: {
			x: 1,
			y: 1
		},
		rotate: {
			x: 90,
			y: 0,
			z: 0
		}
	},
	transformOrigin: '0% 90%',
	perspective: 1000,
	stagger: true,
	hideOnLeave: false,
	mask: false,
	maskPadding: '0.5em',
	easing: 'cubic-bezier(0.35, 0, 0.25, 1)',
	granularity: 'letter',
	observerOptions: {
		rootMargin: '-200px 0px -200px'
	}
};

/**
 * Action to apply "reveal", and optional "leave", transitions on the text content of the host element
 * based on the host's viewport intersection.
 */
export function reveal(element: HTMLElement, options?: Options) {
	options = mergeObjects({ ...defaultOptions }, options);
	element.style.perspective = options.perspective + 'px';
	element.style.perspectiveOrigin = 'center';

	function initNestedWrapperStyle(el: HTMLElement) {
		el.style.position = 'relative';
		el.style.display = 'inline-block';
		el.style.transformStyle = 'preserve-3d';
	}

	function initMaskStyle(el: HTMLElement) {
		initNestedWrapperStyle(el);
		el.style.whiteSpace = 'nowrap';
		if (options.mask) {
			el.style.overflow = 'hidden';
			el.style.padding = options.maskPadding;
			el.style.margin = '-' + options.maskPadding; // `calc( -1 * ${options.maskPadding})`;
		}
	}

	function initTargetStyle(el: HTMLElement, index: number) {
		hideTarget(el, index);
		el.style.transformOrigin = options.transformOrigin;
		el.style.transformStyle = 'preserve-3d';
		el.style.transitionDelay = options.stagger ? options.staggerDelay * index + 'ms' : '0';
		el.style.transitionDuration = options.duration + 'ms';
		el.style.transitionTimingFunction = options.easing;
		el.style.transitionProperty = 'opacity, transform, top, left';
		el.style.position = 'relative';
		el.style.display = 'inline-block';
	}

	function hideTarget(el: HTMLElement, index: number) {
		el.style.opacity = options.start.opacity + '';
		el.style.transform = `rotateX(${options.start.rotate.x}deg) rotateY(${options.start.rotate.y}deg) rotateZ(${options.start.rotate.z}deg) scale(${options.start.scale.x}, ${options.start.scale.y})`;
		el.style.top = options.start.y + (isNaN(Number(options.start.y)) ? '' : 'px');
		el.style.left = options.start.x + (isNaN(Number(options.start.x)) ? '' : 'px');
	}

	function showTarget(el: HTMLElement, index: number) {
		el.style.opacity = '1';
		el.style.transform = 'initial';
		el.style.top = '0';
		el.style.left = '0';
	}

	/**
	 * Parsing child nodes recursively, splitting and wrapping content.
	 */
	function parseElement(element: HTMLElement, rootIndex = 0) {
		const targetNodes: HTMLElement[] = [];
		const maskNodes: HTMLElement[] = [];
		(Array.from(element.childNodes) as HTMLElement[]).forEach((node) => {
			if (node.tagName) {
				initNestedWrapperStyle(node);
				const nested = parseElement(node, targetNodes.length);
				targetNodes.push(...nested.targets);
				maskNodes.push(...nested.masks);
			} else {
				const newNodes = [];
				node.textContent
					.split(/(\s)/) // previously was: /\s\b/
					.forEach((word) => {
						// console.log('"' + word + '"');
						if (!word) {
							return;
						} else if (word === ' ') {
							newNodes.push(document.createTextNode(' '));
						} else {
							const wordspan = document.createElement('span');
							maskNodes.push(wordspan);
							initMaskStyle(wordspan);
							word.split('').forEach((char) => {
								if (char.indexOf(' ') > -1) {
									wordspan.appendChild(document.createTextNode(' '));
								} else {
									const charspan = document.createElement('span');
									charspan.textContent = char; //.replace(' ', '\u00A0');
									wordspan.appendChild(charspan);
									targetNodes.push(charspan);
									initTargetStyle(charspan, rootIndex + targetNodes.length);
								}
							});
							newNodes.push(wordspan);
						}
					});
				node.replaceWith(...newNodes);
			}
		});
		return {
			targets: targetNodes,
			masks: maskNodes
		};
	}

	const { targets, masks } = parseElement(element);

	const intersect = intersection(element, options.observerOptions);

	function enter() {
		targets.forEach(showTarget);
		if (!options.hideOnLeave) {
			intersect.destroy();
			element.removeEventListener('enter', enter);
		}
	}

	function leave() {
		targets.forEach(hideTarget);
	}

	element.addEventListener('enter', enter);
	if (options?.hideOnLeave) {
		element.addEventListener('leave', leave);
	}

	return {
		update(updatedOptions: Options) {
			// Update targets' and masks' styles accordingly
		},
		destroy() {
			intersect.destroy();
			element.removeEventListener('enter', enter);
			if (options?.hideOnLeave) {
				element.removeEventListener('leave', leave);
			}
		}
	};
}

/* Presets */

export const revealFlyUp: Options = {
	// to do
}

export const revealFlyDown: Options = {
	...revealFlyUp,
	start: {
		y: '1em'
	}
}