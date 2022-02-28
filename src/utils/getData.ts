/**
 * Helper function to de-boiler-plate data fetching
 */
export async function getData(filepath) {
	const res = await fetch(filepath);
	if (res.ok) {
		return await res.json();
	}
	else {
		throw new Error(`Couldn't get data fetched at ${filepath}`);
	}
}