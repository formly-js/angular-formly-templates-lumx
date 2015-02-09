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
	dest: path.modules + path.fileName + '.js',
};

var demoDest = 'demo/bower_components/' + project.fileName + project.dest;

gulp.task('build', ['templates'], function () {
	var root = path.modules + path.fileName;
	del([root + '.min.js']);
	gulp.src(project.dest)
		.pipe($.uglify())
		.pipe($.rename({
			basename: path.fileName,
			extname: '.min.js'
		}))
		.pipe($.filesize())
		.pipe(gulp.dest(path.modules));
});


gulp.task('copyTemplatesToDemo', function () {
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
			footer: ' function _wrapperTemplateUrl (name) { \
			return \'wrappers/formly-wrappers-\' + PREFIX + \'-\' + name + \'.html\';\
}\
function _fieldTemplateUrl (name) { \
	return \'fields/formly-fields-\' + PREFIX + \'-\' + name + \'.html\';\
}\
			angular.module(MODULE_NAME, [\'formly\']).config(setCustomTemplates).run(cacheLumXTemplates); \
			/*@ngInject*/ \
	function cacheLumXTemplates($templateCache) { \
		if (USING_TEMPLATES) { \
			angular.forEach(FIELDS, function (field) { \
				$templateCache.put(\'fields/formly-templates-\' + PREFIX + \'-\' + field.name + \'.html\', field.template); \
			}); \
		angular.forEach(WRAPPERS, function (wrapper) { \
			$templateCache.put(\'wrappers/formly-wrappers-\' + PREFIX + \'-\' + wrapper.name + \'.html\', wrapper.template); \
			});}} \
		/*@ngInject*/ \
		function setCustomTemplates(formlyConfigProvider) {\
		if (USING_TEMPLATES) { \
				var wrapperList = []; \
			angular.forEach(WRAPPERS, function (wrapper) { \
			wrapperList.push(PREFIX + \'-\' + wrapper + \'-\' + wrapper.name); \
			}); \
	angular.forEach(WRAPPERS, function (wrapper) { \
		formlyConfigProvider.setWrapper({ \
			name: PREFIX + \'-\' + wrapper + \'-\' + wrapper.name, \
			templateUrl: _wrapperTemplateUrl(wrapper.name) \
		}); \
	}); \
	angular.forEach(FIELDS, function (field) { \
		formlyConfigProvider.setType({ \
			name: PREFIX + \'-\' + field.name, \
			templateUrl: _fieldTemplateUrl(field.name) \
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
