import {PluginError, noop} from 'gulp-util';
import through from 'through2';

const PLUGIN_NAME = 'gulp-require-uncache';

export default function uncache () {
  return require && require.cache ? through.obj(function (
    file, encoding, done) {
    if (file.isNull()) {
      return done(null, file);
    }

    if (file.isStream()) {
      this.emit( // eslint-disable-line no-invalid-this
        'error', new PluginError(PLUGIN_NAME, 'Streams are not supported'));
      return done();
    }

    if (file.isBuffer()) {
      if (require.cache[file.path]) {
        delete require.cache[file.path];
      }

      return done(null, file);
    }
  }) : noop();
}
