const vfs = require('vinyl-fs');
const glob = require('glob');

console.log('Copying assets to build/');

//
// BOOTSTRAP + JQUERY
//
vfs
  .src(['node_modules/bootstrap/dist/js/*'])
  .pipe(vfs.dest('./build/js'));

vfs
  .src(['node_modules/jquery/dist/*.js'])
  .pipe(vfs.dest('./build/js'));

//
// COMFORTAA
//

vfs
  .src(['node_modules/fontsource-comfortaa/*'])
  .pipe(vfs.dest('./build/comfortaa'));

//
// FONT AWESOME
//

vfs
  .src(['node_modules/fork-awesome/css/*'])
  .pipe(vfs.dest('./build/css'));

vfs
  .src(['node_modules/fork-awesome/fonts/*'])
  .pipe(vfs.dest('./build/fonts'));
