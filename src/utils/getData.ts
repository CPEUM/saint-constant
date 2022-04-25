import { base } from '$app/paths';

export async function getData(unbasedPath: string) {
	const res = await fetch(base + unbasedPath);
	if (res.ok) {
		return res.json();
	} else {
		throw Error(res.status + ': ' + res.statusText);
	}
}
