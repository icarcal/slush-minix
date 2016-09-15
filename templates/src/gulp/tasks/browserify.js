'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../../package.json')['gulp-config'];

module.exports = () => {
	const files = [
		'./src/js/app.js',
	];
	const dest = `${config.buildDir}/js/`;

	return browserify(files)
		.transform('babelify', { presets: ['es2015'] })
			.bundle()
			.pipe(source('app.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(streamify(uglify()))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(dest));
};
