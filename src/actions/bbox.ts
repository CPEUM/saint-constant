import { mergeObjects } from '$utils/mergeObjects';

interface Options {
	scrollParent?: HTMLElement;
	callback?: (bbox: DOMRect) => void
}

export function bbox(element: HTMLElement, {
	scrollParent = document.body,
	callback = undefined
}: Options = {}) {

	function scroll() {
		callback(element.getBoundingClientRect());
	}

	if (callback) {
		scrollParent.addEventListener('scroll', scroll);
	}

	return {
		update(newOptions: Options) {
			callback = newOptions.callback;
		},
		destoy() {
			if (callback) {
				scrollParent.removeEventListener('scroll', scroll);
			}
		}
	}
}