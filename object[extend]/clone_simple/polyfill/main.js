
Object.create = (function(undefined) {
  var Temp = function() {};
  return function (prototype, propertiesObject) {
    if(prototype !== Object(prototype) && prototype !== null) {
      throw TypeError('Argument must be an object, or null');
    }
    Temp.prototype = prototype || {};
    var result = new Temp();
    Temp.prototype = null;
    if (propertiesObject !== undefined) {
      Object.defineProperties(result, propertiesObject); 
    } 
    
    // to imitate the case of Object.create(null)
    if(prototype === null) {
       result.__proto__ = null;
    } 
    return result;
  };
})();



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


// Rectangle - subclass
function obj2() {
  obj1.apply(this,arguments);
} 
obj2.prototype = Object.create(obj1.prototype);
obj2.prototype.constructor = obj2;

// console.log(obj2)

obj2.showPublic();

var objIns2 = new obj2(2,3);
objIns2.showAB();
objIns2.showABC(3);//TypeError: obj2 is not a function
