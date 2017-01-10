
if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

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


var myObj1 = Object.beget(obj1);

var myObj2 = Object.beget(obj1);
myObj2.a=2;
myObj2.showABC= function(_c){
  console.log('c: ', _c);
}

myObj1.showAB();
myObj1.showABC(3);
// a,b:  1 b
// a,b,c :  1 b 3

myObj2.showAB();
myObj2.showABC(3);
// a,b:  2 b
// c:  3
