var gulp = require('gulp');
var sass = require('gulp-sass');

var sassSrc = './src/styles/**/*.scss';
var cssDir = './public/styles/non-min';
var cssMinDir = './public/styles/min'

gulp.task('sass', function() {
    return gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDir));
});

gulp.task('sass-prod', function() {
  return gulp.src(sassSrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(cssMinDir));
});
