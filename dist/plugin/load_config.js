import path from 'path';
import fs from 'fs';
import url from 'url';
export const defaultConfig = {
	routes: '/routes',
	prerenderAll: false,
	seo: {}
};
export default async function load_config({ cwd = process.cwd() } = {}) {
	const svelte_config_file = path.join(cwd, 'svelte.config.js');
	const config_file = fs.existsSync(svelte_config_file) ? svelte_config_file : null;
	let config;
	if (config_file) {
		const loaded_config = await import(url.pathToFileURL(config_file).href);
		const svelte_config = loaded_config?.default;
		if (typeof svelte_config !== 'object') {
			config = defaultConfig;
			return config;
		}
		config = {
			...defaultConfig,
			...svelte_config.svemix
		};
	} else {
		// Default config
		config = defaultConfig;
	}
	return config;
}
