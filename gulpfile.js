
var gulp = require('gulp'),
	less = require('gulp-less');


// define the default task and add the watch task to it
gulp.task('default', ['watch']);


// configure the less task
gulp.task('less', function() {
	return gulp.src('./stylesheets/styles.less')
		.pipe(less())
		.pipe(gulp.dest('./stylesheets/'))
});


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('./stylesheets/*.less', ['less']);
});