'use strict';

//
// Libraries
//
const execSync = require("child_process").execSync;
const _ = require('lodash');
const fs = require('fs');
const express = require('express');
const yaml = require('js-yaml');
const grunt = require('grunt');
var handlebars = require('handlebars');

handlebars.registerHelper('cleanJunk', function (input) {
  return input.replace(/(¥|https:\/\/)/g, '');
});

function fileContents(filename) {
  return fs.readFileSync(filename, 'utf8');
}

var app = express();

app.get('/', function (request, response) {
  var context = yaml.load(fs.readFileSync('src/resume.yml', 'utf8'));
  // might as well tack in version information for me
  context.head = execSync('git rev-parse HEAD', {'encoding': 'utf8'}).trim().substr(0, 12);
  var now = new Date();
  context.created = now.toISOString().substr(0, 10);
  var templateSource = fs.readFileSync('src/resume.tmpl.html', 'utf8');
  var template = handlebars.compile(templateSource);
  var rendered = template(context);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(rendered);
  response.end();
});

app.use(express.static('build/'));
var SERVER;


async function startServer(done) {
  if (!SERVER) {
    grunt.log.writeln('Starting server...');
    SERVER = await app.listen(8080, function () {
      grunt.log.writeln('Resumé server listening at localhost:8080');
      done();
    });
  } else {
    grunt.log.writeln('Resumé server already started');
    done();
  }
}

async function stopServer(done) {
  if (SERVER) {
    grunt.log.writeln('Closing Resumé server...');
    await SERVER.close();
    SERVER = null;
  } else {
    grunt.log.writeln('Resumé server already closed');
  }
  done();
}

module.exports = function (grunt) {
  grunt.registerTask('server:start', function (keepAlive) {
    var done = this.async();
    startServer(done);
  });

  grunt.registerTask('server:keep-alive', function () {
    // set this to be async...
    this.async();
    // and then never call the done() callback
  });

  grunt.registerTask('server:stop', function () {
    var done = this.async();
    stopServer(done);
    done();
  });

  grunt.registerTask('server:debug', 'Turn on the server and wait for Ctrl-C to quit', [
    'server:start',
    'server:keep-alive',
  ]);

};
