'use strict';

var webpack = require('webpack'),
  path = require('path'),
  bowerRoot = __dirname + '/app/bower_components';

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
  cache: true,
  debug: true,

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
    root: [__dirname + '/app']
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
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: "file"
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      }
    ]
  },
  /* speed up the build */
  noParse: [
    bowerRoot
  ],

  postcss: [
    require('postcss-nested'),
    require('autoprefixer-core'),
    require('csswring')
  ]
  //plugins: [
  //  new webpack.ResolverPlugin(
  //    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
  //  )
  //]
};
