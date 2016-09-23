'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug2');

module.exports = () => {
	gulp.src('./src/templates/*.pug')
		.pipe(pug({ yourTemplate: 'Locals' }))
		.pipe(gulp.dest('build'));

	gulp.src(['./src/templates/partials/**/*.pug'])
    .pipe(pug({ yourTemplate: 'Locals' }))
    .pipe(gulp.dest('build/templates'));
};
