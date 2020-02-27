import gulp from 'gulp';
import fileinclude from 'gulp-file-include';

gulp.task('templates', () => (
	gulp.src('app/pages/*.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist/'))
));
