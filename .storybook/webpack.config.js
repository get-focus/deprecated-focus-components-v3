// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


var path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
	preLoaders: [
		{
			test: /material-design-lite\/material/,
			loader: 'exports?componentHandler'
		}
	],
	loaders: [
{
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"],
            },
            {
                test: /\.css$/,
                loaders: ["style", "css", "sass"],
            },
            {
                test: /\.png(\?.*)?$/,
                loader: 'url-loader',
                query: { mimetype: 'image/png' }
            },
            {
                test: /\.jpg(\?.*)?$/,
                loader: 'url-loader',
                query: { mimetype: 'image/jpg' }
            },
            {
                test: /\.gif(\?.*)?$/,
                loader: 'url-loader',
                query: { mimetype: 'image/gif' }
            },
            {
                test: /\.woff(\?.*)?$/,
                loader: 'url-loader',
                query: {limit: 50000, mimetype: 'application/font-woff'}
            },
            {
                test: /\.woff2(\?.*)?$/,
                loader: 'url-loader',
                query: {limit: 50000, mimetype: 'application/font-woff'}
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url-loader',
                query: {limit: 50000, mimetype: 'application/octet-stream'}
            },
            {
                test: /\.eot(\?.*)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader',
                query: {limit: 50000, mimetype: 'image/svg+xml'}
            }
		]
  },
};
