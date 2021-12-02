
const observers: IntersectionObserver[] = [];

function matchOptions(observer: IntersectionObserver, newOptions: IntersectionObserverInit) {
    return observer.root == newOptions.root
        && observer.rootMargin == newOptions.rootMargin
        && observer.thresholds == newOptions.threshold
}

function setObserver(options: IntersectionObserverInit) {
    const observerIdx = observers.findIndex(obs => matchOptions(obs, options));
    if (observerIdx > -1) return observers[observerIdx];
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const eventName = entry.isIntersecting ? 'enter' : 'exit';
                entry.target.dispatchEvent(new CustomEvent(eventName));
            });
        },
        options
    )
    observers.push(obs);
    return obs;
}

const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-50% 0px -50%',
    threshold: 0,
}

export function intersection(element: HTMLElement, options: IntersectionObserverInit = defaultOptions) {
    const observer = setObserver({...defaultOptions, ...options});
    observer.observe(element);
    return {
        destroy() {
            observer.unobserve(element);
        }
    }
}

export const defaultRevealOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20%',
    threshold: 0,
}