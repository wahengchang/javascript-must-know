

var fun1 = function(_action){
  console.log('do it fun1,', _action)
}

var fun2 = function(_action){
  console.log('do it fun2,', _action, 'done')
}

var Obj = {
  name: 'I am name',
  fun : fun1
}

var Obj2 = (JSON.parse(JSON.stringify(Obj)));
Obj2.fun = fun2;

console.log('Obj.name: ', Obj.name)
Obj.fun('string')


console.log('Obj2.name: ', Obj2.name)
Obj2.fun('string')