import { intersection } from './intersect';
import { merge } from 'lodash-es';
// import RevealTextComponent from '$components/_actions/RevealText.svelte';

interface InitialStyle {
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
}

interface Options {
	duration?: number;
	staggerDelay?: number;
	start?: InitialStyle;
	transformOrigin?: string;
	perspective?: number;
	stagger?: boolean;
	hideOnLeave?: boolean;
	mask?: boolean;
	easing?: string;
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
	transformOrigin: '0 80%',
	perspective: 1000,
	stagger: true,
	hideOnLeave: true,
	mask: true,
	easing: 'cubic-bezier(0.35, 0, 0.25, 1)',
	observerOptions: {
		rootMargin: '-200px 0px -200px'
	}
};

export function reveal(element: HTMLElement, options?: Options) {
	options = merge(defaultOptions, options);
	element.style.perspective = options.perspective + 'px';
	element.style.transformStyle = 'preserve-3d';

	function initMaskStyle(el: HTMLElement) {
		// set styles depending on options.mask value
		el.style.position = 'relative';
		el.style.display = 'inline-block';
		el.style.transformStyle = 'preserve-3d';
	}

	function initTargetStyle(el: HTMLElement, index: number) {
		hideTarget(el, index);
		el.style.transformOrigin = options.transformOrigin;
		el.style.transformStyle = 'preserve-3d';
		el.style.transitionDelay = options.stagger ? options.staggerDelay * index + 'ms' : '0';
		el.style.transitionDuration = options.duration + 'ms';
		el.style.transitionTimingFunction = options.easing;
		el.style.transitionProperty = 'all'; // 'transform, opacity, top, left';
		el.style.position = 'relative';
		el.style.display = 'inline-block';
	}

	function hideTarget(el: HTMLElement, index: number) {
		// console.log('hiding target el', index);
		el.style.opacity = options.start.opacity + '';
		el.style.transform = `rotateX(${options.start.rotate.x}deg) rotateY(${options.start.rotate.y}deg) rotateZ(${options.start.rotate.z}deg) scale(${options.start.scale.x}, ${options.start.scale.y})`;
		el.style.top = options.start.y + 'px';
		el.style.left = options.start.x + 'px';
	}

	function showTarget(el: HTMLElement, index: number) {
		// console.log('showing target el', index);
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
				const nested = parseElement(node, targetNodes.length);
				targetNodes.push(...nested.targets);
				maskNodes.push(...nested.masks);
			} else {
				node.replaceWith(
					...node.textContent.trim().split(/\s\b/).map((word) => {
						const wordspan = document.createElement('span');
						maskNodes.push(wordspan);
						initMaskStyle(wordspan);
						word.split('').forEach((char) => {
							const charspan = document.createElement('span');
							charspan.textContent = char.replace(' ', '\u00A0');
							wordspan.appendChild(charspan);
							targetNodes.push(charspan);
							initTargetStyle(charspan, rootIndex + targetNodes.length);
						});
						const spacespan = document.createTextNode('\u00A0');
						wordspan.appendChild(spacespan);
						return wordspan;
					})
				);
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
			console.log("updated reveal action's options");
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

// Previous version
// export function revealText(element: HTMLElement, options?: Options) {

// 	const text = element.textContent;

// 	element.style.perspective = '900px';

// 	const contentComponent = new RevealTextComponent({
// 		props: {
// 			text,
// 			...options
// 		},
// 		target: element,
// 		hydrate: true
// 	});

// 	const observer = intersection(element, {rootMargin: '-200px 0px -200px'});
// 	function enter() {
// 		contentComponent.$set({ is_intersecting: true });
// 	}
// 	function leave() {
// 		contentComponent.$set({ is_intersecting: false });
// 	}
// 	element.addEventListener('enter', enter);
// 	if (options?.hideOnLeave) {
// 		element.addEventListener('leave', leave);
// 	}

// 	return {
// 		update(updatedOptions: Options) {
// 			console.log("updated reveal action's options");
// 		},
// 		destroy() {
// 			observer.destroy();
// 			element.removeEventListener('enter', enter);
// 			if (options?.hideOnLeave) {
// 				element.removeEventListener('leave', leave);
// 			}
// 			contentComponent.$destroy();
// 		}
// 	};
// }
