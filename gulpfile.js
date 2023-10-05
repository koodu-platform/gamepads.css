const gulp = require('gulp');
const sass = require('gulp-sass')(require("node-sass"));

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss') // Source directory for your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Destination directory for the compiled CSS files
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
