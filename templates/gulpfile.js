const gulp = require('./src/gulp/')([
	'browserify',
	'fonts',
	'styles',
	'scripts',
	'serve',
	'less',
	'images',
	'views'
]);

gulp.task('default', ['scripts', 'fonts', 'styles', 'less', 'browserify', 'images', 'views','serve']);
