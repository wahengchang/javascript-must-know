var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
console.log('myMap.get(keyString):    ', myMap.get(keyString));    // "value associated with 'a string'"
console.log('myMap.get(keyObj):       ', myMap.get(keyObj));       // "value associated with keyObj"
console.log('myMap.get(keyFunc):      ', myMap.get(keyFunc));      // "value associated with keyFunc"

console.log('myMap.get("a string"):   ', myMap.get("a string"));   // "value associated with 'a string'"
                         // because keyString === 'a string'
console.log('myMap.get({}):           ', myMap.get({}));           // undefined, because keyObj !== {}
console.log('myMap.get(function() {}): ', myMap.get(function() {})); // undefined, because keyFunc !== function () {}



//////////////
// es7 only
// Iterating Maps with for..of

// for (var [key, value] of myMap) {
//   console.log(key + " = " + value);
// }

//////////////


for (var key of myMap.keys()) {
  console.log('key: ', key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log('value: ', value);
}
// zero
// one


for (var [key, val] of proMap.entries()) {
    console.log('key: ', key)
    console.log('val: ', val)
}