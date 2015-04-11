'use strict';

var webpack = require('webpack'),
	path = require('path');

module.exports = {
	context: __dirname + '/src',
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'formlyLumx.js'
	},
	//stats: {
	//	colors: true,
	//	reasons: true
	//},
	devtool: '#inline-source-maps',
	debug: true,

	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules']
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'ng-annotate!babel!jshint',
				exclude: /node_modules|dist|bower_components/
			}, {
				test: /\.html$/,
				loader: 'raw'
			}, {
				test: /\.scss$/,
				loader: 'style!css!sass'
			}, {
				test: /\.css$/,
				loader: 'style!css!postcss'
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
