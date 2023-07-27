const sass = require('sass');
const path = require('path');
const fs = require('fs');

const sassOptions = {
  encoding: 'utf8',
  loadPaths: [
    path.join(process.cwd(), 'node_modules'),
    path.join(process.cwd(), 'node_modules/bootstrap/scss'),
    path.join(process.cwd(), 'node_modules/fork-awesome/scss'),
  ],
  quietDeps: true,
};

function compileSass(context) {
  const themeRootDir = path.join(process.cwd(), 'themes', context.theme);
  let stylesFilename = path.join(themeRootDir, 'styles.scss');
  console.log('stylesFilename = ', stylesFilename);

  if (!fs.existsSync(stylesFilename)) {
    throw new Error('Could not file styles.scss at ' + stylesFilename);
  }

  let compiledStyles = sass.compile(stylesFilename, sassOptions);

  const outputPath = path.join(process.cwd(), 'build/css', 'styles.css');
  fs.writeFileSync(outputPath, compiledStyles.css);
}

module.exports = compileSass;
