'use strict';
/* The unfortunate definition of a quick easy hack right here. */

var gulp = require('gulp'),
	del = require('del'),
	$ = require('gulp-load-plugins')();

var project = {
	module: 'formly.lumx',
	prefix: 'lx'
};

var path = {
	src: ['./src/fields/*.html', './src/wrappers/*.html'],
	modules: './src/modules/',
	fileName: 'angular-formly-templates-lumx'
};
var dest = path.modules + path.fileName + '.js';

gulp.task('build', ['templates'], function () {
	var root = path.modules + path.fileName;
	del([root + '.min.js']);
	gulp.src(dest)
		.pipe($.uglify())
		.pipe($.filesize())
		.pipe(gulp.dest(path.modules));
});


gulp.task('templates', ['clean'], function () {

	//var getAngularModule = new RegExp('angular\.module\(\"' + '/^[-a-zA-Z]+$/' + '\"\)\.run\(\[\"\$templateCache\"\, function\(\$templateCache\) \{');
	var getFirstWrapper = new RegExp('\"' + project.prefix + '\-wrapper');
	var getPrefix = new RegExp('\"' + project.prefix + '\-', 'g');
	gulp.src(path.src)
		.pipe($.htmlMinifier({collapseWhitespace: true}))
		.pipe($.angularTemplatecache({
			module: path.fileName
		}))
		.pipe($.replace(/angular\.module\(\"angular\-formly\-templates\-lumx\"\)\.run\(\[\"\$templateCache\"\, function\(\$templateCache\) \{/, 'var FIELDS = [{ "name": '))
		//.pipe($.replace(getAngularModule, 'var FIELDS = [{ "name": '))
		.pipe($.replace(/\$templateCache\.put\(/g, ''))
		.pipe($.replace(/\)\;\}\]\)\;/, '}];'))
		.pipe($.replace(getFirstWrapper, ']; var WRAPPERS = [{ "name": \"' + project.prefix + '-wrapper'))
		.pipe($.replace(getPrefix, '"'))
		.pipe($.replace(/\.html\"\,\"/g, '", "template": "')) // ', template:
		.pipe($.replace(/\)\;/g, '}, {"name": ')) // }, {name: '
		.pipe($.replace(/\}\, \{\"name\"\: \n\]/m, '}]'))
		.pipe($.wrapper({
			header: '(function () {\'use strict\';',
			footer: '\
			angular.module(\'' + project.module + '\', [])\
					.constant(\'usingCustomTemplates\', true)\
					.constant(\'FIELDS\', FIELDS)\
					.constant(\'WRAPPERS\', WRAPPERS)\
					.constant(\'PREFIX\', \'' + project.prefix + '\')\
					.run(cacheLumXTemplates)\
					.config(setCustomTemplates);\
					/*@ngInject*/\
					function cacheLumXTemplates($templateCache, usingCustomTemplates, FIELDS, WRAPPERS, PREFIX) {\
					if (usingCustomTemplates) {\
						angular.forEach(FIELDS, function (field) {\
							$templateCache.put(\'fields/formly-templates-\' + PREFIX + \'-\' + field.name + \'.html\', field.template);\
						});\
					angular.forEach(WRAPPERS, function (wrapper) {\
						$templateCache.put(\'wrappers/formly-wrappers-\' + PREFIX + \'-\' + wrapper.name + \'.html\', wrapper.template);\
					});\
					}\
				}\
				/*@ngInject*/\
				function setCustomTemplates(usingCustomTemplates, formlyConfigProvider, FIELDS, WRAPPERS, PREFIX) {\
				if (usingCustomTemplates) {\
						angular.forEach(WRAPPERS, function (wrapper) {\
					formlyConfigProvider.setWrapper({\
							name: PREFIX + \'-wrapper-\' + wrapper.name,\
							templateUrl: \'wrappers/formly-wrappers-\' + PREFIX + \'-\' + wrapper.name + \'.html\'\
					});\
					});\
				\
			angular.forEach(FIELDS, function (field) {\
					formlyConfigProvider.setType({\
					name: PREFIX + \'-\' + field.name,\
					templateUrl: \'fields/formly-templates-\' + PREFIX + \'-\' + field.name + \'.html\'\
				}); \
			}); \
		} \
	}\
	}());'
		}))
		.pipe($.rename({
			basename: path.fileName,
			extname: '.js'
		}))
		.pipe(gulp.dest(path.modules));
});

gulp.task('clean', function (cb) {
	del([dest], cb);
});