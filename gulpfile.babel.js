import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import exorcist from 'exorcist';
import browserSync from 'browser-sync';
import watchify from 'watchify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import ifElse from 'gulp-if-else';
import sass from 'gulp-sass';

const sync = browserSync.create();

// Input file.
watchify.args.debug = true;
var bundler = browserify('src/app.js', watchify.args);

// Babel transform
bundler.transform(babelify.configure({
  sourceMapRelative: 'src'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function(error){
      console.error( '\nError: ', error.message, '\n');
      this.emit('end');
    })
    .pipe(exorcist('public/js/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(ifElse(process.env.NODE_ENV === 'production', uglify))
    .pipe(gulp.dest('public/js'));
}

//gulp.task('default', ['transpile']);

gulp.task('watch', ['copy-css', 'copy-html', 'serve'], () => {
  gulp.watch('src/**/*', ['js-watch']);
  gulp.watch('./styles/**/*.scss',['sass']);
  gulp.watch('public/css/*.css', sync.reload);
  gulp.watch('./*.html', ['copy-html']);
  gulp.watch('public/index.html', sync.reload);

});

gulp.task('copy-css', () => {
  return gulp.src('node_modules/normalize.css/*.css')
    .pipe(gulp.dest('public/css'));
});

gulp.task('copy-html', () => {
  return gulp.src('./*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('serve', ['transpile'], () => sync.init({
  server: './',
  port: 8888
}));

gulp.task('js-watch', ['transpile'], () => sync.reload());

gulp.task('transpile', ['lint'], () => bundle());

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'gulpfile.babel.js'])
      .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('sass', () => {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
