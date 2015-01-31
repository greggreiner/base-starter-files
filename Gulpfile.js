var gulp = require('gulp'),
	del = require('del'),
	runSequence = require('run-sequence'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	// replace with gulp-sass when libsass catches up to ruby sass
	sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    order = require('gulp-order'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify');

// Clean out the dist directory
gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

// Save html to dist
gulp.task('compile-html', function() {
	gulp.src('src/views/**/*.html')
	.pipe(gulp.dest('dist/'));
});

// Save fonts to dist
gulp.task('compile-fonts', function() {
	gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts/'));
});

// Save images to dist
gulp.task('compile-images', function() {
	gulp.src('src/images/**/*')
	.pipe(gulp.dest('dist/images/'));
});

// Compile Sass (including a min version and source maps)
gulp.task('compile-sass', function () {
    gulp.src('src/styles/styles.scss') // Sass imports file
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(filter('**/*.css')) // Filter stream to only css files to prevent multiple reloads
    .pipe(reload({stream:true}))
    //create a minified version
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JavaScript files
gulp.task('compile-js', function(){
  return gulp.src(['src/scripts/**/*.js','src/scripts/lib/**/*.js'])
  	.pipe(order([
        'src/scripts/lib/*.js',
        'src/scripts/**/*.js'
    ]))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Call Watch and reload/inject changes with browserSync
gulp.task('watch', function() {
	gulp.watch('src/views/**/*.html', ['compile-html', browserSync.reload]);
	gulp.watch('src/images/**/*', ['compile-images', browserSync.reload]);
	gulp.watch('src/fonts/**/*', ['compile-fonts', browserSync.reload]);
	gulp.watch('src/styles/**/*.scss', ['compile-sass']);
	gulp.watch('src/scripts/**/*.js', ['compile-js', browserSync.reload]);
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});

// Reload all browsers
gulp.task('server-reload', function () {
    browserSync.reload();
});

// Main build task
gulp.task('build', function(cb) {
	// run clean task on the dist directory before starting remaining build tasks
	runSequence('clean',
				['compile-html', 'compile-images', 'compile-fonts', 'compile-sass', 'compile-js', 'watch', 'server'],
				cb);
});

gulp.task('default', ['build'], function () {});