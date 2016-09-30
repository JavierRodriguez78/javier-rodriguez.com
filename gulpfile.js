var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect-php');

gulp.task('connect', function(){
  connect.server();
})

gulp.task ('connect-sync', function(){
  connect.server({},function(){
    browserSync({
      proxy:'127.0.0.1:8000'
    });
  });
})




gulp.task('default',['connect-sync']);
