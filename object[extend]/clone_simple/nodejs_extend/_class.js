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

var obj1 = {
  a: 1,
  b: "b",
  showAB : function(){
    console.log('a,b: ', this.a, this.b);
  }, 
  showABC : function(_c){
    console.log('a,b,c : ', this.a, this.b, _c);
  }
}

var obj2 = clone(obj1)
obj2.a = 2;

obj1.showAB();
obj1.showABC(3);
// a,b:  2 b
// a,b,c :  2 b 3

obj2.showAB();
obj2.showABC(3);
// a,b:  2 b
// a,b,c :  2 b 3