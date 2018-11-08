const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var titleOptions = {
                  describe:'Title of note',
                  demand: true,
                  alias: 't'
                };
var bodyOptions = {
                  describe:'Body of note',
                  demand: true,
                  alias: 'b'
                };
const argv = yargs
                .command('add' , 'Add a new note', {
                    title: titleOptions,
                    body: bodyOptions
                })
                .command('read' , 'Read a new note', {
                    title: titleOptions
                })
                .command('list' , 'Get all the note(s) in the file')
                .command('remove' , 'Remove a note', {
                    title: titleOptions
                })
                .help()
                .argv;
//console.log(argv);
// var command = process.argv[2];
var command = argv._[0];
//console.log('Command' , command);
//console.log(process.argv);
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  //if(!(typeof note === 'undefined')) {
  // code only gonna run if note is an object else it will be undefined hence it will be false
  if(note) {
    notes.logNote(note);
  } else {
    console.log('Title '+ argv.title +' already exists !! Please try with another title');
  }
} else if (command === 'list') {
  var notesList = notes.getAll();
  console.log(`Printing ${notesList.length} note(s)`);
  debugger;
  if(notesList) {
  //_.each((notesList), function(body, title ) { console.log(title , +' ' + body );});
  // -- correct lodash foreach function
  _.forEach(notesList, function(note) {
    //console.log(note);
    notes.logNote(note);});
  // --correct array forEach function
  //notesList.forEach(function(note) {notes.logNote(note)});
  // wrong -->>_.each((notesList), function(value, key ) { console.log(key);});
}
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note was not found';
  console.log(message);

}else if (command === 'read') {
  var specificNote = notes.getNote(argv.title);

  if(specificNote) {
      notes.logNote(specificNote);
  }
  else {
    console.log('Note not found');
  }
  }
  else {
  console.log('Command not recognised');
}
