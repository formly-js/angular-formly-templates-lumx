var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	clean = require('gulp-rimraf');

gulp.task('lint', function () {
	gulp.src('./app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browserify', function () {
	gulp.src(['app/app.js'])
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist/js'));
	console.log('watching files...');
});

gulp.task('watch', ['lint'], function () {
	gulp.watch(['app/*.js', 'app/**/*.js'], [
		'lint',
		'browserify'
	]);
});

gulp.task('views', function () {
	gulp.src('./index.html')
		.pipe(gulp.dest('dist/'));

	gulp.src('app/views/**/*')
		.pipe(gulp.dest('dist/views/'));
});

gulp.watch(['./index.html', 'app/views/**/*.html'], [
	'views'
]);



var embedlr = require('gulp-embedlr'),
	refresh = require('gulp-livereload'),
	lrserver = require('tiny-lr')(),
	express = require('express'),
	livereload = require('connect-livereload'),
	livereloadport = 35729,
	serverport = 5000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function (req, res) {
	res.sendfile('index.html', {root: 'dist'});
});


gulp.task('dev', function () {
	server.listen(serverport);
	lrserver.listen(livereloadport);
	gulp.run('watch');
	console.log('Listening on ' + serverport);
});
