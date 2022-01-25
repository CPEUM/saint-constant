import { base } from '$app/paths';
import { page } from '$app/stores';
import { get } from 'svelte/store';

/**
 * Normalize the passed path, taking into consideration if a `kit.paths.base` is defined and if the passed path contains or not the specified base.
 * When doing remote builds, using github's runners for exemple, the value of `kit.paths.base` is only valid at runtime, but isn't representative
 * of the runner's build environement.
 */
export function debasePath(path) {
	if (base && path.indexOf(base) === 0) {
		return path.slice(base.length);
	}
	return path
}

/**
 * Take a path and return its segments as an array of strings
 * @param {string} path
 * @returns {string[]}
 */
export function getSegments(path = null) {
	if (path === null) {
		path = get(page.url.pathname);
	}
	const normalizedPath = debasePath(path);
	return normalizedPath
		.replace(/#.*$/,'')
		.replace(/^\/+/, '')
		.split('/')
		.map((segment, i) => `${(i === 0 && path.indexOf(base) === 0 ? base : '' )}/${segment}`);
};