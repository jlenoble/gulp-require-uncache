import testGulpProcess from 'test-gulp-process';

describe('Testing Gulp plugin uncache', function () {
  it(`Ref shows file is cached by require`, testGulpProcess({
    sources: 'src/**/*.js',
    gulpfile: 'test/gulpfiles/uncache.js',

    messages: [
      `Finished 'default' after`,
    ],
  }));

  it(`Plugin removes file from require cache`, testGulpProcess({
    sources: 'src/**/*.js',
    gulpfile: 'test/gulpfiles/uncache.js',
    task: 'remove',

    messages: [
      `Finished 'remove' after`,
    ],
  }));
});
