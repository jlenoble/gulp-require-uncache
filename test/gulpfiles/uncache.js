import gulp from 'gulp';
import path from 'path';
import {expect} from 'chai';
import uncache from './src/gulp-require-uncache';

gulp.task('remove', () => {
  return gulp.src('src/gulp-require-uncache.js')
    .pipe(uncache())
    .on('finish', () => {
      const file = path.join(process.cwd(), 'src/gulp-require-uncache.js');
      expect(require.cache[file]).to.be.undefined;
    });
});

gulp.task('default', () => {
  return gulp.src('src/gulp-require-uncache.js')
    .on('finish', () => {
      const file = path.join(process.cwd(), 'src/gulp-require-uncache.js');
      expect(require.cache[file]).not.to.be.undefined;
    });
});
