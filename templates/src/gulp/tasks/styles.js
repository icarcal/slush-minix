const gulp = require('gulp');
const config = require('../../../package.json')['gulp-config'];
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

module.exports = () => {
	gulp.src(config.vendorCss)
    .pipe(concat('vendor.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css/'));
};
