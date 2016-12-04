var foo = 1;

var test = function(){
  console.log('1--', foo)
  var foo = 99;
  console.log('2--', foo)
}

test()

console.log('3--', foo)


// 1-- undefined
// 2-- 99
// 3-- 1