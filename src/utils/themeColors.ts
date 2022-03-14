import type { ExerciceRoute } from './routes';
import colors from '$styles/colors.json';

export type ThemeKey = 'accent' | 'promenades' | 'poles' | 'agroparc' | 'light' | 'dark'

export function getThemeColors(cssPrefix: ThemeKey) {
	return [1, 2, 3].map((l) => `--accent${l}: var(--${cssPrefix}${l})`).join('; ');
}

export function getRandomThemeColor(
	levels: number | number[] = [1, 2, 3],
	themeKeys: ThemeKey[] = ['accent', 'promenades', 'poles', 'agroparc']
) {
	if (!Array.isArray(levels)) {
		levels = [levels];
	}
	const colorKey = `${themeKeys[Math.floor(Math.random() * themeKeys.length)]}${
		levels[Math.floor(Math.random() * levels.length)]
	}`;
	return colors[colorKey];
}
