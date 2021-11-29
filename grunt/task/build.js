'use strict';

const execSync = require("child_process").execSync;
const fs = require('fs');
const handlebars = require('handlebars');
const yaml = require('js-yaml');

handlebars.registerHelper('cleanJunk', function (input) {
  return input.replace(/(¥|https:\/\/)/g, '');
});

function registerPartial(partialName, filename) {
  handlebars.registerPartial(partialName, fs.readFileSync(filename, 'utf8'));
}

registerPartial('contactInfoItem', 'src/partial/contactInfoItem.html.tmpl');
registerPartial('sidebarListItem', 'src/partial/sidebarListItem.html.tmpl');
registerPartial('accomplishmentItem', 'src/partial/accomplishmentItem.html.tmpl');
registerPartial('workHistoryItem', 'src/partial/workHistoryItem.html.tmpl');

module.exports = function (grunt) {
  grunt.registerTask('build:mkdir', function () {
    grunt.file.mkdir('build/');
  });

  grunt.registerTask(
    'build:html',
    'Renders resume template to HTML',
    function () {
      var context = yaml.load(fs.readFileSync('src/resume.yml', 'utf8'));
      // next, let's add the git revision, but I only care about the first
      // 12 characters.
      context.head = execSync('git rev-parse HEAD', {'encoding': 'utf8'}).trim().substr(0, 12).toUpperCase();
      // creation date also seems like a useful thing
      var now = new Date();
      context.created = now.toISOString().substr(0, 10);
      // load the template
      var templateSource = fs.readFileSync('src/resume.html.tmpl', 'utf8');
      var template = handlebars.compile(templateSource);
      // lastly, render it out and save it
      var rendered = template(context);
      fs.writeFileSync('build/resume.html', rendered);
    });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'build:mkdir',
    'sass',
    'build:html',
  ]);
};
