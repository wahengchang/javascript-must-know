
if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

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
obj1.showPublic();
objIns.showAB();
objIns.showABC(3);
//a,b:  1 2
//a,b,c:  1 2 3


var obj2 = Object.beget(obj1);
obj2.showPublic();

var objIns2 = new obj2(2,3);
objIns2.showAB();
objIns2.showABC(3);//TypeError: obj2 is not a function
