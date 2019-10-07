var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require( 'gulp-imagemin' );
var image = require( 'gulp-image' );
// var concat = require('gulp-concat');

gulp.task('connect', function() {
  	connect.server({
		root: 'dist',
		livereload: true,
		port: 8080
	});
});

gulp.task('html', function() {
	  return gulp.src('./src/index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./dist/'))
		.pipe(connect.reload());
});

gulp.task('styles', function() {
    return gulp.src('./src/styles/style.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload());
});

gulp.task('image', function() {
    return gulp.src('./src/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/scripts/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch([ './src/*.html' ], gulp.series('html'));
	gulp.watch([ './src/**/*.less' ], gulp.series('styles'));
	gulp.watch([ './src/scripts/**/*.js' ], gulp.series('scripts'));
});

gulp.task('default', gulp.parallel('html', 'styles', 'scripts', 'image', 'connect', 'watch'));
