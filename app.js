console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");

// console.log(_.isString(true));
// console.log(_.isString("Irakli"));
var filteredArray = _.uniq(["Irakli", 1, "Irakli", 1, 2, 3, 4]);
console.log(filteredArray);

// var res = notes.add(9, -2);
// console.log("Result:", res);
// var user = os.userInfo();
// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username}! You are ${notes.age} years old!`,
//   function (err) {
//     if (err) {
//       console.log("Unable to write to file");
//     }
//   }
// );
