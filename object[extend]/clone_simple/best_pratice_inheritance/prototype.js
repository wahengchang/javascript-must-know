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


Cat.prototype = new Mammal();        // Here's where the inheritance occurs 
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
function Cat(name){ 
    Mammal.apply(this,arguments);
} 
Cat.prototype.toString=function(){ 
    return '[Cat "'+this.name+'"]';
} 
Cat.prototype.haveABaby=function(){ 
    Mammal.prototype.haveABaby.call(this);
    console.log("mew!");
}


var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

// someAnimal.staticFunction();
// myPet.staticFunction();
// Error

myPet.haveABaby();                    // calls a method inherited from Mammal 
console.log(myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 