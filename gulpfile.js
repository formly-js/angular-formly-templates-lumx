/* in progress */

var gulp = require('gulp');
var es = require('event-stream');
var path = require('path');
var _ = require('underscore');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var uglify = require('gulp-uglify');
var htmlJsStr = require('js-string-escape');
var htmlmin = require('gulp-htmlmin');


gulp.task('templates', function () {
	return gulp.src('./fields')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(templater())
		.pipe(gulp.dest('./example'));
});


function templateCache(options) {
	return es.map(function (file, callback) {

		var template = '{ name: "<%= url %>", template: "<%= contents %>") },';
		var url;

		file.path = path.normalize(file.path);

		//if (typeof options.path === 'function') {
		//	url = path.join(options.path(file.path, file.base));
		//} else {
		//	url = path.join(file.path);
		//	url = url.replace(file.base, '');
		//}
		//;
		//
		//if (process.platform === 'win32') {
		//	url = url.replace(/\\/g, '/');
		//}

		var contents = file.contents;

		/**
		 * HTML to JavaScript
		 */
		contents = htmlJsStr(contents);

		file.contents = new Buffer(gutil.template(template, {
			url: url,
			contents: contents,
			file: file
		}));

		callback(null, file);
	});
}

function templater(options) {
	var defaults = {
		filename: 'templates.min.js',
		header: "(function () { \
							'use strict'; \
							\
							var FIELDS = [",
		footer: "]; \
			angular.module('formly.lumx', []) \
			.constant('usingCustomTemplates', true) \
			.constant('FIELDS', FIELDS) \
			.run(cacheLumXTemplates) \
			.config(setCustomTemplates); \
			\
			/*@ngInject*/ \
			function cacheLumXTemplates($templateCache, usingCustomTemplates, FIELDS) { \
				if (usingCustomTemplates) { \
					angular.forEach(FIELDS, function (field) { \
						$templateCache.put('fields/lx-' + field.name + '.html', field.template); \
					}); \
				} \
			} \
			\
		/*@ngInject*/ \
		function setCustomTemplates(usingCustomTemplates, formlyConfigProvider, FIELDS) { \
			if (usingCustomTemplates) { \
			angular.forEach(FIELDS, function (field) { \
				formlyConfigProvider.setTemplateUrl('lx-' + field.name, 'fields/lx-' + field.name + '.html'); \
			}); \
		} \
	} \
	}());"
	};

	if (arguments[1] && typeof arguments[1] === 'string') {
		options.filename = arguments[1];
	}

	options = _.extend(defaults, options);

	return es.pipeline(
		templateCache(options),
		concat(options.filename),
		header(options.header, {
			module: options.module,
			standalone: (options.standalone ? ', []' : '')
		}),
		footer(options.footer)
	);
}
