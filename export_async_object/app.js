
var OBJ = require('./module.js')


// OBJ needs 3s to init
console.log(OBJ.increase());
console.log(OBJ.increase());


//after finished init(), OBJ.increase works well
setTimeout(function() {
  console.log(OBJ.increase());
  console.log(OBJ.increase());
}, 4000);