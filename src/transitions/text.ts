import { revealText, RevealTextOptions } from '$actions/revealText';

type TextTransitionOptions = Omit<
	RevealTextOptions,
	'visible' | 'hidenOnLeave' | 'useIntersect' | 'intersectOptions'
>;

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

	const OUTRO_ATTRIBUTE = 'text-outroing';
	const INTRO_ATTRIBUTE = 'text-introing';

	let prevt = 0;

	return {
		duration: totalDuration,
		tick: (t) => {
			if (t === 1) {
				if (element.hasAttribute(INTRO_ATTRIBUTE)) {
					element.removeAttribute(INTRO_ATTRIBUTE);
				}
				else {
					element.setAttribute(OUTRO_ATTRIBUTE, '')
					update({ visible: false });
				}
			}
			/* t ascending -> introing */
			else if (t > prevt) {
				if (element.hasAttribute(OUTRO_ATTRIBUTE)) {
					element.removeAttribute(OUTRO_ATTRIBUTE);
				}
				if (!element.hasAttribute(INTRO_ATTRIBUTE)) {
					element.setAttribute(INTRO_ATTRIBUTE, '');
					update({ visible: true });
				}
			}
			/* t descending -> outroing */
			else {
				if (element.hasAttribute(INTRO_ATTRIBUTE)) {
					element.removeAttribute(INTRO_ATTRIBUTE);
				}
				if (!element.hasAttribute(OUTRO_ATTRIBUTE)) {
					element.setAttribute(OUTRO_ATTRIBUTE, '');
					update({ visible: false });
				}
			}
			prevt = t;
		}
	};
}
