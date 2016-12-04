var express = require('express')
var app = express()


// middleware function
app.use(function (req, res, next) {
  console.log('Log before every request')
  next()
})


// Overwrite res.send
app.use(function(req, res, next) {

  var temp = res.send
  res.send = function(str) {

      //manipulating information of res, req 
      var payload = {
          protocol: req.protocol,
          host: req.get('host'),
          originalUrl: req.originalUrl,
          body: req.body,
          cookies: req.cookies,
          header: req.headers
      }
      for (var key in payload) {
          console.log(key + ' ' + payload[key]);
      }

      temp.call(this, str)
  }
  next();
})

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app;