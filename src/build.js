require('colors');
const fs = require('fs')

const path = require('path');

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

require('./handlebarsHelper');
const resumeLoader = require('./resumeLoader');
const templateLoader = require('./templateLoader');
const renderHTML2PDF = require('./renderHTML2PDF');
const compileSass = require('./compileSass.js');
const copyAssets = require('./copyAssets.js');
const cleanBuildDir = require('./cleanBuildDir.js');

if (!argv._[0]) {
  console.error('Please supply a resume YAML file'.red.bold);
  process.exit(1);
}


const RESUME_YAML_FILENAME = path.join(process.env.INIT_CWD, argv._[0]);
const RESUME_HTML_FILENAME = path.join(process.cwd(), 'build/resume.html');

let context = resumeLoader(RESUME_YAML_FILENAME);

cleanBuildDir();
copyAssets(context);
compileSass(context);
const template = templateLoader(context);
const renderedHTML = template(context);
fs.writeFileSync(RESUME_HTML_FILENAME, renderedHTML);

console.log('build/ is complete, rendering PDF...');

// wait a sec for things to settle before rendering the PDF
setTimeout(renderHTML2PDF, 1000);
