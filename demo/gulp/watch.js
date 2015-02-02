var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('watch', ['lint'], function () {
	gulp.watch(['app/*.js', 'app/**/*.js'], [
		'lint',
		'browserify'
	]);
});

gulp.watch(['./index.html', 'app/views/**/*.html'], [
	'views'
]);
