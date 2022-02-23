import path from 'path';
import adapter_static from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const BASE_PATH = process.env.PUBLIC_BASE_PATH ? process.env.PUBLIC_BASE_PATH : '';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	extensions: [
		'.svelte',
	],
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter_static(),
		vite: {
			resolve: {
				alias: {
					$actions: path.resolve('./src/actions'),
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$stores: path.resolve('./src/stores'),
					$styles: path.resolve('./src/styles'),
					$transitions: path.resolve('./src/transitions'),
					$utils: path.resolve('./src/utils')
				}
			}
		},
		paths: {
			base: BASE_PATH
		},
	},
	compilerOptions: {
		cssHash: ({ hash, css, /* name, filename */ }) => `cpeum-${hash(css)}`
	}
};

export default config;
