'use strict';

module.exports = {
  'bootstrap-js': {
    expand: true,
    src: 'node_modules/bootstrap/dist/js/*',
    dest: 'build/',
    flatten: true,
  },
  jquery: {
    src: 'node_modules/jquery/dist/jquery.js',
    dest: 'build/jquery.js',
  },
};
