console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);
//
// var addRes = notes.add(9,-1);
// console.log(addRes);

// to include a 3rd party module
var _ = require('lodash');
console.log(_.isString(123));


var arr = [1,2,3,4,5,5,4]
console.log(_.uniq(arr))

_.times(5,()=> console.log('foo'));


// var user = os.userInfo();
//console.log(user);

// option one
// fs.appendFile('greetings.txt', 'Hello World! To' + user.username + '!', function(err) {
//   if(err) {
//     console.log('Unable to write to file');
//   }
// });

// template strings
// fs.appendFile('templateString.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//   if(err) {
//     console.log('Unable to write to file');
//   }
// });

// option two
// fs.appendFileSync('greetMe.txt', 'Hi There !' + user.username + '! You are in the directory' + user.homedir + '.');
