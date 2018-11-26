var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourceMaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat  = require('gulp-concat');
var del = require('del');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache  = require('gulp-cache');


gulp.task('sass', function() {
   return gulp.src('src/sass/**/*.scss')
       .pipe(sass())
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
       .pipe(gulp.dest('dist/css'))
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('images', function() {
    gulp.src('src/images/**/*')
        // .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    notify: false
  });
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});
gulp.task('css', ['sass'], function() {
    return gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('src/css'));
});


gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
  var buildCss = gulp.src('src/css/**/*.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', function() {
    gulp.start('pages', 'sass', 'browserSync', 'images', 'scripts');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});

