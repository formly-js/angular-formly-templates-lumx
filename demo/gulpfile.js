var gulp = require('gulp');
require('require-dir')('./gulp');
var $ = require('gulp-load-plugins')({lazy: true}),
	config = require('./gulp/gulp.config')();


gulp.task('views', function () {
	gulp.src(app.index)
		.pipe(gulp.dest(app.dist));

	gulp.src('app/views/**/*')
		.pipe(gulp.dest(app.dist + '/views/'));
});

