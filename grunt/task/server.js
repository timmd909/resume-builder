'use strict';

//
// Libraries
//
const _ = require('lodash');
const fs = require('fs');
const express = require('express');
const handlebars = require('handlebars');
const yaml = require('js-yaml');
const grunt = require('grunt');


function fileContents(filename) {
  return fs.readFileSync(filename, 'utf8');
}

const ASSETS = [
  {
    'contentType': 'application/javascript',
    'path': '/bootstrap.js',
    'filename': 'build/bootstrap.bundle.js',
  },
  {
    'contentType': 'text/css;charset=utf-8',
    'path': '/bootstrap.css',
    'filename': 'build/bootstrap.css',
  },
  {
    'contentType': 'application/javascript',
    'path': '/jquery.js',
    'filename': 'build/jquery.js',
  },
];

var app = express();

app.get('/', function (request, response) {
  var context = yaml.load(fs.readFileSync('src/resume.yml', 'utf8'));
  var templateSource = fs.readFileSync('src/resume.tmpl.html', 'utf8');
  var template = handlebars.compile(templateSource);
  var rendered = template(context);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(rendered);
  response.end();
});

var assetCallback = _.partial(function (app, asset) {
  app.get(asset.path, _.partial(function (asset, request, response) {
    response.writeHead(200, {'Content-Type': asset.contentType});
    response.write(fileContents(asset.filename));
    response.end();
  }, asset));
}, app);

ASSETS.forEach(assetCallback);

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
