'use strict';

module.exports = {
  'bootstrap-js': {
    expand: true,
    src: 'node_modules/bootstrap/dist/js/*',
    dest: 'build/js/',
    flatten: true,
  },
  jquery: {
    src: 'node_modules/jquery/dist/jquery.js',
    dest: 'build/js/jquery.js',
  },
  comfortaa: {
    expand: true,
    cwd: 'node_modules/fontsource-comfortaa/',
    src: '**/*',
    dest: 'build/comfortaa/',
  },
  assets: {
    expand: true,
    cwd: 'assets',
    src: '*',
    dest: 'build/assets/',
  },
  forkawesome: {
    expand: true,
    cwd: 'node_modules/fork-awesome/',
    dest: 'build/',
    src: [
      'css/**',
      'fonts/**',
    ],
  },
};
