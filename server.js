//jshint esversion:6

const express = require('express');

const app = express();

app.get('/', function(req, res) {
  console.log("Hit the root route ...");
  res.send("<h1>Yo fam I can hear you!</h1>");
});

app.get('/contact', function(req, res) {
  console.log("Hit the contact route ...");
  res.send("You can contact me at: christian.y.isk@gmail.com");
});

app.get('/about', function(req, res) {
  console.log("Hit the about route ...");
  res.send("I am Christian Mourad, a 3A mechatronics student at the university of waterloo, and avid climber, and an aspiring web developer.");
});

app.get('/secret', function(req, res) {
  console.log("Hit the secret route ...");
  res.send("Ma guy you know what's up!!");
});

app.listen(3000, function() {
  console.log('Started listening on port 3000 ...');
});