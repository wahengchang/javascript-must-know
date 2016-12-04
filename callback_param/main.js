

var fun1 = function(_msg, cb){
  _msg += '   < ---- '
  cb(_msg)
}



fun1('message', function(result){
  console.log('result: ', result)
})