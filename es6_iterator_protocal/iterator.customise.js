// var someString = new String("hi");          // need to construct a String object explicitly to avoid auto-boxing

// someString[Symbol.iterator] = function() {
//   return { // this is the iterator object, returning a single element, the string "bye"
//     next: function() {
//       if (this._first) {
//         this._first = false;
//         return { value: "bye", done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true
//   };
// };



var someString = {};
someString[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};


var iterator = someString[Symbol.iterator]();
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 