console.log("Hello world!");

// for (var i = 0; i < process.argv.length; i++) {
//   console.log("== argument", i, ":", process.argv[i]);
// }

console.log("== MY_ENV_VARIABLE:", process.env.MY_ENV_VARIABLE);

console.log("__dirname:", __dirname);
console.log("__filename:", __filename);

var fs = require('fs');
// fs.readFile(...);

var circumference = require('./circumference');
console.log("== circumference(4):", circumference(4));
console.log("== circumference(5):", circumference(5));
console.log("== circumference(10):", circumference(10));

var circle = require('./lib/circle');
console.log("== circle.circumference(10):", circle.circumference(10));
console.log("== circle.area(10):", circle.area(10));

var figlet = require('figlet');

figlet('CS 290!!!', function (err, data) {
  if (data) {
    console.log(data);
  }
});
