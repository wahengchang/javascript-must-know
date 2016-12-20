function* count(){
  for (var x = 0; x<50; x++) {
    yield x
  }
}

for (var x of count()) {
  console.log(x)
}