const regex = /px|%|em|vh|vw|rem/;

export function getUnits(input: string | number) {
	if (typeof input === 'number') {
		return null;
	}
	return input.match(regex)[0] || null;
}