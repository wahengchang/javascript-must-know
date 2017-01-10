
var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z;
  }
};

var b = Object.create(a, {y: {value: 20}});
var c = Object.create(a, {y: {value: 30}});
 
// call the inherited method
console.log('b.calculate(30):',  b.calculate(30)); // 60
console.log('c.calculate(40):', c.calculate(40)); // 80
