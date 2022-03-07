// export function getExerciceColors(index) {
// 	return  `--rgb-accent1: var(--rgb-${index + 1}accent1);`+
// 			`--rgb-accent2: var(--rgb-${index + 1}accent2);`+
// 			`--rgb-accent3: var(--rgb-${index + 1}accent3);`+
// 			`--accent1: rgb(var(--rgb-accent1));`+
// 			`--accent2: rgb(var(--rgb-accent2));`+
// 			`--accent3: rgb(var(--rgb-accent3));`
// }

import type { ExerciceRoute } from './routes';

export function getAccentColors(cssPrefix: ExerciceRoute['key']) {
	return [1, 2, 3].map((l) => `--accent${l}: var(--${cssPrefix}${l})`).join('; ');
}
