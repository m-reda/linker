var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('watch', function() {
	gulp.watch('linker.scss', ['sass']);
	gulp.watch('linker.js', ['js']);
});

gulp.task('sass', function() {
	gulp.src('linker.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.on('error', gutil.log)
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
	gulp.src('linker.js')
		.pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
		.on('error', gutil.log)
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('dist'));

});