// @ts-check
"use strict";
const fs = require('fs');
const FileSystem = {};
// const path = fs.readdir()
// const directory = fs.mkdir()

/**
 * Functions
 */

 /**
  * create a folder
  * @param { string } name
  */
FileSystem.createFolder = function(name) {
  if(typeof name === "string") {
    var folderName = name.split(" ");
    var dir = '/';
    fs.mkdir(__dirname + dir + name,{ recursive: true }, (err) => {
      if (err) console.log(err);
    });
    console.log(`Folder ${name} succesly created`);
  }
  return TypeError('Argument must be a string');
}

/**
 * @param { string } filename
 */
FileSystem.ContentFile = function(filename) {
  filename.split("");
  if(typeof filename === "string") fs.readFile(__dirname + '/'+filename,"UTF-8",(err, contents) => {
    if(err) console.error(err);
    console.log(contents);
  });
  else return new TypeError('we need a file name & extension');
};







