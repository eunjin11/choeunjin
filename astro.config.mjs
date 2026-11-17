// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/blog': '/',
	},
	markdown: {
		shikiConfig: {
			theme: 'github-light',
		},
	},
});
