
if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

function Mammal(name){ 
    this.name=name;
    this.offspring=[];
} 
Mammal.prototype.haveABaby=function(){ 
    var newBaby=new Mammal("Baby "+this.name);
    this.offspring.push(newBaby);
    return newBaby;
} 
Mammal.prototype.toString=function(){ 
    return '[Mammal "'+this.name+'"]';
} 


var obj1 = {
  a: 1,
  b: "b",
  obj: Mammal
}

Cat.prototype = new obj1.obj();        // Here's where the inheritance occurs 
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
function Cat(name){ 
    obj1.obj.apply(this,arguments);
} 
Cat.prototype.toString=function(){ 
    return '[Cat "'+this.name+'"]';
} 
Cat.prototype.haveABaby=function(){ 
    obj1.obj.prototype.haveABaby.call(this);
    console.log("mew!");
}

var myObj1 = Object.beget(obj1);
var myObj2 = Object.beget(obj1);
myObj2.obj = Cat;

var someAnimal = new myObj1.obj('Mr. Biggles');
var myPet = new myObj2.obj('Felix');

console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

myPet.haveABaby();                    // calls a method inherited from Mammal 
console.log(myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 




console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
