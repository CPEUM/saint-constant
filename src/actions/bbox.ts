import { mergeObjects } from '$utils/mergeObjects';

interface Options {
	scrollParent?: HTMLElement;
	callback?: (bbox: DOMRect) => void
}

export function bbox(element: HTMLElement, options: Options) {
	options = mergeObjects({scrollParent: document.body}, options);

	function scroll() {
		options.callback(element.getBoundingClientRect());
	}

	if (options.callback) {
		options.scrollParent.addEventListener('scroll', scroll);
	}

	return {
		update(newOptions: Options) {
			options.callback = newOptions.callback;
		},
		destoy() {
			if (options.callback) {
				options.scrollParent.removeEventListener('scroll', scroll);
			}
		}
	}
}