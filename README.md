# Website Starter Files

Starter files for a new web project

Uses Sass and Gulp

## Directory Structure

src - source files
dist - build/distribution files

fonts - web fonts
images - source images
styles - css, scss files
scripts - javascript files
views - html files

lib - 3rd party/vendor scripts and styles, under respective directories

## Build

Uses Gulp for basic build tasks including CSS/JS concatenation and minification

See gulpfile.js for details

### NPM Modules & Gulp plugins

* browser-sync
* del
* gulp-concat
* gulp-connect
* gulp-filesize
* gulp-filter
* gulp-minify-css
* gulp-order
* gulp-rename
* gulp-ruby-sass
* gulp-uglify
* run-sequence

## Setup

* Run the following from the project's root directory

`npm install` or `sudo npm install` to install the required modules and plugins
`gulp` to start the build, watch, and server (browser-sync)


## TODO:

[] Setup dev and prod switches for css and js includes (minified or not)
[] Consider image optimization plugins
[] Consider separate vendor and site scripts