// create web server
// create a route
// create a function that will be called when the route is visited
// this function will read the comments.json file and send it to the client

var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');

app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
  console.log('Server started on http://localhost:3000');
});