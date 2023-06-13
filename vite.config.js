import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
	],
	resolve: {
    alias: {
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
			util: 'rollup-plugin-node-polyfills/polyfills/util',
			process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
			events: 'rollup-plugin-node-polyfills/polyfills/events',
    },
  },
});

