var gulp = require('gulp'),
	args = require('yargs').argv,
	$ = require('gulp-load-plugins')(),
	config = require('./gulp.config')();

gulp.task('lint', function () {
	$.util.log('Linting files with JS Hint...');
	return gulp
		.src(config.alljs)
		.pipe($.if(args.verbose, $.print()))
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
		.pipe($.jshint.reporter('fail'));
});
