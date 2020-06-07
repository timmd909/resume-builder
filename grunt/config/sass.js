'use strict';

const sass = require('node-sass');
const _ = require('lodash');

const DEFAULT_OPTIONS = {
  implementation: sass,
  sourceMap: true,
  includePaths: [
    'scss',
    'node_modules/bootstrap/scss',
    'node_modules/timstrap/scss',
  ],
};

const MAIN_SOURCE = 'scss/resume.scss';

module.exports = {
  options: DEFAULT_OPTIONS,
  timstrap: {
    options: _.defaults({
      // 'outputStyle': 'compact',
      // 'outputStyle': 'compressed',
      'outputStyle': 'expanded',
      // 'outputStyle': 'nested',
    }, DEFAULT_OPTIONS),
    files: {
      'build/bootstrap.css': MAIN_SOURCE,
    },
  },
};
