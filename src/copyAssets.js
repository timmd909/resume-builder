const vfs = require('vinyl-fs');
const path = require('path');
const glob = require('glob');

const vfsOpts = {
  encoding: false, // don't fuck up assets as we copy them by trying
  // to convert binary data to UTF-8
}

function commonStuff() {
  console.log('Copying assets to build/');

  //
  // BOOTSTRAP + JQUERY
  //
  vfs
    .src(['node_modules/bootstrap/dist/js/*'], vfsOpts)
    .pipe(vfs.dest('./build/js'));

  vfs
    .src(['node_modules/jquery/dist/*.js'], vfsOpts)
    .pipe(vfs.dest('./build/js'));

  //
  // COMFORTAA
  //

  vfs
    .src(['node_modules/fontsource-comfortaa/**'], vfsOpts)
    .pipe(vfs.dest('./build/comfortaa/'));

  //
  // FONT AWESOME
  //

  vfs
    .src('node_modules/fork-awesome/css/*', vfsOpts)
    .pipe(vfs.dest('./build/css'));

  vfs
    .src('node_modules/fork-awesome/fonts/*', vfsOpts)
    .pipe(vfs.dest('./build/fonts'));
}

function copyAssets(context) {
  commonStuff();

  vfs
    .src([path.join(process.cwd(), 'themes', context.theme, 'images/*')])
    .pipe(vfs.dest('./build/images'));
}

module.exports = copyAssets;
