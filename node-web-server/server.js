const express = require('express');
var app = express();

// root route and another argument is function
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Faiza',
    likes: [
      'Procastinating',
      'Sleeping'
    ]
  })
});


app.get('/about', (req,res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) =>{
  res.send({
    error: 'Bad Request'
  });
});
//bind the application on a port
app.listen(3000);
