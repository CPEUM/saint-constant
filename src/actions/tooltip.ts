import { check_outros, group_outros, transition_out } from 'svelte/internal';
import Tooltip from '$components/primitives/Tooltip.svelte';

// Workaround for https://github.com/sveltejs/svelte/issues/4056
function outroAndDestroy(instance) {
	if (instance) {
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
}

export interface TooltipOptions {
	follow?: boolean;
	position?: 'top' | 'right' | 'bottom' | 'left';
	text?: string;
	color?: string;
	backgroundColor?: string;
}

export function tooltip(
	element: HTMLElement,
	{
		follow = false,
		position = 'top',
		text = '',
		color = undefined,
		backgroundColor = undefined
	}: TooltipOptions = {}
) {
	let comp: Tooltip;
	const title = element.getAttribute('title');
	if (!text && title) text = title;

	let timer;

	function createTooltip(e) {
		const rect = element.getBoundingClientRect();
		const x = e.clientX;
		const y = e.clientY;
		comp = new Tooltip({
			target: document.body,
			intro: true,
			props: {
				follow,
				position,
				text,
				color,
				backgroundColor,
				x: follow
					? x
					: position === 'left'
					? rect.left
					: position === 'right'
					? rect.right
					: rect.left + rect.width / 2,
				y: follow
					? y
					: position === 'top'
					? rect.top
					: position === 'bottom'
					? rect.bottom
					: rect.top + rect.height / 2
			}
		});
	}

	function clearTooltip() {
		if (title) {
			element.setAttribute('title', title);
		}
		outroAndDestroy(comp);
	}

	let mouseEvent;
	function mousePos(e) {
		mouseEvent = e;
	}

	function mouseenter() {
		if (title) {
			element.removeAttribute('title');
		}
		document.addEventListener('mousemove', mousePos);
		timer = setTimeout(() => {
			document.removeEventListener('mousemove', mousePos);
			createTooltip(mouseEvent);
		}, 500);
	}

	function mouseleave() {
		if (timer) {
			clearTimeout(timer);
		}
		document.removeEventListener('mousemove', mousePos);
		clearTooltip();
	}

	element.addEventListener('mouseenter', mouseenter);
	element.addEventListener('mouseleave', mouseleave);

	return {
		destroy() {
			element.removeEventListener('mouseover', mouseenter);
			element.removeEventListener('mouseleave', mouseleave);
			if (comp) outroAndDestroy(comp);
		}
	};
}
