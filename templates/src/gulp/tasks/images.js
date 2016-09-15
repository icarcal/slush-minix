'use strict';

const gulp = require('gulp');
const config = require('../../../package.json')['gulp-config'];

module.exports = () => {
	const images = (config.images) ? `${config.images}/*` : 'src/images/*';

	gulp.src(images)
		.pipe(gulp.dest(`${config.buildDir}/images`));
};
