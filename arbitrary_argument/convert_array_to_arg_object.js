function foo() {
  console.log('arguments.length: ', arguments.length)
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

foo.apply(this, [4,1,2,3]);