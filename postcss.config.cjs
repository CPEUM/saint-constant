module.exports = {
	plugins: [
		require('postcss-url')({
			filter: '/**',
			url: (asset) => `${process.env.PUBLIC_BASE_PATH || ''}${asset.url}`
		}),
		require('postcss-nested'),
		require('@daltontan/postcss-import-json'),
		require('autoprefixer'),
		process.env.NODE_ENV.toLowerCase() === 'production' && require('cssnano')
	]
};
