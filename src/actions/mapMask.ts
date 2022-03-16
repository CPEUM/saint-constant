import type { MapDisplay } from '$stores/map';
import { mapDisplay } from '$stores/map';

export function mapMask(
	element: HTMLElement,
	{
		top = '0px',
		right = '0px',
		bottom = '0px',
		left = '0px'
	}: MapDisplay['mask'] = {}
) {

	const root = document.body;

	const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					root.addEventListener('scroll', scroll);
				}
				else {
					root.removeEventListener('scroll', scroll);
					// mapState.clearMask
				}
			}
		},
		{
			root,
			rootMargin: '0% 0% 0%'
		}
	);
	observer.observe(element);

	let throttle = false;
	function scroll() {
		if (!throttle) {
			throttle = true;
			setTimeout(() => {
				updateMask();
				throttle = false;
			}, 50);
		}
	}

	function updateMask() {
		const rect = element.getBoundingClientRect();
		mapDisplay.setMask({
			top: `clamp(${top}, ${rect.top}px, calc(100% - ${bottom}))`,
			right: `0%`,
			bottom: `clamp(${bottom}, calc(100% - ${rect.bottom}px), calc(100% - ${top}))`,
			left: `50%`,
		});
	}

	return {
		update(newOptions) {
		},
		destoy() {
			observer.unobserve(element);
			root.removeEventListener('scroll', scroll);
		}
	}
}