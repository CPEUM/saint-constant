import colors from '$styles/colors.json';

/**
 * 
 * @param {number|[number[]]} levels 
 * @param {string[]} themeKeys 
 * @returns 
 */
export function getRandomThemeColor(levels = [1, 2, 3], themeKeys = ['accent', 'promenades', 'poles', 'agroparc']) {
	if (!Array.isArray(levels)) {
		levels = [levels]
	}
	const colorKey = `${themeKeys[Math.floor(Math.random() * themeKeys.length)]}${levels[Math.floor(Math.random() * levels.length)]}`;
	console.log(colorKey);
	return colors[colorKey];
}