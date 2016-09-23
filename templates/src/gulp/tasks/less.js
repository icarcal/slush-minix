'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const config = require('../../../package.json')['gulp-config'];

module.exports = () => {
	gulp.src('./src/less/*.less')
    .pipe(
			less()
		)
		.pipe(cssnano())
    .pipe(gulp.dest(`${config.buildDir}/css`));
};
