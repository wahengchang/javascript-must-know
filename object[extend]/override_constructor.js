// Create a class
function Vehicle(color){
  this.color = color;
  this.name = color + 'NAME';
  console.log('constructing Vehicle ...')
}

// Add an instance method
Vehicle.prototype.go = function(){
  return "Underway in " + this.color + '  ' + this.name;
}

////////////////////////////////////
//////  overwrite  function  ///////
////////////////////////////////////

// var FUNCTION_OVERRIDE;
var FUNCTION_OVERRIDE = Vehicle.prototype.constructor;
var PROTOTYPE_RESERVE = Vehicle.prototype;

Vehicle = function(color) {
  console.log(' do something before')
  return FUNCTION_OVERRIDE.call(this, color)
};
Vehicle.prototype = PROTOTYPE_RESERVE;

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

var v = new Vehicle("blue");
console.log(v.go()) 

