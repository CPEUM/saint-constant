export function generateSvgPaths(n, {
	padding = 500,
	viewBox = {
		width: 1000,
		height: 1000
	},
	relative = false
} = {}) {
	const bufferZone = 100;
	const factor = {
		x: relative ? 1 / viewBox.width : 1,
		y: relative ? 1 / viewBox.height : 1
	}

	function randomCoord(axis) {
		return Math.round(Math.random() * ((axis === 'x' ? viewBox.width : viewBox.height) - padding) + padding);
	}
	
	return [...Array(n)].map(
		() =>
			`M -${bufferZone * factor.x}, -${bufferZone * factor.y} \
		L -${bufferZone * factor.x},${randomCoord('y') * factor.y} \
		C ${Math.min(randomCoord('x'), viewBox.width / 2) * factor.x},${randomCoord('y') * factor.y} \
		${Math.max(randomCoord('x'), viewBox.width / 2) * factor.x},${randomCoord('y') * factor.y} \
		${(viewBox.width + bufferZone) * factor.x},${randomCoord('y') * factor.y} \
		L ${(viewBox.width + bufferZone) * factor.x},-${bufferZone * factor.y} Z`
	);
}
