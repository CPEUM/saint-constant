export interface ParseNodeOptions {
	granularity?: 'char' | 'word';
	maskNodeInitCallback?: (element: HTMLElement, index: number) => void;
	targetNodeInitCallback?: (element: HTMLElement, index: number) => void;
}

/**
 * Parsing child nodes recursively, splitting and wrapping content.
 */
export function splitNodeText(node: HTMLElement, {
	granularity = 'char',
	maskNodeInitCallback = null,
	targetNodeInitCallback = null
}: ParseNodeOptions = {}) {

	const HOST_ATTRIBUTE = 'text-split';
	const TARGET_ATTRIBUTE = 'text-target-node';
	const MASK_ATTRIBUTE = 'text-mask-node';

	const targets: HTMLElement[] = [];
	const masks: HTMLElement[] = [];

	function initNestedWrapperStyle(el: HTMLElement) {
		el.style.position = 'relative';
		el.style.display = 'inline-block';
		el.style.transformStyle = 'preserve-3d';
	}

	function parseNode(n: Node) {
		Array.from(n.childNodes).forEach((cn) => {
			if (cn instanceof HTMLElement) {
				initNestedWrapperStyle(cn);
				parseNode(cn)
			}
			else if (cn.nodeType === Node.TEXT_NODE) {
				const newNodes = [];
				cn.textContent
					.split(/(\s)/) // previously was: /\s\b/
					.forEach((word) => {
						// console.log('"' + word + '"');
						if (!word) {
							return;
						}
						if (word === ' ') {
							newNodes.push(document.createTextNode(' '));
						}
						else {
							const wordspan = document.createElement('span');
							initNestedWrapperStyle(wordspan);
							wordspan.style.whiteSpace = 'nowrap';
							wordspan.setAttribute(MASK_ATTRIBUTE, '');
							masks.push(wordspan);
							if (maskNodeInitCallback) maskNodeInitCallback(wordspan, masks.length);
							word.split(granularity === 'word' ? ' ' : '').forEach((unit) => {
								const unitspan = document.createElement('span');
								unitspan.textContent = unit; //.replace(' ', '\u00A0');
								unitspan.style.transformStyle = 'preserve-3d';
								unitspan.style.position = 'relative';
								unitspan.style.display = 'inline-block';
								unitspan.setAttribute(TARGET_ATTRIBUTE, '');
								wordspan.appendChild(unitspan);
								targets.push(unitspan);
								if (targetNodeInitCallback) targetNodeInitCallback(unitspan, targets.length);
							});
							newNodes.push(wordspan);
						}
					});
				cn.replaceWith(...newNodes);
			}
		});
	}

	if (node.hasAttribute(HOST_ATTRIBUTE)) {
		targets.push(...Array.from(node.querySelectorAll(`[${TARGET_ATTRIBUTE}]`)) as HTMLElement[]);
		masks.push(...Array.from(node.querySelectorAll(`[${MASK_ATTRIBUTE}]`)) as HTMLElement[]);
	}
	else {
		node.setAttribute(HOST_ATTRIBUTE, '');
		node.normalize();
		parseNode(node);
	}

	return {
		targets,
		masks
	};
}