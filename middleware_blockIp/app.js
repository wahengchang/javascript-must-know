var express = require('express')
var app = express()


// middleware function
app.use(function (req, res, next) {
  console.log('Log before every request')
  next()
})

//////////////////////////////
// Overwrite res.send

var whiteList =['192.0.0.1'];
var getClientIp = function(req) {
  var ipAddress = req.connection.remoteAddress;

  if (!ipAddress) {
    return '';
  }

  // convert from "::ffff:192.0.0.1"  to "192.0.0.1"
  if (ipAddress.substr(0, 7) == "::ffff:") {
    ipAddress = ipAddress.substr(7)
  }

  return ipAddress;
};


app.use(function(req, res, next) {
  var ipAddress = getClientIp(req);

  if(whiteList.indexOf(ipAddress) !== -1){
    next();
  } else {
    res.send(ipAddress + ' IP is not in whiteList')
  }
});
//////////////////////////////
//////////////////////////////

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