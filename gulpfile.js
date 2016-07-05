var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('serve', ['sass', 'min-css'], function() {
  browserSync.init({
    server: './app'
  });

  gulp.watch('app/scss/*.scss', ['sass', 'min-css']);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('min-css', function() {
  gulp.src('app/css/main.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['serve']);
