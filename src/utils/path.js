import { base } from '$app/paths';


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