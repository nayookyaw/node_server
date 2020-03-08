var express = require('express');
var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
  var persons_arr = ['张伟', '王伟', '王芳', '李伟', '王秀英', '李秀英', '李娜', '张秀英'];
  const random_person = persons_arr[Math.floor(Math.random() * persons_arr.length)];
  res.send(random_person);
});

var server = app.listen(1996, function () {
  console.log('Server is running on Port 1996');
});
