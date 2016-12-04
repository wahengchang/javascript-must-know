// Create a class
function Vehicle(color){
  this.color = color;
}

// Add an instance method
Vehicle.prototype.go = function(){
  return "Underway in " + this.color;
}

// Add a second class
function Car(color){
  this.color = color;
}

// And declare it is a subclass of the first
Car.prototype = new Vehicle();

// Override the instance method
Car.prototype.go = function(){
  return Vehicle.prototype.go.call(this) + " car"
}

// Create some instances and see the overridden behavior.
var v = new Vehicle("blue");
console.log(v.go()) // "Underway in blue"

var c = new Car("red");
console.log(c.go()) // "Underway in red car"