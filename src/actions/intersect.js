
const observers = [];

const defaultOptions = {
	root: null,
	rootMargin: '-50% 0px -50%',
	threshold: 0,
}

function matchOptions(observer, newOptions) {
	return observer.root == newOptions.root
			&& observer.rootMargin == newOptions.rootMargin
			&& observer.thresholds == newOptions.threshold
}

function setObserver(options) {
	const observerIdx = observers.findIndex(obs => matchOptions(obs, options));
	if (observerIdx > -1) return observers[observerIdx];
	const obs = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const eventName = entry.isIntersecting ? 'enter' : 'leave';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		},
		options
	)
	observers.push(obs);
	return obs;
}


export function intersection(element, options = defaultOptions) {
	const observer = setObserver({...defaultOptions, ...options});
	observer.observe(element);
	return {
		destroy() {
			observer.unobserve(element);
		}
	}
}