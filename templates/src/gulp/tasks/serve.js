const gulp = require('gulp');
const browserSync = require('browser-sync').create();

module.exports = () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('**/*.html').on('change', browserSync.reload);
	gulp.watch('src/less/*.less', ['less']);
	gulp.watch('src/js/**/*.js', ['browserify']).on('change', browserSync.reload);
};
