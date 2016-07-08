// Chargement des modules node
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var inject = require('gulp-inject');

// Tâche `default`
// qui est lancé au `npm start` et qui appéle la tâche `serve`
gulp.task('default', ['serve']);

// Tâche `serve`
// Execute les tâches `saas`, `min-css` et `ìnject` avant se de lancer
gulp.task('serve', ['sass', 'min-css', 'inject'], function() {
  // Lancement du serveur de synchronisation - Il va chercher l'application dans le dossier `app`
  browserSync.init({
    server: './app'
  });

  // Dès qu'un fichier `scss` se trouvant dans le dossier `app/styles/scss` est modifier
  // les tâche `saas`, `min-css` et `ìnject` sont éxecutées
  gulp.watch('app/styles/scss/**/*.scss', ['sass', 'min-css', 'inject']);

  // Dès qu'un fichier `html` se trouvant dans le dossier `app` est modifier
  // la page du navigateur se rafraichi
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

// Tâche `sass`
// Transfome le fichier `main.scss` en un fichier `main.css`
gulp.task('sass', function() {
  return gulp.src('app/styles/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/styles/build'))
    .pipe(browserSync.stream());
});

// Tâche `min-css`
// Minimifie le fichier `main.css` en un fichier `main.min.css`
// C'est ce fichier qui sera chargé dans les pages `html`
gulp.task('min-css', function() {
  return gulp.src('app/styles/build/main.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/styles/build'));
});

// Tâche `inject`
// Inject automatiquement les fichiers `css` dans les pages `html`
gulp.task('inject', function () {
  // Récupération des fichiers `css` et `html`
  var htmlFiles = gulp.src('app/pages/**/*.html');
  var libs = gulp.src('app/styles/libs/**/*.css');
  var build = gulp.src('app/styles/build/main.min.css');

  // Insertion des fichiers `css` dans les fichiers `html` entre les balises inject
  return htmlFiles
    .pipe(inject(libs, {starttag: '<!-- inject:libs:{{ext}} -->', ignorePath: 'app'}))
    .pipe(inject(build, {starttag: '<!-- inject:build:{{ext}} -->', ignorePath: 'app'}))
    .pipe(gulp.dest('app/pages'));
});
