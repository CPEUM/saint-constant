import { check_outros, group_outros, transition_out } from 'svelte/internal';
import Tooltip from '$components/primitives/Tooltip.svelte'


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
};

export interface TooltipOptions {
	follow?: boolean;
	position?: 'top' | 'right' | 'bottom' | 'left';
	text?: string;
	color?: string;
	backgroundColor?: string;
}

export function tooltip(element: HTMLElement, {
	follow = false,
	position = 'top',
	text = '',
	color = undefined,
	backgroundColor = undefined
}: TooltipOptions = {}) {

	let comp;
	const title = element.getAttribute('title');
	if (!text && title) text = title;
	
	function mouseenter(e) {
		const rect = element.getBoundingClientRect();
		if (title) {
			element.removeAttribute('title');
		}
		comp = new Tooltip({
			target: document.body,
			intro: true,
			props: {
				follow,
				position,
				text,
				color,
				backgroundColor,
				x: follow ? e.clientX
					: position === 'left' ? rect.left
					: position === 'right' ? rect.right
					: rect.left + rect.width / 2,
				y: follow ? e.clientY
					: position === 'top' ? rect.top
					: position === 'bottom' ? rect.bottom
					: rect.top + rect.height / 2
			}
		})
	}

	function mouseleave() {
		if (title) {
			element.setAttribute('title', title);
		}
		outroAndDestroy(comp);
	}

	element.addEventListener('mouseenter', mouseenter);
	element.addEventListener('mouseleave', mouseleave);

	return {
		destroy() {
			element.removeEventListener('mouseover', mouseenter);
			element.removeEventListener('mouseleave', mouseleave);
		}
	}
}