

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

var ins1 = new obj1(1,'b');

var obj2 = JSON.parse(JSON.stringify(ins1));
obj2.b=2;

console.log(ins1);
console.log(obj2);

// { a: 1, b: 'b' }
// { a: 1, b: 2 }