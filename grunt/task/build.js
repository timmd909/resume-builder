'use strict';

module.exports = function (grunt) {
  grunt.registerTask('build:mkdir', function () {
    grunt.file.mkdir('build/');
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'build:mkdir',
    'sass',
  ]);
};
