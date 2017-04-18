var webpack = require('webpack');

module.exports = {
	entry: './static/js/bundler.js',
	output: {
		filename: './static/js/bundle.js'
	},

	watch: true,

	module: {
		
		loaders: [

			{ // html 
				test: /\.html$/,
				loader: "raw-loader"
			},

			{ // babel
				test: /\.js$/,
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},

			{ // css/style loader
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},

			{ // sass
			  test: /\.scss$/,
			  use: ['style-loader', 'css-loader', 'sass-loader'],
			}
			
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			_: 'underscore'
		})
	]
};