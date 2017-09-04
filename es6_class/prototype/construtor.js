function oldFashion (name) {
  this.name = name;
}
oldFashion.prototype.print = function(){ console.log(this.name)}

class newFashion  {
  constructor(name) {
    this.name = name;
  }

  print(){ console.log(this.name)}
}



var theoldFashion  = new oldFashion ('OOOOLD');
var thenewFashion   = new newFashion  ('NNNNEW');

theoldFashion.print()
thenewFashion.print()

console.log(' ********************** ')

console.log('*** theoldFashion .constructor : ' , theoldFashion.constructor);
console.log('*** thenewFashion .constructor : ' , thenewFashion.constructor);

console.log(' ********************** ')

console.log('*** oldFashion.prototype : ' , oldFashion.prototype);
console.log('*** newFashion.prototype : ' , newFashion.prototype);


console.log(' ********************** ')

console.log('*** Object.keys(theoldFashion) : ' , Object.keys(theoldFashion));
console.log('*** Object.keys(newFashion) : ' , Object.keys(newFashion));

