//
// This script requires server.js to be have been run prior.
// All this does is use puppeteer to save localhost:8080 to ./resume.pdf
//

'use strict';

const puppeteer = require('puppeteer');

async function createPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:8080', {
    // see https://github.com/puppeteer/puppeteer/blob/v1.11.0/docs/api.md for
    // more options.
    waitUntil: 'networkidle0',
  });
  var pdf = await page.pdf({ path: 'resume.pdf', format: 'Letter' });

  await browser.close();

  return pdf;
}

createPDF()
