// Import gulp
var gulp = require('gulp'),
    del = require('del'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    filter = require('gulp-filter'),
    tag_version = require('gulp-tag-version');

// Clean tasks
gulp.task('clean', function(){
  return del([
    'build/index.js',
    './*.log'
  ]);
});

function inc(importance) {
  // Get all the files to bump version in
  return gulp.src(['./build/package.json'])
    // bump the version number in those files
    .pipe(bump({type: importance}))
    // save it back to filesystem
    .pipe(gulp.dest('./build'))
    // commit the changed version number
    .pipe(git.commit('Bump package version'))

    // read only one file to get the version number
    .pipe(filter('./build/package.json'))
    // **tag it in the repository**
    .pipe(tag_version());
}

gulp.task('patch', function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })
