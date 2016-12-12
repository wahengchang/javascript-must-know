var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next()); 
console.log(eArr.next()); 
console.log(eArr.next()); 

// { value: [ 0, 'a' ], done: false }
// { value: [ 1, 'b' ], done: false }
// { value: [ 2, 'c' ], done: false }


var arr2 = [['key1', 'val1'], ['key2', 'val2']];
var eArr2 = arr2.entries();

console.log(eArr2.next()); 
console.log(eArr2.next()); 
console.log(eArr2.next()); 