import { appendFile } from "node:fs";
appendFile("import.txt", "Hello world!, second one", (err) => {
  if (err) throw err;
  console.log("Unable to write to file");
});
