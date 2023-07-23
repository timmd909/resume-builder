//
// console.log('process.argv =' , process.argv);
//
// if (process.argv.length < 2) {
//   throw new Error('Breh, which resume YAML file?');
// }

require('colors');
const fs = require('fs')

const YAML = require('yaml')
const handlebars = require('handlebars');
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

if (!argv._[0]) {
  console.error('Please supply a resume YAML file'.red.bold);
  process.exit(1);
}

const RESUME_YAML_FILENAME = argv._[0];

handlebars.registerHelper('cleanJunk', function (input) {
  return input.replace(/(¥|https:\/\/)/g, '');
});

handlebars.registerHelper('shortenHash', function (input) {
  return input.substring(0, 12);
});

function registerPartial(partialName, filename) {
  handlebars.registerPartial(partialName, fs.readFileSync(filename, 'utf8'));
}

const resumeYaml = YAML.parse(fs.readFileSync(RESUME_YAML_FILENAME, {encoding: 'utf8'}));
// next, let's add the git revision, but I only care about the first
// 12 characters. We'll trim that later
context.head = execSync('git rev-parse HEAD', {'encoding': 'utf8'}).trim();
// creation date also seems like a useful thing
const now = new Date();
context.created = now.toISOString().substr(0, 10);

// load the template
// var templateSource = fs.readFileSync('src/resume.html.tmpl', 'utf8');
// var template = handlebars.compile(templateSource);

// // lastly, render it out and save it
// var rendered = template(context);
// fs.writeFileSync('build/resume.html', rendered);
