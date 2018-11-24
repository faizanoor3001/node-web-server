const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();


//partial files
hbs.registerPartials(__dirname + '/views/partials');

//express middleware function
app.set('view engine', 'hbs');


app.use( (req, res, next)=> {
  var now = new Date().toString();
  var log = `${now} ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err)=> {
    if(err){
      console.log('Unable to append to server.log');
    }
  })
  next();
});

// it will leave all the other handlers or routes from executing
app.use(( req, res, next)=>{
  res.render('maintainence.hbs', {
      underMaintainence: 'We will be right back! Under maintainence'
  })
});

app.use(express.static(__dirname + '/public'));

//helper eg: to compute data which is required by every page
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text, text1) => {
  return text.toUpperCase() + text1.toUpperCase();
});


//templating

// root route and another argument is function
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  // res.send({
  //   name: 'Faiza',
  //   likes: [
  //     'Procastinating',
  //     'Sleeping'
  //   ]
  // })
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'welcome to Node js Rendering Template lesson.',
    secondArgument : 'Test secondArgument screamIt handlebar',
    authorName: 'Faiza Noor'
  })
});

app.get('/about', (req,res) => {
  //res.send('<h1>About Page</h1>');
  // to pass data by adding s2nd argument
  res.render('about.hbs', {
    pageTitle: 'About Page',
    aboutMessage: 'It is about the express server.',
    authorName: 'Faiza Noor'
  });
});

app.get('/bad', (req, res) =>{
  res.send({
    error: 'Bad Request'
  });
});
//bind the application on a port
//app.listen(3000);

app.listen(3000, ()=> {
  console.log('Server is up on port 3000');
});
