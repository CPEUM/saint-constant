export interface ParseNodeOptions {
	granularity?: 'char' | 'word';
	maskNodeInitCallback?: (element: HTMLElement, index: number) => void;
	targetNodeInitCallback?: (element: HTMLElement, index: number) => void;
}

export const splitNodeAttributes = {
	HOST: 'text-split-host',
	TARGET: 'text-split-target',
	MASK: 'text-split-mask'
}

/**
 * Parsing child nodes recursively, splitting and wrapping content.
 */
export function splitNodeText(node: HTMLElement, {
	granularity = 'char',
	maskNodeInitCallback = null,
	targetNodeInitCallback = null
}: ParseNodeOptions = {}) {

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
							wordspan.setAttribute(splitNodeAttributes.MASK, '');
							masks.push(wordspan);
							if (maskNodeInitCallback) maskNodeInitCallback(wordspan, masks.length);
							for (const unit of word.split(granularity === 'word' ? ' ' : '')) {
								const unitspan = document.createElement('span');
								unitspan.textContent = unit; //.replace(' ', '\u00A0');
								unitspan.style.transformStyle = 'preserve-3d';
								unitspan.style.position = 'relative';
								unitspan.style.display = 'inline-block';
								unitspan.setAttribute(splitNodeAttributes.TARGET, '');
								wordspan.appendChild(unitspan);
								targets.push(unitspan);
								if (targetNodeInitCallback) targetNodeInitCallback(unitspan, targets.length);
							};
							newNodes.push(wordspan);
						}
					});
				cn.replaceWith(...newNodes);
			}
		});
	}

	if (node.hasAttribute(splitNodeAttributes.HOST)) {
		targets.push(...Array.from(node.querySelectorAll(`[${splitNodeAttributes.TARGET}]`)) as HTMLElement[]);
		masks.push(...Array.from(node.querySelectorAll(`[${splitNodeAttributes.MASK}]`)) as HTMLElement[]);
	}
	else {
		node.setAttribute(splitNodeAttributes.HOST, '');
		node.normalize();
		parseNode(node);
	}

	return {
		targets,
		masks
	};
}