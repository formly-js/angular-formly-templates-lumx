'use strict';

var gulp = require('gulp'),
	del = require('del'),
	$ = require('gulp-load-plugins')();

var project = {
	moduleName: 'formly.lumx',
	src: ['./src/fields/*.html', './src/wrappers/*.html'],
	dest: './build/templates.js',
	module: './src/modules/angular-formly-templates-lumx.js',
	minModule: './src/modules/angular-formly-templates-lumx.min.js'
};

gulp.task('templates', ['clean'], function () {
	gulp.src(project.src)
		.pipe($.htmlMinifier({collapseWhitespace: true}))
		.pipe($.angularTemplatecache())
		//.pipe($.uglify())
		.pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
	del([
		project.moduleMin
	]);
	gulp.src(project.module)
		.pipe($.uglify())
		.pipe(project.minModule);
});

gulp.task('clean', function (cb) {
	del([
		project.dest
	], cb);
});