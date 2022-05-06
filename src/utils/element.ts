/**
 * Get an element's offsets relative to another element, if they are in fact nested.
 */
export function getOffset(parentElement: HTMLElement, targetElement: HTMLElement) {
	if (parentElement.contains(targetElement)) {
		let currentElement = targetElement;
		const offsets = {
			top: 0,
			left: 0
		};
		while (currentElement !== parentElement) {
			offsets.top += currentElement.offsetTop;
			offsets.left += currentElement.offsetLeft;
			currentElement = currentElement.parentElement;
		}
		return offsets;
	}
	return null;
}
