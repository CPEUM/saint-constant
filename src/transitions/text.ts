import type { RevealTextOptions } from '$actions/revealText';
import { revealText } from '$actions/revealText';

type TextTransitionOptions = Omit<
	RevealTextOptions,
	'visible' | 'hidenOnLeave' | 'useIntersect' | 'intersectOptions'
>;

const transitionAttributes = {
	INTRO: 'text-introing',
	OUTRO: 'text-outroing'
}

/**
 * Transitions the text content of the host element with possibility of staggering.
 */
export function text(
	element: HTMLElement,
	{
		duration = 450,
		delay = 0,
		stagger = true,
		staggerDelay = 25,
		...options
	}: TextTransitionOptions = {}
) {

	const { masks, targets, update } = revealText(element, {
		duration,
		delay,
		stagger,
		staggerDelay,
		...options,
		useIntersect: false,
		visible: false,
		hideOnLeave: false
	});

	const totalDuration = delay + (stagger ? staggerDelay * targets.length : 0) + duration;

	let prevt = 0;

	return {
		duration: totalDuration,
		tick: (t, u) => {
			// console.log(t, u);
			if (t === 1) {
				if (element.hasAttribute(transitionAttributes.INTRO)) {
					element.removeAttribute(transitionAttributes.INTRO);
				}
				else {
					element.setAttribute(transitionAttributes.OUTRO, '')
					update({ visible: false });
				}
			}
			/* t ascending -> introing */
			else if (t > prevt) {
				if (element.hasAttribute(transitionAttributes.OUTRO)) {
					element.removeAttribute(transitionAttributes.OUTRO);
				}
				if (!element.hasAttribute(transitionAttributes.INTRO)) {
					element.setAttribute(transitionAttributes.INTRO, '');
					update({ visible: true });
				}
			}
			/* t descending -> outroing */
			else {
				if (element.hasAttribute(transitionAttributes.INTRO)) {
					element.removeAttribute(transitionAttributes.INTRO);
				}
				if (!element.hasAttribute(transitionAttributes.OUTRO)) {
					element.setAttribute(transitionAttributes.OUTRO, '');
					update({ visible: false });
				}
			}
			prevt = t;
		}
	};
}
