var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    rename = require ('gulp-rename'),
    connect = require('gulp-connect-php');


gulp.task('mincss', function(){
  gulp.src('assets/css/style.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('assets/css/css.min.css'))
});

gulp.task('minjs', function(){
  gulp.src('assets/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('assets/js/'));
});

gulp.task('js:watch', function(){
    gulp.watch('assets/js/app.js',['minjs']);
})

gulp.task('sass', function(){
  console.log("sass");
  return gulp.src('assets/sass/**/*.scss')
  .pipe(sass(({outputStyle: 'compressed'})).on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(gulp.dest('assets/css'))
})

gulp.task('sass:watch', function(){
    gulp.watch('assets/sass/**/*.scss',['sass']);
})


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


gulp.watch(['index.html','assets/js/app.js','assets/sass/*.scss']).on('change', function(){
  browserSync.reload();
})

gulp.task('default',['connect-sync','sass:watch','js:watch']);
