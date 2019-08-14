'use strict';

//
// Libraries
//
const fs = require('fs');
const express = require('express');
const handlebars = require('handlebars');
const yaml = require('js-yaml');

//
// Assets
//
function fileContents(filename) {
  return fs.readFileSync(filename, 'utf8');
}

const jQueryJS = fileContents('node_modules/jquery/dist/jquery.js');
const BootstrapJS = fileContents('node_modules/bootstrap/dist/js/bootstrap.bundle.js');
const BootstrapCSS = fileContents('node_modules/bootstrap/dist/css/bootstrap.css');

//
// Create simple server and go!
//
var app = express();

app.get('/', function (request, response) {
  var context = yaml.load(fs.readFileSync('resume.yml', 'utf8'));
  var templateSource = fs.readFileSync('resume.tmpl.html', 'utf8');
  var template = handlebars.compile(templateSource);
  var rendered = template(context);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(rendered);
  response.end();
});

app.get('/jquery.js', function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/javascript'});
  response.write(jQueryJS);
  response.end();
});

app.get('/bootstrap.css', function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/css;charset=utf-8'});
  response.write(BootstrapCSS);
  response.end();
});

app.get('/bootstrap.js', function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/javascript'});
  response.write(BootstrapJS);
  response.end();
});

var server = app.listen(8080, function () {
  console.log('Resume server listening at localhost:8080')
});
