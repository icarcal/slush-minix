const gulp = require('gulp');
const config = require('../../../package.json')['gulp-config'];
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

module.exports = () => {
	gulp.src(config.vendorJs)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js/'));
};
