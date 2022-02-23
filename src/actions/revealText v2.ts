import { ParseNodeOptions, splitNodeAttributes, splitNodeText } from '$utils/splitText';
import { getUnits } from '$utils/strings';
import { intersection } from './intersect';

export const transitionAttributes = {
	INTRO: 'text-introing',
	OUTRO: 'text-outroing'
}

export interface RevealTextOptions extends ParseNodeOptions {
	duration?: number;
	delay?: number;
	stagger?: boolean;
	staggerDelay?: number;
	opacity?: number;
	x?: number | string;
	y?: number | string;
	scale?: number;
	rotateX?: number;
	rotateY?: number;
	rotateZ?: number;
	transformOrigin?: string;
	perspective?: number;
	mask?: boolean,
	maskPadding?: number | string;
	hideOnLeave?: boolean;
	easing?: string;
	useIntersect?: boolean;
	intersectOptions?: IntersectionObserverInit;
	visible?: boolean | null;
	intro?: boolean;
	outro?: boolean;
}

/**
 * Action to apply "reveal", and optional "leave", transitions on the text content of the host element
 * based on the host's viewport intersection.
 */
export function revealText(element: HTMLElement, {
	duration = 450,
	delay = 0,
	stagger = true,
	staggerDelay = 25,
	opacity = 0,
	x = 0,
	y = 0,
	scale = 1,
	rotateX = 0,
	rotateY = 0,
	rotateZ = 0,
	transformOrigin = '0% 90%',
	perspective = 1000,
	hideOnLeave = false,
	mask = false,
	maskPadding = '0.1em',
	easing = 'cubic-bezier(0.7, 0, 0.2, 1)',
	granularity = 'char',
	useIntersect = true,
	intersectOptions = {
		rootMargin: '-200px 0px -200px'
	},
	visible = undefined,
	intro = true,
	outro = true
}: RevealTextOptions = {}) {

	let UID = element.getAttribute(splitNodeAttributes.HOST)

	if (!UID?.length) {
		console.log('No host attribute found!')
		UID = btoa(Math.random().toString(16)).slice(1, 9);
		element.setAttribute(splitNodeAttributes.HOST, UID);
	}

	const maskPaddingVal = parseFloat(maskPadding + '');
	const maskPaddingUnits = getUnits(maskPadding) || 'px';

	let style = document.head.querySelector(`[${UID}]`);
	if (!style) {
		style = document.createElement('style')
		style.setAttribute('type', 'text/css');
		style.setAttribute(UID,'')
		style.textContent = `
			[${splitNodeAttributes.HOST}=${UID}] {
				perspective: ${perspective}px;
				perspective-origin: center;
			}
		`
		document.head.appendChild(style);
	}

	const transitionSelector = '';

	style.textContent = `
		${style.textContent}

		[${splitNodeAttributes.HOST}=${UID}]${transitionSelector} [${splitNodeAttributes.TARGET}] {
			
		}

		[${splitNodeAttributes.HOST}=${UID}] [${splitNodeAttributes.MASK}] {
			
		}
	`;

	function initTargetStyle(el: HTMLElement, index: number) {
		visible ? showTarget(el) : hideTarget(el);
		el.style.transformOrigin = transformOrigin;
		el.style.transitionDelay = delay + (stagger ? staggerDelay * index : 0) + 'ms';
		el.style.transitionDuration = duration + 'ms';
		el.style.transitionTimingFunction = easing;
		el.style.transitionProperty = 'opacity, transform, top, left';
	}
	function initMaskStyle(el: HTMLElement, index: number) {
		el.style.overflow = 'hidden';
		el.style.padding = maskPaddingVal + maskPaddingUnits;
		el.style.margin = -1 * maskPaddingVal + maskPaddingUnits;
	}
	function hideTarget(el: HTMLElement) {
		el.style.opacity = opacity + '';
		el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
		el.style.top = y + (isNaN(Number(y)) ? '' : 'px');
		el.style.left = x + (isNaN(Number(x)) ? '' : 'px');
	}
	function showTarget(el: HTMLElement) {
		el.style.opacity = '1';
		el.style.transform = 'initial';
		el.style.top = '0';
		el.style.left = '0';
	}

	const { targets, masks } = splitNodeText(element, {
		granularity,
		maskNodeInitCallback: mask ? initMaskStyle : null,
		targetNodeInitCallback: initTargetStyle
	});

	let intersect;
	if (useIntersect && visible === undefined) {
		intersect = intersection(element, intersectOptions);
		element.addEventListener('enter', enter);
		if (hideOnLeave) {
			element.addEventListener('leave', leave);
		}
	}
	function enter() {
		for (const target of targets) {
			showTarget(target)
		}
		element.style.userSelect = '';
		element.style.pointerEvents = '';
		if (!hideOnLeave && intersect) {
			intersect.destroy();
			element.removeEventListener('enter', enter);
		}
	}
	function leave() {
		for (const target of targets) {
			hideTarget(target)
		}
		element.style.userSelect = 'none';
		element.style.pointerEvents = 'none';
	}

	return {
		update(newOptions: RevealTextOptions) {
			/* To do: update all relevant props and execute functions when needed */
			if (newOptions.duration) duration = newOptions.duration;
			if (newOptions.delay) delay = newOptions.delay;
			if (newOptions.staggerDelay) staggerDelay = newOptions.staggerDelay;
			if (newOptions.scale) scale = newOptions.scale;
			if (newOptions.rotateX) rotateX = newOptions.rotateX;
			if (newOptions.rotateY) rotateY = newOptions.rotateY;
			if (newOptions.rotateZ) rotateZ = newOptions.rotateZ;
			if (newOptions.x) x = newOptions.y;
			if (newOptions.y) y = newOptions.y;
			if (newOptions.visible !== undefined) {
				if (newOptions.visible) {
					enter();
				}
				else {
					leave();
				}
			}
		},
		destroy() {
			if (intersect) {
				intersect.destroy();
				element.removeEventListener('enter', enter);
				element.removeEventListener('leave', leave);
			}
		},
		masks,
		targets
	};
}

// /* Presets */

export const revealFlyUp: RevealTextOptions = {
	mask: true,
	maskPadding: '0em',
	y: '0.75em',
	opacity: 0,
	rotateX: 60,
	transformOrigin: '0% 80%',
	staggerDelay: 15,
	duration: 750
}

export const revealFlyDown: RevealTextOptions = {
	...revealFlyUp,
	y: '-1.1em'
}