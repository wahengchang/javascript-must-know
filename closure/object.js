var counter = function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
}


var adder = counter()

console.log(adder.value()); // logs 0
adder.increment();
adder.increment();
console.log(adder.value()); // logs 2
adder.decrement();
console.log(adder.value()); // logs 1
