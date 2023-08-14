const fs = require("fs");
const path = require("path")
const fix = `\n`
const fetch = require("node-fetch");
const { log } = require("../config.json"); 
const filePath = path.join(__dirname, `../${log}`)

function logs(text) {

  fs.access(filePath, (err) => {
    if (err) {
      // File doesn't exist, create new file and append data
      fs.writeFile(filePath, fix + text, (err) => {
        if (err) throw err;
      });
    } else {
      // File exists, append data to existing file
      fs.appendFile(filePath, text, (err) => {
        if (err) throw err;
      });
    }
  });

}



function clear() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log('\x1b[31m%s\x1b[0m', `Error deleting file: \n${err.message}`);
      return;
    }
    console.log('\x1b[32m%s\x1b[0m', 'File deleted successfully');
  });
}


function empty() {

  if (fs.existsSync(filePath)) {
    // Open file in write mode, this will truncate (empty) the file
    fs.writeFile(filePath, '', err => {
      if (err) {
        // Log red error message if there was an error
        console.error('\x1b[1;31mError emptying file:\x1b[0m', err);
      } else {
        // Log green success message if file was emptied successfully
        console.log('\x1b[32mFile emptied successfully.\x1b[0m');
      }
    });
  } else {
    console.log('\x1b[31mFile does not exist, skipping.\x1b[0m');
  }

}


module.exports = logs;
module.exports.empty = empty;
module.exports.clear = clear;
