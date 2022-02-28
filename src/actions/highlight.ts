let highlightObserver: IntersectionObserver = null;

function createObserver() {
	highlightObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.backgroundSize = '100% 100%';
				highlightObserver.unobserve(entry.target);
			}
		})
	}, {rootMargin: '-40% 0px -40%'});
}

/**
 * Applique un surlignage lorsque l'élément entre en vue.
 * 
 * L'action est utilisée une seule fois par élément, après quoi l'hôte HTML est désobservé.
 */
export function highlight(element: HTMLElement, color?: string): {destroy(): void} {
	if (!highlightObserver) createObserver();
	highlightObserver.observe(element);
	const highlightColor = color ? color : 'var(--accent1)'
	Object.assign(element.style, {
		transition: 'background-size .7s ease-out',
		backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
		backgroundPosition: '0% 0%',
		backgroundSize: '0% 100%',
		backgroundRepeat: 'no-repeat',
		padding: '.2em',
		margin: '-.2em',
		borderRadius: '.1em'
	})
	return {
		destroy() {
			highlightObserver.unobserve(element);
		}
	}
}