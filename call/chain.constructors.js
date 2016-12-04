// SyntaxEDIT
// fun.call(thisArg[, arg1[, arg2[, ...]]])
// The call() method calls a function with a given this value and arguments provided individually.


// Food and Toy invoke Product passing this and name and price. 
//    Product initializes the properties name and price, 
//    both specialized functions define the category.

function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);