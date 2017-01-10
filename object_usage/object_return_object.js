function Book(name, year) {
  console.log(this);
  this.name = name;
  this.year = year;
}

function NewBook() {
  return new Book('newBook', 2017);
}

// var myBook = Book("js book", 2014);  
// console.log(myBook instanceof Book);  
// console.log(myBook.name, myBook.year);

var myBook1 = new Book("js book", 2014);  
console.log(myBook1 instanceof Book);  
console.log(myBook1.name, myBook1.year);

var myBook2 = NewBook();  
console.log(myBook2 instanceof Book);  
console.log(myBook2.name, myBook2.year);