
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


var obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
console.log(obj2);

// { a: 1, b: [Function] }
// { a: 1 }