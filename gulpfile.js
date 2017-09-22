var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')

gulp.task('deploy', function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages())
})

var replace = require('gulp-replace')

// 替换生成的资源路径，更改绝对路径为相对路径
gulp.task('generate', function() {
  gulp.src(['./docs/**/*.js', './docs/**/*.css', './docs/**/*.html'])
    .pipe(replace('/_nuxt/', '_nuxt/'))
    .pipe(replace('/favicon.png', 'favicon.png'))
    .pipe(gulp.dest('./docs'))
})
