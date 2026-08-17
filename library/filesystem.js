// @ts-check
"use strict";
const fs = require('fs');
const path = require('path');
const FileSystem = {};

const resolveLibraryPath = function(name) {
  if (typeof name !== 'string' || !name.trim()) {
    throw new Error('Path must be a non-empty string');
  }

  const target = path.resolve(__dirname, name);
  const relative = path.relative(__dirname, target);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Path must stay inside the library directory');
  }

  return target;
};
// const path = fs.readdir()
// const directory = fs.mkdir()

 /**
  * create a folder
  * @param { string } name
  */
FileSystem.createFolder = function(name) {
  const target = resolveLibraryPath(name);

  fs.mkdir(target, { recursive: true }, (err) => {
    if (err) return console.error(err);
    console.log(`Folder ${name} succesly created`);
  });
}

/**
 * @param { string } filename
 */
FileSystem.ContentFile = function(filename) {
  const target = resolveLibraryPath(filename);

  fs.readFile(target, 'UTF-8', (err, contents) => {
    if(err) return console.error(err);
    console.log(contents);
  });
};

/**
 * @param { String } dir
 * @param { String } extension
 */

FileSystem.paths = function paths(dir,extension = "") {
  var paths = [];

  try { fs.statSync(dir) }
  catch (e) { return [] }

  (function traverse(dir, stack) {
      stack.push(dir);
      fs.readdirSync(stack.join('/')).forEach(function (file) {
          var path = stack.concat([file]).join('/'),
              stat = fs.statSync(path);

          if (file[0] == '.' || file === 'vendor') {
              return;
          } else if (stat.isFile() && /\.js$/.test(file)) {
              paths.push(path);
          } else if (stat.isDirectory()) {
              paths.push(path);
              traverse(file, stack);
          }
      });
      stack.pop();
  })(dir || '.', []);

  return paths;
}


