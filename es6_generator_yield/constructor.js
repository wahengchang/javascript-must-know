var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
console.log('GeneratorFunction: ', GeneratorFunction)

var g = new GeneratorFunction("a", "yield a * 2");
console.log('g: ', g);

var iterator = g(10);
console.log(iterator.next().value); // 20


//new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)
// Parameters
// arg1, arg2, ... argN
// Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example "x", "theValue", or "a,b".
// functionBody
// A string containing the JavaScript statements comprising the function definition.
