var fs = require('fs');

fs.readFile('hello.js', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  console.log("== contents of the file:", data);
});

console.log("== This is the line after readFile().");

// var fileContents = fs.readFileSync('hello.js', 'utf8');
// console.log("== contents of the file:", fileContents);

fs.writeFile('output.txt', "This will be the contents of the file", 'utf8', function (err) {
  if (err) {
    throw err;
  }
  console.log("== Successfully wrote output.txt");
});

console.log("== This is the line after writeFile().");

// fs.writeFileSync('output.txt', "This will be the contents of the file", 'utf8');
// console.log("== Successfully wrote output.txt");
