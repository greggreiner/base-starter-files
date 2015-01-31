var gulp = require('gulp'),
	del = require('del'),
	sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

// clean out the dist directory
gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

// Save html to dist
gulp.task('compile-html', function() {
	gulp.src('src/views/**/*.html')
	.pipe(gulp.dest('dist/'))
	.pipe(connect.reload());
});

// Save images to dist
gulp.task('compile-images', function() {
	gulp.src('src/images/**/*')
	.pipe(gulp.dest('dist/images/'))
	.pipe(connect.reload());
});

// Compile Sass (including a min version)
gulp.task('compile-sass', function () {
    gulp.src('src/styles/styles.scss') // path to your file
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    //create a minified version
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

// Call Watch
gulp.task('watch', function() {
	gulp.watch('src/views/**/*.html', ['compile-html']);
	gulp.watch('scr/images/**/*', ['compile-images']);
	gulp.watch('src/styles/**/*.scss', ['compile-sass']);
	//gulp.watch('includes/js/**/*.js', ['compile-js']);
});

// Connect (Livereload)
gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('default', ['clean', 'compile-html', 'compile-images', 'compile-sass', 'watch', 'connect'], function() {});