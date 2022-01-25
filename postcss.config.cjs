module.exports = {
	plugins: [
		require('postcss-nested'),
		require('@daltontan/postcss-import-json'),
		require('autoprefixer'),
		process.env.NODE_ENV.toLowerCase() === 'production' && require('cssnano'),
	]
}