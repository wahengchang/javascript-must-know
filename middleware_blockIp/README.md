#middleware_blockIp

## getClientIp(req)
return client's ip address

## middleware 
Returning Error when client's ip is not in the white list

```
var whiteList =['192.0.0.1'];

...

app.use(function(req, res, next) {
  var ipAddress = getClientIp(req);

  if(whiteList.indexOf(ipAddress) !== -1){
    next();
  } else {
    res.send(ipAddress + ' IP is not in whiteList')
  }
});
```