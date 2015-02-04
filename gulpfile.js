'use strict';

var gulp = require('gulp'),
	del = require('del'),
	$ = require('gulp-load-plugins')();

var project = {
	moduleName: 'angular.formly',
	src: './src/**/*.html',
	dest: './build/templates.js'
};

gulp.task('templates', ['clean'], function () {
	gulp.src(project.src)
		.pipe($.htmlmin({collapseWhitespace:true}))
		.pipe($.angularTemplatecache())
		//.pipe($.uglify())
		.pipe(gulp.dest('./build'));
});

gulp.task('clean', function (cb) {
	del([
		project.dest
	], cb);
});