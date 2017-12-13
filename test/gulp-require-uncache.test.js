import Muter, {captured} from 'muter';
import {expect} from 'chai';
import GulpRequireUncache from '../src/gulp-require-uncache';

describe('Testing GulpRequireUncache', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class GulpRequireUncache says 'Hello world!'`, captured(muter, function () {
    new GulpRequireUncache();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
