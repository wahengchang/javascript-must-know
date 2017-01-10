
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


obj1.showAB();
obj1.showABC(3);
// a,b:  1 b
// a,b,c :  1 b 3
