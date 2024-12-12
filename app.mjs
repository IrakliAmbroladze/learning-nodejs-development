import { appendFile } from "node:fs";
appendFile("import.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("Unable to write to file");
});
