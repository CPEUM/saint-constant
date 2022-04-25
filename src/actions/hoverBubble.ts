import { check_outros, group_outros, transition_out } from 'svelte/internal';
import HoverBubble from '$components/primitives/HoverBubble.svelte';

// Workaround for https://github.com/sveltejs/svelte/issues/4056
function outroAndDestroy(instance) {
	if (instance.$$.fragment && instance.$$.fragment.o) {
		group_outros();
		transition_out(instance.$$.fragment, 0, 0, () => {
			instance.$destroy();
		});
		check_outros();
	} else {
		instance.$destroy();
	}
}

/**
 * @param {HTMLElement} element
 * @param {{size: number, color: string}} options
 *
 */
export function hoverbubble(element, options) {
	const bubble = new HoverBubble({
		target: element,
		intro: true,
		props: {
			...options
		}
	});

	function mouseenter(e) {
		bubble.$set({ active: true });
	}

	function mouseleave() {
		bubble.$set({ active: false });
	}

	element.addEventListener('mouseenter', mouseenter);
	element.addEventListener('mouseleave', mouseleave);

	return {
		destroy() {
			element.removeEventListener('mouseover', mouseenter);
			element.removeEventListener('mouseleave', mouseleave);
		}
	};
}
