var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var inject = require('gulp-inject');

gulp.task('serve', ['sass', 'min-css', 'inject'], function() {
  browserSync.init({
    server: './app'
  });

  gulp.watch('app/styles/scss/**/*.scss', ['sass', 'min-css', 'inject']);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('app/styles/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/styles/build'))
    .pipe(browserSync.stream());
});

gulp.task('min-css', function() {
  gulp.src('app/styles/build/main.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/styles/build'));
});

gulp.task('default', ['serve']);

gulp.task('inject', function () {
  var htmlFiles = gulp.src('app/pages/**/*.html');
  var libs = gulp.src('app/styles/libs/**/*.css', {read: false}, {relative: true});
  var build = gulp.src('app/styles/build/main.min.css', {read: false}, {relative: true});

  return htmlFiles
    .pipe(inject(libs, {starttag: '<!-- inject:libs:{{ext}} -->', ignorePath: 'app'}))
    .pipe(inject(build, {starttag: '<!-- inject:build:{{ext}} -->', ignorePath: 'app'}))
    .pipe(gulp.dest('app/pages'));
});
