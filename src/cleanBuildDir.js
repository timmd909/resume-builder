const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const BUILD_DIR = path.join(process.cwd(), 'build');

function cleanBuildDir() {
  rimraf.sync(BUILD_DIR);
  mkdirp.sync(path.join(BUILD_DIR, 'js'));
  mkdirp.sync(path.join(BUILD_DIR, 'css'));
  mkdirp.sync(path.join(BUILD_DIR, 'fonts'));
}

module.exports = cleanBuildDir;
