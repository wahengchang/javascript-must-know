//from: 
//https://joshbedo.github.io/JS-Design-Patterns/


/*
 * Constructor Pattern
 */
class Car {
  constructor(opts) {
    this.model = opts.model;
    this.year = opts.year;
    this.miles = opts.miles;
  }

  // Prototype method
  toString() {
    return `${this.model} has driven ${this.miles} miles`;
  }
}

Car.printCar = function(){
  console.log('I am car.')
}

// Usage:
Car.printCar();
var civic = new Car({
  model: 'Honda',
  year: 2001,
  miles: 50000
});

console.log(civic)

// ES5 Example of constructor function
// function Car() {
//   this.model = opts.model;
//   ...
//   ...
// }
// Car.prototype.toString = function() {
//   ...
// }