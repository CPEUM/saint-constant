const defaultOptions = {
	padding: 500,
	viewBox: {
		width: 1000,
		height: 1000
	}
};

export function generateSvgPaths(n, options = defaultOptions) {
	const { viewBox, padding } = options;
	const bufferZone = 0;

	function randomCoord(axis) {
		return Math.round(Math.random() * ((axis === 'x' ? viewBox.width : viewBox.height) - padding) + padding);
	}
	
	return [...Array(n)].map(
		() =>
			`M -${bufferZone}, -${10 * bufferZone} \
		L -${bufferZone},${randomCoord('y')} \
		C ${Math.min(randomCoord('x'), viewBox.width / 2)},${randomCoord('y')} \
		${Math.max(randomCoord('x'), viewBox.width / 2)},${randomCoord('y')} \
		${viewBox.width + bufferZone},${randomCoord('y')} \
		L ${viewBox.width + bufferZone},-${10 * bufferZone} Z`
	);
}
