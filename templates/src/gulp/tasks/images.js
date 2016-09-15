'use strict';

const gulp = require('gulp');
const config = require('../../../package.json')['gulp-config'];

module.exports = () => {
	gulp.src(`${config.images}/*`)
		.pipe(gulp.dest(`${config.buildDir}/images`));
};
