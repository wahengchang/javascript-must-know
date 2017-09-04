class Animal { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
let speak = obj.speak;

console.log(obj.speak());
console.log(speak()); // undefined

let eat = Animal.eat;
console.log(Animal.eat());
console.log(eat()); // undefined

// Animal {}
// undefined
// [Function: Animal]
// undefined