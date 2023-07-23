//
// console.log('process.argv =' , process.argv);
//
// if (process.argv.length < 2) {
//   throw new Error('Breh, which resume YAML file?');
// }

require('colors');
// const fs = require('fs')

const path = require('path');

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

require('./handlebarsHelper');
const resumeLoader = require('./resumeLoader');
const templateLoader = require('./templateLoader');
const renderHTML2PDF = require('./renderHTML2PDF');

if (!argv._[0]) {
  console.error('Please supply a resume YAML file'.red.bold);
  process.exit(1);
}

require('./copyAssets.js');

const RESUME_YAML_FILENAME = path.join(process.env.INIT_CWD, argv._[0]);

console.log('RESUME_YAML_FILENAME =' , RESUME_YAML_FILENAME);

let context = resumeLoader(RESUME_YAML_FILENAME);

const template = templateLoader(context);
const renderedHTML = template(context);

renderHTML2PDF(renderedHTML);

// console.log(`Outputting to ${OUTPUT_FILENAME}`);
// fs.writeFileSync('build/resume.html', rendered);
