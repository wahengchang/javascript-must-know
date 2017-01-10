
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
