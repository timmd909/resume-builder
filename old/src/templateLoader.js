const fs = require('fs');
const path = require('path');
const glob = require('glob');
const handlebars = require('handlebars');

const THEMES_DIR = path.join(process.cwd(), 'themes');

function loadPartials(rootDir) {
  const partials = glob.sync(path.join(rootDir, 'partial', '*.html.tmpl'));
  partials.forEach((filename) => {
    let basename = path.basename(filename).replace(/\.html.tmpl$/, '');
    handlebars.registerPartial(basename, fs.readFileSync(filename, 'utf8'));
  });
}

function templateLoader(context) {
  const themeRootDir = path.join(THEMES_DIR, context.theme);
  const rootTemplateFilename = path.join(themeRootDir, 'resume.html.tmpl');

  if (!fs.existsSync(rootTemplateFilename)) {
    throw new Error(`${rootTemplateFilename} DOES NOT EXIST!`);
  }

  loadPartials(themeRootDir);

  const templateSource = fs.readFileSync(rootTemplateFilename).toString();
  const template = handlebars.compile(templateSource);

  return template;
}


module.exports = templateLoader;

// function registerPartial(partialName, filename) {
//   handlebars.registerPartial(partialName, fs.readFileSync(filename, 'utf8'));
// }
