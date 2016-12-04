// Create a class
function Vehicle(color){
  this.color = color;
}

// Add an instance method
Vehicle.prototype.go = function(){
  return "Underway in " + this.color;
}

////////////////////////////////////
//////  overwrite  function  ///////
////////////////////////////////////

var FUNCTION_OVERRIDE;
FUNCTION_OVERRIDE = Vehicle.prototype.go;

Vehicle.prototype.go = function(){
  console.log(' do something before')
  return FUNCTION_OVERRIDE.call(this)
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

var v = new Vehicle("blue");
console.log(v.go()) 

