'use strict';

var gulp = require('gulp'),
	del = require('del'),
	$ = require('gulp-load-plugins')();

var project = {
	moduleName: 'angular.formly',
	src: './src/**/*.html',
	dest: './build/templates.js',
	module: './src/modules/angular-formly-templates-lumx.js',
	moduleMin: './src/modules/angular-formly-templates-lumx.min.js'
};

gulp.task('templates', ['clean'], function () {
	gulp.src(project.src)
		.pipe($.htmlmin({collapseWhitespace: true}))
		.pipe($.angularTemplatecache())
		//.pipe($.uglify())
		.pipe(gulp.dest('./build'));
});

gulp.task('minTemplates', function () {
	del([
		project.moduleMin
	]);
	gulp.src(project.module)
		.pipe($.uglify())
		.pipe(project.moduleMin);
});

gulp.task('clean', function (cb) {
	del([
		project.dest
	], cb);
});