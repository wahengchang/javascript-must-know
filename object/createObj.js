function Book(name, year) {
  console.log(this);
  this.name = name;
  this.year = year;
}

// var myBook = Book("js book", 2014);  
// console.log(myBook instanceof Book);  
// console.log(myBook.name, myBook.year);

var myBook2 = new Book("js book", 2014);  
console.log(myBook2 instanceof Book);  
console.log(myBook2.name, myBook2.year);