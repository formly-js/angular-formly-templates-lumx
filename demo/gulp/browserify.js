var gulp = require('gulp'),
	$ = require('gulp-load-plugins')({lazy: true}),
	config = require('./gulp.config')();

gulp.task('browserify', function () {
	gulp.src(config.app)
		.pipe($.browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe($.concat(app.bundle))
		.pipe(gulp.dest(app.dist + '/js'));
	$.util.log('watching files...');
});
