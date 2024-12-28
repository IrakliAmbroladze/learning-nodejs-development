console.log("Starting notes.js");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (error) {}
  var note = {
    title,
    body,
  };
  notes.push(note);
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  console.log("Adding note", title, body);
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = (title) => {
  console.log("Getting note", title);
};

var removeNote = (title) => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};
