function Mammal(name){ 
    this.name=name;
    this.offspring=[];
} 
Mammal.staticFunction = function(){
    console.log('staticFunction')
}
Mammal.prototype.haveABaby=function(){ 
    var newBaby=new Mammal("Baby "+this.name);
    this.offspring.push(newBaby);
    return newBaby;
} 
Mammal.prototype.toString=function(){ 
    return '[Mammal "'+this.name+'"]';
} 


var __extends = this.__extends || function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Cat = (function (_super) {
     __extends(Cat, _super);
     function Cat(triggerOptions, target, propertyPath, condition) {
        _super.call(this, triggerOptions, condition);
        this.propertyPath = propertyPath;
        this._target = target;
     }
     Cat.prototype.execute = function () {
        this._target[this._property] = !this._target[this._property];
     };
     return Cat;
})(Mammal);

Cat.prototype.toString=function(){ 
    return '[Cat "'+this.name+'"]';
} 
Cat.prototype.haveABaby=function(){ 
    Mammal.prototype.haveABaby.call(this);
    console.log("mew!");
}
Cat.staticFunction = function(){
    console.log('staticFunction -- Mew')
}



var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

Mammal.staticFunction();
Cat.staticFunction();
// Error

myPet.haveABaby();                    // calls a method inherited from Mammal 
console.log(myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 