/**
 * Function to split the text content of an element
 * into spans for staggered transitions
 * @param {HTMLElement} element 
 * 
 */
function split(element) {

	let charspans = [];

	Array.from(element.childNodes).forEach(node => {
		let nodeElement;
		if (node.tagName) {
			nodeElement = document.createElement(node.tagName)
			element.appendChild(nodeElement);
		}
		else {
			nodeElement = element;
		}
		node.textContent.split(/\b/).forEach((w, wi) => {
			const wordspan = document.createElement('span')
			nodeElement.appendChild(wordspan);
			w.split('').forEach((c, ci) => {
				const charspan = document.createElement('span')
				charspan.textContent = c;
				wordspan.appendChild(charspan);
				charspans.push(charspan)
			})
		})
		node.remove();
	});

	return charspans;
}


/**
 * Svelte action to add reveal transitions to elements
 * @param {HTMLElement} element 
 * @param {*} otions
 * 
 */
export function reveal(element, {transition = 'fade', stagger = false} = {}) {

	let els = [element]
	if (stagger) {
		els = split(element);
	}

	function hide(element) {
		
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				els.forEach((el, i) => {
					el.classList.remove('')
				})
			}
			else {

			}
		})
	})

	

	return {
		destroy() {
		}
	};
}