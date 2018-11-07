console.log("Starting notes.js")
// console.log(module)

module.exports.age = 27

module.exports.addNote = () => {
  console.log("inside addNote")
  return "NewNote"
}

module.exports.add = (a,b) => {
  console.log("inside the addition function")
  return (a+b)
}
