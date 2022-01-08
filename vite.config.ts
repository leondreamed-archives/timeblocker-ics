import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	base: '/timeblocker-ics/',
	resolve: {
		alias: {
			'~': path.resolve(new URL('.', import.meta.url).pathname, './src'),
		},
	},
	plugins: [vue()],
});
