import { intersection } from './intersect';
import RevealTextComponent from '$components/_actions/RevealText.svelte';

type Options = {
	duration?: number;
	staggerDelay?: number;
	y?: number;
	x?: number;
	opacity?: number;
	scale?: number;
	rotateX?: number;
	transformOrigin?: string;
	stagger?: boolean;
	hideOnLeave?: boolean;
	mask?: boolean;
};

export function revealText(element: HTMLElement, options?: Options) {

	const text = element.textContent;

	element.style.perspective = '900px';

	const contentComponent = new RevealTextComponent({
		props: {
			text,
			...options
		},
		target: element,
		hydrate: true
	});

	const observer = intersection(element, {rootMargin: '-200px 0px -200px'});
	function enter() {
		contentComponent.$set({ is_intersecting: true });
	}
	function leave() {
		contentComponent.$set({ is_intersecting: false });
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
			observer.destroy();
			element.removeEventListener('enter', enter);
			if (options?.hideOnLeave) {
				element.removeEventListener('leave', leave);
			}
			contentComponent.$destroy();
		}
	};
}
