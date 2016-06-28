var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

const path = {
  HTML: 'src/index.html',
  CSS: 'src/css/*',
  CSS_ENTRY: 'src/css/style.scss',
  JS: 'src/js/*',
  JS_ENTRY: 'src/js/Component.jsx',

  DEST: 'dev',
  DEST_CSS: 'dev/css',
  DEST_JS: 'dev/js',
};

gulp.task('clean', () => {
  return del.sync(path.DEST);
});

gulp.task('copy-html', () => {
  return gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('css', () => {
  return gulp.src(path.CSS_ENTRY)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('js', () => {
  return gulp.src(path.JS_ENTRY)
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(rename('script.js'))
    .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('browser-sync', () => {
  browserSync.init(path.DEST, {
    server: {
      baseDir: "./dev"
    }
  });
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(path.CSS, ['css']);
  gulp.watch(path.HTML, ['copy-html']);
  gulp.watch(path.JS, ['js']);
});

gulp.task('dev', function() {
  runSequence('clean', ['watch', 'copy-html', 'css', 'js']);
});

gulp.task('default', ['dev']);