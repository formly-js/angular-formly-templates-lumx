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

gulp.task('build', ['templates'], function () {
	//gulp.src(project.dest)
	//	.pipe($.copy(demoDest))
	//	.pipe(gulp.dest(demoDest));
	//var root = path.modules + path.fileName;
	//del([root + '.min.js']);
	//gulp.src(project.dest)
	//	.pipe($.uglify())
	//	.pipe($.rename({
	//		basename: path.fileName,
	//		extname: '.min.js'
	//	}))
	//	.pipe($.filesize())
	//	.pipe(gulp.dest(path.modules));
	//
	//gulp.src(project.dest)
	//	.pipe($.copy(demoDest))
	//	.pipe(gulp.dest(demoDest));
});


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
	/*@ngInject*/ \
	function cacheLumXTemplates($templateCache) { \
		if (USING_TEMPLATES) { \
			angular.forEach(FIELDS, function (field) { \
				$templateCache.put(_fieldTemplateUrl(field.name), field.template); \
			}); \
			angular.forEach(WRAPPERS, function (wrapper) { \
				$templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template); \
			});}} \
	/*@ngInject*/ \
	function setCustomTemplates(formlyConfigProvider) { \
		if (USING_TEMPLATES) { \
			var wrapperList = []; \
			angular.forEach(WRAPPERS, function (wrapper) { \
				wrapperList.push(_prefixer(wrapper.name)); \
			}); \
			angular.forEach(WRAPPERS, function (wrapper) { \
				formlyConfigProvider.setWrapper({name: _prefixer(wrapper.name), templateUrl: _wrapperTemplateUrl(wrapper.name)});}); \
			angular.forEach(FIELDS, function (field) { \
				formlyConfigProvider.setType({name: _prefixer(field.name), templateUrl: _fieldTemplateUrl(field.name), wrappers: wrapperList}); \
			});\
			formlyConfigProvider.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) { \
					if (options.templateOptions && angular.isDefined(options.templateOptions.description) && \
						options.type !== \'lx-radio\' && options.type !== \'lx-title\' && options.type !== \'lx-flex\') { \
						var el = angular.element(\'\<a\>\<\/a\>\'); \
						el.append(template); \
						var modelEls = angular.element(el[0].querySelectorAll(\'[ng-model]\')); \
						if (modelEls) { el.append(\'\<p id=\"\' + scope.id + \'_description\"\' + \
								\'class=\"\'+ options.type.slice(3) + \'__help\"\' + \
								\'ng-if=\"options.templateOptions.description\">\' + \
								\'{{options.templateOptions.description}}\' + \
								\'\<\/p\>\' \
							); \
							modelEls.attr(\'aria-describedby\', scope.id + \'_description\'); \
							return el.html(); \
						} else { \
							return template; \
						} \
					} else { \
						return template; \
					} \
				});\
			}}}());'
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
