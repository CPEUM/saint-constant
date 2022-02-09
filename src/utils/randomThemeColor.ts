import colors from '$styles/colors.json';

export function getRandomThemeColor(
	levels: number | number[] = [1, 2, 3],
	themeKeys: string[] = ['accent', 'promenades', 'poles', 'agroparc']
) {
	if (!Array.isArray(levels)) {
		levels = [levels];
	}
	const colorKey = `${themeKeys[Math.floor(Math.random() * themeKeys.length)]}${
		levels[Math.floor(Math.random() * levels.length)]
	}`;
	return colors[colorKey];
}
