'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('compress', function() {
    return gulp.src('./src/angular-amap.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./'));
});

gulp.task('copyDist', function() {
    return gulp.src('./src/angular-amap.js')
        .pipe(gulp.dest('./'));
});

gulp.task('copyDemo', function() {
    return gulp.src(['./src/angular-amap.js'])
        .pipe(gulp.dest('./demo/libs/'));
});

gulp.task('dev', ['copyDemo'], function() {
    var webserver = require('gulp-webserver');
    gulp.src('demo/').pipe(webserver({
        host: '0.0.0.0',
        port: 8080,
        livereload: true,
        directoryListing: false,
        fallback: 'index.html'
    }));
});


gulp.task('dist', ['compress', 'copyDist'], function() {});
