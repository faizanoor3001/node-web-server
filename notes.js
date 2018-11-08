const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //
  // var duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

   //simpler above code

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  //fs.appendFileSync('notes-data.json' , noteText);
};

var getAll = () => {
  var notes = fetchNotes();
  if(notes) {
    return notes;
  }
};

var getNote = (title) => {
  var notes = fetchNotes();
  var specificNote = notes.filter((note) => note.title === title);
  // console.log(specificNote); // this returns an array , to get the specific value of title and body ,we pass as specificNote[0]
  return specificNote[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('Note is -------');
  console.log(`Title -- ${note.title}`);
  console.log(`Body -- ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};

// module.exports.addNote = () => {
//   console.log("inside addNote")
//   return "NewNote"
// }
