import path from 'path';
import adapterStatic from '@sveltejs/adapter-static';
// import { imagetools } from 'vite-imagetools';
import preprocess from 'svelte-preprocess';

const BASE_PATH = process.env.PUBLIC_BASE_PATH || '';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	extensions: ['.svelte'],
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		prerender: {
			default: true
		},
		adapter: adapterStatic(),
		vite: {
			// plugins: [imagetools({ force: true })],
			resolve: {
				alias: {
					$actions: path.resolve('./src/actions'),
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$media: path.resolve('./src/media'),
					$stores: path.resolve('./src/stores'),
					$styles: path.resolve('./src/styles'),
					$transitions: path.resolve('./src/transitions'),
					$utils: path.resolve('./src/utils')
				}
			}
		},
		paths: {
			base: BASE_PATH
		}
	},
	compilerOptions: {
		cssHash: ({ hash, css /* name, filename */ }) => `cpeum-${hash(css)}`
	}
};

export default config;
