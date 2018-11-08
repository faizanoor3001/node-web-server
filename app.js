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

var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Title '+ argv.title +' already exists !! Please try with another title');
  }
} else if (command === 'list') {
  var notesList = notes.getAll();
  console.log(`Printing ${notesList.length} note(s)`);
  debugger;
  if(notesList) {
    _.forEach(notesList, function(note) {notes.logNote(note);});
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note was not found';
  console.log(message);
} else if (command === 'read') {
  var specificNote = notes.getNote(argv.title);
  if(specificNote) {
      notes.logNote(specificNote);
  }
  else {
    console.log('Note not found');
  }
} else {
  console.log('Command not recognised');
}
