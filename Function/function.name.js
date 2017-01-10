function doSomething() {}
console.log(doSomething.name); // logs "doSomething"



var f = function() {};
var object = {
  someMethod: function() {}
};

var object2 = {
  someMethod: function object2_someMethod() {}
};


console.log(f.name == ''); // true
console.log(object.someMethod.name == ''); // also true
console.log(object2.someMethod.name); // logs "object_someMethod"
