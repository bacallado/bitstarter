var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buf = require('buffer');

var fileContents = fs.readFileSync('index.html');
var index = new Buffer(fileContents,'utf-8');
var indexString = index.toString();

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
