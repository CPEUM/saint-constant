import { base } from '$app/paths';

export function debasePath(path) {
	if (base) {
		return path.slice(base.length);
	}
	return path
}