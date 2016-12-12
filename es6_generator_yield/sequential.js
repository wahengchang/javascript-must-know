// The yield* expression is used to delegate to another generator or iterable object.


function* g1() {
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

var iterator = g1();

console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
