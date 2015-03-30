'use strict';

var webpack = require('webpack'),
	path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry: './index.js',
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	//stats: {
	//	colors: true,
	//	reasons: true
	//},
	devtool: '#inline-source-maps',
	debug: true,

	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules', 'bower_components']
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'ng-annotate!babel!jshint',
				exclude: /node_modules|dist|bower_components/
			}, {
				test: /\.json$/,
				loader: 'json'
			}, {
				test: /\.md$/,
				loader: 'html!markdown'
			}, {
				test: /\.html$/,
				loader: 'raw'
			}, {
				test: /\.scss$/,
				loader: 'style!css!sass'
			}, {
				test: /\.css$/,
				loader: 'style!css!postcss'
			}, {
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
				loader: "file"
			}, {
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=res/[name].[ext]?[hash]'
			}
		]
	},
	postcss: [
		require('postcss-nested'),
		require('autoprefixer-core'),
		require('csswring')
	],
	plugins: [
	]
};