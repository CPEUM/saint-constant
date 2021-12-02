import path from 'path';
import staticAdapter from '@sveltejs/adapter-static';

const pathPrefix = process.env.PUBLIC_BASE_PATH ? process.env.PUBLIC_BASE_PATH : '';
console.log(pathPrefix);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [
		'.svelte',
	],
	kit: {
		adapter: staticAdapter(),
		target: '#saint-constant',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$utils: path.resolve('./src/utils'),
					$stores: path.resolve('./src/stores'),
					$actions: path.resolve('./src/actions'),
				}
			}
		},
		paths: {
			base: pathPrefix
		},
	}
};

export default config;
