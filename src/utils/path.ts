import { base } from '$app/paths';

/**
 * Normalize the passed path, taking into consideration if a `kit.paths.base` is defined and if the passed path contains or not the specified base.
 * When doing remote builds, using github's runners for exemple, the value of `kit.paths.base` is only valid at runtime, but isn't representative
 * of the runner's build environement.
 */
export function debasePath(path) {
	if (base && path.startsWith(base)) {
		// console.log('Theres a base in this path!', base);
		return path.slice(base.length);
	}
	return path;
}

/**
 * Take a path, debases it if needed, and return its segments as an array of strings
 */
export function getSegments(path: string) {
	if (!path) return null;
	return debasePath(path)
		.replace(/#.*$/, '')
		.replace(/^\/+/, '')
		.split('/')
		.map((segment) => `/${segment}`);
}
