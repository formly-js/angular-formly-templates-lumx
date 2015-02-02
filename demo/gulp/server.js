var gulp = require('gulp'),
	express = require('express'),
	lrserver = require('tiny-lr'),
	livereload = require('connect-livereload'),
	$ = require('gulp-load-plugins')();

var livereloadport = 35729,
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
	$.util.log('Listening on ' + serverport);
});
