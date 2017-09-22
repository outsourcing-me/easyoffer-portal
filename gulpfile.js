var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages())
})

var replace = require('gulp-replace')

gulp.task('generate', function() {
  gulp.src(['./dist/**/*.js', './dist/**/*.css', './dist/**/*.html'])
    .pipe(replace('/_nuxt/', '_nuxt/'))
    .pipe(replace('/favicon.png', 'favicon.png'))
    .pipe(gulp.dest('./dist'))
})
