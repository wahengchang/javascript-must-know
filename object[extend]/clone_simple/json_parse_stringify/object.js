
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

var objIns = new obj1(1,2);
console.log('objIns:' ,objIns)
console.log('objIns.a:' ,objIns.a)
objIns.showAB();
objIns.showABC(3);
//a,b:  1 2
//a,b,c:  1 2 3


var obj2 = JSON.parse(JSON.stringify(obj1));
//Error