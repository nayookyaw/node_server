var express = require('express');
var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(1996, function () {
  console.log('Server is running on Port 1996');
});
