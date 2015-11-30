const gulp = require('gulp');
const jade = require('gulp-jade');
const stylus = require('gulp-stylus');

gulp.task('stylus', function () {
    return gulp.src('styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('target'));
});

gulp.task('stylus-working', function () {
    return gulp.src('styles/*.styl')
        .pipe(stylus());
});

gulp.task('jade', function () {
    return gulp.src('jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('target'));
});
