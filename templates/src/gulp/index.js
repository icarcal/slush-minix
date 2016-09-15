 const gulp = require('gulp');

module.exports = tasks => {
	tasks.forEach(task => {
		const taskFile = `./tasks/${task}`;
		gulp.task(task, require(taskFile));
	});

	return gulp;
};
