export function getRandomThemeColor(level = 1) {
	return `rgb(var(--rgb-${Math.floor(Math.random() * 3) + 1}accent${level}))`;
}