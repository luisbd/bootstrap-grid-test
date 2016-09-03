var gulp = require('gulp');
var sass = require('gulp-sass');

var sassSrc = './src/styles/**/*.scss';
var cssDir = './public/styles/';
var cssMinDir = './public/styles/min'

gulp.task('sass', function() {
    return gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles/'));
});

gulp.task('sass:watch', function() {
    gulp.watch(sassSrc, ['sass']);
});

gulp.task('sass-prod', function() {
  return gulp.src(sassSrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(cssMinDir));
});
