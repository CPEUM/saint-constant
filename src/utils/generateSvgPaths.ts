interface SvgPathOptions {
	direction?: 'up' | 'down';
	padding?: number;
	viewBox?: {
		width: number;
		height: number;
	}
	relative?: boolean;
}

export function generateSvgPaths(n, {
	direction = 'down', 
	padding = 500,
	viewBox = {
		width: 1000,
		height: 1000
	},
	relative = false
}: SvgPathOptions = {}) {
	const bufferZone = 100;
	const factor = {
		x: relative ? 1 / viewBox.width : 1,
		y: relative ? 1 / viewBox.height : 1
	}

	function randomCoord(axis) {
		const rand = Math.round(Math.random() * ((axis === 'x' ? viewBox.width : viewBox.height) - padding));
		return direction === 'down' ? rand + padding : rand;
	}

	const cornerY = direction === 'down' ? -bufferZone * factor.y : viewBox.height + bufferZone * factor.y;
	const leftCorner = `-${bufferZone * factor.x}, ${cornerY}`;
	const rightCorner = `${(viewBox.width + bufferZone) * factor.x}, ${cornerY}`;
	
	return [...Array(n)].map(
		() =>
			`M ${leftCorner} \
		L -${bufferZone * factor.x},${randomCoord('y') * factor.y} \
		C ${Math.min(randomCoord('x'), viewBox.width / 2) * factor.x},${randomCoord('y') * factor.y} \
		${Math.max(randomCoord('x'), viewBox.width / 2) * factor.x},${randomCoord('y') * factor.y} \
		${(viewBox.width + bufferZone) * factor.x},${randomCoord('y') * factor.y} \
		L ${rightCorner} Z`
	);
}
