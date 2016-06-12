var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    server = require('gulp-develop-server'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('lint', function () {
    return gulp.src(['./src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build:dist',function(){
	return gulp.src('./src/**/*.js')
	   .pipe(sourcemaps.init())
	   .pipe(babel())
	   .pipe(gulp.dest('./dist'));
});

gulp.task('watch-lint',function(){
    gulp.watch(['./src/**/*.js'],['lint']);
});


gulp.task('default', ['build:dist']);
