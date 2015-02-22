'use strict';
/* The unfortunate definition of a quick easy hack right here. */

var gulp = require('gulp'),
	del = require('del'),
	$ = require('gulp-load-plugins')();

var path = {
	src: ['src/fields/*.html', 'src/wrappers/*.html'],
	modules: 'src/modules/',
	fileName: 'angular-formly-templates-lumx'
};

var project = {
	module: 'formlyLumx',
	prefix: 'lx',
	dest: path.modules + path.fileName + '.js'
};

var demoDest = 'demo/bower_components/' + path.fileName;

gulp.task('build', ['templates'])

gulp.task('copy', function () {
	gulp.src(project.dest)
		.pipe($.copy(demoDest))
		.pipe(gulp.dest(demoDest));
});

gulp.task('templates', ['clean'], function () {
	var getFirstWrapper = new RegExp('\"' + project.prefix + '\-wrapper');
	var getPrefix = new RegExp('\"' + project.prefix + '\-', 'g');
	gulp.src(path.src)
		.pipe($.htmlMinifier({collapseWhitespace: true}))
		.pipe($.angularTemplatecache())
		.pipe($.replace(/angular\.module\(\"templates"\)\.run\(\[\"\$templateCache\"\, function\(\$templateCache\) \{/, 'var FIELDS = [{ "name": '))
		.pipe($.replace(/\$templateCache\.put\(/g, ''))
		.pipe($.replace(/\)\;\}\]\)\;/, '}];'))
		.pipe($.replace(getFirstWrapper, ']; var WRAPPERS = [{ "name": \"' + project.prefix + '-wrapper'))
		.pipe($.replace(getPrefix, '"'))
		.pipe($.replace(/\.html\"\,\"/g, '", "template": "')) // ', template:
		.pipe($.replace(/\)\;/g, '}, {"name": ')) // }, {name: '
		.pipe($.replace(/\}\, \{\"name\"\: \n\]/m, '}]'))
		.pipe($.wrapper({
			header: '(function () {\'use strict\'; var USING_TEMPLATES = true; var MODULE_NAME = \"' + project.module + '\"; var PREFIX = \"' + project.prefix + '\";',
			footer: 'function _prefixer(name) { return PREFIX + \'-\' + name; } \
function _wrapperTemplateUrl(name) { return \'wrappers/formly-wrappers-\' + _prefixer(name) + \'.html\'; } \
function _fieldTemplateUrl(name) { return \'fields/formly-fields-\' + _prefixer(name) + \'.html\'; } \
angular.module(MODULE_NAME, [\'formly\']).config(setCustomTemplates).run(cacheLumXTemplates); \
	function cacheLumXTemplates($templateCache) { \
			if (USING_TEMPLATES) { \
				FIELDS.map(function (field) { \
					$templateCache.put(_fieldTemplateUrl(field.name), field.template); \
				}); \
				WRAPPERS.map(function (wrapper) { \
					$templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template); \
				});}}/*@ngInject*/ \
	function setCustomTemplates(formlyConfigProvider) { \
		if (USING_TEMPLATES) { \
			var wrapperList = WRAPPERS.map(function (wrapper) { \
			formlyConfigProvider.setWrapper({ \
				name: _prefixer(wrapper.name), \
				templateUrl: _wrapperTemplateUrl(wrapper.name) \
			}); \
	return _prefixer(wrapper.name); \
		}); \
			/* set types */ \
			FIELDS.map(function (field) { \
				formlyConfigProvider.setType({ \
					name: _prefixer(field.name), \
					templateUrl: _fieldTemplateUrl(field.name), \
					wrappers: wrapperList \
				});});}}}());'
		}))
		.pipe($.trim())
		.pipe($.rename({
			basename: path.fileName,
			extname: '.js'
		}))
		.pipe(gulp.dest(path.modules));
});

gulp.task('clean', function (cb) {
	del([project.dest], cb);
});
