clone = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};



var obj1 = function(_a, _b){
  this.a= _a
  this.b= _b
  this.showAB = function(){
    console.log('a,b: ', this.a, this.b);
  }
}

obj1.prototype.showABC = function(_c) {
  console.log('a,b,c: ', this.a, this.b, _c);
};

obj1.showPublic = function(){
    console.log('showPublic');
}

var objIns = new obj1(1,2);

var obj2 = clone(obj1);
obj2.prototype.showABC = function(_c){
  console.log('c: ', _c);
}
var objIns2 = new obj2(1,2);



obj1.showPublic();
objIns.showAB();
objIns.showABC(3);
// showPublic
// a,b:  1 2
// c:  3


obj2.showPublic();
objIns2.showAB();
objIns2.showABC(3);
// showPublic
// a,b:  1 2
// c:  3

