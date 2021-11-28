'use strict';

module.exports = function (grunt) {
  grunt.registerTask('generate:pdf', function () {
    const execSync = require("child_process").execSync;
    execSync('npx pagedjs-cli build/resume.html -o resume.pdf');
  });

  grunt.registerTask('generate', [
    'build',
    'generate:pdf',
  ]);
};
