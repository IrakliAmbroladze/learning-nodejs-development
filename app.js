const fs = require("fs");

fs.appendFile("greetings.xlsx", "Hello world!", function (err) {
  if (err) {
    console.log("Unable to write to file");
  }
});
