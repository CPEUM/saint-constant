const observers: IntersectionObserver[] = [];

const defaultOptions: IntersectionObserverInit = {
	root: null,
	rootMargin: '-50% 0px -50%',
	threshold: 0
};

/**
 * Action to observe an element's intersection with the viewport.
 */
export function intersection(
	element: HTMLElement,
	options: IntersectionObserverInit = defaultOptions
) {
	options = { ...defaultOptions, ...options };
	const observer = setObserver(options);
	observer.observe(element);

	return {
		update(updatedOptions: IntersectionObserverInit) {
			console.log('intersection observer action update triggered');
		},
		destroy() {
			observer.unobserve(element);
		}
	};
}

function setObserver(options: IntersectionObserverInit) {
	const observerIdx = observers.findIndex(
		(observer) =>
			observer.root == options.root &&
			observer.rootMargin == options.rootMargin &&
			observer.thresholds == options.threshold
	);
	if (observerIdx > -1) return observers[observerIdx];
	const newObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? 'enter' : 'leave';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	}, options);
	observers.push(newObserver);
	return newObserver;
}
