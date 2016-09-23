const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('js-watch', ['browserify'], done => {
	browserSync.reload();
	done();
});

gulp.task('css-watch', ['less'], done => {
	browserSync.reload();
	done();
});

gulp.task('template-watch', ['views'], done => {
	browserSync.reload();
	done();
});

module.exports = () => {
	browserSync.init({
		server: {
			baseDir: './build'
		}
	});

	gulp.watch('**/*.pug', ['template-watch']);
	gulp.watch('./src/less/*.less', ['css-watch']);
	gulp.watch('./src/js/**/*.js', ['js-watch']);
};
