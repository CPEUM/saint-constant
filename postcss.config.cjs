module.exports = {
	plugins: [
		require('postcss-url')({
			url: (asset) => {
				if (!asset.url.startsWith('/') || (process.env.PUBLIC_BASE_PATH && asset.url.startsWith(process.env.PUBLIC_BASE_PATH))) return asset.url;
				console.log('Rebasing css url() ' + asset.url + ' to --> ' + `${process.env.PUBLIC_BASE_PATH || ''}${asset.url}`);
				return `${process.env.PUBLIC_BASE_PATH || ''}${asset.url}`;
			}
		}),
		require('postcss-nested'),
		require('@daltontan/postcss-import-json'),
		require('autoprefixer'),
		process.env.NODE_ENV.toLowerCase() === 'production' && require('cssnano')
	]
};
