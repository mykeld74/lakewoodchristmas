import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$css: path.resolve('./src/css'),
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$img: path.resolve('./src/images')
				}
			}
		}
	}
};

export default config;
