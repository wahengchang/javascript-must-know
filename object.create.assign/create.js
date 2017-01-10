var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: function(){
    console.log('bar')
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});


var copy = Object.assign({}, obj);
console.log(copy);
console.log(copy.bar);