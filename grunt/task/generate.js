'use strict';

const puppeteer = require('puppeteer');
const grunt = require('grunt');

async function createPDF(done, filename) {
  grunt.log.writeln('Creating browse');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  grunt.log.writeln('Loading resume');
  await page.goto('http://localhost:8080', {
    // see https://github.com/puppeteer/puppeteer/blob/v1.11.0/docs/api.md for
    // more options.
    waitUntil: 'networkidle0',
  });

  grunt.log.writeln('Saving PDF');
  var pdf = await page.pdf({
    path: filename,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '0mm',
      bottom: '10mm',
      left: '0mm',
    },
  });

  await browser.close();

  done();
  return pdf;
}

module.exports = function (grunt) {
  grunt.registerTask('generate:pdf', function () {
    var done = this.async();
    createPDF(done, 'resume.pdf');
  });

  grunt.registerTask('generate', [
    'server:start',
    'generate:pdf',
    'server:stop',
  ]);
};
