const express = require('express');
const hbs = require('hbs');
var app = express();


//partial files
hbs.registerPartials(__dirname + '/views/partials');
//middleware function
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'welcome to Node js Rendering Template lesson.',
    authorName: 'Faiza Noor'
  })
});

app.get('/about', (req,res) => {
  //res.send('<h1>About Page</h1>');
  // to pass data by adding s2nd argument
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
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
