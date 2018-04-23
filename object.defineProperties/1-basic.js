var obj = {};
Object.defineProperties(obj, {
  "property1": {
    value: true,
    writable: true,
    enumerable: true
  },
  "property2": {
    value: "Hello",
    writable: false
  }
  // etc. etc.
});

console.log(obj)
console.log('obj.property1: ', obj.property1) // true
console.log('obj.property2: ', obj.property2) // Hello