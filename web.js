var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buf = require('buffer');

var index = new Buffer(fs.readFileSync('index.html'),'utf-8');

var indexString = index.toString(fs.readFileSync('index.html'))

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
