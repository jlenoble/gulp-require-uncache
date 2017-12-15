## Background !heading

Sometimes some pipeline depend on particular Js files. This means that when they are modified, the behavior of the pipeline changes. Then you have either to restart your gulp process, or you must uncache those dependencies on the fly prior to using again the pipeline.

But the former may not work: If you use the 'newer' plugin for example, then your files won't be passed again through the modified pipeline and the config change won't be taken into account unless you clear manually your build directories.

Consider the second case: The config files are watched, so using again the plugin will force a recaching on the fly.

## Basic usage !heading

```js
import uncache from 'gulp-require-uncache';
import doSomething from 'gulp-do-something';
import gulp from 'gulp';

gulp.task('remove', () => {
  return gulp.src('config/**/*.js')
    .pipe(uncache());
});

gulp.task('do:something', () => {
  return gulp.src('src/**/*.js')
    .pipe(doSomething({pipelineDependsOn: 'config/**/*.js'}));
})

gulp.task('watch', done => {
  gulp.watch('config/**/*.js', gulp.series('remove', 'do:something'));
  gulp.watch('src/**/*.js', gulp.series('do:something'));
  done();
});

gulp.task('default', gulp.series('do:something', 'watch'));
```

## License !heading

gulp-require-uncache is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
