function* gen() {yield 1;}
var g = gen();
console.log(g.next); //{ value: undefined, done: true }
console.log(g.next());//{ value: 1, done: false }
console.log(g.next());//{ value: undefined, done: true }
// console.log(g.return(1)); //{ value: undefined, done: true }