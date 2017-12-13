'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uncache;

var _gulpUtil = require('gulp-util');

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLUGIN_NAME = 'gulp-require-uncache';

function uncache() {
  return require && require.cache ? _through2.default.obj(function (file, encoding, done) {
    if (file.isNull()) {
      return done(null, file);
    }

    if (file.isStream()) {
      this.emit( // eslint-disable-line no-invalid-this
      'error', new _gulpUtil.PluginError(PLUGIN_NAME, 'Streams are not supported'));
      return done();
    }

    if (file.isBuffer()) {
      if (require.cache[file.path]) {
        delete require.cache[file.path];
      }

      return done(null, file);
    }
  }) : (0, _gulpUtil.noop)();
}
module.exports = exports['default'];