var gulp  = require('gulp');
var gutil = require('gulp-util');
const del = require('del');
var webpack = require('webpack-stream');

var tslint = require("gulp-tslint");
const typescript = require('gulp-typescript');
const tsConfig = require('./tsconfig.json');
var tsProject = typescript.createProject("tsconfig.json");

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('tslint', function() {
  return gulp.src('src/public/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

//console.log(tsProject.options.compilerOptions);

// TypeScript compile
gulp.task('compile', ['clean'], function () {
	var tsResult = tsProject.src('src/public/app/**/*.ts')
        .pipe(typescript(tsProject));
	
	return tsResult.js.pipe(gulp.dest('dist/public/app'));
	
	/*
  return tsProject
    .src()
	.pipe(typescript(tsProject)).js
	.pipe(gulp.dest('dist/public'));*/
});

// TypeScript compile
//gulp.task('compile', ['clean'], function () {
//  return gulp
//    .src('src/**/*.ts')
//	.pipe(typescript(tsProject))
//	.pipe(gulp.dest('build'));
//});

// Webpack compile
//gulp.task('pack', ['clean'], function () {
//  return gulp
//    .src('build/**/*.js')
//	.pipe(webpack())
//    .pipe(gulp.dest('dist/src'));
//});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
	  'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
	  'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
	  'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest('dist/public/lib'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
	return gulp.src(['!src/**/*.ts', 'src/**/*.*', 'index.html', 'styles.css'])
    .pipe(gulp.dest('dist'))
});

// copy static assets - i.e. non TypeScript compiled source
//gulp.task('copy:assets', ['clean'], function() {
//	return gulp.src(['src/**/*', 'index.html', 'styles.css', '!src/**/*.ts'], { base : './' })
//		.pipe(gulp.dest('dist'))
//});

gulp.task('watch', function() {
    gulp.watch('src/public/**/*.*', ['build']); 
});

gulp.task('build', ['clean', 'compile', 'copy:libs', 'copy:assets']);

gulp.task('default', ['build','watch']);




